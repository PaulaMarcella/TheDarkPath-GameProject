class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.light = new Flashlight(this, 200, 400, 3, 4, 80);
        this.maze = new Maze(this);
        this.player = new Character(this);
        this.gold = new Gold(this);
        this.gold2 = new Gold(this);
        this.gold3 = new Gold(this);
        this.gold4 = new Gold(this);
        this.gold5 = new Gold(this);
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
          this.light.movelight();
          this.light.setboundries();
          this.player.collisionLight();
          this.player.finish();
          this.draw();
          //this.light.growlight();
    
    }

    start () {
          //this.clear();
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

    gameOver(){
        // ADD GAME ENDING FUNCTION HERE
    }

    draw(){
        this.gold.drawGold(this.ctx);
        this.gold2.drawGold(this.ctx);
        this.gold3.drawGold(this.ctx);
        this.gold4.drawGold(this.ctx);
        this.gold5.drawGold(this.ctx);
    }
}

    