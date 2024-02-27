let valueOne = parseInt(document.getElementById("valueOne").value);
let valueTwo = parseInt(document.getElementById("valueTwo").value);
let getResultButton = document.getElementById("getResultButton");
let showAdditionResult = document.getElementById("showAdditionResult");


function getAdditionResult() {
    let totalResult = valueOne + valueTwo;
    showAdditionResult.innerHTML = totalResult;
}

additionResult.addEventListener("click", getAdditionResult());