class Gold {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.x = _getRandomInteger(1, 9);
        this.y = _getRandomInteger(1, 9);
        this.image = new Image();
        this.image.src = "images/money.png";
        this.ctx = this.game.ctx;

        function _getRandomInteger(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
    drawGold() {
        this.ctx.drawImage(this.image, this.x * 80, this.y * 50, 50, 50);
    }
}


/*
checkOverlap(){
    for (let i = 0; i < this.game.police.length; i++){
        if (this.x === this.game.police[i].x && this.y === this.game.police[i].y) {
        this.game.police.splice(i, 1);   
        this.game.police.push(new Police(this));
    }
        else {console.log(this.x)}}
}
*/