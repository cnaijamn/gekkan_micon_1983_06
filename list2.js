import context from './basic.js';

let ctx = context(640, 400, 640, 200, 40, 25);
yz(-25); ctx.print('X=-25', 24,  3, 7);
yz(  0); ctx.print('X=0',    8,  9, 7);
yz( 25); ctx.print('X=25',   5, 14, 7);
yz(500); ctx.print('X=500',  2, 11, 7);
ctx.print('__ TEST 2 __', 13, 0, 7);

function td(x, y, z) {
  let k = 30 / (x + 30);
  let hr = k * (y - 3) + 3;
  let hl = k * (y + 3) - 3;
  let v = k * z;
  return [hr + 100, hl + 100, 100 - v];
}

function yz(x) {
  let [hr1, hl1, v1] = td(x, 20 - x, -10);
  let [hr2, hl2, v2] = td(x, 40 - x,  10);
  ctx.line_b(hr1, v1, hr2, v2, 1);
  ctx.line_b(hl1, v1, hl2, v2, 2);
  ctx.pset(hr1, v1, 5);
  ctx.pset(hl1, v1, 6);
  return [hr1, hl1, v1, hr2, hl2, v2];
}
