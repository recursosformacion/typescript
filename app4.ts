 abstract class Pruebas{
   
     abstract crear():void;
}

class PruebaUtil extends Pruebas {

    crear():void{
        console.log("creado");
    }
}