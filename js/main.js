function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

let firstHeading = document.querySelector('h1');


console.log(firstHeading);

// const btnReadMore = document.getElementById('btnReadMore');


// btnReadMore.append(img2);


const RMpSectionB = document.getElementById('RMpSectionB');
const btnReadMore = document.querySelector('#btnReadMore');
const img2 = document.createElement('img');
const imgText = document.getElementById('textOnClick');

img2.setAttribute('src', 'https://www.dsbnoticias.com/wp-content/uploads/2022/09/NASA-ASTEROIDE-1024x683.png');
img2.setAttribute('class', 'img');

// Agregando imagen y texto despues de Onclick en el boton readme
function bntReadmoreOnClick(){
RMpSectionB.append(img2);
imgText.innerText = "Armageddon es una película de ciencia ficción y cine catástrofe de 1998, dirigida por Michael Bay, producida por Jerry Bruckheimer y protagonizada por Bruce Willis, Billy Bob Thornton, Ben Affleck, Liv Tyler, Owen Wilson, Will Patton, Michael Clarke Duncan, Peter Stormare y Steve Buscemi. La película trata sobre un grupo de perforadores de plataformas petrolíferas que son enviados por la NASA a un enorme asteroide que amenaza el planeta Tierra con la idea de taladrar su superficie y poder destruirlo con una bomba nuclear."
}

//Codigo Jeferson.
const RMpSectionA = document.getElementById('RMpSectionA');
const btnclickestrella = document.querySelector('#btnclickestrella');
const text = document.createTextNode('Una estrella es un esferoide luminoso que mantiene su forma debido a su propia gravedad. La estrella más cercana a la Tierra es el Sol. Otras estrellas son visibles a simple vista desde la Tierra durante la noche, apareciendo como una diversidad de puntos luminosos aparentemente fijos en el cielo debido a su inmensa distancia de la misma.');
const text2 = document.createTextNode(' Durante al menos una parte de su vida, una estrella brilla debido a la fusión termonuclear del hidrógeno en helio en su núcleo, que libera energía, la cual atraviesa el interior de la estrella y, después, se irradia hacia el espacio exterior. Casi todos los elementos naturales más pesados que el helio se crean por nucleosíntesis estelar durante la vida de una estrella y, en algunas de ellas, por nucleosíntesis de supernova cuando explotan.');

function bntclickestrellaOnClick(){
  RMpSectionC.append(img3);
  RMpSectionC.append(text);  
  RMpSectionC.append(text2);
  


  //  console.log(pid);
  //  pid.append(img4);
}

const RMpSectionC = document.getElementById('RMpSectionC');
const btnfotoestrella = document.querySelector('#btnfotoestrella');
const img3 = document.createElement('img');


img3.setAttribute('src', 'https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release_0.png');
img3.setAttribute('class', 'img');

