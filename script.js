let button = document.getElementById('criar-carta');


button.addEventListener('click', function () {
    let p = document.getElementById('carta-gerada');
    let input = document.getElementById('carta-texto');
    let arrayFrase = input.value.split(" ");

    p.innerText = ""

    for (i = 0; i < arrayFrase.length; i += 1) {
        let span = document.createElement('span');
        span.innerText = arrayFrase[i] + '';
        p.appendChild(span);
        console.log(arrayFrase[i]);
    }



    console.log(arrayFrase)
})