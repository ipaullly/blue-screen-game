class mainScene {
  preload() {
    // called at beginning to load assets i.e sprites and sounds
    // Parameters: name of the sprite, path of the image
    this.load.image('player', 'assets/player.png');
    this.load.image('coin', 'assets/coin.png');
  }
  create() {
    // initializes scene i.e. positions of the sprites
    // parameters: x position, y position, name of the sprite
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.coin = this.physics.add.sprite(300, 300, 'coin');
    // store the score in a variable, initialized to 0
    this.score = 0;
    // styling the text
    let style = { font: '20px Arial', fill: '#fff' };
    // display the text in the top left corner
    // parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, `score: ${this.score}`, style);
    this.arrow = this.input.keyboard.createCursorKeys();
  }
  update() {
    // handles all the games logic like movements
    // if the player overlaps with the coin
    if (this.physics.overlap(this.player, this.coin)) {
      // call the new hit() method
      this.hit();
    }
    // handle horizontal movements
    if (this.arrow.right.isDown) {
      // if the right arrow is pressed, move to the right
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      // if the left arrow is pressed, move to the left
      this.player.x -= 3;
    }
    // vertical movements 
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    }
  }
  hit() {
    // change the position x and y f the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);
    // increment the score by 10
    this.score += 10;
    // display the updated score on the screen
    this.scoreText.setText(`score: ${this.score}`)
    // create a new tween
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 1.2, // that scale vertically by 20%
      scaleY: 1.2, // and scale horizontally by 20%
      yoyo: true, // at the end go back to default scale
    });
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