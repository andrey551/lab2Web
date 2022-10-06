const X_VAL = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]
function selectXOnAction(obj) {
    if(X_VAL.includes(parseFloat(obj))) setCurrentX(obj);
}
function setCurrentX(X) {
    let selectX = document.getElementById("current-X");
    selectX.textContent="Current X selected: " + X;
    document.getElementById("x-value").value = X;
}

