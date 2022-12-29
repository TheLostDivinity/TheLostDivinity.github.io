import { createElementWithClass } from "../utils/createElementsWithClass.js";
import monsters from "../utils/Monsters.json" assert { type: "json" };

function generateSeed() {
  // Create a base Date object for the seed
  const baseSeed = new Date();

  let DayIdentifier = "0" + (baseSeed.getDay() + 1).toString();
  let MonthIdentifier =
    baseSeed.getMonth() + 1 < 10 ? "0" + baseSeed.getMonth().toString : baseSeed.getMonth().toString();
  let DateIdentifier = baseSeed.getDate() < 10 ? "0" + baseSeed.getDate().toString() : baseSeed.getDate().toString();
  let YearIdentifier = (baseSeed.getFullYear() + 5).toString();

  let Seed = DayIdentifier + MonthIdentifier + DateIdentifier + YearIdentifier;
  console.log(Seed);
  return Seed;
}

const seed = generateSeed();

function seededRandom(seed, arr) {
  let random = Math.sin(seed) * 1000;
  return Math.abs(Math.floor(random % arr.length));
}

/// Filter the data.json
const PartyLevel = 5;

const monsterWithLocale = monsters.filter((monster) => monster.Locale.length != 0);

const easyMonsters = monsterWithLocale.filter((monster) => monster.CR <= PartyLevel);
const mediumMonsters = monsterWithLocale.filter((monster) => monster.CR >= PartyLevel && monster.CR <= PartyLevel + 2);
const hardMonsters = monsterWithLocale.filter((monster) => monster.CR >= PartyLevel + 3);

// Create the indexes
const easyMonsterIndex = seededRandom(seed, easyMonsters);
const mediumMonsterIndex = seededRandom(seed, mediumMonsters);
const hardMonsterIndex = seededRandom(seed, hardMonsters);

const easyHunt = easyMonsters[easyMonsterIndex];
const mediumHunt = mediumMonsters[mediumMonsterIndex];
const hardHunt = hardMonsters[hardMonsterIndex];

const easyHuntLocale = easyHunt.Locale[seededRandom(seed, easyHunt.Locale)];
const mediumHuntLocale = mediumHunt.Locale[seededRandom(seed, mediumHunt.Locale)];
const hardHuntLocale = hardHunt.Locale[seededRandom(seed, hardHunt.Locale)];

const Hunts = [easyHunt, mediumHunt, hardHunt];
const HuntsLocale = [easyHuntLocale, mediumHuntLocale, hardHuntLocale];

Hunts.map((hunt, i) => {
  console.log(hunt);

  const rootContainer = document.querySelector(".container");
  const cardContainer = createElementWithClass("div", "card");

  // Canvas creation
  const cardCanvas = createElementWithClass("canvas", "decocanv");
  cardCanvas.setAttribute("width", "350px");
  cardCanvas.setAttribute("height", "550px");

  const cardTitle = createElementWithClass("p", "cardTitle");
  const cardTitleText = document.createTextNode(`Hunt a ${hunt.name}`);

  const cardDescription = createElementWithClass("ul", "cardDescription");
  const locale = createElementWithClass("li", "none");
  const localeText = document.createTextNode(`Locale: ${HuntsLocale[i]}`);

  const reward = createElementWithClass("li", "none");
  const rewardText = document.createTextNode("Rewards: 100gp");

  const difficulty = createElementWithClass("li", "none");
  const difficultyText = document.createTextNode(`Difficulty: ${i === 0 ? "Easy" : i === 1 ? "Medium" : "Hard"}`);

  // Change card bg image

  cardContainer.style.backgroundImage = `url("./Assets/Locale/${HuntsLocale[i]}.jpg")`;
  // Start of constructing the card:

  // append Text to li elements
  locale.appendChild(localeText);
  reward.appendChild(rewardText);
  difficulty.appendChild(difficultyText);

  // append lis to ul element
  cardDescription.appendChild(reward);
  cardDescription.appendChild(locale);
  cardDescription.appendChild(difficulty);

  // append card Title text to text

  cardTitle.appendChild(cardTitleText);

  // append title, description and canvas

  cardContainer.appendChild(cardCanvas);
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardDescription);

  // Append container to root
  rootContainer.appendChild(cardContainer);
});
/* CANVAS  */

function CardCanvas(color, width, Captype) {
  const canvas = [].slice.call(document.getElementsByClassName("decocanv"));

  canvas.forEach((element) => {
    let ctx = element.getContext("2d");

    ctx.strokeStyle = `${color}`;
    ctx.lineWidth = `${width}`;
    ctx.lineCap = `${Captype}`;

    ctx.strokeStyle = "Goldenrod";
    ctx.lineWidth = "2";
    ctx.lineCap = "Round";

    ctx.beginPath();
    ctx.arc(350, 490 + 50, 50, 3.1, 2 * Math.PI);
    ctx.moveTo(300, 491 + 50);
    ctx.lineTo(15, 491 + 50);
    ctx.moveTo(350, 490 + 50);
    ctx.arc(350, 300, 35, 1, 1 * Math.PI);
    ctx.moveTo(340, 330);
    ctx.arc(325, 330, 15, 0, 2 * Math.PI);
    ctx.stroke();
  });
}

CardCanvas();
