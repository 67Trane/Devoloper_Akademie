class BackgroundObject extends MoveableObject{
    width = 1000;
    height  = 480;

    constructor(imagePath, x, parallaxFactor = 1) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.parallaxFactor = parallaxFactor;
    }
}