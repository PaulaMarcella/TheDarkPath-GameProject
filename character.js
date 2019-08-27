class Character {
    constructor(game, x, y, radius) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.ctx = this.game.ctx;
    }
 
    drawplayer() {
        
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();

    }

    up() {this.y -= 40}
          
    right() {this.x += 40}
          
    left() {this.x -= 40}
          
    down() {this.y += 50}

    setboundries() {


    }

}