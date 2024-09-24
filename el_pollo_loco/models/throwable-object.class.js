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
        this.speedY = 30; 
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}