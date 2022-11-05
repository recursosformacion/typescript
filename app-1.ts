import {Promise} from 'es6-promise';
( () => {

    console.log("inicio");
 
    const prome =  new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Fin del ejercicio");
        },1000);
    });
      
    prome
        .then(mesj => console.log(mesj))
        .catch(mesj => console.log(mesj));
})