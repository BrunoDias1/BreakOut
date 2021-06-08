export class Brick extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hitCount) {
        super(scene, x, y, texture);

        this.setOrigin(0);

        scene.add.existing(this);
        this.hitCount = hitCount;

        //Retirado para que o objeto possa ser adicionado
        //a um grupo estático

        /*scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setImmovable(true);*/
    }

    hit() {
        this.hitCount--;
        if(this.hitCount == 0) {
        this.scene.decreaseBrickCount();
        this.disableBody(true, true);
        }
    }
}