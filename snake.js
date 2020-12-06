export const snake={
    snakeBody:[],
    direction:{x:1,y:0},
    createElement:function(gameBoard,pos){
        let piece={};
        piece.element=document.createElement('div');
        piece.element.className='snake';
        gameBoard.appendChild(piece.element);
        piece.element.style.gridColumnStart=pos.x;
        piece.element.style.gridRowStart=pos.y;
        piece.pos=pos;
        this.snakeBody.push(piece);
    },
    move:function(){
        let x= this.snakeBody[0].pos.x+this.direction.x;
        let y=this.snakeBody[0].pos.y+this.direction.y;

        if(this.snakeBody.length<2){
            let piece=this.snakeBody[0];
            piece.element.style.gridColumnStart=x;
            piece.element.style.gridRowStart=y;
            piece.pos.x=x;
            piece.pos.y=y;
        }else{
            let lastPiece =this.snakeBody.pop();
            lastPiece.pos.x=x;
            lastPiece.pos.y=y;
            lastPiece.element.style.gridColumnStart=x;
            lastPiece.element.style.gridRowStart=y;
            this.snakeBody.unshift(lastPiece);
        }

    },
    collisionCheck:function(pos,callback){
        let result={
            limit:false,
            food:false,
            body:false
        }
        if(this.snakeBody[0].pos.x<=0||this.snakeBody[0].pos.y<=0){
            result.limit=true;
            callback(result);
            return;
        }
        if(this.snakeBody[0].pos.x>30||this.snakeBody[0].pos.y>30){
            result.limit=true;
            callback(result);
            return;
        }
        if(pos!==null&&this.snakeBody[0].pos.x===pos.x&&this.snakeBody[0].pos.y===pos.y){
            result.food=true;
            callback(result);
            return;
        }
        this.snakeBody.forEach((piece,index)=>{            
            if(index===0) return;
            if(piece.pos.x===this.snakeBody[0].pos.x&&piece.pos.y===this.snakeBody[0].pos.y){
                result.body=true;
                callback(result);
                return;
            }
        })

    }
}