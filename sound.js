const SOUNDS = {
    backgroundMusic: "https://ia802908.us.archive.org/0/items/mythium/JLS_ATI.mp3",
    eatFood: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/chewing.mp3",
    congratulations: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/happykids.mp3",
    lost: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/HONK.wav"
  };



class Sound {
    constructor () {
      this.sounds = {};
    }
  
    loadSounds (sounds) {
      for (let name in sounds) {
        const url = sounds[name];
        this.sounds[name] = new Audio(url);
      }
    }
  
    play (name, options) {
      const sound = this.sounds[name];
      sound.loop = options && options.loop || false;
      sound.volume = options && options.volume || 0.05;
      sound.play();
      // return sound;
    }
  }