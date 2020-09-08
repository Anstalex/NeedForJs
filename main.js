
const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
car.classList.add('car');

start.addEventListener('click',startGame);

    function startGame(){
    start.classList.add('hide');
    setting.start === true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}
function playGame(){
    if(setting.start){
        requestAnimationFrame(playGame);
    }
    
}
document.addEventListener('keydown',startMove);
document.addEventListener('keyup',stopMove);

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


function startMove(e) {
    e.preventDefault();
    keys[e.key] = true;
    setting.start = true;
console.log(e.key);
}
function stopMove(e) {
    e.preventDefault();
    console.log('stop');
    keys[e.key] = false;
}