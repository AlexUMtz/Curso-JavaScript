const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  // console.log(limitsBall, limitsStage);

  // console.log(e.keyCode);
  // console.log(e.key);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        x--;
        e.preventDefault();
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        y--;
        e.preventDefault();
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        x++;
        e.preventDefault();
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcut(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.code);
  // console.log(e.keyCode);
  // console.log(`Alt: {e.altKey}`);
  // console.log(`Ctrl: {e.ctrlKey}`);
  // console.log(`Shift: {e.shiftKey}`);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Alert con teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Confirm con teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Prompt con teclado");
  }
}
