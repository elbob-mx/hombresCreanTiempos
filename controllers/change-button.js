let btn = document.getElementById("btn");
let result = document.getElementById("result");
let bgVideo = document.getElementById("bg-video");
let crean = document.getElementById("crean");

function whiteToBlack () {
  document.getElementById("btn").classList.remove('text-white');
  document.getElementById("btn").classList.add('text-black');
  document.getElementById("result").classList.remove('text-white');
  document.getElementById("result").classList.add('text-black');
};

function blackToWhite () {
  document.getElementById("btn").classList.remove('text-black');
  document.getElementById("btn").classList.add('text-white');
  document.getElementById("result").classList.remove('text-black');
  document.getElementById("result").classList.add('text-white');
}

function change() {

  if (btn.innerHTML == 'nosotros', result.innerHTML == 'estos tiempos') {
    btn.innerHTML = 'tiempos difíciles';
    crean.innerHTML = 'crean';
    result.innerHTML = 'personas fuertes';
    document.getElementById("bg-video").classList.remove('scale-x-flip');
    bgVideo.setAttribute('src', 'video/bucha.mp4')
    whiteToBlack ();

    } else if (btn.innerHTML == 'tiempos difíciles', result.innerHTML == 'personas fuertes') {
      btn.innerHTML = 'personas fuertes';
      result.innerHTML = 'buenos tiempos';
      document.getElementById("bg-video").classList.add('scale-x-flip');
      bgVideo.setAttribute('src', 'video/Women at work WWII 1943.mp4');
      blackToWhite ();

    } else if (btn.innerHTML == 'personas fuertes', result.innerHTML == 'buenos tiempos') {
      btn.innerHTML = 'buenos tiempos';
      result.innerHTML = 'personas débiles';
      bgVideo.setAttribute('src', 'video/good times-shade.mp4');
      // btn.setAttribute('text-black', 'text-white');

    } else if (btn.innerHTML == 'buenos tiempos', result.innerHTML == 'personas débiles') {
      btn.innerHTML = 'personas débiles';
      result.innerHTML = 'tiempos difíciles';
      bgVideo.setAttribute('src', 'video/Putin Laughing.mp4');
      whiteToBlack ();

    } else if (btn.innerHTML == 'personas débiles', result.innerHTML == 'tiempos difíciles') {
      btn.innerHTML = 'tiempos difíciles';
      result.innerHTML = 'personas fuertes';
      bgVideo.setAttribute('src', 'video/bucha.mp4');      
    };
    
    console.log('función procesada');
  };

