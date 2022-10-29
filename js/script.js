function exibirMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_white_36dp.svg";
        document.querySelector('.mobile-menu').style.display = 'none';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";
        document.querySelector('.mobile-menu').style.display = 'block'; 
    }    
}

