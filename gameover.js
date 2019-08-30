class GameOver {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x1 = 0;
        this.y = 0;
        this.image = new Image();
        this.image.src = "images/prisonbars.png";
        this.ctx = this.game.ctx;
        this.speed1 = 20;
        this.speed2 = 0;
    }

    drawLoose(){
        this.game.clear();
        this.game.maze.draw();
        this.game.light.drawlight();
        this.game.player.drawplayer();
        this.game.car.drawCar();
        this.game.draw();
        this.ctx.drawImage(this.image, this.x1 -this.width, this.y, this.width, this.height);
        //this.ctx.drawImage(this.image, this.x2 -=1, this.y, this.width, this.height);  
        this.ctx.font = '100px VT323';
        this.ctx.fillStyle= "yellow";
        this.ctx.fillText("YOU ARE ARRESTED",100, 275); 
        }

    update(){
        if (this.x1 === this.width){
            this.speed1 = 0;
        }
        else{
        this.x1 +=this.speed1 }
        //console.log(this.x1)
        //this.speed2 += 0.1;
        //this.ctx.clearRect(0, 0, this.width, this.height);
        //this.ctx.drawImage(this.image, this.speed1, this.y, this.width, this.height);
        //this.ctx.drawImage(this.image, this.speed2, this.y, this.width, this.height);
        //this.window.requestAnimationFrame(update())
        }




}