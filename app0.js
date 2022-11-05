"use strict";
let coche1 = {
    marca: "Ford",
    puertas: 4,
    color: "blanco"
};
let coche2 = {
    marca: "Renault",
    puertas: 4,
    color: "negro"
};
let coche3 = {
    marca: "Seat",
    puertas: 4,
    color: "Verde"
};
let flota = [coche1, coche2, coche3];
for (let i in flota) {
    let coche = flota[i];
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log("**********************************************************************");
for (let i = 0; i < flota.length; i++) {
    console;
    let coche = flota[i];
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log("**********************************************************************");
for (let coche of flota) {
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log("**********************************************************************");
flota.forEach(coche => {
    console.log(coche.marca, coche.puertas, coche.color);
});
let variable = "Pruebas";
let numero = variable.length;
console.log(numero);
//# sourceMappingURL=app0.js.map