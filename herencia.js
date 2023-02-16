//herencia
//clase padre
const persona = class{
    constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    }
    hablar() {
        console.log("hola");
};
}

//clase hija
class usuario extends persona{
    //constructor de la clase hija contiene los atributos
    // del padre y los propios de la hija
    constructor(nombre,apellido,edad,id,numero){
        //atributos de la clase padre
    super(nombre,apellido,edad);
    //atributos de la clase hija
    this.id=id;
    this.numero = numero;
    }
    //funcion de la clase hija
    presentar(){
        console.log(`hola mi nombre es ${this.nombre} tengo ${this.edad} y mi numero telefonico es ${this.numero}`);
    }
}

let usuario1= new usuario("carlos","farit",19,10093945,3227723454)