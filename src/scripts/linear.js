let numberOfElements = 1000;
let linearArray = [];


function LinearArrayInitializate() {
    document.getElementById("linearArrayDisplay").textContent = "";
    linearArray = [];
    for (let i= 0; i < numberOfElements; i++ ) {
        let randomNumber = Math.floor(Math.random() * 1000);
        linearArray.push(randomNumber);
        document.getElementById("linearArrayDisplay").textContent += "\n" + i + ". " + randomNumber;
    }
}
function FindKey() {
    let key = document.getElementById("keyToFindInLinear").value;
    console.log(key);
    for (let i = 0; i < numberOfElements; i++) {
        if(key === linearArray[i].toString()) {
            document.getElementById("linearResultDisplay").textContent = i + ". " + key;
            return;
        }
    }
    document.getElementById("linearResultDisplay").textContent = "не знайдено";
}