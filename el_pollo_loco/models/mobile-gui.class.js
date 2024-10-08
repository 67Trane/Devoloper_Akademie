class MobileGui extends DrawableObject {
    img;
    world;


    constructor(character, canvas, direction, x, y) {
        super();
        this.character = character
        this.canvas = canvas;
        this.width = 100;
        this.height = 100;
        this.x = x
        this.y = y
        this.loadImage("./img/button.png")
        this.moveCharacter(direction);
    }

    moveCharacter(direction) { //später onclick mit touchstart ersetzen !!!!! 
        this.canvas.addEventListener('pointerdown', (event) => {
            let moveId = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect()
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                    this.pressKey(direction)
                }
                this.canvas.addEventListener('mouseup', () => {
                    clearInterval(moveId)
                    this.releaseKey(direction)
                })
            }, 10)
        })
    }

    pressKey(direction) {
        this.world.keyboard[direction] = true;
    }

    releaseKey(direction) {
        this.world.keyboard[direction] = false;
    }
}