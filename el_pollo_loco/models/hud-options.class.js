class Hud extends DrawableObject {
    width = 200;
    height = 300;
    x = 200;
    y = 200;
    elem = document.getElementById("fullscreen");


    constructor() {
        super();

    }

    /* When the openFullscreen() function is executed, open the video in fullscreen.
    Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        } else if (this.elem.webkitRequestFullscreen) { /* Safari */
            this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) { /* IE11 */
            this.elem.msRequestFullscreen();
        }
    }

    closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

}