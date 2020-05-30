//////////////////////////////////////////////////////////////////////////////////////////

//Clases
//Despues del ECMAscript 2015 FORMA CORRECTA 

//ESTRUCTURA DE UNA CLASE 
//lo vamos a llamar (pero saber que siempre seran prototipos en el fondo)
//**********************************************************************//
//ahora en vez de function empezara por la palabra reservada class y seguira siendo mayuscula por ser clase prototipo

// la buena practica es apartir de 2015 por que podia incluir el metodo dentro del constructor en la misma estructura

//*********************************************************
    class Vehiculo{
        //CONSTRUCTOR
        constructor (tipo, plazas, combustible = "Gasolina"){
            this.tipo = tipo;
            this.plazas = plazas;
            this.combustible = combustible;
        }
 
    }

    class Avion extends Vehiculo {
        //CONSTRUCTOR   le ponemos los mismos campos y añadimos los nuevos que queramos.
        constructor(tipo, plazas, combustible, ) {
            //super llamamos al padre y recogemos la informacion del constructor padre
            //super es lo que hereda
            super(tipo, plazas, combustible,);
            //creamos el this solo para los que queramos añadir campos que no tiene por herencia
            this.transporte = transporte;
        }

       //METODOS
       presentar() {
            console.log(`hola soy un ${this.tipo} utilizo combustible ${this.combustible} y tengo ${this.plazas} plazas  `)
       }

       transportar() {
        console.log(`mi salvo conducto es ${this.transporte} y pueden venir  ${this.plazas} personas mientras viajo  `)
   }

    }   

    class Coche extends Vehiculo {
        //CONSTRUCTOR   le ponemos los mismos campos y añadimos los nuevos que queramos.
        constructor(tipo, plazas, combustible, ) {
            //super llamamos al padre y recogemos la informacion del constructor padre
            //super es lo que hereda
            super(tipo, plazas, combustible,);
            //creamos el this solo para los que queramos añadir campos que no tiene por herencia
            this.transporte = transporte;
        }

       //METODOS
       presentar() {
            console.log(`hola soy un ${this.tipo} utilizo combustible ${this.combustible} y tengo ${this.plazas} plazas  `)
       }

       transportar() {
        console.log(`mi salvo conducto es ${this.transporte} y pueden venir  ${this.plazas} personas mientras viajo  `)
   }

    }   

    var tesla = new Vehiculo('Coche', 5, 'Electrico');
    var bmw = new Vehiculo('Coche', 2, undefined , 'Carretera');
    var cohete = new avion ('Aero Nave', 6, 'Hidrogeno', 'Aereo')