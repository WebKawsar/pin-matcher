/**************************************************************************************************************
 *                                      Left Side Pin Generate Button
 *************************************************************************************************************/

generateInput = document.getElementById("generate-pin");
document.getElementById("fail").style.display = "none";
document.getElementById("pass").style.display = "none";

document.getElementById("generate-button").addEventListener("click", function(){

    randomNumber = Math.random() * 10000;
    roundNumber = Math.round(randomNumber);

    if(roundNumber < 10000 && roundNumber > 999){
        
        generateInput.value = roundNumber;
    }
    else if(roundNumber < 1000 && roundNumber > 99) {

        fixingValue = roundNumber * 10;
        generateInput.value = fixingValue;
    }
    else {

        fixingValue = roundNumber * 100;
        generateInput.value = fixingValue;
    }

});

/**************************************************************************************************************
 *                                      Right Side Pin Matching Button
 *************************************************************************************************************/

var generateNumber = document.getElementById("generate-number");
var buttons = document.querySelectorAll(".button");
var generateShow = "";

for(button of buttons){

    button.addEventListener("click", function(){

            var getValue = event.target.innerText;
            var number = parseInt(getValue);

        if(getValue === "C" || getValue === "<" ){

            if(getValue === "C"){

                generateShow = "";
                generateNumber.value = "";
            }
            else if(getValue === "<" ) {
                
                var deleteOne = generateNumber.value;
                if(deleteOne.length > 0){
                    
                    get = deleteOne.slice(0, -1);
                    generateNumber.value = get;
                    generateShow = get;
                }
                else {

                    generateShow = "";
                    return;
                }
            
            }
            
        }
        else if(number === 0 || number === 1 || number === 2 || number === 3 || number === 4 || number === 5 || number === 6 || number === 7 || number === 8 || number === 9){

            generateShow =  generateShow + number;
            generateNumber.value = generateShow;
        }

    });

}


//When Submit Button click then matching value
document.getElementById("submit").addEventListener("click", function(){

            generateInput = document.getElementById("generate-pin");
            generateNumber = document.getElementById("generate-number");

            leftSideValue = parseInt(generateInput.value);
            rightSideValue = parseInt(generateNumber.value);
            
            if(leftSideValue == rightSideValue){

                document.getElementById("pass").style.display = "block";
                document.getElementById("fail").style.display = "none";
            }
            else {
                
                document.getElementById("fail").style.display = "block";
                document.getElementById("pass").style.display = "none";
            }

});
















