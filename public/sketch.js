import p5 from 'p5';

let p5sketch = (p) => {

  let x = 100;

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(0);
  }

  p.draw = () => {
    p.background(0);
    p.ellipse(x, 20, 20, 20);

    x = x + 1;
    if (x > 200) x = 100;
  }

  p.update = (a) => {
    p.background(0);
    p.ellipse(x, 20, 20, 20);

    x = x + a;
    if (x > 200) x = 100;
  }
};

let myp5 = new p5(p5sketch);
