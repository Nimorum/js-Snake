export const food={
    pos:{},
    piece:{},
    createFood:function(gameBoard,pos){
        this.piece=document.createElement('div');
        this.piece.className='food';
        gameBoard.appendChild(this.piece);
        this.piece.style.gridColumnStart=pos.x;
        this.piece.style.gridRowStart=pos.y;
        this.pos=pos;   
    },
    changePos:function(){
        let pos ={
            x:randomNumber(1,30),
            y:randomNumber(1,30)
        }
        this.piece.style.gridColumnStart=pos.x;
        this.piece.style.gridRowStart=pos.y;
        this.pos=pos;
        return pos;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }