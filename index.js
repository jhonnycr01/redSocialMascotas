
var nombresD = [];
var fechasD = [];
var telefonosD = [];

var botonD = document.getElementById("botonRegistrarD");

botonD.addEventListener('click', guardarDatosD);

var botonContinuar = document.getElementById("botonContinuar");

botonContinuar.addEventListener('click' , condiciones);


function guardarDatosD(){
    var nombreD = document.getElementById("nombreD").value;
    var fechaD = document.getElementById("fechaD").value;
    var telefonoD = document.getElementById("telefonoD").value;

    nombresD.push(nombreD);
    fechasD.push(fechaD);
    telefonosD.push(telefonoD);

    alert("datos guardados");
    
    console.log(nombreD + " " + fechaD + " " + telefonoD);
}

function condiciones(){
    var nombreD = document.getElementById("nombreD").value;
    var fechaD = document.getElementById("fechaD").value;
    var telefonoD = document.getElementById("telefonoD").value;
    if(nombresD.indexOf(nombreD)===-1){
        alert("los datos no han sido ingresados");
        return;
    }

        location.href ="inicio.html";
    
}

var botonInvitados = document.getElementById("botonInvitado");

botonInvitados.addEventListener('click', continuar);

function continuar(){
    location.href = "inicio.html";
}
