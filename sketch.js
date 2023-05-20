//configurações de posição e da bolinha
let xBolinha= 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//Configurações de movimentação da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//configurações da Raquete
let xRaquete = 5;
let yRaquete = 150;
let alturaRaquete = 90;
let comprimentoRaquete = 10;
let colidiu = false;

//Raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar
let meusPontos = 0
let pontosDoOponente = 0

//Sons do jogo
let raquetada
let ponto
let trilha

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}
function draw() {
  background(0);
  mostraBolinha();
  MovimentaBolinha();
  VerificaColisaoBorda();  
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  placar();
  marcaPonto();
}
  
  function mostraRaquete(x,y){
  rect (x, y, comprimentoRaquete, alturaRaquete );
  
  }
function mostraBolinha()
{circle(xBolinha,yBolinha,diametro);
 }

function MovimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
                           }
  function VerificaColisaoBorda(){
  if (xBolinha + raio> width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
 
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){velocidadeYBolinha *= -1;
  ;                                                    } 
                               }
function movimentaRaqueteOponente() {
    if (keyIsDown(UP_ARROW)) {
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaqueteOponente += 10;
    }
    
}
function movimentaMinhaRaquete(){
  if (keyIsDown(87)) {
        yRaquete -= 10;}
  
  
if (keyIsDown(83)) {
        yRaquete += 10;}}

function verificaColisaoRaquete(x,y){
colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
if (colidiu) {velocidadeXBolinha *= -1
  raquetada.play();            }}
 
function placar(){
  stroke(255);
  fill (255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect (130,10,40,20)
  fill(255)
  text (meusPontos,150, 26)
  fill(color(255, 140, 0))
  rect (450,10,40,20)
  fill (255);
  text (pontosDoOponente, 470, 26)
  
  }
function marcaPonto () {
  if(xBolinha > 590){meusPontos +=1;
                    ponto.play()}

if (xBolinha < 10){pontosDoOponente+=1;
                   ponto.play()}}
