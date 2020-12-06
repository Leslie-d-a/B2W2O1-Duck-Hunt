const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var stop = false;

const move = 75;

function fly(direction) {
    direction = direction.toLowerCase();
    var y = duck.offsetTop;
    var x = duck.offsetLeft;

    switch (direction) {
        case 'n':
            moveUp(y);
            break;
        case 'ne':
            moveUp(y);
            moveRight(x);
            break;
        case 'e':
            moveRight(x);
            break;
        case 'se':
            moveDown(y);
            moveRight(x);
            break;
        case 's':
            moveDown(y);
            break;
        case 'sw':
            moveDown(y);
            moveLeft(x);
            break;
        case 'w':
            moveLeft(x);
            break;
        case 'nw':
            moveUp(y);
            moveLeft(x);
            break;
    }
}

function moveUp(top) {
    if (top > 0) {
        top = top - move
        duck.style.top = top + "px"
    } else {

    }
}

function moveDown(top) {
    if (top < 700) {
        top = top + move
        duck.style.top = top + "px"
    } else {

    }
}

function moveLeft(left) {
    if (left > 0) {
        left = left - move
        duck.style.left = left + "px"
    }
}

function moveRight(left) {
    if (left < 1500) {
        left = left + move
        duck.style.left = left + "px"
    }
}

function checkPoints() {
    setInterval(function () {
        if (miss == 20) {
            ending("lost");
            stop = true
        }
        if (hit == 20) {
            ending("win");
            stop = true
        }
    }, 10);
}

function moveDuck() {
    setInterval(function () {
        fly(directions[Math.floor(Math.random() * directions.length)])
    }, 500);
}

var hit = 0;
var miss = 0;

function hitDuck() {
    if (stop == false){
        hit++
        fly(directions[Math.floor(Math.random() * directions.length)])
        document.getElementById("hitCounter").innerHTML = hit    
    }
}

function missDuck() {
    if (stop == false){
        miss++
        fly(directions[Math.floor(Math.random() * directions.length)])
        document.getElementById("missCounter").innerHTML = miss    
    }
}

function ending(type) {
    endScreen.style.display = "block"
    if (type == "win") {
        endScreen.firstChild.innerHTML = "you win. press f5 to restart"
        endScreen.style.backgroundColor = "green"
    } else {
        endScreen.firstChild.innerHTML = "you lose. press f5 to restart"
        endScreen.style.backgroundColor = "red"
    }
}

moveDuck();
checkPoints();