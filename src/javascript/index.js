
/*
OBJETIVO 1 - Quando o usuário clicar no botão de ver o trailer, devemos abrir a modal com o vídeo do trailer
passo 1 - dar um jeito de pegar o elemento que representa o botão na tela, usando o JS
passo2 - identificar quando que o usuário clicou
passo 3 - dar um jeito de pegar o elemento da modal no JS
passo 4 - abrir a modal na tela

OBJETIVO 2 - Quando o usuário clicar no X, devemos fechar a modal com o vídeo do trailer.
passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o JS
passo 2 - dar um jeito de identificar quando o usuário clicar no X
passo 3 - fechar a modal

Obs: Deixei os comentários para fins de estudo
*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});

