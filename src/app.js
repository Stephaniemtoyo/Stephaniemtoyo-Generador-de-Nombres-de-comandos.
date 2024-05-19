/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["the", "our"];
  let adjetivo = ["great", "wonderful", "big"];
  let sustantivo = ["coworker", "hardworking", "founder"];
  let extension = [".com", ".net"];

  for (let pronombres of pronombre) {
    for (let adjetivos of adjetivo) {
      for (let sustantivos of sustantivo) {
        for (let extensions of extension) {
          console.log(`${pronombres}${adjetivos}${sustantivos}${extensions}`);
        }
      }
    }
  }
};
