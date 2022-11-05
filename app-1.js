"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
(function () {
    console.log("inicio");
    var prome = new es6_promise_1.Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Fin del ejercicio");
        }, 1000);
    });
    prome
        .then(function (mesj) { return console.log(mesj); })["catch"](function (mesj) { return console.log(mesj); });
});
