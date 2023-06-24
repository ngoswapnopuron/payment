var card13 = document.querySelector(".card--13");

card13.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card13.style.setProperty('--mouseX13', (e.clientX - ww) / 25);
  card13.style.setProperty('--mouseY13', (e.clientY - wh) / 25);

});