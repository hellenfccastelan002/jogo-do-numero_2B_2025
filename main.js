let numeroaleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoREsultado = document.querySelector('.ultimoResultado');
const baixoOUAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

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
    } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito alto";
        }
    }

        contagemPalpites++;
        campoPalpite.value = "";
        campoPalpite.focus();
    }

envioPalpite.addEventListener('click, verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReininciar = document.createElement('button');
    document.body.appendChild(botaoReininciar);
    botaoReiniciar.textContent = 'Reininciar Jogo';
    botaoReiniciar.ClassList.add('botaoReiniciar');
    botaoReiniciar.addEvenListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafoReiniciar = document.querySelectorAll('.paragrafoResultado p');
    for (const paragrafroReiniciar of paragrafoReiniciar) {
        paragrafoReiniciar.textcontent = "";
    }

botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) +1;
}
        
