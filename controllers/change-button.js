const upQuotes = [
  'tiempos difíciles',
  'buenos tiempos',
];

const downQuotes = [
  'personas fuertes',
  'personas débiles',
];

function change() {
  // alert("change");
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");
  btn.innerHTML = upQuotes[0];
  if (btn.innerHTML == upQuotes[0]) {
    result.innerHTML = downQuotes[0];
  };
  if (btn.value == "debiles") {
    btn.value = "dificiles";
  };
  console.log('función procesada');
  console.log(upQuotes[0]);
  console.log(downQuotes[0]);
};
