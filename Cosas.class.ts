"use strict";
function imprimirConsola(construccion : Function) {
    console.log(construccion);
}

@imprimirConsola
export class Cosas{
    constructor(
        private nombre:string,
        private distancia:number
    ){}
    
}