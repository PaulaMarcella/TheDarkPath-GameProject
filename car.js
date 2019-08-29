class Car {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = 9;
        this.y = 9;
        this.image = new Image();
        this.image.src = "images/van2.png";
        this.ctx = this.game.ctx;
    }

drawCar() {
        this.ctx.drawImage(this.image, this.x*80, this.y*50, 80, 40);
      }
}
