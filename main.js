window.addEventListener('load', function() {
  const $canvas = document.getElementById('canvas');
  const game = new Game($canvas);
  game.start();
});