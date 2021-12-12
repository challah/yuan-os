let yuanbo = function ($_p) {
  const headNum = 6;
  let yuanHead;
  let rot = 0;
  let yuanGraphics = [];
  let speed = 3;
  let newGraphic = $_p.createGraphics(64, 64);
  let canvas = $_p.createCanvas(400, 400);

  $_p.preload = function () {
    yuanHead = $_p.loadImage('images/yuan.png');
  };

  $_p.setup = function () {
    for (let i = 0; i < headNum; i++) {
      let newGraphic = $_p.createGraphics(64, 64);
      newGraphic.colorMode($_p.HSL);
      newGraphic.tint(360 / headNum * i, 70, 60);
      newGraphic.image(yuanHead, 0, 0, 64, 64);
      yuanGraphics.push(newGraphic)
    }
    
    let canvas = $_p.createCanvas(400, 400);
    canvas.parent('yuanbocom');
    $_p.colorMode($_p.HSL);
    $_p.angleMode($_p.DEGREES);
    $_p.imageMode($_p.CENTER);
    $_p.noCursor()
  };

  $_p.draw = function () {
    $_p.background(220);
    $_p.push();
    $_p.translate($_p.width / 2, $_p.height / 2);
    $_p.image(yuanHead, 0, 0, 64, 64);
    if (rot === 360) {
      rot = 0
    } else {
      rot += speed
    }
    polygon(0, 0, 74, 6, rot);
    $_p.pop();
    $_p.image(yuanHead, $_p.mouseX, $_p.mouseY, 64, 64)
  };

  function polygon(x, y, radius, npoints, rotation = 0) {
    let angle = 360 / npoints;
    let i = 0;
    for (let a = 0 + rotation; a < 360 + rotation; a += angle) {
      let sx = x + $_p.cos(a) * radius;
      let sy = y + $_p.sin(a) * radius;
      $_p.image(yuanGraphics[i], sx, sy, 64, 64);
      i++
    }
  }

};
new p5(yuanbo);