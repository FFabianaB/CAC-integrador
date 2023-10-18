
// defino los botones
var btnUno = document.getElementById("btnUno");
var btnDos = document.getElementById("btnDos");
var btnTres = document.getElementById("btnTres");


var b1 = false; 
var b2 = false;  
var b3 = false;


btnUno.addEventListener("click", function() {reseteada();b1=true;evaluarEstado();});
btnDos.addEventListener("click", function() {reseteada();b2=true;evaluarEstado();});
btnTres.addEventListener("click", function() {reseteada();b3=true;evaluarEstado();});

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

// ------------------------MenuLabel------------------------

var nn = document.getElementById("seleccionn");

nn.addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value === "1") {
      // Acciones para la opción 'Estudiante'
      reseteada();b1=true;evaluarEstado();
      console.log('Estudiante seleccionado');
    } else if (selectedOption.value === "2") {
      // Acciones para la opción 'Trainee'
      reseteada();b2=true;evaluarEstado();
      console.log('Trainee seleccionado');
    } else if (selectedOption.value === "3") {
      // Acciones para la opción 'Junior'
      reseteada();b3=true;evaluarEstado();
      console.log('Junior seleccionado');
    } else { reseteada();evaluarEstado();}
  });

  var borrar = document.getElementById("borrar");
  borrar.addEventListener("click", function(){reseteada();evaluarEstado();});
  