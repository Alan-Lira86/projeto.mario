

//objetivo 1 -passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");

//objetivo 1 - passo 2 - dar um jeito de identificar quando o usuario clicar no botao.

botaoTrailer.addEventListener("click", () => {
    //objetivo 1 - passo 4 - abrir a modal na tela
    modal.classList.add("aberto")
    video.setAttribute("src",linkDoVideo);

});

//objetivo 1 - passo 3 - dar um jeito de pegar o elemento modal no js
const modal = document.querySelector(".modal");


// Objetivo 2  - Passo 1- dar um jeito de pegar o elemento de fechar modal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

// Objetivo 2  - Passo 2- dar um jeito de identificar quando o usuario clicar no x
botaoFecharModal.addEventListener("click", () => {
//Objetivo 2 - passo 3 - fechar a modal.
modal.classList.remove("aberto");
video.setAttribute("src", "");

});

const video = document.getElementById("video");

const linkDoVideo = video.src;

