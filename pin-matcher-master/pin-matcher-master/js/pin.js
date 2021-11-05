function pinGenerate () {
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if( pinString.length == 4){
        return pin;
    }
    else    {
        return pinGenerate();
    }
}

function generatePin() {
    const generateInputPin = pinGenerate();
    const inputPin = document.getElementById('input-pin');
    inputPin.value = generateInputPin;
}

document.getElementById('calc-body').addEventListener('click', function(event)
{       
        const keyNumbers = event.target.innerText;
        const calcInput =document.getElementById('calc-input');
   
        if (isNaN(keyNumbers)) {
          if (event.target.innerText == 'c' ) {
            calcInput.value ='';
        }
    }
    else{
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + keyNumbers;

            calcInput.value = newNumber;
    }
});

    function veryfyPin (){
       const pinInput = document.getElementById('input-pin').value;
       const pinNumbers = document.getElementById('calc-input').value;
      
       const notifyError = document.getElementById('notify-fail');
       const notifySuccess = document.getElementById('notify-success');

        if (pinInput == pinNumbers){
           notifySuccess.style.display ='block'; 
            notifyError.style.display ='none';
        }
        else{
            
             notifySuccess.style.display ='none'; 
             notifyError.style.display ='block';
        }

    }
    
