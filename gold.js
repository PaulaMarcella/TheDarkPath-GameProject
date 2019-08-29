class Gold {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
        this.image = new Image();
        this.image.src = "images/money.png";
        this.ctx = this.game.ctx;
    }

drawGold(){
        this.ctx.drawImage(this.image, this.x* 80, this.y* 50, 80, 50);
      }
}
