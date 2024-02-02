function getPin(){
     const pin = Math.round(Math.random()*10000);
     const pinString = pin + '';
     if(pinString.length == 4){
         return pin;
     }
    else{
    
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
             calc.value = '';
             
        }
    }
    else{
        const calcPrevious = calc.value;
        const calcNew = calcPrevious + number;
        calc.value = calcNew;
    }
   
});

document.getElementById('submit-compare').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const display = displayPin.value;

    const typedNumber = document.getElementById('typed-numbers');
    const typed = typedNumber.value;

    // const notWorking = document.getElementById('not-working').style.display = 'none';
    // const Working = document.getElementById('working').style.display = 'none';

    if(display == typed){
        console.log('working');
        const working = document.getElementById('working');
        const showing = working.innerText;
    }
});