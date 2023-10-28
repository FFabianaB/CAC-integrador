
let btnUno = document.getElementById("btnUno");
let btnDos = document.getElementById("btnDos");
let btnTres = document.getElementById("btnTres");

let b1 = false; 
let b2 = false;  
let b3 = false;
let ofertaElegida= "0" ;

const seleccionar = () => {reseteada();b1=true;evaluarEstado();};
const seleccionar2 = () => {reseteada();b2=true;evaluarEstado();};
const seleccionar3 = () => {reseteada();b3=true;evaluarEstado();};

function quitarBg(boton) {
    boton.style.backgroundColor= "#96c93e00";
    boton.style.border= "3px solid #3401cb";
   
    
    if (boton === btnUno) {
        b1 = false;
    } else if (boton === btnDos) {
        b2 = false;
    } else if (boton === btnTres) {
        b3 = false;
    }
}

function reseteada(){
    console.log("Se ejecuto reseteada");
    b1 = false; 
    b2 = false;  
    b3 = false;
};

function evaluarEstado(){
    console.log("se ejecuto evaluar estado");

    if(b1 == true){
        btnUno.style.backgroundColor= "#ffcb2f";
        btnUno.style.border= "10px solid #ffcb2f";
        
        
        quitarBg(btnDos);
        quitarBg(btnTres);
        console.log("aprete uno");

        
    }else {
        console.log("no aprete 1")
   };
    
    if(b2 == true){
        btnDos.style.backgroundColor= "#ffcb2f";
        btnDos.style.border= "10px solid #ffcb2f";
       
        
        quitarBg(btnUno);
        quitarBg(btnTres);
        console.log("aprete dos");
        
    }else {
        console.log("no aprete 2")
   };
    
    if(b3 == true){
        btnTres.style.backgroundColor= "#ffcb2f";
        btnTres.style.border= "10px solid #ffcb2f";

        quitarBg(btnUno);
        quitarBg(btnDos);
        console.log("aprete tres");
        
    } else {
         console.log("no aprete  3")
    };
    if (b1 == false && b2 == false && b3 == false){
        quitarBg(btnUno);
        quitarBg(btnDos);
        quitarBg(btnTres);
    }
};




let btnborrar = document.getElementById("bdel");
btnborrar.addEventListener("click", function(){reseteada();evaluarEstado();console.log("Aprete el boton borrar")});
// ------------------------MenuLabel------------------------

var mnuDesplegable = document.getElementById("menuDesplegable");

mnuDesplegable.addEventListener('change', function(){
    ofertaElegida=  this.options[this.selectedIndex];
    evaluarofertaElegida(ofertaElegida)
    return ofertaElegida.value
}, );



function evaluarofertaElegida(){
    
    if (ofertaElegida.value == "1") {
        // Acciones para la opción 'Estudiante'
        reseteada();b1=true;evaluarEstado();
        console.log('Estudiante seleccionado');
      } else if (ofertaElegida.value === "2") {
        // Acciones para la opción 'Trainee'
        reseteada();b2=true;evaluarEstado();
        console.log('Trainee seleccionado');
      } else if (ofertaElegida.value === "3") {
        // Acciones para la opción 'Junior'
        reseteada();b3=true;evaluarEstado();
        console.log('Junior seleccionado');
      } else { reseteada();evaluarEstado();}
      console.log('Se ejecuto evaluar valor elegido')
     
   
}

const btnResumen = document.getElementById("btnResumen");
const escribirCantidadTickets = document.getElementById("escribirCantidadTickets");

btnResumen.addEventListener("click", function() {
  let inputTickets = Number(document.getElementById("inputTickets").value);
  console.log(inputTickets);
  aplicarDescuento(ofertaElegida, inputTickets);
  console.log("apretaste calcular valor");
});



function aplicarDescuento(ofertaElegida,inputTickets) {
    
    if (ofertaElegida.value == "1") {
        // Acciones para la opción 'Estudiante'
        resultado=inputTickets *40;
        escribirCantidadTickets.innerText=resultado;
      } else if (ofertaElegida.value === "2") {
        // Acciones para la opción 'Trainee'
        resultado=inputTickets *100;
        escribirCantidadTickets.innerText=resultado;
      } else if (ofertaElegida.value === "3") {
        // Acciones para la opción 'Junior'
        resultado=inputTickets*170;
        escribirCantidadTickets.innerText=resultado;
      } else { resultado=inputTickets*200;
        escribirCantidadTickets.innerText=resultado;}
      
};

