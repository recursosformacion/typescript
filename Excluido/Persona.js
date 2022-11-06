"use strict";
class Persona {
    constructor(nombre, rol, edad) {
        this.nombre = nombre;
        this.rol = rol;
        this.edad = edad;
    }
    toString() {
        return `Datos de la persona: ${this.nombre}, ROL=${this.rol}, EDAD=${this.edad}`;
    }
}
class Usuario extends Persona {
    constructor(idUsuario, nombre, rol, edad) {
        super(nombre, rol, edad);
        this.idUsuario = idUsuario;
    }
    toString() {
        return super.toString() + "id:" + this.idUsuario;
    }
    crearUsuario() {
        //metodo para crear usuario
    }
}
let u1;
u1 = new Persona("Antonio", "Direccion", 40);
console.log(u1.toString());
