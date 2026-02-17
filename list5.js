import context from './basic.js';

(function() {
  // SCREEN 640x200, CONSOLE 40x25
  let ctx = context(640, 400, 640, 200, 40, 25);

  let a, e, q, i, s, l;
  let x, y, z, r, x0, p;
  let hr, hl, v;

  let data = [
     52, 0.048,  99, 11.3, 300, 7,
     95, 0.056, 113, 12.5,  90, 6,
    192, 0.046,  74, 10.8, 210, 3,
    301, 0.010, 131, 11.8, 200, 2,
    395, 0.249, 109, 27.2, 250, 0.2,
    179, 0.967, 58, 172,    10, 0,
  ];

  for (let j = 1; j <= 6; j++) {
    [a, e, q, i, s, l] = data.slice(j * 6, (j + 1) * 6);
    a = .5 * a;
    q = q * Math.PI / 180;
    i = i * Math.PI / 180;
    s = s * Math.PI / 180;
    l = l / 2;
    for (p = 0; p <= 2 * Math.PI; p += .05) {
      planet();
      ctx.pset(hr, v, 1);
      ctx.pset(hl, v, 2);
    }
    p = s;
    planet();
    ctx.circle(hr, v, l, 1);
    ctx.circle(hl, v, l, 2);
  }

  ctx.print('__ SOLOR SYSTEM __', 9, 0, 7);
  ctx.print('1', 19, 10, 7);
  ctx.print('2', 21, 10, 7);
  ctx.print('3', 24, 10, 7);
  ctx.print('4', 27, 10, 7);
  ctx.print('5', 31, 10, 7);
  ctx.print('6', 13, 10, 7);
  ctx.print('1:JUPITER',  15, 17, 7);
  ctx.print('2:SATURN',   15, 18, 7);
  ctx.print('3:URANUS',   15, 19, 7);
  ctx.print('4:NEPTUNE',  15, 20, 7);
  ctx.print('5:PLUTE',    15, 21, 7);
  ctx.print('6:HALLEY',   15, 22, 7);

  function planet() {
    r = a * (1 - e ** 2) / (1 + e * Math.cos(p - q));
    x0 = r * Math.sin(p);
    y = r * Math.cos(p);
    rotate();
    td();
  }

  function td() {
    let k = 500 / (x + 500);
    hr = k * (y - 3) + 3;
    hl = k * (y + 3) - 3;
    v = k * z;
    hr += 280;
    hl += 280;
    v = 80 - v;
  }

  function rotate() {
    x = x0 * Math.cos(i);
    z = x0 * Math.sin(i)
  }
})();
