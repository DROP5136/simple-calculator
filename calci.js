let numbeer = {
    curnum: JSON.parse(localStorage.getItem('res')) || "",
    secondnum: "",
    operator: null,
    resultDisplayed: false
};

document.querySelector('.name').innerHTML = numbeer.curnum;

function add(x) {
    if (document.querySelector('.name').innerHTML === "Invalid" || numbeer.resultDisplayed) {
        numbeer.curnum = "";
        numbeer.resultDisplayed = false;
    }

    if (numbeer.operator === null) {
        numbeer.curnum += x;
        document.querySelector('.name').innerHTML = numbeer.curnum;
    } else {
        numbeer.curnum += x;
        document.querySelector('.name').innerHTML = numbeer.secondnum + " " + numbeer.operator + " " + numbeer.curnum;
    }
}

function operator(op) {
    if (numbeer.curnum === "") return;

    if (numbeer.secondnum !== "" && numbeer.operator !== null) {
        isequal();
        numbeer.secondnum = numbeer.curnum;
        numbeer.curnum = "";
        numbeer.operator = op;
        document.querySelector('.name').innerHTML = numbeer.secondnum + " " + op + " ";
    } else {
        numbeer.secondnum = numbeer.curnum;
        numbeer.curnum = "";
        numbeer.operator = op;
        document.querySelector('.name').innerHTML = numbeer.secondnum + " " + op + " ";
    }
}

function isequal() {
    let a = parseFloat(numbeer.secondnum);
    let b = parseFloat(numbeer.curnum);
    let result;

    switch (numbeer.operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Error";
            break;
        default:
            result = "Invalid";
    }

    numbeer.curnum = String(result);
    numbeer.secondnum = "";
    numbeer.operator = null;
    numbeer.resultDisplayed = true;

    if (result !== "Invalid") {
        document.querySelector('.name').innerHTML = result;
        localStorage.setItem('res', JSON.stringify(result));
    } else {
        document.querySelector('.name').innerHTML = result;
    }
}

function clearr() {
    numbeer.curnum = "";
    numbeer.secondnum = "";
    numbeer.operator = null;
    numbeer.resultDisplayed = false;
    document.querySelector('.name').innerHTML = "";
    localStorage.removeItem('res');
}