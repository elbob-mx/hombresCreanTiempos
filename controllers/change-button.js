function change1() {
  alert("change2");
var btn = document.getElementById("btn");
btn.value = 'debiles';
btn.innerHTML = 'tiempos difíciles';
  if (btn.innerHTML == 'tiempos difíciles') {
    result.innerHTML = 'personas fuertes';
  };
  if (btn.value == 'debiles') btn.value = 'dificiles';
  else btn.value = 'debiles';
};

function change2() {
  var btn = document.getElementById("btn");
  btn.value = 'dificiles';
  btn.innerHTML = 'personas fuertes';
    if (btn.innerHTML == 'personas fuertes') {
      result.innerHTML = 'buenos tiempos';
    };
    if (btn.value == 'dificiles') btn.value = 'fuertes';
    else btn.value = 'dificiles';
  };

  function change3() {
    var btn = document.getElementById("btn");
    btn.value = 'fuertes';
    btn.innerHTML = 'buenos tiempos';
      if (btn.innerHTML == 'buenos tiempos') {
        result.innerHTML = 'personas debiles';
      };
      if (btn.value == 'fuertes') btn.value = 'debiles';
      else btn.value = 'fuertes';
    };