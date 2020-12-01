const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var width = document.documentElement.clientWidth / 2;
var height = document.documentElement.clientHeight / 2;

const move = 75;

function fly(direction){
    direction = direction.toLowerCase();
    var y = duck.offsetTop;
    var x = duck.offsetLeft;

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
    if(top < height){
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
    if(left < width){
        left = left  + move
        duck.style.left = left + "px"    
    }
}

function moveDuck(){
    setInterval(function () {
        if (miss == 20){
            ending("lost");
        }
        if (hit == 20){
            ending("win");
        }
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

function ending(type){
    endScreen.style.display = "block"
    if(type == "win"){
        endScreen.firstChild.innerHTML = "win"
        endScreen.style.backgroundColor = "green"
    } else {
        endScreen.firstChild.innerHTML = "fail"
        endScreen.style.backgroundColor = "red"
    }
}

moveDuck();