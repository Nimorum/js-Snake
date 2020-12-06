let gameBoard;

import {snake} from './snake.js';
import {food} from './food.js';

window.addEventListener('keydown',(e)=>{
    switch (e.key) {
        case 'ArrowUp':
            if(snake.direction.y!==0)break;
            snake.direction={x:0,y:-1}    
        break;
        case 'ArrowDown':
            if(snake.direction.y!==0)break;
            snake.direction={x:0,y:1}    
        break;
        case 'ArrowLeft':
            if(snake.direction.x!==0)break;
            snake.direction={x:-1,y:0}    
        break;
        case 'ArrowRight':
            if(snake.direction.x!==0)break;
            snake.direction={x:1,y:0}    
        break;
    
        default:
            break;
    }
})

function Update(loopTime) {

    let interval= setInterval(() => {

        snake.move();

        snake.collisionCheck(food.pos,(data)=>{
            if(data.limit||data.body){
                clearInterval(interval);
                alert('you lost the game');
                window.location.reload();
            }
            if(data.food){
                while (true) {
                    if(!comparePosWithSnake(food.changePos())){
                        break;
                    }                    
                }
                let newPos={x:food.pos.x,y:food.pos.y}
                snake.createElement(gameBoard,newPos);
            }
        });
    }, loopTime);
}

function comparePosWithSnake(pos) {
    for (let i = 0; i < snake.snakeBody.length; i++) {
        if(snake.snakeBody[i].pos.x===pos.x&&snake.snakeBody[i].pos.y===pos.y){
            return true;
        }        
    }
    return false;
}

function startGame(){
    gameBoard=document.getElementById("game")
    snake.createElement(gameBoard,{x:15,y:15});
    food.createFood(gameBoard,{x:25,y:25})
    Update(300);
}

window.onload=function(){
    startGame();
}