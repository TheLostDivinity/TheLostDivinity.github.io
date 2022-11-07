function ChangeSpell(Spell) {
  const Elements = Array.from(document.querySelector(".SideBar").children);

  Elements[0].textContent = Spell.name;
  Elements[1].src = Spell.img;
  Elements[2].textContent = Spell.school;
  Elements[3].textContent = Spell.casting;
  Elements[4].textContent = Spell.range;
  Elements[5].textContent = Spell.components;
  Elements[6].textContent = Spell.duration;
  Elements[7].innerHTML = Spell.description;
  Elements[8].textContent = Spell.points;
  Elements[9].textContent = Spell.requirement;
}

export { ChangeSpell };
