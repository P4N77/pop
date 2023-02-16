
//encapsulamiento
const usuarioDeBanco = class{
    //se encapsula la variable cuentaBancaria cambiando su estado 
    //a privado
    #cuentaBancaria;
    //metodo constructor de la clase
    constructor(nombre, apellido, edad,cuentaBancaria){
        //atributos de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.setCuentaBancaria(cuentaBancaria)
    }

    //funsion Set para poder acceder a la variable protegida
    setCuentaBancaria(cuentaBancaria){
        this.#cuentaBancaria=cuentaBancaria
    }

    //funcion Get para poder ver la variable protegida
    getCuentaBancaria(){
        return this.#cuentaBancaria
    }

    //funciones de la clase
    hablar() {
        console.log("hola");
}
}

//llenar una clase
let persona1= new usuarioDeBanco("jose","cardenas",23,100029938485)
//poder ver el contenido de la variable protegida
console.log(persona1.getCuentaBancaria())
