class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.light = new Flashlight(this, 200, 200, 0, 0, 30);
        this.maze = new Maze(this);
    }


    start() {
        this.maze.draw();
        this.light.drawlight();

        // this.ctx.fillStyle = 'black';
        // this.ctx.translate(100, 100);
        // this.ctx.rotate(0.25 * Math.PI);
        // this.ctx.fillRect(0, 0, 100, 100);
    }

    /*
    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
        }
    */

}