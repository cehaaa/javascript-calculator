function value(){

    const button = document.querySelectorAll(".btn");
    const parrentDom = document.querySelectorAll('.body button');
    const display = document.getElementById('display');    
    const opp = document.querySelectorAll('.opperator');

    let buttonValue;
    let displayValue;
    let displayValue2;
    let result;

    parrentDom.forEach((button) => {               

        if(button.matches('.opperator')){
            
        };

        button.addEventListener('click',function(){
            buttonValue = button.value;
            //print in display
            displayValue = display.value + buttonValue;
            display.value = displayValue; 
            
        })
    });
    
    opp.forEach((opp) => {
        opp.addEventListener('click',function(){

            if(opp.textContent == "+"){                
                clear();
                displayValue2 = display.value;
                console.log(displayValue2);
            }        

        })
    });

}

function clear(){
    display.value = "";
}

value();