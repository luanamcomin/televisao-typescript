"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
var Televisao = /** @class */ (function () {
    function Televisao() {
        this.canal = 1;
        this.volume = 10;
        this.ligada = false;
    }
    Televisao.prototype.ligar = function () {
        this.ligada = true;
        this.status();
    };
    Televisao.prototype.desligar = function () {
        this.ligada = false;
        this.status();
    };
    Televisao.prototype.mudarCanal = function (canal) {
        if (canal > 0 && canal <= 100) {
            this.canal = canal;
            this.status();
        }
        else {
            console.log("Canal inválido");
        }
    };
    Televisao.prototype.aumentarVolume = function () {
        if (this.volume < 100) {
            this.volume++;
            this.status();
        }
    };
    Televisao.prototype.diminuirVolume = function () {
        if (this.volume > 0) {
            this.volume--;
            this.status();
        }
    };
    Televisao.prototype.status = function () {
        console.log("TV est\u00E1 ".concat(this.ligada ? "ligada" : "desligada", ", Canal: ").concat(this.canal, ", Volume: ").concat(this.volume));
    };
    return Televisao;
}());

exports.Televisao = Televisao;
