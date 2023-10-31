let binaryArray = [];
let countOfElementsInBinaryArray = 1000;
function BinaryArrayInitialize() {
    document.getElementById("binaryArrayDisplay").textContent = "";
    binaryArray = [];
    for(let i = 0; i < countOfElementsInBinaryArray; i++) {
        let randomNumber = Math.floor(Math.random() * 1000);
        binaryArray.push(randomNumber);
    }
    binaryArray.sort((a, b) => a - b);

    for(let i = 0; i < countOfElementsInBinaryArray; i++) {
        document.getElementById("binaryArrayDisplay").textContent += "\n" + i + ". " + binaryArray[i];

    }
}
function BinarySearch(arr) {
    let key = parseInt( document.getElementById("keyToFindInBinary").value);
    let midIndex = parseInt(arr.length/2);
    let mid = (arr[midIndex]);

    if(key === mid) {
        document.getElementById("binaryResultDisplay").textContent = key;
    }
    else if(arr.length === 1) {
        document.getElementById("binaryResultDisplay").textContent = "Не знайдено";
    }
    else if(key < mid) {
        let firstPartArray = arr.slice(0, arr.length/2);
        BinarySearch(firstPartArray);
    }
    else if(key > mid) {
        let secondPartArray = arr.slice(arr.length/2, arr.length);
        BinarySearch(secondPartArray);
    }
    else {
        document.getElementById("binaryResultDisplay").textContent = "Не знайдено";
    }
}
function SearchWithBinaryAlgorithm() {
    BinarySearch(binaryArray);
}