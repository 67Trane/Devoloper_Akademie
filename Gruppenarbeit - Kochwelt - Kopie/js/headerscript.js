let displayMenu = 1;
function toggleMenu() {
    if (displayMenu == 1) {
        //show menu
        document.getElementById('wrapper').classList.add('show-wrapper');
        document.getElementById('nav-mobile').classList.remove('d-none');
        document.getElementById('nav-mobile').classList.add('show-nav');
        displayMenu = 0;
    } else {
        //hide menu
        document.getElementById('wrapper').classList.remove('show-wrapper');
        document.getElementById('nav-mobile').classList.add('d-none');
        document.getElementById('nav-mobile').classList.remove('show-nav');
        displayMenu = 1;
    }
}