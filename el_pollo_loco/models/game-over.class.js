class GameOver extends MoveableObject {

    GAME_OVER_IMGS = [
        "./img/text-animation/PNG/GameOver/GameOver_00.png",
        "./img/text-animation/PNG/GameOver/GameOver_01.png",
        "./img/text-animation/PNG/GameOver/GameOver_02.png",
        "./img/text-animation/PNG/GameOver/GameOver_03.png",
        "./img/text-animation/PNG/GameOver/GameOver_04.png",
        "./img/text-animation/PNG/GameOver/GameOver_05.png",
        "./img/text-animation/PNG/GameOver/GameOver_06.png",
        "./img/text-animation/PNG/GameOver/GameOver_07.png",
        "./img/text-animation/PNG/GameOver/GameOver_08.png",
        "./img/text-animation/PNG/GameOver/GameOver_09.png",
        "./img/text-animation/PNG/GameOver/GameOver_10.png",
        "./img/text-animation/PNG/GameOver/GameOver_11.png",
        "./img/text-animation/PNG/GameOver/GameOver_12.png",
        "./img/text-animation/PNG/GameOver/GameOver_13.png",
        "./img/text-animation/PNG/GameOver/GameOver_14.png",
        "./img/text-animation/PNG/GameOver/GameOver_15.png",
        "./img/text-animation/PNG/GameOver/GameOver_16.png",
        "./img/text-animation/PNG/GameOver/GameOver_17.png",
        "./img/text-animation/PNG/GameOver/GameOver_18.png",
        "./img/text-animation/PNG/GameOver/GameOver_19.png",
        "./img/text-animation/PNG/GameOver/GameOver_20.png",
        "./img/text-animation/PNG/GameOver/GameOver_21.png",
        "./img/text-animation/PNG/GameOver/GameOver_22.png",
        "./img/text-animation/PNG/GameOver/GameOver_23.png",
        "./img/text-animation/PNG/GameOver/GameOver_24.png",
        "./img/text-animation/PNG/GameOver/GameOver_25.png",
        "./img/text-animation/PNG/GameOver/GameOver_26.png",
        "./img/text-animation/PNG/GameOver/GameOver_27.png",
        "./img/text-animation/PNG/GameOver/GameOver_28.png",
        "./img/text-animation/PNG/GameOver/GameOver_29.png",
        "./img/text-animation/PNG/GameOver/GameOver_30.png",
        "./img/text-animation/PNG/GameOver/GameOver_31.png",
        "./img/text-animation/PNG/GameOver/GameOver_32.png",
        "./img/text-animation/PNG/GameOver/GameOver_33.png",
    ]

    x = 170
    y = 200
    width = 0
    height = 0


    constructor() {
        super()
        this.loadImages(this.GAME_OVER_IMGS)
    }

    init() {
        this.width = 400;
        this.height = 100;
        this.playAnimationOnce(this.GAME_OVER_IMGS)
    }

    loadImages(arr) {
        arr.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    }
}
