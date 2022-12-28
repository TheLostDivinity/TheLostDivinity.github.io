function createElementWithClass(element, className) {
  const ele = document.createElement(element);
  ele.classList.add(className);

  return ele;
}

export { createElementWithClass };
