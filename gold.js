class Gold {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
        //this.setRandomPosition();
        this.image = new Image();
        this.image.src = "images/gold.png";
        this.ctx = this.game.ctx;
    }

drawGold(){
        //this.ctx.save();
        this.ctx.drawImage(this.image, this.x*80, this.y*50, 80, 50);

        //this.ctx.restore();
      }

setRandomPosition () {
        //const randomCoordinate = size => Math.floor(Math.random() * size);
        //this.x = randomCoordinate(this.width) * 10;
        //this.y = randomCoordinate(this.height) * 10;
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
      }
}
