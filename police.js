class Police {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        //this.x = Math.floor(Math.random() * 10);
        //this.y = Math.floor(Math.random() * 10);
        this.x = _getRandomInteger(1, 9);
        this.y = _getRandomInteger(1, 9);
        this.image = new Image();
        this.image.src = "images/police.png";
        this.ctx = this.game.ctx;

        function _getRandomInteger(min, max){
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
        }
    }

drawPolice(){
        this.ctx.drawImage(this.image, this.x*80, this.y*50, 80, 50);
      }
}
