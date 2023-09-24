
interface Coche {
    modelo:string,
    marchas:number,
    color?:string
}

const uno : Coche = {
    modelo:'Audi',
    marchas:6
}

const corre = (coche:Coche) => {
    console.log("Inicio " + coche.modelo);
}

corre(uno);