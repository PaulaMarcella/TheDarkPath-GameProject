class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.light = new Flashlight(this, 200, 400, 3, 4, 80);
        this.maze = new Maze(this);
        this.player = new Character(this);
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
            this.light.setboundries();
    
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
    
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        }

    }