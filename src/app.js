/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  appendDomainName(generateDomainNames());
};

function generateDomainNames() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".io", ".com", ".net"];
  let links = [];

  for (let pronoun in pronouns) {
    let domain = "";
    let pronounSelect = pronouns[pronoun];
    for (let adj in adjs) {
      let adjSelect = adjs[adj];
      for (let noun in nouns) {
        let nounSelect = nouns[noun];
        for (let ext in extensions) {
          let extSelect = extensions[ext];
          domain = pronounSelect + adjSelect + nounSelect + extSelect;
          links.push(domain);
        }
      }
    }
  }
  return links;
}

function appendDomainName(links) {
  let element = document.getElementById("text");
  element.innerHTML = "";
  element.innerHTML = "<ol><li>" + links.join("</li><li>") + "</li></ol>";
}
