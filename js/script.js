'use strict'
const weight = document.querySelectorAll('input')[0];
const height = document.querySelectorAll('input')[1];
const button = document.querySelector('button');
const res = document.querySelector('.result');
const diagnoza = document.querySelector('.diagnoza');

//wzór waga/wzrost^2 
// weight.addEventListener('keyup',()=> {
//     console.log(weight.value); 
// });
// height.addEventListener('keyup',()=> {
//     console.log(height.value); 
// });
// console.log(/^[0-9.,]*$/.test());

//chciałem zastoswać wyrażenia regularne ale miałem problemy z przecinkami więc zdecydowałem się na input type="number" i jednostki w centymetrach 

function calc() { 
    const regex = /^[0-9.,]*$/; 
    const weightValue = weight.value;
    const heightValue = height.value;
    if(regex.test(weightValue,heightValue)){
        let result = 0; 
        result = weightValue/Math.pow((heightValue/100),2); 
        res.innerText = result.toFixed(2);
        if(result < 16){
            diagnoza.innerHTML = 'Jesteś w stanie wygłodzenia';
        }else if(result >= 16 && result < 17){
            diagnoza.innerHTML = 'Jesteś w stanie wychudzenia';
        }else if (result >= 17 && result < 18.5){
            diagnoza.innerHTML = 'Masz niedowagę';
        }else if (result >=18.5 && result < 25){
            diagnoza.innerHTML = 'Gratulacje ! Twoja waga jest w normie'
        }else if (result >=25 && result < 30){
            diagnoza.innerHTML = 'Masz nadwagę'
        }else if (result >=25 && result < 35){
            diagnoza.innerHTML = 'Jesteś w stanie otyłości I stopnia'
        }else if (result >=35 && result < 40){
            diagnoza.innerHTML = 'Jesteś w stanie otyłości II stopnia'
        }else if (result > 40){
            diagnoza.innerHTML = 'Jesteś w stanie otyłości III stopnia'
        }
    }else{
        alert('wprowadz prawidłowe dane');
    }
}
button.addEventListener('click', calc);



