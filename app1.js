"use strict";
console.log("hola1");
function nombreCompleto(nombre, apellido, capitalizado = true) {
    if (apellido) {
        if (capitalizado) {
            return capitalizar(nombre) + " " + capitalizar(apellido);
        }
        else {
            return nombre + " " + apellido;
        }
    }
    else {
        if (capitalizado) {
            return capitalizar(nombre);
        }
        else {
            return nombre;
        }
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
console.log(nombreCompleto("miguel", "garcia"));
console.log(nombreCompleto("antonio", "perez", false));
//# sourceMappingURL=app1.js.map