console.log("hola1");

function nombreCompleto(nombre:string, apellido?:string, capitalizado:boolean = true):string{
    if (apellido){
        if (capitalizado) {
            return capitalizar(nombre) + " " + capitalizar(apellido);
        } else {
             return nombre + " " + apellido;
        }
    }else{
        if (capitalizado) {
            return capitalizar(nombre) ;
        } else {
             return nombre ;
        }
    }
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();

}
console.log(nombreCompleto("miguel","garcia"));
console.log(nombreCompleto("antonio","perez", false));