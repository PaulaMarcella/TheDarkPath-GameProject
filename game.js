class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.light = new Flashlight(this, 200, 200, 2, 2, 50);
        this.maze = new Maze(this);
        this.player = new Character(this, 30, 30, 15);
        this.control = new Control(this);
        this.control.setKeyBindings();
        this.timer = 0;
        this.SPEED = 5;
    }


    update() {
        this.clear();
        this.maze.draw();
        this.light.drawlight();
        this.player.drawplayer();
        this.player.setboundries();
        this.light.movelight();
    
    }

    start () {
            this.loop(0);
          }

    loop (timestamp) {
            if (this.timer < timestamp - this.SPEED) {

              this.update();
              this.timer = timestamp;
            }
            window.requestAnimationFrame((timestamp) => this.loop(timestamp));
          }   

        // this.ctx.fillStyle = 'black';
        // this.ctx.translate(100, 100);
        // this.ctx.rotate(0.25 * Math.PI);
        // this.ctx.fillRect(0, 0, 100, 100);

    
    
    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.ctx.clearRect(0, 0, width, height);
        }

    }