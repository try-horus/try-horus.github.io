const words = ["connects", "stores", "correlates", "explores", "harnesses", "centralizes"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = words[i];
}

setInterval("_changeText()", 800);