var nombresM = [];
var tiposM = [];
var razasM= [];
var edadesM= [];
var cumpleañossM= [];
var gustossM= [];
var horariosPaseoM= [];


var nombresE =[];
var fechasE = [];
var duracionesE = [];
var requisitossE = [];
var descripcionesE = []; 

var botonRegistrarM = document.getElementById("botonRegistrarM");

botonRegistrarM.addEventListener('click', guardarDatosM);

var botonRegistrarE = document.getElementById("botonRegistrarE");

botonRegistrarE.addEventListener('click', guardarDatosE);

    function guardarDatosM(){
    var nombreM = document.getElementById("nombreM").value;
    var tipoM = document.getElementById("tipoM").value;
    var razaM = document.getElementById("razaM").value;
    var edadM = document.getElementById("edadM").value;
    var cumpleañosM = document.getElementById("cumpleañosM").value;
    var gustosM = document.getElementById("gustosM").value;
    var horarioPaseoM = document.getElementById("horarioPaseoM").value;

    nombresM.push(nombreM);
    tiposM.push(tipoM);
    razasM.push(razaM);
    edadesM.push(edadM);
    cumpleañossM.push(cumpleañosM);
    gustossM.push(cumpleañosM);
    horariosPaseoM.push(horarioPaseoM);

    alert("datos guardados");

    console.log(nombreM + " " + tipoM + " " + razaM + " " + edadM + " " + cumpleañosM + " " + gustosM + 
    " " + horarioPaseoM);
}



 function guardarDatosE(){
    var nombreE = document.getElementById("nombreE").value;
    var fechaE = document.getElementById("fechaE").value;
    var duracionE = document.getElementById("duracionE").value;
    var requisitosE = document.getElementById("requisitosE").value;
    var descripcionE = document.getElementById("descripcionE").value;

    nombresE.push(nombreE);
    fechasE.push(fechaE);
    duracionesE.push(duracionE);
    requisitossE.push(requisitosE);
    descripcionesE.push(descripcionE);

    alert("datos guardados");

    console.log(nombreE + " " + fechaE + " " + duracionE + " " + requisitosE + " " + descripcionE);
}

var botonCancelarE = document.getElementById("botonCancelarEvento");

botonCancelarE.addEventListener('click', cancelarEvento);

function cancelarEvento(){
    var nombreE = document.getElementById("nombreE").value;
    var indexOf = nombresE.indexOf(nombreE);
    var eliminar = nombresE.splice(indexOf);
    alert("el evento" + nombreE + "ha sido eliminado");

}

var botonConsultarEvento = document.getElementById("botonConsultarEvento");

botonCancelarE.addEventListener('click', consultarEvento);

function consultarEvento(){

}


