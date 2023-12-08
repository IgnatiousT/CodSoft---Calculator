let inputNum = document.getElementById("inputBox");

function display(num) {
    inputNum.value += num;
}

function Calculate() {
    try {
        inputNum.value = eval(inputNum.value);
    } catch (err) {
        alert("invalid");
    }
}

function Clear() {
    inputNum.value = "";
}

function del() {
    inputNum.value = inputNum.value.slice(0, -1);
}