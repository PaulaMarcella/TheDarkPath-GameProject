window.addEventListener('load', function () {
  const $canvas = document.querySelector('canvas');
  const game = new Game($canvas);
  game.start();
});