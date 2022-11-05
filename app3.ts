
abstract class Figura {
    private _ancho:number =0;
    private _alto:number =0;

    static numeroFigura:number = 0;

    static numero():number{
        return this.numeroFigura;

    }

    constructor(ancho?:number,alto?:number){
        if (ancho){
            this._ancho=ancho;
        }
        if (alto)
            this._alto=alto;
    }
    get ancho():number{
        return this._ancho;
    }
    get alto():number{
        return this._alto;
    }
    set ancho(ancho:number){
        this._ancho=ancho;
    }
    set alto(alto:number){
        this._alto=alto;
    }
    abstract area();

}

// Figura.numeroFigura=100;
// console.log(Figura.numero());

// let fig = new Figura()
// fig.ancho = 10;
// fig.alto=30;
// console.log(fig.ancho + "x" + fig.alto);
