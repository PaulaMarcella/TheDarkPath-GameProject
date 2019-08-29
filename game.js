const SOUNDS = {
    backgroundMusic: "/music/policecase.mp3",
    cop: "/music/OnePoliceSiren.mp3",
    cash: "/music/cash.mp3",
    caught: "/music/CopandHeli.mp3",
    winlaugh: "/music/EvilLaughLong.mp3",
    prison: "/music/prison.mp3",
    cardriving: "/music/Cardriving.mp3"
  };

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
        this.police = [new Police(this), new Police(this), new Police(this), new Police(this)];
        this.car = new Car(this);
        this.control = new Control(this);
        this.gamover = new GameOver(this);
        this.win = new Win(this);
        this.sound = new Sound();
        this.sound.loadSounds(SOUNDS);
        this.control.setKeyBindings();
        this.timer = 0;
        this.SPEED = 5;
        this.gameStatus = "game";
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
          this.loop(0);
          }

    loop (timestamp) {
        if (this.gameStatus === "game") {

            if (this.timer < timestamp - this.SPEED) {

                this.update();
                this.timer = timestamp;
                }

            window.requestAnimationFrame((timestamp) => this.loop(timestamp));
            }

        else if (this.gameStatus === "game-over") {
            this.gamover.drawLoose();
        }
        
        else if(this.gameStatus === "win"){
            this.win.drawWin();
        }
    }
    
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        }


    draw(){
        this.sound.play('backgroundMusic', { volume: 0.5 });
        for (let i = 0; i < this.gold.length; i++){
            this.gold[i].drawGold()}
        for (let i = 0; i < this.police.length; i++){
            this.police[i].drawPolice() }
            
    }

    gameOver(){
        this.gameStatus = "game-over";
    }
}