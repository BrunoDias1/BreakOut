import {MainScene} from "./mainscene.js"
import LoadScene from "./loadscene.js"

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "game-canvas",
    backgroundColor: "#AD89F6",
    scene: [LoadScene, MainScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 150},
            debug: false
        }
    }
}

new Phaser.Game(config);