// Imports
import { ChangeSpell } from "../../utils/ChangeSpell.js";
import { OceansOmenSpells } from "../../utils/SpellList.js";
import { RemoveAnims, AddAnims } from "../../utils/Anim.js";

// Get the buttons

const SpellButtons = Array.from(document.getElementsByClassName("SkillButton"));

const SpellInformation = Array.from(document.querySelector(".SideBar").children);

// Assign OnClick function of ChangeSpell to each Button

SpellButtons.forEach((ele, i) => {
  ele.onclick = function () {
    ChangeSpell(OceansOmenSpells[i]);
    RemoveAnims(SpellInformation, "FadeIn");
    setTimeout(() => {
      AddAnims(SpellInformation, "FadeIn");
    }, 100);
  };
});

// Canvas Magic

function CanvasInit() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.arc(609, 135, 45, 0, 2 * Math.PI);
  ctx.moveTo(609, 180);
  ctx.lineTo(609, 187);
  ctx.moveTo(654, 232);
  ctx.arc(609, 232, 45, 0, 2 * Math.PI);
  ctx.moveTo(609, 276);
  ctx.lineTo(609, 330);
  ctx.moveTo(750, 329);
  ctx.arc(704, 329, 45, 0, 2 * Math.PI);
  ctx.moveTo(660, 329);
  ctx.arc(513, 329, 45, 0, 2 * Math.PI);
  ctx.moveTo(513, 373);
  ctx.lineTo(513, 425);
  ctx.lineTo(565, 425);
  ctx.moveTo(654, 425);
  ctx.arc(609, 425, 45, 0, 2 * Math.PI);
  ctx.moveTo(705, 373);
  ctx.lineTo(705, 425);
  ctx.lineTo(655, 425);
  ctx.moveTo(610, 470);
  ctx.lineTo(610, 523);
  ctx.lineTo(754, 523);
  ctx.moveTo(843, 522);
  ctx.arc(799, 522, 45, 0, 2 * Math.PI);
  ctx.moveTo(800, 567);
  ctx.lineTo(800, 620);
  ctx.lineTo(888, 620);
  ctx.moveTo(800, 567);
  ctx.lineTo(800, 671);
  ctx.moveTo(976, 610);
  ctx.arc(932, 618, 45, 0, 2 * Math.PI);
  ctx.moveTo(844, 716);
  ctx.arc(799, 716, 45, 0, 2 * Math.PI);
  ctx.moveTo(799, 760);
  ctx.lineTo(799, 813);
  ctx.lineTo(720, 813);
  ctx.arc(666, 812, 45, 0, 2 * Math.PI);
  ctx.moveTo(799, 813);
  ctx.lineTo(799, 863);
  ctx.moveTo(843, 900);
  ctx.arc(799, 910, 45, 0, 2 * Math.PI);
  ctx.moveTo(844, 522);
  ctx.lineTo(990, 522);
  ctx.lineTo(990, 470);
  ctx.moveTo(1035, 425);
  ctx.arc(990, 425, 45, 0, 2 * Math.PI);
  ctx.moveTo(990, 380);
  ctx.lineTo(990, 375);
  ctx.moveTo(1033, 323);
  ctx.arc(989, 329, 45, 0, 2 * Math.PI);
  ctx.moveTo(990, 285);
  ctx.lineTo(990, 275);
  ctx.moveTo(1033, 230);
  ctx.arc(989, 230, 45, 0, 2 * Math.PI);
  ctx.moveTo(989, 185);
  ctx.lineTo(989, 179);
  ctx.moveTo(1033, 133);
  ctx.arc(989, 133, 45, 0, 2 * Math.PI);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 1;
  ctx.stroke();
}

CanvasInit();
