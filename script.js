//Declarando variable del audio y su source

const audio = new Audio();
audio.src = "./audio/sonidomate.mp3";

//ANIMACION PARA EL MATE AL HACER CLICK, AUNQUE NO SE POR QUE SE ANIMA EL MATE AL RECARGAR/ENTRAR A LA PAG

const animateMate = function(e) {

    e.preventDefault;

    //resetear animacion
    e.target.classList.remove('mateAnim');
    e.target.classList.add('mateAnim');
    setTimeout(function(){
      e.target.classList.remove('mateAnim');
    },700);
};
  
let animateMateMate = document.getElementsByClassName("mateAnim");

for (let i = 0; i < animateMateMate.length; i++) {
    animateMateMate[i].addEventListener('click', animateMate, false);
  }
  


//Contador de clicks :O

let clickCounter = 0;
function fun(){
     document.getElementById('counts').innerHTML = ++clickCounter;
     clickCounter = clickCounter;
}