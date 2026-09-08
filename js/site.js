"use strict";

document.querySelectorAll(".mobile-menu").forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.removeAttribute("open"));
  });
});
