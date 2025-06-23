let numbeer = {
    curnum: JSON.parse(localStorage.getItem('res')) || "",
    secondnum: "",
    operator: null
};

document.querySelector('.name').innerHTML = numbeer.curnum;

function add(x) {
    
    if (document.querySelector('.name').innerHTML === "Invalid") {
        numbeer.curnum = "";
        numbeer.curnum += x;
        document.querySelector('.name').innerHTML = numbeer.curnum;
    } else {
        if (numbeer.secondnum === "") {
            numbeer.curnum += x;
            document.querySelector('.name').innerHTML = numbeer.curnum;
        } else {
            numbeer.curnum += x;
            document.querySelector('.name').innerHTML = numbeer.secondnum + " " + numbeer.operator + " " + numbeer.curnum;
        }
    }
}

function operator(op) {
    numbeer.secondnum = numbeer.curnum;
    numbeer.curnum = "";
    numbeer.operator = op;
    document.querySelector('.name').innerHTML = numbeer.secondnum + " " + op + " ";
}

function isequal() {
    let a = parseFloat(numbeer.secondnum);
    let b = parseFloat(numbeer.curnum);

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

    if (result != "Invalid") {
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
    document.querySelector('.name').innerHTML = "";
    localStorage.removeItem('res');
}
