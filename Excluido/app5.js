"use strict";
var Aplicacion;
(function (Aplicacion) {
    class Apocalipsis {
        constructor(nombre) {
            this.nombre = nombre;
        }
        static getInstance() {
            if (!Apocalipsis.instancia)
                Apocalipsis.instancia = new Apocalipsis("Una");
            return Apocalipsis.instancia;
        }
    }
    Aplicacion.Apocalipsis = Apocalipsis;
})(Aplicacion || (Aplicacion = {}));
let apc = Aplicacion.Apocalipsis.getInstance();
console.log(apc.nombre);
