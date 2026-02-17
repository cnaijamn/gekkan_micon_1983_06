import context from './basic.js';

(function() {
  // SCREEN 640x200, CONSOLE 40x25
  let ctx = context(640, 400, 640, 200, 40, 25);

  let x, y, z, x0, z0, r;
  let hr, hl, v;

  for (let t = 20; t <= 75; t += 0.05) {
    y = Math.exp((t * (Math.random() / 5 + 1.4)) ** .5) * Math.sin(t + Math.random() * .2) / 80;
    z0 = Math.exp(t ** .5) * Math.cos(t) / 80;
    x0 = 50 * (Math.random() - .5) * Math.exp(-((t / 15) ** .5));
    rotate();
    td();
  }
  ctx.print('__ GALAXY __',  13,  2, 7);

  function rotate() {
    x = -z0 / 1.4 - x0 / 1.4;
    z = -z0 / 1.4 + x0 / 1.4
  }

  function td() {
    let k = 100 / (x + 100);
    hr = k * (y - 3) + 3;
    hl = k * (y + 3) - 3;
    v = k * z;
    hr += 320;
    hl += 320;
    v = 100 - v;
    ctx.pset(hr, v, 1);
    ctx.pset(hl, v, 2);
  }
})();
