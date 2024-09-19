const moon = document.querySelector('.moon');
const logo = document.querySelector('.img-logo');
const active = document.querySelector('.check');
const overlay = document.createElement('span');
const hamburguer = document.querySelector('.hamburguer');
const barra = document.querySelectorAll('.barra');
const navegacaoContainer = document.querySelector('.container-navegacao');
const body = document.body;
const nav = document.querySelector('.navegacao');
const main = document.querySelector('.texto-main');
const fechar = document.querySelectorAll('.fechar');
const html = document.getElementsByTagName('html');

/*funtions*/
const addOverlay = () => {
    overlay.innerText = "x";
    overlay.className = 'overlay';
    navegacaoContainer.appendChild(overlay);
}

const changeIcone = (verificar) => {
   
    /*faco as mudancas de cor e imagens*/
    for(let i = 0; i < fechar.length; i++){
        fechar[i].classList.toggle('dark-mode');
    } 
    body.classList.toggle('dark-mode');
    navegacaoContainer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    overlay.classList.toggle('dark-mode');

    for (let i = 0; i < barra.length; i++){
        barra[i].classList.toggle('white-dark');
    }

    if (verificar === false) {
        logo.src = './images/alarado-icon-homepage.svg'
        moon.src = './images/Moon_fill_light.svg';
    } else {
        moon.src = './images/Moon_fill.svg';
        logo.src = './images/alarado-icon-homepage-dark.svg';
    }
}

const mostrarNavegacao = () => {
    /*Agregar botao para fechar navegacao*/
    addOverlay();
    /*abro a navegacao*/
    navegacaoContainer.style.display = "flex";
    navegacaoContainer.style.animation = "entrada 2s ease-in-out";
}

function fecharMenu() {
    /*fecho a navegacao se der click em um link*/
    navegacaoContainer.style.animation = "salida 2s ease-in-out";
    navegacaoContainer.style.display = "none";
    navegacaoContainer.style.animationPlayState="paused";
    overlay.remove();
}

const mostrarNav = () => {
    let width = window.innerWidth;
    /*mostrar ou ocultar a navegacao caso seja mudada a orientacao do celular*/
    if (width < 640) {
        navegacaoContainer.style.display = "none";
        addOverlay();
    }else{
        navegacaoContainer.style.display = "flex";
        overlay.remove();
    }
}

const tamanhoTela = () => {
    mostrarNav();
}

/*eventos*/
active.addEventListener('click', () => {
    const verificar = active.checked
    changeIcone(verificar);
});

hamburguer.addEventListener('click', () => {
    mostrarNavegacao();
});

overlay.addEventListener('click', () => {
    fecharMenu();
});
/*
navegacaoContainer.addEventListener('click', () => {
    fecharMenu();
});*/

nav.addEventListener('click', () => {
    /*chamada a funcao para saber se é necesario ocultar a nacegacao*/
    mostrarNav();
});

