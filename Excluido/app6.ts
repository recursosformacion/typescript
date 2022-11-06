class ParametrosOp {
    public static quien(nombre? : string): string {
        if (nombre) {
        return `saludos, ${nombre}`;
        }

        return 'Saludos, don misterio';
    }
}

console.log(ParametrosOp.quien());
console.log(ParametrosOp.quien('Miguel'));
