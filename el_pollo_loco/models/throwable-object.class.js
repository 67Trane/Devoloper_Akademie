class ThrowableObject extends MoveableObject {


    constructor(x,y) {
        super().loadImage("img/explosiv/PNG_2048x1536/Weapons/weapon_14_molotov_cocktail.png");
        this.x = x;
        this.y = y;
        this.throw();
        this.height = 40;
        this.width = 20;
    }


    throw() {
        this.speedY = 20; 
        this.applyGravity();
        this.intervalHelper(() => {
            this.x += 10;
        }, 25)
    }

    collisionThrowable(mo) {
        let tolerance = 10;
        return  this.x + this.width  > mo.x &&
                this.x + this.width < mo.x + mo.width &&
                this.y + this.height > mo.y + tolerance
    }
}