const numcheck = document.getElementById('number')
const symbole = document.getElementById('chr');
function gen() {
    document.getElementById('genrate').innerHTML = "New";
    range();
}
function range() {
    const range = document.getElementById('range');
    document.getElementById('rangeValue').innerHTML = `range :${range.value}`
    const length = range.value;
    password(length);
}

function password(length) {
    pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numcheck.checked == true) {
        str += "0123456789"
    }
    if (symbole.checked == true) {
        str += "!@#$%^&*_-=\|/?.,<>"
    }
    for (let i = 1; i <= length; i++) {
        let randomNum = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(randomNum);
    }
    document.getElementById('pass').value = `${pass}`

}
