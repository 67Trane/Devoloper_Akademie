class MobileGui extends DrawableObject {
    img;
    world;


    constructor(character, canvas, direction, x, y) {
        super();
        this.character = character
        this.canvas = canvas;
        this.width = 50;
        this.height = 50;
        this.x = x
        this.y = y
        this.loadImage("img/mobile-imgs/left.png")
        this.setImage(direction);
        this.moveCharacter(direction);
    }

    setImage(direction) {
        if (direction == "LEFT") {
            this.loadImage("img/mobile-imgs/left.png")
        } else if (direction == "RIGHT") {
            this.loadImage("img/mobile-imgs/right.png")
        } else if (direction == "SPACE") {
            this.loadImage("img/mobile-imgs/up.png")
        } else if (direction == "F") {
            this.loadImage("img/mobile-imgs/molotov.png")
        }
    }

    moveCharacter(direction) {
        const onTouchStart = (event) => {
            event.preventDefault();
            let moveId = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect();
                let x = event.touches[0].clientX - rect.left;
                let y = event.touches[0].clientY - rect.top;
                let scaleFactorX = this.canvas.width / this.canvas.clientWidth;
                let scaleFactorY = this.canvas.height / this.canvas.clientHeight;
                let adjustX = x * scaleFactorX
                let adjustY = y * scaleFactorY
                if (adjustX >= this.x && adjustX <= this.x + this.width && adjustY >= this.y && adjustY <= this.y + this.height) {
                    this.pressKey(direction);
                }
            }, 10);

            const onTouchEnd = () => {
                clearInterval(moveId);
                this.releaseKey(direction);
                this.canvas.removeEventListener('touchend', onTouchEnd);
            };
            this.canvas.addEventListener('touchend', onTouchEnd);
        };
        this.canvas.addEventListener('touchstart', onTouchStart);
    }

    pressKey(direction) {
        this.world.keyboard[direction] = true;
    }

    releaseKey(direction) {
        this.world.keyboard[direction] = false;
    }
}