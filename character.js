class Character {
    constructor(game, x, y, radius) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
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

    up() {this.y -= 30};
          
    right() {this.x += 30};
          
    left() {this.x -= 30};
          
    down() {this.y += 30};

    setboundries() {

        /*
        if (this.y > this.height || this.y < 0) {
            this.y =- 1;
          }
        if (this.x > this.width || this.x < 0) {
            this.x =- 1;
          }
        */
       
        };


}