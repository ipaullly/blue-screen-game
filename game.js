class mainScene {
  preload() {
    // called at beginning to load assets i.e sprites and sounds
  }
  create() {
    // initializes scene i.e. positions of the sprites
  }
  update() {
    // handles all the games logic like movements
  }
}

new Phaser.Game({
  width: 1400,
  height: 800,
  backgroundColor: '#3498db',
  scene: mainScene,
  physics: { default: 'arcade' },
  parent: 'game',
});