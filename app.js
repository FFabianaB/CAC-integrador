
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
   
    b1 = false; 
    b2 = false;  
    b3 = false;
};

function evaluarEstado(){
    

    if(b1 == true){
        btnUno.style.backgroundColor= "#ffcb2f";
        btnUno.style.border= "10px solid #ffcb2f";
        quitarBg(btnDos);
        quitarBg(btnTres);
       
    }else if(b2 == true){
        btnDos.style.backgroundColor= "#ffcb2f";
        btnDos.style.border= "10px solid #ffcb2f";
         quitarBg(btnUno);
        quitarBg(btnTres);
     }else if(b3 == true){
        btnTres.style.backgroundColor= "#ffcb2f";
        btnTres.style.border= "10px solid #ffcb2f";
        quitarBg(btnUno);
        quitarBg(btnDos);
     
    } else if (b1 == false && b2 == false && b3 == false){
        quitarBg(btnUno);
        quitarBg(btnDos);
        quitarBg(btnTres);
    }
};

let btnborrar = document.getElementById("bdel");
btnborrar.addEventListener("click", function(){reseteada();evaluarEstado();escribirCantidadTickets.innerText="";});


var mnuDesplegable = document.getElementById("menuDesplegable");

mnuDesplegable.addEventListener('change', function(){
    ofertaElegida=  this.options[this.selectedIndex];
    evaluarofertaElegida(ofertaElegida)
    return ofertaElegida.value
}, );

function evaluarofertaElegida(){
    
    if (ofertaElegida.value == "1") {
      
        reseteada();b1=true;evaluarEstado();
       
      } else if (ofertaElegida.value === "2") {
    
        reseteada();b2=true;evaluarEstado();
      
      } else if (ofertaElegida.value === "3") {
      
        reseteada();b3=true;evaluarEstado();
      
      } else { reseteada();evaluarEstado();}
    
}

const btnResumen = document.getElementById("btnResumen");
const escribirCantidadTickets = document.getElementById("escribirCantidadTickets");

btnResumen.addEventListener("click", function() {
  let inputTickets = Number(document.getElementById("inputTickets").value);
  console.log(inputTickets);
  aplicarDescuento(ofertaElegida, inputTickets);
  
});

function aplicarDescuento(ofertaElegida,inputTickets) {
    
    if (ofertaElegida.value == "1") {
    
        resultado=(inputTickets*200)-((inputTickets*200)*80/100);
        escribirCantidadTickets.innerText=resultado;
      } else if (ofertaElegida.value === "2") {
      
        resultado=(inputTickets*200)-((inputTickets *200)*50/100);
        escribirCantidadTickets.innerText=resultado;
      } else if (ofertaElegida.value === "3") {
       
        resultado=(inputTickets*200)-((inputTickets*200)*15/100);
        escribirCantidadTickets.innerText=resultado;
      } else if(isNaN(inputTickets)) {
          escribirCantidadTickets.innerText="Por favor, ingresa valores numéricos";
      }       else { 
        resultado=inputTickets*200;
        escribirCantidadTickets.innerText=resultado;}
       
      
};

