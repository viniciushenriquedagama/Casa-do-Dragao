/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

const botaoCarrossel = document.querySelectorAll(".botao");

botaoCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const imagem = document.querySelectorAll(".imagem");

    const imagemAtiva = document.querySelector(".ativa");

    imagemAtiva.classList.remove("ativa");

    imagem[indice].classList.add("ativa");

    const informacoes = document.querySelectorAll(".informacoes");

    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");

    informacoes[indice].classList.add("ativa");
    
    
  })
})
