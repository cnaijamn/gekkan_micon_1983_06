import context from './basic.js';

(function() {
  // SCREEN 640x200, CONSOLE 40x25
  let ctx = context(640, 400, 640, 200, 40, 25);

  let x, y, z, r;
  let hr, hl, v;
  let hrf, hlf, vf;
  let hri, hli, vi;

  let data = [
    200, -200, -7.5, 4,
    200,    0,    0, 4,
    200,  200,  7.5, 4,
    -21,   20,   22, 4,
    -25,    0,   16, 4,
    -15,  -45,   40, 8,
    200, -200,  -15, 4,
    200, -400, -600, 4,
    -12,   40,  -40, 8,
     200, 200,  7.5, 4,
  ];

  for (let i = 0; i <= 9; i++) {
    [x, y, z, r] = data.slice(i * 4, (i + 1) * 4);
    td();
    ctx.circle(hr, v, r, 1);
    ctx.circle(hl, v, r, 2);
  }
  for (let i = 0; i <= 9; i++) {
    [x, y, z, r] = data.slice(i * 4, (i + 1) * 4);
    td();
    if (i > 0) {
      ctx.line(hri, vi, hrf, vf, 1);
      ctx.line(hli, vi, hlf, vf, 2);
    }
    hri = hrf; hli = hlf; vi = vf;
  }
  ctx.print('+----------+',  2,  4, 3);
  ctx.print('| 3D-ORION |',  2,  5, 3);
  ctx.print('+----------+',  2,  6, 3);
  ctx.print('BETELGEUSE',    2,  1, 3);
  ctx.print('REGULUS',      30, 21, 3);
  ctx.print('M42',          20, 15, 3);

  function td() {
    let k = 30 / (x + 30);
    hr = k * (y - 3) + 3;
    hl = k * (y + 3) - 3;
    v = k * z;
    hr += 320;
    hl += 320;
    v = 100 - v;
    hrf = hr;
    vf = v;
    hlf = hl;
  }
})();
