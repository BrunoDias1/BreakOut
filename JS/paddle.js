export class Paddle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.allowGravity = false;
        this.setCollideWorldBounds(true);

        this.setImmovable(true);

        this.ball = undefined;
        this.ballLaunched = false;

        this.velocity = 700;
        this.controls = scene.input.keyboard.createCursorKeys();
    }

    update(time) {
        if(this.controls.left.isDown) {
            this.setVelocityX(-this.velocity);
        } else if (this.controls.right.isDown) {
            this.setVelocityX(this.velocity);
        } else {
            this.setVelocityX(0);
        }

        if(this.ball && !this.ballLaunched) {
            this.ball.setPosition(this.x, this.y - this.displayHeight);
        }

        if(!this.ballLaunched && this.controls.space.isDown) {
            this.ballLaunched = true;
            this.scene.launchBall();
        }
    }

    setBall(ball) {
        this.ball = ball;
    }
}