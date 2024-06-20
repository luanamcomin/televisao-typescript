export class Televisao {
    private canal: number;
    private volume: number;
    private ligada: boolean;

    constructor() {
        this.canal = 1;
        this.volume = 10;
        this.ligada = false;
    }

    ligar(): void {
        this.ligada = true;
        this.status();
    }

    desligar(): void {
        this.ligada = false;
        this.status();
    }

    mudarCanal(canal: number): void {
        if (canal > 0 && canal <= 100) {
            this.canal = canal;
            this.status();
        } else {
            console.log("Canal inválido");
        }
    }

    aumentarVolume(): void {
        if (this.volume < 100) {
            this.volume++;
            this.status();
        }
    }

    diminuirVolume(): void {
        if (this.volume > 0) {
            this.volume--;
            this.status();
        }
    }

    status(): void {
        console.log(`TV está ${this.ligada ? "ligada" : "desligada"}, Canal: ${this.canal}, Volume: ${this.volume}`);
    }
}

