window.addEventListener('load', function() {
    const $canvas = document.getElementById('canvas');
    //const width = $canvas.width;
    //const height = $canvas.height;
  
    const game = new Game($canvas);
  
    game.start();

  });
  
