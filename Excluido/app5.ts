namespace Aplicacion {
   export  class Apocalipsis {
        static instancia: Apocalipsis;

        private constructor(public nombre: string) {

        }

        static getInstance() {
            if (!Apocalipsis.instancia)
                Apocalipsis.instancia = new Apocalipsis("Una");
            return Apocalipsis.instancia;
        }
    }
}

let apc: Aplicacion.Apocalipsis = Aplicacion.Apocalipsis.getInstance();
console.log(apc.nombre);