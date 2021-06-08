import {Paddle} from "./paddle.js"
import {Ball} from "./ball.js"
import {Brick} from "./brick.js"

export class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    init() {
        this.board = {
            width: 12,
            height: 6,
            tileSize: {
                width: 64,
                height: 32
            },
            headSpace: 0.5
        }

        this.brickCount =  0;
    }

    create() {
        /*let PaddleS = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height - 20, "Paddle"
        );

        this.paddle = this.physics.add.existing(PaddleS);
        this.paddle.body.allowGravity = false;*/

        this.bricks = this.physics.add.staticGroup();

        this.createMap();

        this.paddle = new Paddle(this,
            this.game.config.width * 0.5,
            this.game.config.height - 20, "Paddle"
        );

        this.ball = new Ball(this,
            this.game.config.width * 0.5,
            this.game.config.height - 20, "Ball"
        );

        this.paddle.setBall(this.ball);
    }

    update(time) {
        this.paddle.update(time);
    }

    createMap() {
        let startX = 
            (this.game.config.width * 0.5) - 
            (this.board.width * 
            this.board.tileSize.width) * 0.5;

        let startY = 
            this.board.tileSize.height * 
            this.board.headSpace;

        let textures = ["BlueB", "GreenB", "PurpleB", "YellowB", "RedB"];

        for(let w = 0; w < this.board.width; ++w) {
            for(let h = 0; h < this.board.height; ++h) {
                let hitCount = Phaser.Math.Between(1, 5);

                let brick = new Brick(this,
                    startX + w * this.board.tileSize.width, 
                    startY + h * this.board.tileSize.height,
                    textures[hitCount - 1], hitCount);

                this.bricks.add(brick);
                this.brickCount++;

            }
        }
    }

    launchBall() {
        this.ball.launch();
        this.physics.add.collider(this.paddle, this.ball);
        this.physics.add.collider(this.ball, this.bricks, this.onCollision, null, this);
    }

    onCollision(ball, brick) {
        brick.hit();
    }

    decreaseBrickCount() {
        this.brickCount--;
        if(this.brickCount == 0) {
            this.scene.restart();
        }
    }
}