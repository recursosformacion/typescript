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
    public get ancho():number{
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
    abstract area(): number;

}
class Rectangulo extends Figura {
    area(): number {
        return this.ancho * this.alto;
    }

    constructor(ancho: number, alto: number){
        super(ancho,alto);
    }
    
    dibujar() {
        let dibujo: string = '';
        for(let a=0;a<=this.alto;a++){
            for(let b=0;b<=this.ancho;b++){
                dibujo = dibujo + ' *';
            }
            dibujo=dibujo + "\n";
        }
    console.log(dibujo);
    }
}

class Triangulo extends Figura {
    area(): number {
        return this.ancho * this.alto / 2;
    }

    constructor(ancho: number, alto: number){
        super(ancho,alto);
    }
}

class Circulo extends Figura {
    area(): number {
        return Math.PI* Math.pow(this.ancho/2,2) ;
    }

    constructor(radio: number){
        super(radio * 2, radio * 2);
    }
}

let lista:Rectangulo[] | Triangulo[] | Circulo[] = [];

lista.push(new Rectangulo(10,5));
lista.push(new Triangulo(10,5));
lista.push(new Circulo(10,5));
lista.push(new Triangulo(10,5));
lista.push(new Circulo(10,5));
lista.push(new Rectangulo(20,5));
lista.push(new Rectangulo(5,5));

let fig = lista[0];
console.log(fig);
 for(let fig of lista){
    console.log(fig.area());
    if (fig.dibujar){
        let figCua: Rectangulo  = <Rectangulo>fig;
        figCua.dibujar();
    }
 }
