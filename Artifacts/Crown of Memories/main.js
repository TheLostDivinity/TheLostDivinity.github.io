// Imports

import { CanvasCircle, ReverseArcTo } from "../../utils/CanvasUtils.js";
import { ChangeSpell } from "../../utils/ChangeSpell.js";
import { CrownOfMemoriesSpells } from "../../utils/SpellList.js";
import { RemoveAnims, AddAnims } from "../../utils/Anim.js";

// Get the buttons

const SpellButtons = Array.from(document.getElementsByClassName("SkillButton"));

const SpellInformation = Array.from(document.querySelector(".SideBar").children);
// Assign OnClick function of ChangeSpell to each Button

SpellButtons.forEach((ele, i) => {
  ele.onclick = function () {
    ChangeSpell(CrownOfMemoriesSpells[i]);
    RemoveAnims(SpellInformation, "FadeIn");
    setTimeout(() => {
      AddAnims(SpellInformation, "FadeIn");
    }, 100);
  };
});

function BackgroundCanvas(color, width, Captype) {
  /*Get canvas*/
  const C = document.getElementById("myCanvas");
  const ctx = C.getContext("2d");

  ctx.strokeStyle = `${color}`;
  ctx.lineWidth = `${width}`;
  ctx.lineCap = `${Captype}`;

  ctx.beginPath();
  // Center Circle
  CanvasCircle(ctx, 800, 800, 45, 1);

  // Left Path
  ctx.arcTo(595, 800, 455, 350, 200);
  ctx.moveTo(595, 615);
  CanvasCircle(ctx, 550, 615, 45, 3);
  ctx.arcTo(450, 575, 400, 200, 100);
  ctx.moveTo(480, 440);
  CanvasCircle(ctx, 435, 438, 45, 2);
  ctx.lineTo(550, 438);
  ctx.moveTo(550, 570);
  ReverseArcTo(ctx, 550 * 2, 450, 575, 400, 200, 100);
  ctx.moveTo(700, 438);
  CanvasCircle(ctx, 655, 438, 45, 1);
  ctx.moveTo(610, 438);
  ctx.lineTo(550, 438);
  ctx.lineTo(550, 375);
  CanvasCircle(ctx, 550, 330, 45, 3);
  ctx.lineTo(550, 250);
  CanvasCircle(ctx, 550, 205, 45, 3);
  ctx.arcTo(600, 75, 800, 75, 150);
  CanvasCircle(ctx, 730, 75, 45, 1);
  ctx.moveTo(730, 120);
  ctx.lineTo(755, 150);

  //Right Path

  ctx.moveTo(845, 800);
  ReverseArcTo(ctx, 1600, 595, 800, 455, 350, 200);
  ctx.moveTo(1095, 615);
  CanvasCircle(ctx, 1050, 615, 45, 2);
  ctx.moveTo(1050, 570);
  ctx.arcTo(960, 570, 900, 200, 100);
  CanvasCircle(ctx, 945, 438, 45, 2);
  ctx.lineTo(1050, 440);
  ctx.moveTo(1050, 570);
  ReverseArcTo(ctx, 1050 * 2, 960, 570, 900, 200, 100);
  CanvasCircle(ctx, 1150, 440, 45, 1);
  ctx.lineTo(1050, 440);
  ctx.lineTo(1050, 375);
  CanvasCircle(ctx, 1050, 330, 45, 3);
  ctx.lineTo(1050, 250);
  CanvasCircle(ctx, 1050, 205, 45, 3);
  ReverseArcTo(ctx, 600 * 2, 210, 85, 600, 50, 160);
  CanvasCircle(ctx, 875, 75, 45, 1);
  ctx.moveTo(870, 120);
  ctx.lineTo(845, 150);

  // Middle Path
  ctx.moveTo(800, 755);
  ctx.lineTo(800, 725);
  ctx.moveTo(845, 680);
  ctx.arc(800, 680, 45, 0, 2 * Math.PI);
  ctx.moveTo(800, 635);
  ctx.lineTo(800, 580);
  ctx.moveTo(845, 535);
  CanvasCircle(ctx, 800, 535, 45, 2);
  ctx.moveTo(800, 490);
  ctx.lineTo(800, 465);
  ctx.moveTo(845, 425);
  CanvasCircle(ctx, 800, 418, 45, 3);
  ctx.lineTo(800, 195);
  ctx.moveTo(845, 100);
  CanvasCircle(ctx, 800, 150, 45, 2);
  // End
  ctx.stroke();
}

BackgroundCanvas("#0F9F01", 2, "round");
