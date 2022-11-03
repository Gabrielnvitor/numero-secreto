function verificaChuteComValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Número inválido</div>`
        return
    }

    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Número inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2>Você acertou</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        return
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-circle-chevron-down"></i></div>'
    } else{
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-circle-chevron-up"></i></div>'
    }
    
    function chuteInvalido() {
        return Number.isNaN(numero);
    }

    function numeroMaiorOuMenorQuePermitido(numero){
        return numero > maiorValor || numero < menorValor
    }

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})