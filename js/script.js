function abrirMenu() {
    const menu = document.querySelector('.header__menu');
    console.log(menu);
    menu.classList.toggle('header__menu--activo');
}
function cerrarMenu() {
    const menu = document.querySelector('.header__menu');
    console.log(menu);
    menu.classList.toggle('header__menu--activo');
}
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        classes: { 
                arrow : 'splide__arrow displayNone',
                pagination: 'splide__pagination displayNone',
                page      : 'splide__pagination__page displayNone', 
        },
        perPage    : 1,
        gap        : '1rem',
        breakpoints: {
            1200: { perPage: 3, gap: '1rem' },
            640 : { perPage: 1, gap: '1rem' },
},
    } );
    splide.mount();
    
} );