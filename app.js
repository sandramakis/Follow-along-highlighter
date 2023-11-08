"use strict";
const main = document.querySelectorAll("main p");

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span"); //create a highlight span that'll update the width and height of the hovered element
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", highlightLink)
);

main.forEach((p) => p.addEventListener("mouseenter", highlightLink));
