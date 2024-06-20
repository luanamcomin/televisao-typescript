import * as promptSync from 'prompt-sync';
const prompt = promptSync();
import { Televisao } from './televisao';

class ControleRemoto {
    private televisao: Televisao;

    constructor(televisao: Televisao) {
        this.televisao = televisao;
    }

    iniciar(): void {
        let opcao: string;
        do {
            console.log("\n1. Ligar TV");
            console.log("2. Desligar TV");
            console.log("3. Mudar canal");
            console.log("4. Aumentar volume");
            console.log("5. Diminuir volume");
            console.log("6. Status da TV");
            console.log("7. Sair\n");

            opcao = prompt("Escolha uma opção: ");

            switch (opcao) {
                case "1":
                    this.televisao.ligar();
                    break;
                case "2":
                    this.televisao.desligar();
                    break;
                case "3":
                    let canal = parseInt(prompt("Informe o canal: "));
                    this.televisao.mudarCanal(canal);
                    break;
                case "4":
                    this.televisao.aumentarVolume();
                    break;
                case "5":
                    this.televisao.diminuirVolume();
                    break;
                case "6":
                    this.televisao.status();
                    break;
                case "7":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
        } while (opcao !== "7");
    }
}


let tv = new Televisao();
let controle = new ControleRemoto(tv);
controle.iniciar();
