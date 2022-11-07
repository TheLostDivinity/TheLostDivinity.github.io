// Import the Spell Object

import { Spell } from "./Spell.js";

//-- OCEAN'S OMEN SPELLS

const AquaJet = new Spell(
  "AquaJet",
  1,
  "Evocation",
  "1 Action",
  "40ft",
  "V, S",
  "Instantaneous",
  `The caster transforms into water and burst forwards in a line up to 40ft stopping at the first thing that crosses its path.The target must make a dexterity saving throw. On a failed save the target takes 2d10 bludgeoning damage or half as much damage on a successful save. The damage increases by 1d10 for each level casted above 1st.`,
  1,
  "Flow of Water",
  "./assets/AquaJet.png"
);

const Dissecation = new Spell(
  "Dissecation",
  3,
  "Necromancy",
  "1 Action",
  "60ft",
  "V, S",
  "Instantaneous",
  `The caster chooses up to 3 creatures it can see and rips the water out of the target's cells . Each target must make a constitution saving throw. On a failed save the target takes 4d12 necrotic damage, on a successful one the target doesn't take damage. If the target critically fails the save it gets an exhaustion level. You can target one more creature and the damage increases by 1d12 for each level above 3rd.`,
  2,
  "AquaJet",
  "./assets/Dissecation.png"
);

const Hyponatremia = new Spell(
  "Hyponatremia",
  3,
  "Necromancy",
  "1 Action",
  "60ft",
  "V, S",
  "Instantaneous",
  `The caster chooses up to 3 creatures it can see and injects their cells with dangerous amount of water harming bodily functions. Each target must make a constitution saving throw. On a failed save the target takes 6d6 necrotic damage or half as much on a successful one. If the target critically fails the save it gets poisoned. You can target one more creature and the damage increases by 1d6 for each level above 3rd.`,
  2,
  "AquaJet",
  "./assets/Hyponatremia.png"
);

const WaterRend = new Spell(
  "Water Rend",
  5,
  "Evocation",
  "1 Action, Concentration",
  "30ft",
  "V, S",
  "1 Minute",
  `The caster chooses up to 3 targets, Water materializes into the air and is launched at the target. Upon landing a hit the target feels inmmense dread as imaginary waves only visible to the target crashes onto it trying to waterboard him on what seems as eternal torture. The target must make a Dexterity saving throw. On a failed save the target takes 8d6 of bludgeoning damage or half as much damage on a successful one.
      At the start of the target turn it must make a wisdom saving throw. On a failed save it takes 2d6 psychic damage, on a success this effect ends. This spell auments its damage for 1d6 & 1d6 for each level above 5th.`,
  3,
  "Dissecation / Hyponatremia",
  "./assets/WaterRend.png"
);

const PonderousDownpour = new Spell(
  "Ponderous Downpour",
  9,
  "Evocation",
  "1 Action",
  "Self, 300ft Radius Cylinder",
  "V, S",
  "1 Minute",
  `The caster evokes the true power of the ocean transforming the terrain around itself into an Ocean and creating a Downpour in a cylinder of 300ft radius. The caster can choose creatures equal to the modifier used for Water Soul and make them immune to the downpour. Each creature takes 2d12 acid damage ignoring resistances & invulnerabilities except those granted by the Wave. While this spell is active the caster gains Downpour points equal to the modifier used in Water Soul. The user can cast Tsunami for 2 Downpour points or Control water for 1 Downpour point. If the Ocean's Omen runs out of Downpour points it dries out and loses its magic properties until replenished in the heart of Zeliz.`,
  5,
  "Water Rend, Zelial's Blessing",
  "./assets/PonderousDownpour.png"
);

const WaterFilm = new Spell(
  "Water Film",
  2,
  "Transmutation",
  "1 Bonus Action",
  "Touch",
  "V, S",
  "1 Hour, Concentration",
  `You can touch up to 2 willing creatures. The body of the willing creatures is covered on a water protective film that shields from extreme heat & cold. This film also protects from sticky liquids / rime and gives advantage on saving throws that have to do with temperature. You can target 1 more creature for each level casted above the 2nd.`,
  1,
  "Flow of Water",
  "./assets/WaterFilm.png"
);

const WaterArmor = new Spell(
  "Water Armor",
  4,
  "Abjuration",
  "1 Action, Reaction",
  "Touch",
  "V, S",
  "1 Minute, Concentration",
  `Torrential waters cover you, guarding you against attacks providing +5 AC. If the attacks succeds the target receives 6d10 bludgeoning damage. If the target wields a Meele weapon it must succed on a Strength saving throw or become unarmed. For each level above the 4th add 1d10 to the damage, Every 2 levels you can choose another creature to get the benefits of Water Armor (lvl 6 - 2, lvl 8 - 3, Lvl 9 - 4)`,
  2,
  "Water Film",
  "./assets/WaterArmor.png"
);

const SteamScreen = new Spell(
  "Steam Screen",
  6,
  "Evocation",
  "1 Action",
  "30ft Radius Sphere",
  "V, S",
  "10 Minutes",
  `You create from nothingness a steam screen that heavily obscures vision. This steam screen wraps around corners and fill the whole space. When a creature enters the area of the spell it must make a constitution saving throw. On a failed save the creature takes 11d6 of fire damage. if the creature spends more than 3 turns inside the cloud it falls incapacitated. For each level above 6th the damage increases by 1d6.`,
  2,
  "Water Armor",
  "./assets/SteamScreen.png"
);

const WaterDome = new Spell(
  "Water Dome",
  8,
  "Abjuration",
  "1 Action",
  "Up to 40ft Radius Sphere",
  "V, S",
  "1 Hour",
  `A dome of water arises from a point you've chosen covering a designed radius. This dome totally obscures vision and provides total cover from projectiles. You choose up to 5 creatures that can easily cross the boundaries of the dome. Every other creature that wants to enter or leave the dome must make a Strength saving throw. On a failed saving throw the target takes 12d10 bludgeoning 0 and the target is pushed inwards or outwards. On a successful save the target takes 8d10 bludgeoning damage. The damage increases 1d10 & 1d10 damage for each level above the 8th.`,
  3,
  "Steam Screen, Water Soul",
  "./assets/WaterDome.png"
);

const FlowOfWater = new Spell(
  "Flow of Water",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Ocean's Omen",
  "Permanent",
  `As you wield the Ocean's Omen the weapon feels different and easier to use. This lets you use your Dexterity modifier instead of Strength modifier while wielding the weapon. At the same time the slashing of the weapon becomes magical.`,
  1,
  "Ocean's Omen",
  "./assets/FlowOfWater.png"
);

const WaterTerrain = new Spell(
  "Water Terrain",
  7,
  "Transmutation",
  "1 Action",
  "120ft Radius Sphere",
  "V, S",
  "1 Hour",
  `As you wield the Ocean's Omen the weapon feels different and easier to use. This lets you use your Dexterity modifier instead of Strength modifier while wielding the weapon. At the same time the slashing of the weapon becomes magical.
    <br>
    <ul style="list-style: none;">
    <li>+20 ft of movement</li>
    <li>2d8 of bludgeoning damage to every attack</li>
    <li>Move trough creatures without provoking oportunity attacks.</li>
    </ul>`,
  2,
  "Water Soul",
  "./assets/WaterTerrain.png"
);

const WaterSelf = new Spell(
  "Water Self",
  "Passive",
  "Transmutation",
  "1 Bonus Action",
  "Self",
  "V, S",
  "1 Hour",
  `You can transform into water, solid, liquid or gas. You can squeeze trough minimal spaces without difficulty. You become untargeteable but you cannot attack. You can use this ability n times equal to the Water Soul modifier. Charges gets replenished after a Long Rest.`,
  2,
  "Flow of Water",
  "./assets/WaterSelf.png"
);

const WaterSoul = new Spell(
  "Water Soul",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Ocean's Omen",
  "Permanent",
  "You have reached consonance with the tides within yourself unlocking yet the new power of the Ocean's Omen. You can now freely choose the Ocean's Omen modifier. At the same time tide within the weapon has grown stronger. Ocean's Omen now deals an additional 1d10.",
  2,
  "Flow of Water",
  "./assets/WaterSoul.png"
);

const ZelialBlessing = new Spell(
  "Zelial's Blessing",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Ocean's Omen",
  "Permanent",
  `From the ocean of the past to the oceans of the now, Zelial & Zeliz have granted you it's blessing. You now have the unlimited power of the Ocean's Omen and can get Ocean Points trough certain means. This blessing also adds 1d10 to the damage of the Ocean's Omen along the capacity of clearly communicate with Zeliz.`,
  3,
  `Water Soul, ???`,
  "./assets/ZelialBlessing.png"
);

//-- CROWN OF MEMORY SPELLS

const NaturesEcho = new Spell(
  "Nature's Echo",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Crown Of Memories",
  "Permanent",
  `Once the Crown of Memories has manifested on thy blessed by nature the wielder gains Memory / Echo Points equal to their wisdom modifier plus proficiency.
    <p>You can then roll a d20 to gain more Memory points.</p>
    <div class="tg-wrap"><table class="tg">
    <thead>
      <tr>
        <th class="tg-18eh">D20</th>
        <th class="tg-18eh">Points Gained</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-33x2">1</td>
        <td class="tg-33x2"> - WIS modifier &amp; Proficiency Bonus</td>
      </tr>
      <tr>
        <td class="tg-xwyw">2-9</td>
        <td class="tg-xwyw"> - Half of WIS modifier &amp; Proficiency Bonus, Rounded down</td>
      </tr>
      <tr>
        <td class="tg-33x2">10</td>
        <td class="tg-33x2">+ 0</td>
      </tr>
      <tr>
        <td class="tg-xwyw">11-19</td>
        <td class="tg-xwyw">+ Half of WIS modifier &amp; Proficiency Bonus, Rounded Up</td>
      </tr>
      <tr>
        <td class="tg-33x2">20</td>
        <td class="tg-33x2">+ WIS modifier &amp; Proficiency Bonus</td>
      </tr>
    </tbody>
    </table></div>
    <p>Memory points can be expended to enhance Memories bestowed by the Crown of memories. . You must spend memory points equal to level of the spell casted.</p>
    <div class="tg-wrap"><table class="tg">
      <thead>
      <tr>
        <th class="tg-18eh">Effect</th>
        <th class="tg-18eh">Description</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-33x2">Vivid Memory</td>
          <td class="tg-33x2">1+ Dice of Damage &amp; +WIS modifier to save DC</td>
        </tr>
        <tr>
          <td class="tg-xwyw">Lasting Memory</td>
          <td class="tg-xwyw"> Concentration Memories don't require concentration. Instantaneous spells are repeated next round.</td>
        </tr>
        <tr>
          <td class="tg-33x2">Eclectic Memory</td>
          <td class="tg-33x2">The area of the memory is boraden by a total of +30ft. The area of the spell is totally maleable now.</td>
        </tr>
      </tbody>
      </table></div>
    `,
  0,
  "Crown of Memories",
  "./assets/NatureEchoes.png"
);

const CallofNature = new Spell(
  "Call of Nature",
  "9th",
  "Evocation",
  "1 Action",
  "Check Call of Nature table",
  "V, S",
  "Check Call of nature table",
  `The caster channels the power of nature trough the Crown of Memories calling nature itself casting one of the following Memories. <thead>
<div class="tg-wrap">
  <table class="tg tgg">
    <thead>
      <tr>
        <th class="tg-18eh">D10</th>
        <th class="tg-18eh">Memory Evoked</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-33x2">1</td>
        <td class="tg-33x2">Indignation</td>
      </tr>
      <tr>
        <td class="tg-xwyw">2</td>
        <td class="tg-xwyw">Eruption</td>
      </tr>
      <tr>
        <td class="tg-33x2">3</td>
        <td class="tg-33x2">Maelstorm</td>
      </tr>
      <tr>
        <td class="tg-xwyw">4</td>
        <td class="tg-xwyw">Cyclone</td>
      </tr>
      <tr>
        <td class="tg-33x2">5</td>
        <td class="tg-33x2">Sheer Cold</td>
      </tr>
      <tr>
        <td class="tg-xwyw">6</td>
        <td class="tg-xwyw">Gravity Well</td>
      </tr>
      <tr>
        <td class="tg-33x2">7</td>
        <td class="tg-33x2">Negative Gate</td>
    </tr>
      <tr>
        <td class="tg-xwyw">8</td>
        <td class="tg-xwyw">One Thousand Vines</td>
    </tr>
      <tr>
        <td class="tg-33x2">9</td>
        <td class="tg-33x2">Pshychic Ravage</td>
      </tr>
    <tr>
      <td class="tg-xwyw">10</td>
      <td class="tg-xwyw">Radiant Lance</td>
    </tr>
  </tbody>
</table>
</div>`,
  9,
  "Chaotic Nature ( Ode To The Wind ) / Orderly Nature ( Divine Saber )",
  "./assets/CallOfNature.png"
);

const AirPressure = new Spell(
  "Air Pressure",
  3,
  "Evocation",
  "1 Action",
  "30ft radius 60ft height cylinder",
  "V, S",
  "1 minute, Concentration",
  `The caster channels the power of nature trough the Crown of Memories evoking a massive amount of air pressuring down onto the foes, making it difficult terrain and making any flying creature hit the ground inmmediately. Each creature must make a Strength saving throw. On a failed save the creature takes 6d6 bludgeoning damage and falls prone. On a successful save the creature takes half the damage and doesn't fall prone.<p class="phi"><b>At Higher levels:</b> for each level above the 3rd you add 1d6 to the damage.</p>`,
  3,
  "Guardian Circle / Lapidis Stele",
  "./assets/AirPressure.png"
);

const Disruption = new Spell(
  "Disruption",
  6,
  "Evocation",
  "1 Action",
  "10ft square, 120ft line, 20ft radius",
  "V,S",
  "Instantaneous",
  `The caster channels the power of nature trough the Crown of Memories evoking 2 Giant Vine Earth hands at the vertices of 120ft line. The creature must succeed on a dexterity saving throw or be restrained. At the start of the casters next turn this hands move abruptly to collide with each other dealing up 1d6 of bludgeoning damage up to 12d6. When the hands collide the disruption of the earth arises dealing a total of 10d10 bludgeoning damage.<p class="phi"><b>At Higher levels:</b> for each level above the 6th you add 1d10 to the last part of the spell.</p>`,
  6,
  "Air Pressure",
  "./assets/Disruption.png"
);

const DivineSaber = new Spell(
  "Divine Saber",
  8,
  "Evocation",
  "1 Action",
  "10ft Square, 20ft radius",
  "V,S",
  "Instantaneous",
  `The caster channels the power of nature trough the Crown of Memories summoning a from above the light of nature. The lighting hits on the outer edge of the radius and each creature must succeed on a Dexterity saving throw or take 12d10 radiant damage or half as much on a failed save. Then after a turn passes giant lighting bolt strikes the center of the radius dealing 15d10 on failed Dexterity save or half as much damage on a successful one.<p class="phi"><b>At Higher levels:</b> for each level above 8th you add 1d10 to both damages.</p>`,
  8,
  "Disruption",
  "./assets/DivineSaber.png"
);

const EarthSurge = new Spell(
  "EarthSurge",
  1,
  "Evocation",
  "1 Action",
  "15ft cone",
  "V,S",
  "Instantaneous",
  `The caster channels the power of nature trough the Crown of Memories making earth erupt on a 15ft cone in front of them. Every creature in the cone must make a Dexterity saving throw. On a failed save each creature takes 2d6 force damage and falls prone, on a successful one it takes half the damage and it doesn't fall prone.<p class="phi"><b>At Higher levels:</b> for each level above 1st you can expand the area by 5 ft up to 30ft and deal 1d6 extra damage.</p>`,
  1,
  "Nature's Echoes",
  "./assets/EarthSurge.png"
);

const ElectricSeal = new Spell(
  "ElecticSeal",
  1,
  "Evocation",
  "1 Action",
  "10ft square, 120ft",
  "V,S",
  "1 minute, Concentration",
  `The caster channels the power of nature trough the Crown of Memories summoning a small sigil of electricity that deals 2d6 of lighting damage. If this memory is casted at a higher level and the sigils are no more than 60ft apart an electric current appears between those sigils, creating a lighting wall. If a creature goes trough this wall it must make a Constitution saving throw. On a failed save it takes 1d8 lighting damage, on a successful one it takes half the amount.<p class="phi"><b>At Higher levels:</b> for each level above 1st you can summon 1 more sigil and add 1d6 to the damage of the sigils and 1d8 to the wall damage.</p>`,
  1,
  "Nature's Echoes",
  "./assets/ElectricSeal.png"
);

const GuardianCircle = new Spell(
  "Guardian Circle",
  2,
  "Abjuration",
  "1 Action",
  "15ft radius 5ft height cylinder",
  "V,S",
  "1 Minute, Concentration",
  `The caster channels the power of nature trough the Crown of Memories hitting the weapon in the ground rising a shimmering wall 5ft tall. Every friendly creature heals for 1d10 plus caster proficiency bonus. If a creature tries to enter the circle it must succeed on a charisma saving throw or be repelled out of the circle.

  <p class="phi"><b>At Higher levels:</b> You add 1d10 to the healing for each level above the 2nd</p>`,
  2,
  "Nature's Echoes",
  "./assets/GuardianCircle.png"
);

const IcePrison = new Spell(
  "Ice Prison",
  4,
  "Evocation",
  "1 Action",
  "30ft radius",
  "V,S",
  "Up to 10 minutes, Concentration",
  `The caster channels the power of nature trough the Crown of Memories freezing the terrain on a 30ft radius and later arising a 10ft line in the outer edge of the circle creating a convex structure. You can choose up to 2 creatures to gain the following benefits inside the prison:
  <ul>
    <li>10ft movement</li>
    <li>1d6 cold damage to weapon attacks</li>
  </ul>
  <p>Otherwise the area becomes difficult terrain and if a creature wants to escape physically it must make a Dexterity saving throw or slide 5ft deeper into the prison.</p>
  
  <p class="phi"><b>At Higher levels:</b> for each level above 4th you can choose one more creature to gain the benefits.</p>`,
  4,
  "Earth Surge / Electric Seal",
  "./assets/IcePrison.png"
);

const LapidisStele = new Spell(
  "Lapidis Stele",
  2,
  "Evocation",
  "1 Action",
  "30ft",
  "V,S",
  "1 Minute Concentration",
  `The caster channels the power of nature trough the Crown of Memories rising a pillar from a surface with a square base of 5ft up to 10ft of height. At the start of the caster's turn this pillar emits at its base a 10ft radius shockwave that deals 2d8 of force damage to everyone except its caster.

  <p class="phi"><b>At Higher levels:</b> You can rise another pillar for each level above the 2nd</p>`,
  2,
  "Nature's Echoes",
  "./assets/LapidisStele.png"
);

const Moonfall = new Spell(
  "Moonfall",
  7,
  "Evocation",
  "1 Action",
  "30ft Radius, Self",
  "V,S",
  "Instantaneous",
  `The caster channels the power of nature trough the Crown of Memories stabbing its weapon into the ground and employing the power of the moon in order to attract enemy foes. Every enemy targeted by this spell must make a Strength saving throw. On a failed save the attraction is up to 25ft on a successful one there's no attraction at all. At the end of the caster next turn this spell deals 12d8 radiant damage in a 30 ft radius where it was first casted.

  <p class="phi"><b>At Higher levels:</b> for each level above 7th it deals 1d8 extra damage.</p>`,
  7,
  "Ice Prison",
  "./assets/Moonfall.png"
);

const NaturesChaos = new Spell(
  "Nature's Chaos",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Crown of Memories",
  "Permanent",
  "The essence of nature may seem chaotic at first but there's always a method to the madness. The details of the system may seem chaotic at first but everything has a purpose chosen and carried by nature. The chaos of nature embodies the ravage it can cause.",
  0,
  "Crown of Memories",
  "./assets/NaturesChaos.png"
);

const NaturesEquinox = new Spell(
  "Nature's Equinox",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Crown of Memories",
  "Permanent",
  `To those ignorant to the power of nature it may seem as a chaotic system at first but those enligthened by it may find the method to the madness.

  <p>The one who portrays nature first starts at an the Equinox of nature between the Chaos and Order of the system. Thy bestowed the power by the nature and it's memory must decided how it will portray itself.</p>
  <ul>
    <li><b>Nature's Order:</b> Characterized by cycles and meaning the Order in nature comes from above, the big picture the seeming picture of a system working in perfect harmony.</li>
  
    <li><b>Nature's Chaos:</b> Characterized by the quirks and features of what seems to be an orderly system the devil lies in the details. Such details are the embodiment of chaos the uncertainty of what seems to be an orderly system</li>
  </ul>
  
  <p>Those who choose an orderly portray of nature will access to its order and those who portray it as chaos will access to its madness.</p>`,
  0,
  "Crown of Memories",
  "./assets/NatureEquinox.png"
);

const NaturesOrder = new Spell(
  "Nature's Order",
  "Passive",
  "Divination",
  "N/A",
  "N/A",
  "Crown of Memories",
  "Permanent",
  `The nature is an orderly system that balance carefully its components to achieve true harmony. Even though it may not seem like it, those who are enlightened by nature itself can see the big picture and the order that comes from within the essence of nature.`,
  0,
  "Crown of Memories",
  "./assets/NatureOrder.png"
);

const NaturesChosen = new Spell(
  "Nature's Chose",
  "Passive",
  "Divination",
  "N/A",
  "Self",
  "N/A",
  "Permanent",
  `You can choose a number of willingly creatures up to Your Wisdom Modifier + Proficiency bonus to give the Nature's Favor. This make them immune to damage or harmful effect from any of the Memories the Crown of Memories has.`,
  0,
  "Crown of memories",
  "./assets/NaturesChosen.png"
);

const NaturesFavor = new Spell(
  "Nature's Favor",
  "Passive",
  "Divination",
  "1 Bonus Action",
  "120ft",
  "V,S",
  "1 Hour",
  `You can choose a number of willingly creatures up to Your Wisdom Modifier + Proficiency bonus to give the Nature's Favor. This make them immune to damage or harmful effect from any of the Memories the Crown of Memories has.`,
  0,
  "Nature's Chosen",
  "./assets/NaturesFavor.Png"
);

const OdeToTheWind = new Spell(
  "Ode of to the wind",
  "8th",
  "Evocation",
  "1 Action",
  "120ft, 30ft radius",
  "V,S",
  "1 Minute, Concentration",
  `The caster channels the power of nature trough the Crown of Memories choosing a point it can see creating a giant current of air that attracts everything in sight in a 30ft radius to it's epicenter at a speed of 15ft per turn on a failed Strength Save or 5ft on a successful one. Everything on a 15ft radius of the epicenter takes 8d4 of magical slashing per turn. The caster can choose to end concentration releasing the power of the Wind dealing 1d8 of force damage up to 10d8. If the spell reaches is not released by the caster then it will collapse on itself dealing 14d8 and leaving everyone affected by the spell prone.

  <p class="phi"><b>At Higher levels:</b> for each level above 7th it deals 1d8 extra damage.</p>`,
  0,
  "Moonfall",
  "./assets/OdeToTheWind.png"
);

//&&===================&&
//&&     Exports       &&
//&&===================&&

const OceansOmenSpells = [
  FlowOfWater,
  WaterSoul,
  ZelialBlessing,
  WaterSelf,
  WaterTerrain,
  AquaJet,
  Hyponatremia,
  Dissecation,
  WaterRend,
  PonderousDownpour,
  WaterFilm,
  WaterArmor,
  SteamScreen,
  WaterDome,
];

const CrownOfMemoriesSpells = [
  NaturesEcho,
  CallofNature,
  AirPressure,
  Disruption,
  DivineSaber,
  EarthSurge,
  ElectricSeal,
  GuardianCircle,
  IcePrison,
  LapidisStele,
  Moonfall,
  NaturesChaos,
  NaturesEquinox,
  NaturesOrder,
  NaturesChosen,
  NaturesFavor,
  OdeToTheWind,
];

export { OceansOmenSpells, CrownOfMemoriesSpells };
