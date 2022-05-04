let button = document.getElementById('criar-carta');
let estilo = ['magazine1', 'magazine2', 'newspaper'];
let tamanho = ['medium','big','reallybig'];
let rotate = ['rotateright','rotateleft'];
let skew = ['skewleft', 'skewright']


button.addEventListener('click', function () {
    let p = document.getElementById('carta-gerada');
    let input = document.getElementById('carta-texto');
    let arrayFrase = input.value.split(" ");

    
    if(input.value.trim() === "") {
        p.innerText = 'por favor, digite o conteúdo da carta.'
    } else {
        p.innerText = ""
    };



    for (i = 0; i < arrayFrase.length; i += 1) {
        let span = document.createElement('span');
        span.innerText = arrayFrase[i] + '';
        span.classList.add(estilo[Math.floor(Math.random()*3)]);
        span.classList.add(tamanho[Math.floor(Math.random()*3)])
        span.classList.add(rotate[Math.floor(Math.random()*2)])
        span.classList.add(skew[Math.floor(Math.random()*2)])
        p.appendChild(span);
        console.log(arrayFrase[i]);
    }



    console.log(typeof(input.value))
})