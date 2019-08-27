class Game {
    constructor (canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.light = new Flashlight(this, 200, 200, 0, 0, 30)
        
    }


start() {
    this.light.drawlight()
}

/*
clear () {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
    }
*/

}