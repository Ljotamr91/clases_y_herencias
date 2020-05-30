//ejemplo

//////////////////////////////////////////////////////////////////////////////////////////

//Clases
//Despues del ECMAscript 2015 FORMA CORRECTA //explicacion minhor 2.06

//ESTRUCTURA DE UNA CLASE 
//lo vamos a llamar (pero saber que siempre seran prototipos en el fondo)
//**********************************************************************//
//ahora en vez de function empezara por la palabra reservada class y seguira siendo mayuscula por ser clase prototipo

// la buena practica es apartir de 2015 por que podia incluir el metodo dentro del constructor en la misma estructura
class Persona{
    //CONSTRUCTOR
    constructor (nombre, apellidos, edad, nacionalidad = 'Español'){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }    


    //METODOS
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellidos}`);}
        
    };

    //HERENCIA en Clases
    //el padre es Persona el cual tendra los mismos campos incluyendo los que le añadamos con this
    class Desarollador extends Persona {
        //CONSTRUCTOR   le ponemos los mismos campos y añadimos los nuevos que queramos.
        constructor(nombre, apellidos, edad, nacionalidad, lenguaje) {
            //super llamamos al padre y recogemos la informacion del constructor padre
            //super es lo que hereda
            super(nombre, apellidos, edad, nacionalidad);
            //creamos el this solo para los que queramos añadir campos que no tiene por herencia
            this.lenguaje = lenguaje;
        }

    }



    //INSTANCIAS (instanciar personas)
    var diego = new Persona('diego', 'torres', 38);
    var diego = new Persona('diego', 'torres', 38);
    //nos dice la nacionalidad sin ponerlo por que lo coje de la herencia
    var ana = new Desarollador('Ana', 'Torres', 19, undefined, 'Pythom' );

    /////////////////////////////////////////////////////////////////////////////////////////////