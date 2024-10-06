class MobileGui extends DrawableObject {
    img;
    constructor(character, canvas) {
        super();
        this.character = character
        this.canvas = canvas;
        this.width = 200;
        this.height = 200;
        this.x = 200;
        this.y = 200;
        this.loadImage("./img/button.png")
        this.moveCharacterLeft();
    }

    moveCharacterLeft() { //später onclick mit touchstart ersetzen !!!!! 
        this.canvas.addEventListener('pointerdown', (event) => {
            let moveleft = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect()
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                    this.character.moveLeft()
                    this.character.playAnimation(this.character.IMAGES_WALKING);
                    this.character.otherDirection = true
                }
                this.canvas.addEventListener('mouseup', () => {
                    clearInterval(moveleft)
                })

            }, 100)
        })
    }

}