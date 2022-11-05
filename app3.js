"use strict";
class Figura {
    constructor(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto)
            this._alto = alto;
    }
    static numero() {
        return this.numeroFigura;
    }
    get ancho() {
        return this._ancho;
    }
    get alto() {
        return this._alto;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }
    set alto(alto) {
        this._alto = alto;
    }
}
Figura.numeroFigura = 0;
// Figura.numeroFigura=100;
// console.log(Figura.numero());
// let fig = new Figura()
// fig.ancho = 10;
// fig.alto=30;
// console.log(fig.ancho + "x" + fig.alto);
//# sourceMappingURL=app3.js.map