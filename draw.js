let drawing = function ($_p) {
  const palette = [
    '#000000',
    '#808080',
    '#800000',
    '#808000',
    '#008000',
    '#008080',
    '#000080',
    '#800080',
    '#808040',
    '#004040',
    '#0080FF',
    '#004080',
    '#4000FF',
    '#804000',
    '#FFFFFF',
    '#A0A0A0',
    '#FF0000',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#0000FF',
    '#FF00FF',
    '#FFFF80',
    '#00FF80',
    '#80FFFF',
    '#8080FF',
    '#FF0080',
    '#FF8040'
  ];

  let paletteColour = 0;

  $_p.setup = function () {
    let canvas = $_p.createCanvas(400, 400);
    canvas.parent('p5-container');
    $_p.background(255);
  };

  $_p.draw = function () {

    $_p.stroke(0);
    for (let j = 0; j < palette.length / (palette.length / 2); j++) {
      for (let i = 0; i < palette.length / 2; i++) {
        let base = j;
        let more = i;
        $_p.fill(palette[base * (palette.length / 2) + more]);
        $_p.rect(i * 20, j * 20, 20, 20)
      }
    }
    $_p.noStroke();
    // let paletteColour = $_p.floor($_p.random(palette.length));

if($_p.frameCount % 20 == 0){
  paletteColour = palette[$_p.floor($_p.random(palette.length))];
}
    
    $_p.fill(paletteColour);
    $_p.ellipse($_p.width-$_p.mouseX, $_p.height-$_p.mouseY, 10, 10);
  };

};
new p5(drawing);


