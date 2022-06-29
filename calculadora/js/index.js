window.addEventListener('load' , ()=>{

 const display = document.querySelector('.calculadora-displey');
 const keypaButtons =document.getElementsByClassName ('contenido-boton ');

 const keypadKuttonsArray = Array.from(keypaButtons);

 keypadKuttonsArray.forEach((button) => {
  button.addEventListener('click', ()=>{
   calculadora(button, display);
  })
 });

});

function calculadora(button, display){
 switch (button.innerHTML){
  case 'C':
   borrar(display);
   break;

   case '=':
    calcular(display);
    break;

    default:
    actualizar(display, button);
    break;
 }
}

function calcular(display){
display.innerHTML =  eval(display.innerHTML);
}

function actualizar (display, button){
 if (display.innerHTML == 0) {
  display.innerHTML = '';
 }
 display.innerHTML += button.innerHTML;
}

function borrar(display){
 display.innerHTML = 0;
}