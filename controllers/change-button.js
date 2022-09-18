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

  if (btn.innerHTML == 'personas débiles', result.innerHTML == 'tiempos difíciles') {
    bgVideo.setAttribute('src', 'video/good times-shade.mp4')
    btn.innerHTML = 'tiempos difíciles';
    result.innerHTML = 'personas fuertes';
    document.getElementById("btn").classList.remove('text-black');
    document.getElementById("btn").classList.add('text-white');
    document.getElementById("result").classList.remove('text-black');
    document.getElementById("result").classList.add('text-white');

    } else if (btn.innerHTML == 'tiempos difíciles', result.innerHTML == 'personas fuertes') {
      btn.innerHTML = 'personas fuertes';
      result.innerHTML = 'buenos tiempos';
      bgVideo.setAttribute('src', 'video/bucha.mp4');
      document.getElementById("btn").classList.remove('text-white');
      document.getElementById("btn").classList.add('text-black');
      document.getElementById("result").classList.remove('text-white');
      document.getElementById("result").classList.add('text-black');

    } else if (btn.innerHTML == 'personas fuertes', result.innerHTML == 'buenos tiempos') {
      btn.innerHTML = 'buenos tiempos';
      result.innerHTML = 'personas débiles';
      bgVideo.setAttribute('src', 'video/good times-shade.mp4');
      btn.setAttribute('text-black', 'text-white');
      document.getElementById("btn").classList.remove('text-black');
      document.getElementById("btn").classList.add('text-white');
      document.getElementById("result").classList.remove('text-black');
      document.getElementById("result").classList.add('text-white');

    } else if (btn.innerHTML == 'buenos tiempos', result.innerHTML == 'personas débiles') {
      btn.innerHTML = 'personas débiles';
      result.innerHTML = 'tiempos difíciles';
      bgVideo.setAttribute('src', 'video/bucha.mp4');
      document.getElementById("btn").classList.remove('text-white');
      document.getElementById("btn").classList.add('text-black');
      document.getElementById("result").classList.remove('text-white');
      document.getElementById("result").classList.add('text-black');
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

