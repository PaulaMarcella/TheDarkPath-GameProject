class Win {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        this.image = new Image();
        this.image.src = "images/prisonbars.png";
        this.ctx = this.game.ctx;
    }

    drawWin(){
        this.ctx.drawImage(this.image, this.x1, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);   
        }
}