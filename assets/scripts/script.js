const words = ["transforms", "transports", "centralizes", "stores", "explores", "harnesses"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = words[i];
}

setInterval("_changeText()", 800);