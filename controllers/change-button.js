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

function change() {
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");
  var bgVideo = document.getElementById("bg-video");
  
  btn.innerHTML = upQuotes[0];

  if (btn.innerHTML == upQuotes[0]) {
    result.innerHTML = downQuotes[0];
  };

  if (btn.value == "debiles") {
    btn.value = "dificiles";
  };

  console.log('función procesada');
  console.log("frase: " + " " + upQuotes[0]);
  console.log("frase: " + " " + downQuotes[0]);
  console.log(bgVideo.src);  
}

/*
while (contador 'btn' < 3) {
  contador 'btn' ++ ;
  upQuotes[0++];
  downQuotes[0++];
}
*/