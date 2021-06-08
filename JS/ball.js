export class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        this.initialVelocity = {
            min: {x: -200, y: -600},
            max: {x: 200, y: -800}
        }
    }

    launch() {
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);

        this.setVelocity(
            Phaser.Math.Between(
                this.initialVelocity.min.x,
                this.initialVelocity.max.x
            ),
            Phaser.Math.Between(
                this.initialVelocity.min.y,
                this.initialVelocity.max.y
            )
        );
    }
}