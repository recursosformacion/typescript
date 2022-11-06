


    console.log("inicio");
 
    const prome =   new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fin del ejercicio");
        }, 1000);
    });
      
    prome
        .then(mesj => console.log(mesj))
        .catch(mesj => console.warn(mesj));
    console.log("Fin");