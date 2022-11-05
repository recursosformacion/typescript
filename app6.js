"use strict";
class ParametrosOp {
    static quien(nombre) {
        if (nombre) {
            return `saludos, ${nombre}`;
        }
        return 'Saludos, don misterio';
    }
}
console.log(ParametrosOp.quien());
console.log(ParametrosOp.quien('Miguel'));
//# sourceMappingURL=app6.js.map