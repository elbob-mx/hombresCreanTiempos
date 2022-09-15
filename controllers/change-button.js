function change() {
  // alert("change");
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");
  btn.innerHTML = "tiempos difíciles";
  if (btn.innerHTML == "tiempos difíciles") {
    result.innerHTML = "personas fuertes";
  };
  if (btn.value == "debiles") {
    btn.value = "dificiles";
  };
};
