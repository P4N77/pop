
//abstraccion
const persona = class{
    //metodo constructor de la clase
    constructor(nombre, apellido, edad){
        //atributos de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    }
    //funciones de la clase
    hablar() {
        console.log("hola");
};
}

//llenar una clase
let persona1= new persona("juan","ramirez","edad")
