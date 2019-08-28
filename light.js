class Flashlight {
    constructor(game, x, y, vx, vy, radius) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.GRAVITY = 0.1;
        this.width = this.game.width;
        this.height = this.game.height;
        this.canvas = canvas;
        this.ctx = this.game.ctx;
    }

    drawlight() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(221, 244, 40, 0.5)";
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    movelight() {
        this.x += this.vx;
        this.y += this.vy;

    }

    setboundries() {

        if (this.y + this.vy > this.height || this.y + this.vy < 0) {
            this.vy *= -1;
          }

        if (this.x + this.vx > this.width || this.x + this.vx < 0) {
            this.vx *= -1;
          }

    }
}