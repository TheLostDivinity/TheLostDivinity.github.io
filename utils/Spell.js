function Spell(name, level, school, casting, range, components, duration, description, points, requirement, img) {
  this.name = name;

  if (level == 1) {
    this.school = `${level}st Level, School of ${school}.`;
  } else if (level == 2) {
    this.school = `${level}nd Level, School of ${school}.`;
  } else if (level == 3) {
    this.school = `${level}rd Level, School of ${school}.`;
  } else if (level > 3) {
    this.school = `${level}th Level, School of ${school}`;
  } else if (level == "Passive") {
    this.school = `${level}, School of ${school}`;
  }

  this.casting = `Casting Time: ${casting}`;

  this.range = `Range: ${range}`;

  this.components = `Components: ${components}`;

  this.duration = `Duration: ${duration}`;

  this.description = description;

  this.points = `Points needed: ${points}`;

  this.requirement = `Skills Required: ${requirement}`;

  this.img = img;
}

export { Spell };
