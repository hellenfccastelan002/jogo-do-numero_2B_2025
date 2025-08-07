
const palpites = document.querySelector('.palpites');
const ultimoREsultado = document.querySelector('.ultimoResultado');
const baixoOUAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite);



    function verificarPalpite() {
        const palpiteUsuario = Number(campoPalpite.value);
        if (contagemPalpite === 1) {
            palpiteUsuario.textContent = "Palpites anteriores: "
    }

    palpites.textContent += palpiteUsuario + " ";
    if (palpiteUsuario === numeroAleatorio) {
        ultimoREsultado.textContent = "Parabéns! Você Acertou!";
    }