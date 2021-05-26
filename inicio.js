const dataBase = firebase.firestore();

class Mascota{
    constructor(nombresM, tiposM, razasM, edadesM, cumpleañossM, gustossM, horariosPaseoM){
    
              this.nombresM = nombresM;
              this.tiposM = tiposM;
              this.razasM = razasM; 
              this.edadesM = edadesM;
              this.cumpleañossM = cumpleañossM;
              this. gustossM = gustossM;
              this.horariosPaseoM = horariosPaseoM;
    }
    getDatos(){
        return("Nombre: " + this.nombresM + " \nTipo: " + this.tiposM + "raza" + this.razasM +
        " \nEdad: " + this.edadesM + " \nCumpleaños: " + this.cumpleañossM + " \nGustos: " + this.gustossM + 
        " \nHorarios: " + this.horariosPaseoM);
        }
        getNombresM(){
          return (this.nombresM);
        }
        
        getTiposM(){
          return (this.tiposM);
        }
        
        getRazasM(){
          return (this.razasM);
        }
        getNEdadesM(){
          return (this.edadesM);
        }
        getCumpleañossM(){
          return (this.cumpleañossM);
        }
        getGustossM(){
          return (this.gustossM);
        }
        getHorariosPaseoM(){
          return (this.horariosPaseoM);
        }
        
    }

    class Evento{
        constructor(nombresE, fechasE, duracionesE, requisitossE, descripcionesE){
        
                  this.nombresE = nombresE;
                  this.fechasE = fechasE;
                  this.duracionesE= duracionesE; 
                  this.requisitossE= requisitossE;
                  this.descripcionesE = descripcionesE;
        }
        getDatos(){
        return("Nombre: " + this.nombresE + " \nFecha: " + this.fechasE + 
        " \nDuración: " + this.duracionesE + " \nRequisitos: " + this.requisitossE+ " \nDescripción: " + this.descripcionesE);
        }
        getNombresM(){
          return (this.nombresE);
        }
        
        getFechasE(){
          return (this.fechasE);
        }
        
        getDuracionesE(){
          return (this.duracionesE);
        }
        getRequisitosE(){
          return (this.requisitossE);
        }
        getDescripcionesE(){
          return (this.descripcionesE);
        }
       
        }








var botonRegistrarM = document.getElementById("botonRegistrarM");

botonRegistrarM.addEventListener('click', guardarDatosM);

var botonRegistrarE = document.getElementById("botonRegistrarE");

botonRegistrarE.addEventListener('click', guardarDatosE);

var botonConsultarEvento = document.getElementById("botonConsultarEvento");

botonCancelarE.addEventListener('click', consultarEvento);

function consultarEvento(){

}


