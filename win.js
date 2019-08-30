class Win {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = 0;
        this.y = 0;

        this.image = new Image();
        this.image.src = "images/Win.png";
        this.ctx = this.game.ctx;
    }

    drawWin() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}