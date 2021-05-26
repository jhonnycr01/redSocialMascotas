const dataBase = firebase.firestore();

class Dueño{
    constructor(nombreD , fechaD, telefonoD){
        this.nombreD = nombreD;
        this.fechaD = fechaD;
        this.telefonoD = telefonoD;
    }

    getDatos(){
        return("nombre y apellidos: " + this.nombreD + "fecha nacimiento " + this.fechaD +
        " telefono " + this.telefonoD);
    }
    getNombre(){
        return(this.nombreD);
    }
    getFecha(){
        return(this.fechaD);
    }
    getTelefono(){
        return(this.telefonoD);
    }

     async guardarDueño(){
        await dataBase.collection('duenos').doc().set({ 
            nombreD : this.nombreD,
            fechaD : this.fechaD,
            telefonoD : this.telefonoD
        });
    } 
}

class UI{
    añadirDueño(){
    var nombreD = document.getElementById("nombreD").value;
    var fechaD = document.getElementById("fechaD").value;
    var telefonoD = document.getElementById("telefonoD").value;

    if(this.valUsuario(nombreD)){
        alert("dueño ya existe");
    }else{
        const dueño = new Dueño(nombreD, fechaD, telefonoD);     
            dueño.guardarDueño();
    }
    }

async valUsuario(nombreD){
    const querySnapshot = await dbApp.collection('duenos').get();
    var existe = false;
    querySnapshot.forEach(doc => {
        if (nombreD == doc.data().name){
            existe = true;
        } 
    });
    return (existe);
}
async cargarDueños(){
    const querySnapshot = await dbApp.collection('duenos').get();
    const studentContainer = document.getElementById('student-list');
    querySnapshot.forEach(doc => {  
        console.log(doc.data().name);
        studentContainer.innerHTML += "<div> " + doc.data().name +
                                      "</div>"; 
    });
}
}

uiApp = new UI();
window.addEventListener('DOMContentLoaded', function (e){
    uiApp.cargarDueños();
})
const studentForm = document.getElementById('formularioDueños');

studentForm.addEventListener('submit', function(e){
    e.preventDefault();    
    uiApp.añadirDueño();        
})

var botonD = document.getElementById("botonRegistrarD");

botonD.addEventListener('click', añadirDueño);

var botonContinuar = document.getElementById("botonContinuar");

botonContinuar.addEventListener('submit' ,condicion);

function condicion(){
        location.href="inicio.html"
}

var botonInvitados = document.getElementById("botonInvitado");

botonInvitados.addEventListener('click', continuar);

function continuar(){
    location.href = "inicio.html";
}
