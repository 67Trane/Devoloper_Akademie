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

    moveCharacter(direction) {
        const onTouchStart = (event) => {
            event.preventDefault();  // Verhindert das Standardverhalten des Browsers (z. B. Scrollen)
    
            // Startet ein Intervall, das den Charakter kontinuierlich bewegt
            let moveId = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect();
                
                // Berechnet die Touch-Position relativ zur Canvas
                let x = event.touches[0].clientX - rect.left;
                let y = event.touches[0].clientY - rect.top;
    
                // Überprüft, ob der Touch im Bereich des Charakters liegt
                if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                    this.pressKey(direction);
                }
            }, 10);
    
            // Funktion, die ausgeführt wird, wenn der Touch endet
            const onTouchEnd = () => {
                clearInterval(moveId);  // Stoppt die Bewegung
                this.releaseKey(direction);  // Gibt die Richtungstaste frei
                this.canvas.removeEventListener('touchend', onTouchEnd);  // Entfernt den Listener für 'touchend'
            };
    
            // EventListener für 'touchend' hinzufügen
            this.canvas.addEventListener('touchend', onTouchEnd);
        };
    
        // EventListener für 'touchstart' hinzufügen
        this.canvas.addEventListener('touchstart', onTouchStart);
    }
    



    /*moveCharacter(direction) { //später onclick mit touchstart ersetzen !!!!! 
        this.canvas.addEventListener('touchstart', (event) => {
            let moveId = setInterval(() => {
                let rect = this.canvas.getBoundingClientRect()
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                    this.pressKey(direction)
                }
                this.canvas.addEventListener('touchend', () => {
                    clearInterval(moveId)
                    this.releaseKey(direction)
                })
            }, 10)
        })
    }*/

    pressKey(direction) {
        this.world.keyboard[direction] = true;
    }

    releaseKey(direction) {
        this.world.keyboard[direction] = false;
    }
}