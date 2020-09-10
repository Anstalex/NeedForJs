const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
car.classList.add('car');

const keys ={
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};
const setting = {
    start: false,
    score:0,
    speed:3
};


    function startGame(){
    start.classList.add('hide');
    gameArea.classList.remove('hide');
    for(let i = 0; i < 20; i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i * 100)+ 'px';
        //line.y = line.offsetTop;
        line.y = i * 100;
        gameArea.appendChild(line);
    }
    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    requestAnimationFrame(playGame);
}

function playGame(){
        moveRoad();
    if(setting.start){
        if(keys.ArrowLeft && setting.x > 0){
            setting.x -= setting.speed;
        }
        if(keys.ArrowRight && setting.x < 250){
            setting.x +=setting.speed;
        }
        if(keys.ArrowDown  && setting.y < 850){
            setting.y += setting.speed;
        }
        if(keys.ArrowUp && setting.y > 0){
            setting.y -= setting.speed;
        }
        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';
        requestAnimationFrame(playGame);
    }
    
}

function startMove(e) {
    e.preventDefault();
    keys[e.key] = true;
    setting.start = true;
}
function stopMove(e) {
    e.preventDefault();
    keys[e.key] = false;
}

function moveRoad(){
        let lines = document.querySelectorAll('line');
}


start.addEventListener('click',startGame);
document.addEventListener('keydown',startMove);
document.addEventListener('keyup',stopMove);
