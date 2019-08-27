class Control {
    constructor (game) {
        this.game = game;
    }
  
    setKeyBindings () {
        window.addEventListener('keydown', event => {
          const key = event.keyCode;
          if ([ 37, 38, 39, 40].includes(key)) {
            event.preventDefault();
            switch (key) {
              case 37:
                this.game.player.left();
                break;
              case 38:
                this.game.player.up();
                break;
              case 39:
                this.game.player.right();
                break;
              case 40:
                this.game.player.down();
                break;
            }
          }
        });
      }

    }