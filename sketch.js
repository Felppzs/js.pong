//Bolinha em Geral
let xBolinha = 300; 
let yBolinha = 250; 
let dBolinha = 25; 
let velocidadexBolinha = 6; 
let velocidadeyBolinha = 6; 
let raio = dBolinha/2; 

//Raquete da Esquerda
let xRaquete = 8; 
let yRaquete = 210; 
let lRaquete = 10; 
let aRaquete = 100; 
let Colidir = false; 

//Raquete da Direita
let xRaqueteD = 579; 
let yRaqueteD = 210; 
let aRaqueteD = 100; 
let lRaqueteD = 10;

//Pontos

let pontosD = 0;
let pontosE = 0;

//Musiquinha

let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 500);
  trilha.loop();

}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete();
  raqueteEsquerda();
  Colisao(xRaquete, yRaquete);
  Colisao(xRaqueteD, yRaqueteD)
  movimentaRaquete();
  DesprendeBolinha();
  verificaBordaR();
  mostraPlacar();
  calculaPlacar();
  
  
}

function desenhaBolinha(){
  circle(xBolinha, yBolinha, dBolinha)
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}

function verificaBorda(){

  if(xBolinha + raio > width || xBolinha - raio < 0)
    velocidadexBolinha *= -1;

  if (yBolinha + raio > height || yBolinha - raio < 0)
  velocidadeyBolinha *= -1;
}

function desenhaRaquete(){
  rect(xRaquete, yRaquete, lRaquete, aRaquete);
}

function raqueteEsquerda(){
  rect(xRaqueteD, yRaqueteD, lRaqueteD, aRaqueteD)
}

function Colisao(x, y){
  Colidir = collideRectCircle(x, y, lRaquete, aRaquete, xBolinha, yBolinha, raio);
  if(Colidir){
    velocidadexBolinha *= -1
    raquetada.play()
  }
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteD -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteD += 10;
  }
  
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }

}

function DesprendeBolinha(){
  if (xBolinha - raio < 0){
    xBolinha = 23
  }
  
  if (xBolinha + raio > width){
    xBolinha = width - 23
  }
}

function verificaBordaR(){
  if (yRaquete < 0){
    yRaquete += 11
  }
  
  if (yRaquete + aRaquete > height){
    yRaquete -= 11
  }

  if (yRaqueteD < 0){
    yRaqueteD += 11
  }

  if (yRaqueteD + aRaquete > height){
    yRaqueteD -= 11
  }
}

function calculaPlacar(){
  if(xBolinha - raio < 6){
    pontosD++
    ponto.play()
  }
  
  if(xBolinha + raio > width - 6){
    pontosE++
    ponto.play()
  }
    
}

function mostraPlacar(){
  stroke(255)
  fill(color(0,0,255))
  rect(width /3.5, 10, 48, 30)
  rect(381, 10, 48, 30)
  rect(300, 5, 3, 40)
  fill(color(255))
  text(pontosE, width /3.5 + 19, 28)
  text(pontosD, 401, 28)
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


