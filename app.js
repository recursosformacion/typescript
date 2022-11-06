"use strict";
//Las funciones
function siFunciona() {
    console.log("Esto funciono de pelicula");
}
function siFalla() {
    console.log("Y no funcionooooo");
}
console.log("Antes de definicion");
// creacion del objeto "promesa"
const pro = new Promise((resolve, reject) => {
    //accion a controlar con promesa (acceso remoto, ....)
    setTimeout(() => {
        var numero = Math.round(Math.random() * 1000);
        var par = (numero % 2) == 0; //indicara si termina bien o mal
        if (par) {
            console.log("Funcionalidad terminada. Ya tengo los datos");
            //Si termina bien...
            resolve();
        }
        else {
            //si termina mal...
            reject();
        }
    }, 1500);
});
console.log("Despues de definicion");
//usando la promesa
pro.then(() => siFunciona())
    .catch(() => siFalla());
console.log("acabando el programa ");
