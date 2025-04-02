const body = document.querySelector('body');
const menu = document.querySelector('.menu'); 

function abrirMenu() {
    menu.classList.toggle('menu-Activo');
    body.style.overflow = "hidden";
}

function cerrarMenu(){
    menu.classList.toggle('menu-Activo');
    body.style.overflow = "scroll";
}

function resaltado(id) {
    const input = document.getElementById(id);
    const placeholder = input.nextElementSibling;
    
    // Evento al recibir foco
    input.addEventListener('focus', () => {
        placeholder.style.padding = '15px 10px';
        placeholder.style.transform = 'translate(-5%, -60%) scale(0.8)';
        placeholder.style.backgroundColor = 'white';
        placeholder.style.color = '#0b57d0';
    });
    
    // Evento al perder el foco
    input.addEventListener('blur', () => {
        if (!input.value) {
            placeholder.style.padding = '';
            placeholder.style.transform = '';
            placeholder.style.backgroundColor = '';
            placeholder.style.color = '';
        }
    });
    
    // Evento al escribir
    input.addEventListener('input', () => {
        if (input.value) {
            placeholder.style.color = '#0b57d0';
        } else {
            placeholder.style.color = '';
        }
    });
}