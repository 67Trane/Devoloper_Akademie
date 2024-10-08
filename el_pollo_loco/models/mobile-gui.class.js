class MobileGui extends DrawableObject {
    img;
    world;


    constructor(character, canvas, direction, x, y) {
        super();
        this.character = character
        this.canvas = canvas;
        this.width = 200;
        this.height = 200;
        this.x = x
        this.y = y
        this.loadImage("./img/button.png")
        this.moveCharacter(direction);
    }

    moveCharacter(direction) { //später onclick mit touchstart ersetzen !!!!! 
        this.canvas.addEventListener('pointerdown', (event) => {
            let moveleft = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect()
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                    if (direction == "LEFT") {
                        this.world.keyboard.LEFT = true;
                    } else if (direction == "RIGHT") {
                        this.world.keyboard.RIGHT = true;
                    }

                }
                this.canvas.addEventListener('mouseup', () => {
                    clearInterval(moveleft)
                    this.world.keyboard.LEFT = false;
                    this.world.keyboard.RIGHT = false;
                })
            }, 10)
        })
    }

}