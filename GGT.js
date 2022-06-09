function g(a, b) {
    if (b == 0) {
        return a;
    }
    return (b, a % b);
}

function ggtrechner() {
    var a = parseInt(getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = g(a, b);
    if (c == a || c == b) {
        document.getElementById("c").style.backgroundColor = "Green";
    } else if (c == 1) {
        document.getElementById("c").style.backgroundColor = "red";
    } else
        console.log("first numb: " + document.getElementById("a").value + "second numb: " + document.getElementById("b").value + " result: " + c);
}