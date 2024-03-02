let valueOne = document.getElementById("value-one");
    valueTwo = document.getElementById("value-two");

    getResultButton = document.getElementById("get-result-button");
    showAdditionResult = document.getElementById("show-addition-result");

getResultButton.addEventListener("click", function () {
    let valueOneInt = parseInt(valueOne.value);
        valueTwoInt = parseInt(valueTwo.value);

    totalResult = valueOneInt - valueTwoInt;
    showAdditionResult.innerHTML = totalResult;
});