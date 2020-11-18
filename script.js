var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var duck = document.getElementById("duck");

const move = 75;

function fly(direction){
    direction = direction.toLowerCase();
    var y = document.getElementById("duck").offsetTop;
    var x = document.getElementById("duck").offsetLeft;

    switch(direction){
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

function moveUp(top){
    if(top > 0){
        top = top  - move
        duck.style.top = top + "px"    
    } else {

    }
}
function moveDown(top){
    if(top < 750){
        top = top  + move
        duck.style.top = top + "px"    
    } else {

    }
}
function moveLeft(left){
    if(left > 0){
        left = left  - move
        duck.style.left = left + "px"    
    }
}
function moveRight(left){
    if(left < 1500){
        left = left  + move
        duck.style.left = left + "px"    
    }
}

function moveDuck(){
    setInterval(function () {
        fly(directions[Math.floor(Math.random() * directions.length)])
    }, 500);
}

var hit = 0;
var miss = 0;

function hitDuck(){
    hit++
    fly(directions[Math.floor(Math.random() * directions.length)])
    document.getElementById("hitCounter").innerHTML = hit
}

function missDuck(){
    miss++
    fly(directions[Math.floor(Math.random() * directions.length)])
    document.getElementById("missCounter").innerHTML = miss
}

moveDuck();