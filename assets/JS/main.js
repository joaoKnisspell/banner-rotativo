// const imagens = ["allMight.png", "deku.png", "bakugo.png"];
// const bannerImg = document.querySelector('.banner__img');

// function trocarFoto(foto){
//     bannerImg.src = "/assets/img/" + imagens[foto];
// }

// let fotoAtual = 0;
// trocarFoto(fotoAtual)

// setInterval(function() {
//     fotoAtual++;
//     if(fotoAtual > 2){
//         fotoAtual = 0;
//     }

//     trocarFoto(fotoAtual)
// }, 4000);




const fotos = ['allMight.png', 'deku.png', 'bakugo.png'];

const bannerImg = document.querySelector('.banner__img');

function trocaFoto(foto){
    bannerImg.src = "/assets/img/" + fotos[foto];
}

let fotoAtual = 0;
trocaFoto(fotoAtual);

setInterval(function() {
    fotoAtual++;

    if(fotoAtual > 2){
        fotoAtual = 0;
    }

    trocaFoto(fotoAtual)

},4000)


    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    const btn3 = document.querySelector('#btn3')

    btn1.addEventListener('click', () => {
        trocaFoto(0);
    })
    btn2.addEventListener('click', () => {
        trocaFoto(1);
    })
    btn3.addEventListener('click', () => {
        trocaFoto(2);
    })
















   