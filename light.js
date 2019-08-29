class Flashlight {
    constructor(game, x, y, vx, vy, radius) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.width = this.game.width;
        this.height = this.game.height;
        this.canvas = canvas;
        this.ctx = this.game.ctx;
    }

    drawlight() {
        var gradient = this.ctx.createRadialGradient(this.x, this.y, 0 ,this.x, this.y, 100);
            gradient.addColorStop(0, 'rgba(255, 255, 0, 0.7)');
            gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(255, 255, 0, 0.1)');

        this.ctx.beginPath();
        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    movelight() {
        this.x += this.vx;
        this.y += this.vy;

    }

    growlight() {
        this.radius += 0.5

    }

    shrinklight() {
        this.radius -= 0.05
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