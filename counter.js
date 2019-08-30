class Counter {
    constructor (game) {
      this.game = game;
      this.count = 0
    }
  
    drawCount () {
      const ctx = this.game.ctx;
      const count = this.count
      //ctx.save();
      //ctx.translate(50, 50);
      
      ctx.font = '20px monospace';
      ctx.fillStyle= 'yellow';
      ctx.fillText(`Coins ${ count }`, 700, 30);
      //ctx.restore();
    }
  }
  