

let fondos = 1000;
const retirar = (importe:number): Promise<number|string> =>{

    return new Promise<number|string>( (resolve, reject) => {
    if (importe > fondos) {
        reject('Saldo insuficiente');
    } else {
        fondos -=importe;
        resolve (fondos);
    }
    })

}

retirar(300)
.then(saldo => console.log("Retirados 300, quedan " + saldo))
.catch(err=> console.error("Error " + err));

retirar(400)
.then(saldo => console.log("Retirados 400, quedan " + saldo))
.catch(err=> console.error("Error " + err));

retirar(500)
.then(saldo => console.log("Retirados 500, quedan " + saldo))
.catch(err=> console.error("Error " + err));