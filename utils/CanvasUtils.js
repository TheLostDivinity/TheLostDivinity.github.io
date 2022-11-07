function CanvasCircle(context, x, y, radius, end_point) {
  context.moveTo(x + radius, y);
  context.arc(x, y, radius, 0, 2 * Math.PI);

  switch (end_point) {
    case 1:
      context.moveTo(x - radius, y);
      break;
    case 2:
      context.moveTo(x + radius, y);
      break;
    case 3:
      context.moveTo(x, y - radius);
      break;
    case 4:
      context.moveTo(x, y + radius);
      break;
    default:
      context.moveTo(x - radius, y);
      break;
  }
}

function ReverseArcTo(context, S_point, x1, y1, x2, y2, radius) {
  let offsetX1 = Math.abs(S_point / 2 - x1);
  let offsetX2 = Math.abs(S_point / 2 - x2);
  context.arcTo(S_point / 2 + offsetX1, y1, S_point / 2 + offsetX2, y2, radius);
}

export { CanvasCircle, ReverseArcTo };
