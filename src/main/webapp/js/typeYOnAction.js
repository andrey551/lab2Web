const MIN_Y = -3;
const MAX_Y = 3;
function typeYOnAction() {
    let yy = document.getElementById("type-Y").value;
    let Y = parseFloat(yy);
    let message = document.getElementById("message");
    if(isNaN(Y)) {
        message.textContent = "Please type Y as a number!"
        message.style = "color: red";
    } else if(Y > MAX_Y || Y < MIN_Y) {
        message.textContent = "Please type Y in range {-3 .. 3}"
        message.style = "color: red";
    } else {
        message.textContent ="";
        let currentY = document.getElementById("current-Y");
        currentY.textContent="Current Y selected: " + yy;
        document.getElementById("y-value").value = yy;
    }
}