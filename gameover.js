class GameOver {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x1 = 0;
        this.x2 = 600
        this.y = 0;
        this.image = new Image();
        this.image.src = "images/prisonbars.png";
        this.ctx = this.game.ctx;
        this.speed1 = 0;
        this.speed2 = 0;
    }

    drawLoose(){
        this.ctx.drawImage(this.image, this.x1 += 1, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x2 -=1, this.y, this.width, this.height);  
        this.ctx.font = '70px monospace';
        this.ctx.fillStyle= "yellow";
        this.ctx.fillText("YOU ARE ARRESTED",50, 275); 
        }
/*
    update(){
        this.speed1 += 0.1;
        this.speed2 += 0.1;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, this.speed1, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.speed2, this.y, this.width, this.height);
        this.window.requestAnimationFrame(update())
        }

*/
}