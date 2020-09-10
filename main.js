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
    speed:3,
    traffic: 3
};
//Расчет количества элементов по высоте
function getQuantityElements(heightElement){
  return document.documentElement.clientHeight / heightElement +1;
}
console.log(getQuantityElements(200))

//запуск игрового поля
    function startGame(){
    start.classList.add('hide');
    gameArea.classList.remove('hide');
    for(let i = 0; i < getQuantityElements(100); i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i * 100)+ 'px';
        line.y = i * 100;
        gameArea.appendChild(line);
    }
    for(let i = 0; i < getQuantityElements(100*setting.traffic);i++ ){
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * setting.traffic * (i + 1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) +'px';
        enemy.style.top = enemy.y + 'px';
        gameArea.appendChild(enemy);
    }
    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    requestAnimationFrame(playGame);
}

//запуск игры
function playGame(){
        moveRoad();
        moveEnemy();
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
//Движение машины
function startMove(e) {
    e.preventDefault();
    keys[e.key] = true;
    setting.start = true;
}
function stopMove(e) {
    e.preventDefault();
    keys[e.key] = false;
}
//Движение дороги
function moveRoad(){
        let lines = document.querySelectorAll('.line');
        lines.forEach(function (item,i) {
            item.y += setting.speed;
            item.style.top = item.y + 'px';
            if(item.y > document.documentElement.clientHeight){
                item.y = -100;
            }
        })
}
//Трафик
function moveEnemy(){
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function (item,i) {
        item.y += setting.speed / 2;
        item.style.top = item.y + 'px';
        if(item.y > document.documentElement.clientHeight){
            item.y = -100 * setting.traffic;
            item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) +'px';
        }
    })
}


start.addEventListener('click',startGame);
document.addEventListener('keydown',startMove);
document.addEventListener('keyup',stopMove);
