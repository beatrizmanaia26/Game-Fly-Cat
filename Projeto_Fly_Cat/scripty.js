let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
//gatovoador.y=680 ---->chao colisao
let telaA ={};// gatovoador.y=0 ------>teto colisao
let teclal =[];
let globais = {};
let somLofi = new Audio();
let frame = 0;
let cemframes = 0;
// pontuação
let ponto = [];
let pontof = ''


somLofi.src = './Sons/lofi.mp3';

//MUDA DE TELA
function mudancaTela (nova) {  //Sendo utilizada para mudar da tela menu para a tela do jogo
    telaA = nova
    if (telaA.inicializa){
        telaA.inicializa()
    }
}

//COLISÃO

function colisaoP1(personagem, predio) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = predio.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoP2(personagem, predio) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = predio.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoP3(personagem, predio) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = predio.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoP4(personagem, predio) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = predio.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoPO1(personagem, pombo) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = pombo.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoPO2(personagem, pombo) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = pombo.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoPO3(personagem, pombo) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = pombo.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaoPO4(personagem, pombo) {
    const colPersonagem = personagem.getTamanho();
    const colobstaculo = pombo.getTamanho();

    if (colPersonagem.x < colobstaculo.x + colobstaculo.largura &&
        colPersonagem.x + colPersonagem.largura >colobstaculo.x &&
        colPersonagem.y < colobstaculo.y + colobstaculo.altura &&
        colPersonagem.y + colPersonagem.altura > colobstaculo.y) {
        return true;
    }
}
function colisaochao(personagem,chao){
    let personagem_y = personagem.y + personagem.altura;
    let chao_y = chao.y;
    if (personagem_y >= chao_y){
        return true;
    }
    return false;
}
function colisaoteto(personagem){
    let personagem_y = personagem.y + personagem.altura;
    if(personagem_y <= 100){
        return true;
    }
    return false;
}

function criagato() {
    let gatovoador = {
        x: 400,
        y: 400,
        largura: 160,
        altura: 100,
        velo: 0,
        gravidade: 0.25,
        tam_pulo: 7,
        spriteAtual: 0,
        img: new Image(),
        sprites: [
            'imagens/gatovoadora.png',
            'imagens/gatovoadorf.png'
        ],

        atualizaSprite: function(){  //Bater asinha
            if(this.spriteAtual === 0){
                this.spriteAtual = 1
            }
            else if(this.spriteAtual === 1){
                this.spriteAtual = 0
            }
        },
        acrescenta: function () {
            this.img.src = this.sprites[this.spriteAtual];
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
        },

        pulo: function () {
            this.velo = this.velo - this.tam_pulo;
        },
        getTamanho: function(){
            return {x: this.x, y: this.y, largura:this.largura, altura: this.altura }
        },
        mob: function () {//gravidade e colisao chao
            if (colisaochao(this, chao)) {
                console.log('colisao chao')
                mudancaTela(telas.menu);
            }
            if (colisaoteto(this)) {
                console.log('colisao teto')
                mudancaTela(telas.menu);
            }
            if (colisaoP1(this, globais.predio)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            if (colisaoPO1(this, globais.pombo)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            if (colisaoP2(this, globais.predio1)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            if (colisaoPO2(this, globais.pombo1)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            if (colisaoP3(this, globais.predio2)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            if (colisaoPO3(this, globais.pombo2)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }
            // if (colisaoP4(this, globais.predio3)){
            //     console.log("colisao detectada")
            //     mudancaTela(telas.menu);
            // }
            if (colisaoPO4(this, globais.pombo3)){
                console.log("colisao detectada")
                mudancaTela(telas.menu);
            }

            this.velo = this.velo + this.gravidade
            this.y = this.y + this.velo

        }

    }
    return gatovoador;
}
function criaPredio(){
    let predio = {
        x: 1065,
        yc: 370,
        largura: 150,
        altura: 460,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/predio.png"
            ctx.drawImage(this.img, this.x, this.yc , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yc, largura:this.largura, altura: this.altura }
        }
    }
    return predio
}
function criaPredio1(){
    let predio1 = {
        x: 1475,
        yc: 480,
        largura: 150,
        altura: 630,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/predio.png"
            ctx.drawImage(this.img, this.x, this.yc , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yc, largura:this.largura, altura: this.altura }
        }
    }
    return predio1
}
function criaPredio2(){
    let predio2 = {
        x: 1975,
        yc: 650,
        largura: 150,
        altura: 630,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/predio.png"
            ctx.drawImage(this.img, this.x, this.yc , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yc, largura:this.largura, altura: this.altura }
        }
    }
    return predio2
}
function criaPredio3(){
    let predio3 = {
        x: 2425,
        yc: 360,
        largura: 150,
        altura: 630,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/predio.png"
            ctx.drawImage(this.img, this.x, this.yc , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yc, largura:this.largura, altura: this.altura }
        }
    }
    return predio3
}
function criaPombo(){
    let pombo = {
        x: 1000,
        yp: 0,
        largura: 280,
        altura: 150,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/pombo.png"
            ctx.drawImage(this.img, this.x, this.yp , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yp, largura:this.largura, altura: this.altura }
        }
    }
    return pombo
}
function criaPombo1(){
    let pombo1 = {
        x: 1450,
        yp: 0,
        largura: 280,
        altura: 250,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/pombo.png"
            ctx.drawImage(this.img, this.x, this.yp , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yp, largura:this.largura, altura: this.altura }
        }
    }
    return pombo1
}
function criaPombo2(){
    let pombo2 = {
        x: 1950,
        yp: 0,
        largura: 200,
        altura: 450,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/pombo.png"
            ctx.drawImage(this.img, this.x, this.yp , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yp, largura:this.largura, altura: this.altura }
        }
    }
    return pombo2
}
function criaPombo3(){
    let pombo3 = {
        x: 2360,
        yp: 0,
        largura: 280,
        altura: 100,
        img: new Image(),
        acrescenta: function () {
            this.img.src = "imagens/pombo.png"
            ctx.drawImage(this.img, this.x, this.yp , this.largura, this.altura);
        },
        getTamanho: function(){
            return {x: this.x, y: this.yp, largura:this.largura, altura: this.altura }
        }
    }
    return pombo3
}

let rato = {
    x: 90,
    y: 50,
    largura: 150,
    altura: 150,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/rato.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let chao = {  //Objeto do chao
    x: 0,
    y: 780,
    largura: 1000,
    altura: 100,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/grama.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let ceu = {
    x: 1000,
    y: 0,
    largura: 900,
    altura: 500,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/nuvens.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let fundo = {
    x: 0,
    y: 400,
    largura: 1000,
    altura: 400,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/fundo2.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let titu = {
    x: 120,
    y: -30,
    largura: 740,
    altura: 390,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/titulo.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let fundoblur = {
    x: 0,
    y: 0,
    largura: 1000,
    altura: 800,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/fundoblur.jpg"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let barra = {  //press barra de espaço
    x: 280,
    y: 450,
    largura: 400,
    altura: 200,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/espaço.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

document.addEventListener("keydown", function (evento) { //Detectando as teclas que são apertadas
    //tecla = evento.key
    teclal.unshift(evento.key)
    //console.log(tecla)
})

let titu2 = {
    x: 530,
    y: 420,
    largura: 200,
    altura: 200,
    img: new Image(),
    acrescenta: function () {
        this.img.src = "imagens/patinha.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

//pontuação
function escreve(){
    ctx.font = "48px serif";
    ctx.fillText('Pontuação Anterior:', 100, 700);
}
function pontua(p){
    ctx.font = "48px serif";
    ctx.fillText(p, 500, 700);
}
//

let telas = {
    menu: {
        inicializa: function () {
            globais.gatovoador = criagato()
            globais.predio = criaPredio()
            globais.pombo = criaPombo()
            globais.predio1 = criaPredio1()
            globais.pombo1 = criaPombo1()
            globais.predio2 = criaPredio2()
            globais.pombo2 = criaPombo2()
            globais.predio3 = criaPredio3()
            globais.pombo3 = criaPombo3()

            ceu.x = 1000;
            globais.gatovoador.velo = 0;
            //pontuação
            ponto.unshift(frame)
            pontof = ponto[0]
            frame = 0;
            console.log(ponto)
        },
        acrescenta: function () {

            if (teclal[0] === " ") {
                this.jogando = !this.jogando
                mudancaTela(telas.jogo)
            }
            titu2.y = titu2.y + 0.5;
            if (titu2.y === 450) {
                titu2.y = 430
            }
            ctx.clearRect(0, 0, 1000, 800)

            fundo.acrescenta()
            chao.acrescenta()
            rato.acrescenta()
            fundoblur.acrescenta()
            globais.gatovoador.acrescenta()
            globais.predio.acrescenta()
            globais.pombo.acrescenta()
            globais.predio1.acrescenta()
            globais.pombo1.acrescenta()
            globais.predio2.acrescenta()
            globais.pombo2.acrescenta()
            globais.predio3.acrescenta()
            globais.pombo3.acrescenta()
            titu.acrescenta()
            barra.acrescenta()
            titu2.acrescenta()
            //pontuação
            escreve()
            pontua(pontof)
        },
        contiinuo: function () {

        }
    }
}

telas.jogo = {

    acrescenta: function () {

        ceu.x = ceu.x - 1;
        if (ceu.x === -900) {
            ceu.x = 1000;
        }

        //FAZER LAÇO DE REPETICAO
        // rato.y = rato.y + 2;
        //  if (rato.y === 400) {
        // rato.y = 200;
        // rato.y = rato.y - 2;
        //}
        //if (rato.y === 200){
        //rato.y = 400;
        //rato.y = rato.y + 2;
        //}

        globais.predio.x = globais.predio.x - 2 //faz predio mover
        globais.pombo.x = globais.pombo.x -2 //faz pombo mover
        globais.predio1.x = globais.predio1.x - 2
        globais.pombo1.x = globais.pombo1.x -2
        globais.predio2.x = globais.predio2.x - 2
        globais.pombo2.x = globais.pombo2.x -2
        globais.predio3.x = globais.predio3.x - 2
        globais.pombo3.x = globais.pombo3.x -2


        ctx.clearRect(0, 0, 1000, 800)

        cemframes = frame % 1400
        if(cemframes === 0){
            console.log("Passou")

            globais.predio = criaPredio()
            globais.pombo = criaPombo()
            globais.predio1 = criaPredio1()
            globais.pombo1 = criaPombo1()
            globais.predio2 = criaPredio2()
            globais.pombo2 = criaPombo2()
            globais.predio3 = criaPredio3()
            globais.pombo3 = criaPombo3()
        }
        ceu.acrescenta()
        fundo.acrescenta()
        rato.acrescenta()
        globais.gatovoador.acrescenta()
        globais.predio.acrescenta()
        globais.pombo.acrescenta()
        globais.predio1.acrescenta()
        globais.pombo1.acrescenta()
        globais.predio2.acrescenta()
        globais.pombo2.acrescenta()
        globais.predio3.acrescenta()
        globais.pombo3.acrescenta()

        chao.acrescenta()
    },

    contiinuo: function () {
        globais.gatovoador.mob() //Gravidade
        if (teclal[0] === " ") {
            globais.gatovoador.pulo()
            teclal.pop()
            globais.gatovoador.atualizaSprite()
        }
        frame = frame + 1
        console.log(frame)
    }
}
function atualizar() {
    somLofi.play();
    telaA.acrescenta();
    telaA.contiinuo();

    requestAnimationFrame(atualizar)
}

mudancaTela(telas.menu)
atualizar()