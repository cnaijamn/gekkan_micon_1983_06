const color = {
  0: '#000', // 黒色
  1: '#00f', // 青色
  2: '#f00', // 赤色
  3: '#808', // 紫色
  4: '#0f0', // 緑色
  5: '#0ff', // 水色
  6: '#ff0', // 黄色
  7: '#fff', // 白色
};

export default function context(w, h, sw, sh, cw, ch) {
  let canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  document.body.appendChild(canvas);

  let ctx = canvas.getContext('2d');
  let sa = canvas.width / sw;
  let sd = canvas.height / sh;
  let charW = canvas.width / cw;
  let charH = canvas.height / ch;

  ctx.font = charH + 'px monospaced'; // 固定幅フォント
  let fontW = ctx.measureText('A').width;
  let ca = charW / fontW;
  let cd = 1;

  // 文字
  function print(text, x, y, c) {
    ctx.setTransform(ca, 0, 0, cd, x * charW, (y + 1) * charH);
    ctx.fillStyle = color[c];
    ctx.fillText(text, 0, 0);
  }

  // 点
  function pset(x, y, c) {
    ctx.setTransform(sa, 0, 0, sd, 0, 0);
    ctx.beginPath();
    ctx.fillStyle = color[c];
    ctx.arc(x, y, 1, 0, Math.PI * 2, true);
    ctx.fill();
  }

  // 線
  function line(x1, y1, x2, y2, c) {
    ctx.setTransform(sa, 0, 0, sd, 0, 0);
    ctx.beginPath();
    ctx.strokeStyle = color[c];
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
  }

  // 矩形
  function line_b(x1, y1, x2, y2, c) {
    ctx.setTransform(sa, 0, 0, sd, 0, 0);
    ctx.beginPath();
    ctx.strokeStyle = color[c];
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.closePath();
    ctx.stroke();
  }

  // 円
  function circle(cx, cy, r, c) {
    ctx.setTransform(sa, 0, 0, sd, 0, 0);
    ctx.beginPath();
    ctx.strokeStyle = color[c];
    //ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
    ctx.ellipse(cx, cy, r / sa, r / sd, 0, 0, Math.PI * 2, true);
    ctx.stroke();
  }

  return {
    print,
    pset,
    line,
    line_b,
    circle,
  };
};
