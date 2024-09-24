class Endboss extends MoveableObject {
    height = 400;
    width = 200;
    y = 50;


    IMAGES_WALKING = [
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_000.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_001.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_002.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_003.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_004.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_005.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_006.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_007.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_008.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_009.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_010.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_011.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_012.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_013.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_014.png',
        'img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_015.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
          }, 60);
    }
}