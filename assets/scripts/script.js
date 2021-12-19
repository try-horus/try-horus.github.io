const words = ["connects", "stores", "correlates", "visualizes", "harnesses", "centralizes"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = words[i];
}

setInterval("_changeText()", 1200);