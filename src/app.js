/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".io", ".com", ".net"];
  let links = "";

  for (let pronoun in pronouns) {
    let pronounSelect = pronouns[pronoun];
    for (let adj in adjs) {
      let adjSelect = adjs[adj];
      for (let noun in nouns) {
        let nounSelect = nouns[noun];
        for (let ext in extensions) {
          let extSelect = extensions[ext];
          links += pronounSelect + adjSelect + nounSelect + extSelect + "<br>";
        }
      }
    }
  }
  let element = document.getElementById("text");
  element.innerHTML = links;
};
