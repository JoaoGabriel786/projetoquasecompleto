var alface1,amexa2,boca3,cookie5,frango6,kiwi7,pizza8,bolo9,jaca11

function preload(){
alface  = loadImage("assets/alface.webp")
amexa = loadImage ("assets/amexa.png")
boca = loadImage("assets/boca.png")
cookie = loadImage ("assets/cookie.webp")
frango = loadImage ("assets/frango.png")
jaca = loadImage ("assets/jaca.png")
kiwi = loadImage ("assets/kiwi.png")
pizza =loadImage ("assets/pizza.png")
bolo = loadImage ("assets/bolo.png")//
cozinha = loadImage ("assets/cozinha.webp")//

}



function setup () {
    createCanvas(1000,500);
alface1 = createSprite(500,10,10,10)
 amexa2 = createSprite (200,10,10,10)
 boca3 = createSprite (100,400,10,10)
 cookie5 = createSprite (600,10,10,10)
 frango6 = createSprite (700,10,10,10)
 kiwi7 = createSprite (230,10,10,10)
 pizza8 = createSprite (300,10,10,10)
 bolo9 = createSprite (150,10,10,10)
  jaca11 = createSprite (350,10,10,30)
alface1.addImage(alface)
amexa2.addImage (amexa)
boca3.addImage (boca)
cookie5.addImage (cookie)
frango6.addImage (frango)
jaca11.addImage (jaca)
kiwi7.addImage (kiwi)
pizza8.addImage (pizza)
bolo9.addImage (bolo)
boca3.scale = 0.7
alface1.scale = 0.3
frango6.scale = 0.3
pizza8.scale = 0.2
cookie5.scale = 0.3
jaca11.scale=0.3
kiwi7.scale= 0.3
bolo9.scale= 0.3
amexa2.scale=0.3



}

function draw  () {
if(keyDown("RIGHT_ARROW")){
    boca3.x=boca.x +5
}
if (keyDown(37)){
    boca3.x = boca.x -5
}
    background(cozinha)
    drawSprites()
}
