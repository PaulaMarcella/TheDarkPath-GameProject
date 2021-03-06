class Character {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.x = 0;
    this.y = 0;
    this.radius = 19;
    this.ctx = this.game.ctx;

    this.image = new Image();
    this.image.src = "images/ninja.png";
  }

  drawplayer() {
    this.ctx.drawImage(this.image, this.x * 80, this.y * 50, 50, 50);
  }

  move(direction) {
    const maze = this.game.maze;
    const row = this.y;
    const column = this.x;
    const cell = maze.matrix[row][column];
    const directionHasAWall = cell.walls[direction];
    if (directionHasAWall) return;
    switch (direction) {
      case "up":
        this.y -= 1;
        break;
      case "right":
        this.x += 1;
        break;
      case "left":
        this.x -= 1;
        break;
      case "down":
        this.y += 1;
        break;
    }
  }

  collisionLight() {
    const light = this.game.light;
    const x = 40 + this.x * 80;
    const y = 25 + this.y * 50;

    if (x >= light.x - light.radius &&
      x <= light.x + light.radius &&
      y >= light.y - light.radius &&
      y <= light.y + light.radius) {
      this.game.sound.play('prison', {
        volume: 1
      });
      this.game.sound.play('caught', {
        volume: 1
      });
      this.game.gameOver()
    }
  }

  collisionGold() {
    const gold = this.game.gold;
    const light = this.game.light;
    const x = this.x
    const y = this.y;

    for (let i = 0; i < gold.length; i++) {
      if (x === gold[i].x && y === gold[i].y) {
        this.game.sound.play('cash', {
          volume: 1});        
        this.game.counter.count += 1;
        light.shrinklight();
        gold.splice(i, 1);
        gold.push(new Gold(this));
      }
    }
  }

  collisionPolice() {
    const police = this.game.police;
    const light = this.game.light;
    const x = this.x
    const y = this.y;

    for (let i = 0; i < police.length; i++) {
      if (x === police[i].x && y === police[i].y) {
        this.game.sound.play('cop', {volume: 1});
        light.growlight();
        police.splice(i, 1);
        police.push(new Police(this));
      }
    }

  }

  finish() {
    if (this.x == 9 && this.y == 9) {
      this.game.gameStatus = "win";
      this.game.sound.play('cardriving', {
        volume: 1
      });
      this.game.sound.play('winlaugh', {
        volume: 1
      });
    }
  }


}