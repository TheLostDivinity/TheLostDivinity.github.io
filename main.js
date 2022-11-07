function BannerCanvas(color, width, Captype) {
  /*Get canvas*/
  const BC = document.getElementById("BannerCanvas");
  const BCctx = BC.getContext("2d");

  BCctx.strokeStyle = `${color}`;
  BCctx.lineWidth = `${width}`;
  BCctx.lineCap = `${Captype}`;

  BCctx.beginPath();

  // left side
  BCctx.arc(35, 35, 35, 0, 2 * Math.PI);
  BCctx.moveTo(35, 70);
  BCctx.arc(70, 70, 35, 1 * Math.PI, 2 * Math.PI);
  BCctx.moveTo(105, 70);
  BCctx.arc(105, 70, 35, 0.5 * Math.PI, 1.5 * Math.PI);
  BCctx.lineTo(300, 35);
  BCctx.moveTo(600, 0);
  // Right side

  BCctx.arc(600 - 35, 35, 35, 0, 2 * Math.PI);
  BCctx.moveTo(495, 70);
  BCctx.arc(530, 70, 35, 1 * Math.PI, 2 * Math.PI);
  BCctx.moveTo(495, 35);
  BCctx.arc(495, 70, 35, 1.5 * Math.PI, 0.5 * Math.PI);
  BCctx.moveTo(495, 105);
  BCctx.lineTo(495, 70);
  BCctx.moveTo(495, 35);
  BCctx.lineTo(300, 35);

  // Outer Top circles

  BCctx.moveTo(50, 0);
  BCctx.arc(30, 0, 90, 0, 2 * Math.PI);
  BCctx.moveTo(550, 0);
  BCctx.arc(570, 0, 90, 0, 2 * Math.PI);

  // Low underline

  BCctx.moveTo(105, 145);
  BCctx.arc(105, 145, 15, 0, 1.5 * Math.PI);
  BCctx.lineTo(600 - 115, 130);
  BCctx.moveTo(600 - 130, 130);
  BCctx.arc(600 - 105, 145, 15, 1.5 * Math.PI, 3 * Math.PI);
  BCctx.lineTo(600 - 105, 145);

  // Bottom part

  BCctx.moveTo(0, 200);
  BCctx.arc(0, 200, 90, 0, 2 * Math.PI);

  BCctx.moveTo(0, 170);
  BCctx.arc(45, 135, 35, 1.5, 2 * Math.PI);

  BCctx.moveTo(600, 170);
  BCctx.lineTo(600 - 45, 170);
  BCctx.moveTo(600 - 80, 135);
  BCctx.arc(600 - 45, 135, 35, 1 * Math.PI, 2.5 * Math.PI);

  BCctx.moveTo(600, 200);
  BCctx.arc(600, 200, 90, 0, 2 * Math.PI);

  BCctx.moveTo(150, 201);
  BCctx.arc(150, 200, 50, 0.5 * Math.PI, 1.5 * Math.PI);
  BCctx.moveTo(150, 150);
  BCctx.arc(10, 150, 25, 0, 2 * Math.PI);

  BCctx.moveTo(600 - 150, 150);
  BCctx.arc(600 - 150, 200, 50, 1.5 * Math.PI, 2 * Math.PI);
  BCctx.moveTo(600 - 150, 150);
  BCctx.arc(600 - 10, 150, 25, 0, 2 * Math.PI);

  BCctx.moveTo(300, 150);
  BCctx.arc(150, 150, 30, 0, 2 * Math.PI);
  BCctx.lineTo(600 - 180, 150);
  BCctx.moveTo(600 - 130, 150);
  BCctx.arc(600 - 150, 150, 30, 0, 2 * Math.PI);

  BCctx.moveTo(225, 150);
  BCctx.arc(225, 150, 20, 0 * Math.PI, 1.5);
  BCctx.lineTo(200, 170);

  BCctx.moveTo(600 - 225, 170);
  BCctx.arc(600 - 255, 150, 20, 0.5 * Math.PI, 1 * Math.PI);
  BCctx.stroke();
}

BannerCanvas("goldenrod", 2, "round");

window.addEventListener("load", () => {
  if (document.getElementById("BannerParent") !== null) {
    window.sessionStorage.setItem("Banner", "Displayed");
    window.sessionStorage.setItem("Quote", "Displayed");
  }
});

if (window.sessionStorage.getItem("Banner")) {
  document.getElementById("BannerParent").className = "Banner";
} else {
  document.getElementById("BannerParent").className = "BannerAnim";
}

if (window.sessionStorage.getItem("Quote")) {
  document.getElementById("Quote").className = "Quote";
} else {
  document.getElementById("Quote").className = "QuoteA";
}
