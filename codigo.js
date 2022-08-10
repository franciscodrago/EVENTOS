//EVENTOS DOM
class listado {
  constructor(nombre,precio,imagen){
  this.nombre= nombre;
  this.precio= precio;
  this.imagen= imagen;
  }
}


const carrito= [];

const ropa = [
  {
    
    nombre:"Remera",
    precio:5000,
    imagen:"./assets/remera1.jpg",
    
},

{
  
  nombre:"Buzo",
  precio:8000,
  imagen:"./assets/buzo3.jpg",
  
},

{
nombre:"Pantalon",
precio:8500,
imagen:"./assets/pantalon.jpg",
},
{
  nombre:"Campera",
  precio:7500,
  imagen:"../assets/campera.jpg",
},
]

let cards=document.getElementById("tarjetas");
for(const imagen of ropa){
    let card=document.createElement("div");
    card.className="text-align-center";
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src= ${imagen.imagen} class="card-img-top" alt="...">
            <h5 class="card-title">${imagen.nombre}</h5>
            <p class="card-text">${imagen.precio}</p>
            <a href="#" id = "miBoton" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cards.append(card);
}

let boton = document.getElementsByClassName("btn")

let miBoton=document.getElementById("miBoton");

// miBoton.addEventListener("click",interactuar);
// function interactuar(){
//   alert("Agregaste la remera al carrito")
// }

miBoton.onclick = () => {
  console.log("Agregaste la remera al carrito");
  carrito.push(remera);
  console.table(carrito);
}
miBoton.onclick = () => {
  console.log("Agregaste la remera al carrito");
  carrito.push(buzo);
  console.table(carrito);
}

miBoton.onmouseover = () => {
console.log("¿Quieres comprar la remera?")
miBoton.className="btn btn-danger";

}

miBoton.onmouseout= () => {
  miBoton.className="btn btn-primary";
}

// TECLADO

let campoNombre=document.getElementById("nombre");
let campoEdad=document.getElementById("edad");
campoEdad.onkeydown=()=>{console.log("presione esta tecla");}
campoEdad.onkeyup=()=>{console.log("soltaste una tecla");}
campoEdad.onchange=()=>{
  console.log("cambio el contenido del campo edad");
  console.log("contenido actualizado: "+campoEdad.value);
}
campoNombre.oninput=()=>{
  if(isNaN(campoNombre.value)) {
    campoNombre.style.color="black";
  }else{
    campoNombre.style.color="red";
  }
}

//EVENTO SUBMIT

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario (ev) {
     if((campoNombre.value=="")||(! isNaN(campoNombre.value))||(campoEdad.value < 1)){
      ev.preventDefault();
      alert("Ingrese nombre valido o edad mayor a 1")
     }
}

