let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //narrador de texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial()
{
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute)
    {
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você Descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Parabéns !!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p','O numero secreto é menor');
        }
        else {
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++;
        limparCampo();

    }

}

function gerarNumeroAleatorio() 
{
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista== numeroLimite)
    {
        listaDeNumerosSorteados = [];

    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}