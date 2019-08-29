class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.light = new Flashlight(this, 200, 400, 2, 1, 80);
        this.maze = new Maze(this);
        this.player = new Character(this);        
        this.gold = [new Gold(this), new Gold(this), new Gold(this), new Gold(this)];
        this.police = [new Police(this), new Police(this), new Police(this)];
        this.car = new Car(this);
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
          this.car.drawCar();
          this.light.movelight();
          this.light.setboundries();
          this.player.collisionLight();
          this.player.finish();
          this.player.collisionGold();
          this.player.collisionPolice();
          this.draw();

    
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
        this.start()
        console.log('GAME OVER')
    }

    draw(){
        for (let i = 0; i < this.gold.length; i++){
            this.gold[i].drawGold() }
        for (let i = 0; i < this.police.length; i++){
            this.police[i].drawPolice() }
    }
}

    