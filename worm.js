let worms = function ($_p) {
  const palette = [
    '#55ff44',
    '#ff0088',
    '#ff7700',
    '#ffff22',
    '#11ccff',
    '#9911ff'
  ];
  let colour;
  let palette2;
  let size = 1;
  let eyesY;
  let w = 0;

  
  $_p.setup = function () {
    let canvas = $_p.createCanvas(500, 500);
    canvas.parent('worms');
    $_p.colorMode($_p.HSB, 100);
    $_p.noStroke();
    colour = palette[$_p.floor($_p.random(palette.length))];
    palette2 = $_p.shuffle(palette);
    $_p.textAlign($_p.LEFT);
    $_p.textSize(14)
  };

  $_p.draw = function () {
    $_p.angleMode($_p.DEGREES);
    $_p.background(70, 100, 10);
    $_p.translate($_p.width / 2, $_p.height / 2);
    let size = 1;
    let eyesY;
    for (let w = 0; w < 6; w++) {
      for (let x = -250; x < 100; x += 2) {
        $_p.fill(0, 100, 100);
        let y = $_p.sin($_p.frameCount * 7 + $_p.map(x, -100, 100, 0, 360)) * 22 + w * 80 - 200;
        if (x <= -100) {
          size = 1
        } else if (x <= -80) {
          size = 5
        } else if (x <= -50) {
          size += 0.6
        } else if (x <= 0) {
          size += 0.1
        } else if (x <= 30) {
          size -= 0.55
        } else {
          size -= 0.15
        }
        if (x <= -100) {
          $_p.fill(255)
        } else {
          $_p.fill(palette2[w])
        }
        if (x === -70) {
          eyesY = y
        }
        $_p.circle(x, y, size)
      }
      $_p.fill(255);
      $_p.circle(-70, eyesY + 4, 6);
      $_p.circle(-70, eyesY - 4, 6);
      $_p.fill(0);
      $_p.circle(-70.5, eyesY + 4, 4);
      $_p.circle(-70.5, eyesY - 4, 4)
    }
    $_p.rotate(270);
    $_p.fill(255);
    $_p.text("consciousness is an illusion. it's worm time babey!!!", -180, 230)
  };
};
new p5(worms);