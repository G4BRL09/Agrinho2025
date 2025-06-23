//Festejando a conexão campo cidade

//Um jogo de farm, seu objetivo é melhorar a fabrica e fazenda.

//Quase pronto! 3/3 — Falta alguns detalhes.

//Variaveis

let gifA = false
let gifB = false
let gifC = false
let gifD = false
let gifE = false
let unlocked2 = false
let unlocked3 = false
let entrega = false
let done = false
let finish;
let showIniciar = true
let inicial;
let pontos = 0
let caixa = 0
let before = 0
let indef = 0

let oneUp = "Trigos = 150"
let twoUp = "Trigos = 300"
let caixotes = "Caixas = 400"
let esgotado = "Esgotado"
let comprarTX = "Comprar"
let cargasTX = "Cargas"

function preload() {
  font = loadFont('font.ttf')
  music1 = loadSound('musics/music1.mp3')
  music2 = loadSound('musics/music2.mp3')
  music3 = loadSound('musics/music3.mp3')
  music4 = loadSound('musics/music4.mp3')
  camp = loadImage('sprites/camp.gif')
  fabrica = loadImage('sprites/fabrica_lv1.png')
  fazenda = loadImage('sprites/fazenda_lv1.png')
  fabrica2 = loadImage('sprites/fabrica_lv2.png')
  fazenda2 = loadImage('sprites/fazenda_lv2.png')
  fabrica3 = loadImage('sprites/fabrica_lv3.png')
  fazenda3 = loadImage('sprites/fazenda_lv3.png')
  cargas = loadImage('sprites/carga.gif')
  trigo = loadImage('sprites/trigo.png')
  gif = loadImage('sprites/trigoAnim.gif')
  inicial = loadImage('sprites/inicial.png')
  finish = loadImage('sprites/fim.png')
}

//Launch

function setup() {
  createCanvas(800, 800);
  
  //Pixel Clean
  noSmooth()
  
  textFont(font, 35);
  indef = floor(millis() / 1000);
  
  //Uma música toca se outra for pausada.
  music1.onended(() => {
    music2.play()
  })
  
  music2.onended(() => {
    music3.play()
  })
  
  music3.onended(() => {
    music4.play()
  })
  
  music4.onended(() => {
    music1.play()
  })
  music1.play()
}

//Corpo do Projeto.

function draw() {
  
  background("rgb(175,221,175)")
  
  //Volume
  music1.setVolume(0.35)
  music2.setVolume(0.35)
  music3.setVolume(0.35)
  music4.setVolume(0.35)
  
  //Atores
  image(fazenda, 120, 180, 45*4.4, 34*4.4); //Fazenda
  image(fabrica, 500, 185, 65*3, 48*3); //Fabrica
  
  //Produtos
  farm()
  slot()
  levelUp()
  
  if (entrega == true) {
    comprarTX = ""
    cargasTX = ""
    text(caixotes, 495, 150)
    image(fabrica2, 500, 185, 65*3, 48*3);
    image(cargas, 490, 300, 77*3, 60*3);
    image(cargas, 490, 450, 77*3, 60*3);
    image(cargas, 490, 600, 77*3, 60*3);
  }
  
  if (caixa >= 400 && !done) {
    done = true
  }
  
  if (done == true) {
    caixotes = ""
    text("Interconexão Concluida!", 300, 100)
    image(fabrica3, 500, 130, 65*3, 66*3)
  }
  
  //HUD
  text("Trigo:" + pontos, 20, 40);
  
  let sec = floor(millis() / 1000);
  
  //A cada segundo, +1 ponto.
  if (sec - indef >= 4) {
    pontos++
    indef = sec;
    
  }
  
  let now = millis();
  
  if (entrega == true && now - before >= 1000) {
    caixa += 4;
    before = now;
  }
  
  if (caixa >= 412) {
    image(finish, 0, 0, width, height)
  }
  
  //Tela Inicial
  
  if (showIniciar && inicial) {
    image(inicial, 0, 0, width, height)
  }
}

//Plantação

function farm() {
  //Trigo
  image(gif, 100, 500, 48*2, 26*2);
  
  //Velocidade De Animção
  gif.delay(500);
}

//Textos em lot.

function isLot() {
  
  let lotA = "Slot 2"
  let lotB = "Slot 3"
  let lotC = "Slot 4"
  let lotD = "Slot 5"
  let lotE = "Slot 6"
  
  if (!gifA && pontos >= 5) {
    text(lotA, 250, 530);
  } 
  
  if (!gifB && pontos >= 15) {
    text(lotB, 100, 650);
  }
  
  if (!gifC && pontos >= 35) {
    text(lotC, 250, 650);
  }
  
  if (!gifD && pontos >= 65) {
    text(lotD, 100, 730);
  }
  
  if (!gifE && pontos >= 120) {
    text(lotE, 250, 730);
  }
}

//Se for verdadeiro.

function ifTrue() {
  
  let sec = floor(millis() / 1000);
  
  if (gifA == true) {
    image(gif, 250, 500, 48*2, 26*2);
    
    if (sec - indef >= 3) {
      pontos++
      indef = sec;
    }
  }
  
  if (gifB == true) {
    image(gif, 100, 600, 48*2, 26*2)
    
    if (sec - indef >= 2) {
      pontos++
      indef = sec;
    }
  }
  
  if (gifC == true) {
    image(gif, 250, 600, 48*2, 26*2)
    
    if (sec - indef >= 1) {
      pontos++
      indef = sec;
    }
  }
  
  if (gifD == true) {
    image(gif, 100, 700, 48*2, 26*2)
    
    if (sec - indef >= 0.3) {
      pontos++
      indef = sec;
    }
  }
  
  if (gifE == true) {
    image(gif, 250, 700, 48*2, 26*2)
    levelUp()
    
    if (sec - indef >= 0.1) {
      pontos++
      indef = sec;
    }
  }
}

// Níveis de evolução das construções;

function levelUp() {
  
  if (pontos >= 150) {
    // Pressionavel
    text(oneUp, 120, 380);
    
    // Novas funções! (Fazenda NV2, Fogueirinha)
    if (unlocked2 == true) {
      image(fazenda2, 120, 180, 45*4.4, 34*4.4);
      image(camp, 340, 370, 42*3, 20*3);
      camp.delay(250);
    }
  }
  
  // Novas funções! (Fazenda NV3, Compre Cargas de Trigo.)
  if (pontos >= 200) {
    // Pressionavel
    text(twoUp, 120, 430);
    
    if (unlocked3 == true) {
      image(fazenda3, 120, 180, 45*4.4, 34*4.4);
      text(comprarTX, 520, 400);
      text(cargasTX, 530, 435);
      text("Caixas:" + caixa, 20, 80)
    }
  }
  
  // Caso pegar todas as melhorias aparece "Completo!"
  
  if (unlocked2 == true && unlocked3 == true) {
    text("Completo!", 130, 390)
  }
} 

//Verificação Dos Niveis

function mousePressed() {
  
  if (showIniciar) {
    showIniciar = false
  }
  
  if (pontos >= 150 && mouseX > 120 && mouseX < 320 && mouseY > 320 && mouseY < 380) {
    unlocked2 = true
    oneUp = ""
  }
  
  if (pontos >= 300 && mouseX > 110 && mouseX < 330 && mouseY > 395 && mouseY < 435) {
    unlocked3 = true
    twoUp = ""
  }
  
  //Se foi desbloqueado
  
  if (unlocked3 == true && mouseX > 500 && mouseX < 680 && mouseY > 370 && mouseY < 430) {
    entrega = true
  }
  
  // Troca a música caso você clique na festa em volta da fogueira.
  
  if (unlocked2 == true && mouseX > 340 && mouseX < 490 && mouseY > 370 && mouseY < 420) {
    music1.stop()
    music2.stop()
    music3.stop()
    music4.stop()
  }
}

//Plantação.

function slot(){
  
  let sec = floor(millis() / 1000);
  
  ifTrue()
  isLot()
  
  //Pressionado no texto dos lots;
  if (mouseIsPressed) {
    
    if (pontos >= 5 && !gifA) {
      if (mouseX > 240 && mouseX < 360 && mouseY > 500 && mouseY < 540) {
        gifA = true;
        
      }
    }
    
    if (pontos >= 15 && !gifB) {
      if (mouseX > 90 && mouseX < 210 && mouseY > 620 && mouseY < 650) {
        gifB = true;
      }
    }
    
    if (pontos >= 35 && !gifC) {
      if (mouseX > 240 && mouseX < 360 && mouseY > 620 && mouseY < 650) {
        gifC = true;
      }
    }
    
    if (pontos >= 65 && !gifD) {
      if (mouseX > 90 && mouseX < 210 && mouseY > 700 && mouseY < 740){
        gifD = true;
      }
    }
    
    if (pontos >= 120 && !gifE) {
      if (mouseX > 240 && mouseX < 360 && mouseY > 700 && mouseY < 740) {
        gifE = true;
      }
    }
  }
}

//Troca a música

function keyPressed(){
  if (key === "p") {
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
  }
}