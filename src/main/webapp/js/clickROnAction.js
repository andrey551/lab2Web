const MIN_R = 1;
const MAX_R = 4;
function typeROnAction() {
    let rr = document.getElementById("type-R").value;
    let R = parseFloat(rr);
    let message = document.getElementById("message");
    if(isNaN(R)) {
        message.textContent = "Please type R as a number!"
        message.style = "color: red";
    } else if(R > MAX_R || R < MIN_R) {
        message.textContent = "Please type R in range {1 .. 4}"
        message.style = "color: red";
    } else {
        message.textContent ="";
        let currentR = document.getElementById("current-R");
        currentR.textContent="Current R selected: " + rr;
        document.getElementById("r-value").value = rr;
    }
}