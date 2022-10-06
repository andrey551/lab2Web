const message = document.getElementById("message");
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const X_CENTER = 220;
const Y_CENTER = 228;
const LINE_LENGTH = 20;

loadCanvas();
drawLastPoint();

function getNearestY(yval) {
    return -(yval - Y_CENTER) / (2 * LINE_LENGTH);
}

function getNearestX(xval) {
    return parseInt((xval - X_CENTER) / LINE_LENGTH) / 2;
}

function getCursorPosition(event) {
    const x = getNearestX(event.offsetX);
    const y = getNearestY(event.offsetY);
    setPointFixed(x, y);
    setCoorToSend(x, y);
}

function setCoorToSend(xval, yval) {
    document.getElementById("x-value").value = xval;
    document.getElementById("y-value").value = yval;
}

function setRadiusToSend(rval) {
    document.getElementById("r-value").value = rval;
}

function sendReq() {
    document.getElementById("send-data-form").submit();

}

function getX() {
    let xtemp = document.getElementById("x-value").value
    let xval = parseFloat(xtemp);
    if(xval == null || isNaN(xval)) return 9;
    return xtemp;
}

function getY() {
    let ytemp = document.getElementById("y-value").value;
    let yval = parseFloat(ytemp);
    if(yval == null || isNaN(yval)) return 9;
    return ytemp;
}

function getR() {
    let rtemp = document.getElementById("r-value").value;
    let rval = parseFloat(rtemp);
    if(rval == null || isNaN(rval)) return -1;
    return rtemp;
}
canvas.addEventListener('mousedown', function(e) {
    let xval = getX();
    let yval = getY();
    let rval = getR();
    if(rval !== -1 ) {
        drawArea(parseFloat(rval));
        setRadiusToSend(rval);
        if(xval !== 9 && yval !== 9) {
            setPoint(xval, yval);
            setCoorToSend(xval, yval);
            message.textContent = ""
        } else {
            getCursorPosition(e);
        }
        sendReq();
    } else{
        message.textContent = "Please type R !"
        loadCanvas();
    }

})

// Draw image of canvas
function loadCanvas() {
    const img = new Image();
    img.src = 'img/ver1.png';
    ctx.drawImage(img, 0, 0, 449, 449);
    drawLastPoint();

}

//Draw point submitted
function setPoint(xval, yval) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(X_CENTER + xval * 2 * LINE_LENGTH,Y_CENTER - yval * 2 * LINE_LENGTH, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//Draw recently point with different color
function setPointFixed(xval, yval) {
    ctx.beginPath();
    ctx.fillStyle = '#FFA500';
    ctx.arc(X_CENTER + xval * 2 * LINE_LENGTH, Y_CENTER - yval * 2 * LINE_LENGTH, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function resetOnAction() {
    document.getElementById("clearToSend").value="true";
    sendReq();
}


function drawArea(r) {
    loadCanvas();
    ctx.beginPath();

    //Draw triangle
    ctx.fillStyle = 'blue';
    ctx.moveTo(X_CENTER + r * LINE_LENGTH, Y_CENTER);
    ctx.lineTo(X_CENTER, Y_CENTER - 2 * r * LINE_LENGTH);
    ctx.lineTo(X_CENTER, Y_CENTER);
    ctx.fill();
    ctx.closePath();

    // Draw square
    ctx.beginPath();
    ctx.fillStyle = '#ff6';
    ctx.fillRect(X_CENTER , Y_CENTER, 2 * r * LINE_LENGTH, r * LINE_LENGTH);
    ctx.closePath();

    // Draw a quarter's cake part
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.moveTo(X_CENTER, Y_CENTER);
    ctx.lineTo(X_CENTER, Y_CENTER + 2 * r * LINE_LENGTH);
    ctx.lineTo(X_CENTER - 2 * r * LINE_LENGTH, Y_CENTER );
    ctx.lineTo(X_CENTER, Y_CENTER );
    ctx.fill();
    ctx.arc(X_CENTER, Y_CENTER, 2 * r * LINE_LENGTH,  Math.PI * 0.5, Math.PI);
    ctx.fill();

    ctx.closePath();
}

//Draw list of point submitted
function drawLastPoint() {
    let x = document.getElementsByClassName('result-x');
    let y = document.getElementsByClassName('result-y');
    for(let i = 0 ;i < x.length ; ++i) {
        setPoint(parseFloat(x[i].textContent), parseFloat(y[i].textContent));
    }
}