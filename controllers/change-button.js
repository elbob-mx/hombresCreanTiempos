const upQuotes = [
  'tiempos difíciles',
  'buenos tiempos',
  'personas fuertes',
  'personas débiles',
];

const downQuotes = [
  'personas fuertes',
  'personas débiles',
  'buenos tiempos',
  'tiempos difíciles',
];

var btn = document.getElementById("btn");
var result = document.getElementById("result");
var bgVideo = document.getElementById("bg-video");

function change() {
  
  btn.innerHTML = upQuotes[0];
  result.innerHTML = downQuotes[0];

  if (btn.innerHTML == 'personas débiles', result.innerHTML == 'tiempos difíciles') {
    } else if (btn.innerHTML == 'tiempos difíciles', result.innerHTML = 'personas fuertes') {
      bgVideo.setAttribute('src', 'video/good times-shade.mp4');
      }

  if (btn.value == "debiles") {
    btn.value = "dificiles";
  };
  
  console.log('función procesada');
  console.log("frase: " + " " + upQuotes[0]);
  console.log("frase: " + " " + downQuotes[0]);
  console.log(bgVideo.src);
  console.log(btn.value);  
  console.log(result.value);
};