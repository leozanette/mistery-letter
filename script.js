let button = document.getElementById('criar-carta');
let estilo = ['magazine1', 'magazine2', 'newspaper'];
let tamanho = ['medium','big','reallybig'];
let rotate = ['rotateright','rotateleft'];
let skew = ['skewleft', 'skewright']
const countLetter = document.querySelector('#carta-contador');
let count = 0;


button.addEventListener('click', function () {
  count = 0;
  let p = document.getElementById('carta-gerada');
  let input = document.getElementById('carta-texto');
  let arrayFrase = input.value.split(" ");
  
  if(input.value.trim() === "") {
      p.innerText = 'por favor, digite o conteúdo da carta.'
    } else {
        p.innerText = ""
    };



  for (let i = 0; i < arrayFrase.length; i += 1) {
    let span = document.createElement('span');
    span.innerText = arrayFrase[i] + '';
    span.classList.add(estilo[Math.floor(Math.random()*3)]);
    span.classList.add(tamanho[Math.floor(Math.random()*3)])
    span.classList.add(rotate[Math.floor(Math.random()*2)])
    span.classList.add(skew[Math.floor(Math.random()*2)])
    p.appendChild(span);
    count += 1;
    console.log(arrayFrase[i]);
  }

  countLetter.innerHTML = count;
  const letter = document.getElementById("carta-gerada")
  
  letter.addEventListener("click", function(event) {
    if(event.target.id !== "carta-gerada") {
      event.target.removeAttribute('class');
      event.target.classList.add(estilo[Math.floor(Math.random()*3)]);
      event.target.classList.add(tamanho[Math.floor(Math.random()*3)])
      event.target.classList.add(rotate[Math.floor(Math.random()*2)])
      event.target.classList.add(skew[Math.floor(Math.random()*2)])
    }
  })
})