class Maze {
  constructor(game) {
    this.game = game;
    this.canvas = canvas;
    this.ctx = this.game.ctx;
    this.matrix = generateMaze();
  }

  draw() {
    const matrix = this.matrix;
    for (let row of matrix) {
      for (let cell of row) {
        this._paintCell(cell);
      }
    }
  }

  _paintCell(cell) {
    const context = this.ctx;
    const width = this.game.width;
    const height = this.game.height;

    const gridRows = 10;
    const gridColumns = 10;

    context.save();

    const cellWidth = width / gridRows;
    const cellHeight = height / gridColumns;

    const positionX = cell.column * cellWidth;
    const positionY = cell.row * cellHeight;


    context.translate(positionX, positionY);

    for (let side in cell.walls) {
      if (cell.walls[side]) {
        context.beginPath();
        switch (side) {
          case 'up':
            context.moveTo(0, 0);
            context.lineTo(cellWidth, 0);
            break;
          case 'right':
            context.moveTo(cellWidth, 0);
            context.lineTo(cellWidth, cellHeight);
            break;
          case 'down':
            context.moveTo(0, cellHeight);
            context.lineTo(cellWidth, cellHeight);
            break;
          case 'left':
            context.moveTo(0, 0);
            context.lineTo(0, cellHeight);
            break;
        }
        context.stroke();
        context.closePath();
      }
    }

    context.restore();
  }
}