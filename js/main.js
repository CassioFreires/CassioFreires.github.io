const inputProtagonista = document.querySelector('#protagonista');
const monstro = document.querySelector('#select-1');
const especieDoProtagonista = document.querySelector('#select-2');
const armamento = document.querySelector('#select-3');
const localDaHisotira = document.querySelector('#select-4');
const assidenteOcorrido = document.querySelector('#select-5');

// Array que armazena as strings das imagens
let listaDeImagens = [];

function Contos() {
    this.inputProtagonista = inputProtagonista.value;
    this.monstro = monstro.value;
    this.especieDoProtagonista = especieDoProtagonista.value;
    this.armamento = armamento.value;
    this.localDaHisotira = localDaHisotira.value;
    this.assidenteOcorrido = assidenteOcorrido.value;


    this.validarMonstros = function () {
        let body = document.querySelector('body');
        let p = document.querySelector('#texto-paragrafo');
        let div_paragrafo = document.querySelector('#painel-texto');
        div_paragrafo.style.padding = '10px';
        div_paragrafo.style.border = '2px solid #fff';
        div_paragrafo.style.borderRadius = '15px';
        div_paragrafo.style.marginTop = '300px';

        // Variavel que armazena a base da historia
        const historia = `Era uma vez ${this.inputProtagonista} al sit amet, consectetur ${this.monstro} elit. Proin ${this.especieDoProtagonista} lectus ac tortor commodo, ornare tincidunt sem hendrerit. Morbi quis quam felis. ${this.armamento} ac egestas ipsum. ${this.localDaHisotira} dictum purus vitae lectus finibus imperdiet. Nullam bibendum consequat neque sed ${this.assidenteOcorrido}. <br/> data: ${this.dataAtual()}`;

        // Verifica a condição e toma uma decisão 
        switch (this.monstro) {
            case 'Contos de Fadas':
                listaDeImagens.push('img/contos_fadas_1.jpg');
                listaDeImagens.push('img/contos_fadas_2.jpg');
                listaDeImagens.push('img/contos_fadas_3.jpg');
                listaDeImagens.push('img/contos_fadas_4.jpg');
                listaDeImagens.push('img/contos_fadas_5.jpg');
                this.esconderTela();
                body.style.background = `url(${listaDeImagens[4]})`;
                break;
            case 'Aventura':
                listaDeImagens.push('img/aventura_1.jpg');
                listaDeImagens.push('img/aventura_2.jpg');
                listaDeImagens.push('img/aventura_3.jpg');
                listaDeImagens.push('img/aventura_4.jpg');
                listaDeImagens.push('img/aventura_5.jpg');
                this.esconderTela();
                body.style.background = `url(${listaDeImagens[4]})`;
                break;
            case 'Folclore':
                listaDeImagens.push('img/folclore_1.jpg');
                listaDeImagens.push('img/folclore_2.jpg');
                listaDeImagens.push('img/folclore_3.jpg');
                listaDeImagens.push('img/folclore_4.jpg');
                listaDeImagens.push('img/folclore_5.jpg');
                p.style.color = '#fff';
                this.esconderTela();
                body.style.background = `url(${listaDeImagens[4]})`;
                break;
            case 'Terror':
                listaDeImagens.push('img/terror_1.jpg');
                listaDeImagens.push('img/terror_2.jpg');
                listaDeImagens.push('img/terror_3.jpg');
                listaDeImagens.push('img/terror_4.jpg');
                listaDeImagens.push('img/terror_5.jpg');
                p.style.color = '#fff';
                this.esconderTela();
                body.style.background = `url(${listaDeImagens[4]})`;
                break;

            case 'Ficção Cientifica':
                listaDeImagens.push('img/ficcao_1.jpg');
                listaDeImagens.push('img/ficcao_2.jpg');
                listaDeImagens.push('img/ficcao_3.jpg');
                listaDeImagens.push('img/ficcao_4.jpg');
                listaDeImagens.push('img/ficcao_5.jpg');
                p.style.color = '#fff';
                this.esconderTela();
                body.style.background = `url(${listaDeImagens[4]})`;
                break;
        }

        // Verifica a condição e toma uma decisão 
        switch (this.especieDoProtagonista) {
            case 'Zumbi':
                p.innerHTML = historia;
                break;
            case 'Golfinho':
                p.innerHTML = historia;

                break;
            case 'Fada':
                p.innerHTML = historia;

                break;
            case 'Chapélzinho':
                p.innerHTML = historia;

                break;
            case 'Vovó':
                p.innerHTML = historia;
                break;
        }
    }

    // Função que esconde a tela principal do app
    this.esconderTela = function () {
        let teste = document.querySelector('.container');
        teste.style.display = 'none';
    }

    // Função que itera sobre o array de imagens
    this.temporizadorImagem = function () {
        setInterval(function () {
            let rand = Math.floor(Math.random() * 5);
            for (item of listaDeImagens) {
                let bodyBackground = document.querySelector('body');
                bodyBackground.style.background = `url(${listaDeImagens[rand]})`;
                bodyBackground.style.backgroundSize = '50%';
            }
        }, 5000)
    }

    // Ação que retorna a data
    this.dataAtual = () => {
        const data = new Date();
        let dia = data.getDay();
        let mes = data.getMonth();
        let ano = data.getFullYear();
        let dataAtual = (dia < 10  ? '0'+ dia : dia ) + '/' + ( mes < 10 ? '0' + mes : mes) + '/' + ano; 
        return dataAtual;
    }

}

// Ação de quando clicar no butao de enviar
function btnEnviarHistoria() {
    const conto = new Contos();
    conto.validarMonstros()
    conto.temporizadorImagem()

    previnirEvento();
}

// Previnir Evento
this.previnirEvento = () => {
    event.preventDefault();
}
