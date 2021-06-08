export default class LoadScene extends Phaser.Scene {
    constructor() {
        super("LoadScene");
    }

    preload() {
        this.load.image("Ball", "./Images/ballblue.png");
        this.load.image("BlueB", "./Images/blue.png");
        this.load.image("GreenB", "./Images/green.png");
        this.load.image("PurpleB", "./Images/purple.png");
        this.load.image("RedB", "./Images/red.png");
        this.load.image("YellowB", "./Images/yellow.png");
        this.load.image("Paddle", "./Images/paddleRed.png");
    }

    create() {
        this.input.mouse.disableContextMenu();
        this.scene.start("MainScene");
    }
}