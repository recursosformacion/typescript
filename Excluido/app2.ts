
type Paises = { 
    capital:string, 
    idioma:string, 
    CEE:boolean, 
    getCapital:()=>string
 };

let dpPortugal:Paises = {
    capital:"Portugal",
    idioma:"PT",
    CEE:true,
    getCapital(){
        return this.capital;
    }
}

let varios:string|number|boolean;

varios="Esto es string";
console.log(typeof varios );
varios=22;
console.log(typeof varios );
varios=true;
console.log(typeof varios );

let listaCoches = {
    c1:"Ford",
    c2:"Renault",
    c3:"Seat"
}
// let {c1,c2,c3} = listaCoches;
// console.log(c3);

// let {c1,c2:familiar,c3} = listaCoches;
// console.log(familiar);

// let {c1,c2:familiar,c3, c4="Citroen"} = listaCoches;
// console.log(c4);

let frutas:string[] = ["melon","sandia","aguacate","platano"];
let [fg,fr,fa,pl] = frutas;

console.log(fr);

let [,sfr,,spl] = frutas;
console.log(sfr);
