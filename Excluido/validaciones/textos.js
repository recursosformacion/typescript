"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = void 0;
const MENSAJES = [
    "Este es el mensaje primero",
    "Este es el mensaje segundo"
];
function obtenerError(numError) {
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
