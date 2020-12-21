window.onload = function() {
    try {
        handleMenuMobile();
        handleEffectHeader();
    } catch {
        //falta criar os outros 2 slides e tentar fazer a lógica do slider
    }
    
}

function handleMenuMobile() {
    const menu_mobile_button = document.getElementById('button-mobile');
    const menu_screen_mobile = document.getElementById('menu-screen-mobile');

    menu_mobile_button.addEventListener('click', function() {
        if(menu_screen_mobile.style.display === 'none') {
            menu_screen_mobile.style.display = 'inline';

        } else {
            menu_screen_mobile.style.display = 'none';
        }
            
    });
}

function handleEffectHeader() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        window.scrollY > 30 ? header.style.height = "15vh" : header.style.height = "23.5vh";
    })
}