var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1 = createSprite(20,20,20,650);
var laser2 = createSprite(125, 250, 20, 350);
var laser3 = createSprite(125,12.5,20,25)
var boundaries = createSprite(390,12.5,20,900)
var boundaries2 = createSprite(390,5,750,20)
var boundaries3 = createSprite(390,395,900,20)
var car1 = createSprite(325,250,30,50);
var car2 = createSprite(275,250,30,50);
var car3 = createSprite(225,250,30,50);
var car4 = createSprite(225,350,30,50);
var car5 = createSprite(275,350,30,50);
var car6 = createSprite(325,350,30,50);
var car7 = createSprite(325,150,30,50);
var car8 = createSprite(275,150,30,50);
var car9 = createSprite(225,150,30,50);
var police = createSprite(125,50,20,20);
var police2 = createSprite(300,100,20,20);
var police3 = createSprite(300,200,20,20);
var police4 = createSprite(300,300,20,20);
var thief = createSprite(20,375,20,20);

police.velocityY = 0.5
police2.velocityX = -5
police3.velocityX = 5
police4.velocityX = -5

function draw() {
car1.shapeColor = "red"
car2.shapeColor = "blue"
car3.shapeColor = "yellow"
car4.shapeColor = "darkgreen"
car5.shapeColor = "cyan"
car6.shapeColor = "darkblue"
car7.shapeColor = "black"
car8.shapeColor = "grey"
car9.shapeColor = "green"

police.shapeColor = "darkblue"
police2.shapeColor = "darkblue"
police3.shapeColor = "darkblue"
police4.shapeColor = "darkblue"
background("white");
police.bounceOff(laser2);
police.bounceOff(laser3);
police2.bounceOff(laser2);
police2.bounceOff(boundaries);
police3.bounceOff(laser2);
police3.bounceOff(boundaries);
police4.bounceOff(laser2);
police4.bounceOff(boundaries);
laser1.shapeColor = "red"
laser2.shapeColor = "red"
boundaries.shapeColor = "red"
boundaries2.shapeColor = "red"
boundaries3.shapeColor = "red"
thief.shapeColor = "black"
laser3.shapeColor = "red"
if (keyDown("down")) {
thief.y = thief.y+5;
}
if(keyDown("up")) {
thief.y = thief.y-5;
}
if(keyDown("left")) {
thief.x = thief.x-5;
}
if(keyDown("right")) {
thief.x = thief.x+5;
}
if (keyDown("down")) {
thief.y = thief.y+5;
}
if (thief.isTouching(police)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(laser1)){
thief.x = 20
thief.y = 375
}
if( thief.isTouching(laser2)){
thief.x = 20
thief.y = 350
}
if(thief.isTouching(laser3)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(boundaries)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(boundaries2)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(boundaries2)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(boundaries3)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(police3)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(police4)){
thief.x = 20
thief.y = 375
}
if(thief.isTouching(car3)){
textSize(15);
text("You win!",55,10); 
thief.x = 20
thief.y = 375
}

drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
