console.log("-- Bermain dengan Warna");


// kasus 1: mengganti menjadi dark mode
const btnBG = document.getElementById('ubahBackground');
  btnBG.addEventListener('click', function() {
    // document.body.style.backgroundColor = '#333';
    // document.body.style.color = '#fff';
    document.body.classList.toggle('dark');
  });


// kasus 2: background random
const btnBGRandom = document.createElement('button');
const btnBGRandomText = document.createTextNode('Ubah Background Random!');
  btnBGRandom.appendChild(btnBGRandomText);
  btnBGRandom.setAttribute('type', 'button');
  btnBGRandom.setAttribute('id', 'ubahBackgroundRandom');
  document.querySelector('.container').appendChild(btnBGRandom);
  // btnBG.after(btnBaru);

  btnBGRandom.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });


// kasus 3: merubah background dengan slider
// NOTE: method .value khusus untuk element input
const sectionA = document.querySelector('section#a');
const sliderMerah = document.getElementById('sMerah');
const sliderHijau = document.getElementById('sHijau');
const sliderBiru = document.getElementById('sBiru');
const sliderOpacity = document.getElementById('sOpacity');

sectionA.addEventListener('input', function() {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  const a = sliderOpacity.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});

const colorPickerBG = document.querySelector('input[type=color]');
  colorPickerBG.addEventListener('change', function() {
    const rgb = colorPickerBG.value;
    document.body.style.backgroundColor = rgb;
  });


// kasus 4: jika kita menggerakan mouse, background akan berubah
document.body.addEventListener('mousemove', function(e) {
  // posisi mouse (clientX & clientY) dan ukuran browser (window.innerWidth)
  const posisiX = Math.floor(e.clientX / window.innerWidth * 255);
  const posisiY = Math.floor(e.clientY / window.innerHeight* 255);

  this.style.transition = '0.10s';
  this.style.backgroundColor = `rgb(${posisiX}, ${posisiY}, 100)`;
});






console.log(window.innerWidth);
console.log(window.innerHeight);
