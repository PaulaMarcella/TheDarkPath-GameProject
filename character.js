class Character {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = 30;
        this.y = 30;
        this.radius = 15;
        this.ctx = this.game.ctx;
    }
 
    drawplayer() {
        
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();

    }

    up() {this.y -= 60};     
    right() {this.x += 60};
    left() {this.x -= 60};    
    down() {this.y += 60};

    setboundries() {
      
      if (this.x - this.radius < 0) {this.x += 60;}
      if (this.x + this.radius > this.width) {this.x -= 60}
      if (this.y - this.radius < 0) {this.y += 60;}
      if (this.y + this.radius > this.height) {this.y -= 60}
    };
}