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

    up() {this.y -= 10};
          
    right() {this.x += 10};
          
    left() {this.x -= 10};
          
    down() {this.y += 10};

    setboundries() {

        const width = this.ctx.width;
        const height = this.ctx.width;

            if (this.x < this.radius || this.x + this.radius > width) {
            this.x = this.x + 2;
            }
            if (this.y < this.radius || this.y + this.radius > height) {
            this.y = this.y + 2;
            }
        };


}