let numeroaleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoREsultado = document.querySelector('.ultimoResultado');
const baixoOUAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite');
let contagemPalpites = 1;
let botaoReininciar;

    function verificarPalpite() {
        const palpiteUsuario = Number(campoPalpite.value);
        if (contagemPalpite === 1) {
            palpiteUsuario.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";
        
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você Acertou!";
        ultimoResultado.style.backgroundcolor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textcontent = "FIM DE JOGO ! !";
        baixoOuAlto.textcontent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textcontent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAto.textContent
    }
