class Flashlight {
    constructor(game, x, y, vx, vy, radius) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.canvas = canvas;
        // this.ctx = this.canvas.getContext('2d');
        this.ctx = this.game.ctx;
    }

    drawlight() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'yellow';
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    movelight() {

    }

    setboundries() {

    }

}