class Persona {
    private nombre:string;
    private rol:string;
    private edad:number;

    constructor(nombre:string,rol:string,edad:number){
        this.nombre = nombre;
        this.rol = rol;
        this.edad = edad;
    }
    toString():string{
        return `Datos de la persona: ${this.nombre}, ROL=${this.rol}, EDAD=${this.edad}`;
    }
}

class Usuario extends Persona {
    private idUsuario:number;

    constructor(idUsuario:number, nombre:string,rol:string,edad:number){
        super(nombre,rol,edad);
        this.idUsuario=idUsuario;
    }

    toString():string{
        return super.toString() + "id:" + this.idUsuario;
    }

    crearUsuario(){
        //metodo para crear usuario
    }

}



let u1:Persona;
u1=new Persona("Antonio","Direccion",40);
console.log(u1.toString());
