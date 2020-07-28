document.getElementById("fail").style.display = "none";
document.getElementById("pass").style.display = "none";

document.getElementById("generate-button").addEventListener("click", function(){

    randomNumber = Math.random() * 10000;
    roundNumber = Math.round(randomNumber);
    generateInput = document.getElementById("generate-value");

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























