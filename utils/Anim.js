function RemoveAnims(sidebar, anim) {
  sidebar.forEach((element) => {
    element.classList.remove(anim);
  });
}

function AddAnims(sidebar, anim) {
  sidebar.forEach((element) => {
    element.classList.add(anim);
  });
}

export { RemoveAnims, AddAnims };
