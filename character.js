class Character {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = 40;
        this.y = 25;
        this.radius = 19;
        this.ctx = this.game.ctx;
    }
 
    drawplayer() {
        
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();

    }

    up() {this.y -= 50};     
    right() {this.x += 80};
    left() {this.x -= 80};    
    down() {this.y += 50};

    setboundries() {

      if (this.x < 0) {this.x += 80;}
      if (this.x > this.width) {this.x -= 80}
      if (this.y < 0) {this.y += 50;}
      if (this.y > this.height) {this.y -= 50}
    }

    collisionLight(){
      if (this.x >= this.game.light.x - this.game.light.radius && 
          this.x <= this.game.light.x + this.game.light.radius &&
          this.y >= this.game.light.y - this.game.light.radius && 
          this.y <= this.game.light.y + this.game.light.radius) 
          {
          return console.log("GAME OVER");
        }
      
    }

}


