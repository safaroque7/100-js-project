let digitId = document.getElementById("digit-id");
let submitId = document.getElementById("submit-id");
let perEntry = document.getElementById("new-id-for-table-data");
let totalAddedResult = document.getElementById("total-added-result");

// submitId.addEventListener('click', function () {
//     submitIdValue = parseInt(digitId.value);
//     console.log(submitIdValue);
//     // submittedValue = document.addForm.digitId.value;
//     perEntry.innerHTML = submitIdValue;
// });


// //    Crete New Element 

// let son = document.createElement("input");
// // son.setAttribute('class', 'father');

// let grandFather = document.getElementById("grand-father");
// app = grandFather.appendChild(son);


// console.dir(app);
// console.log(app);


submitId.addEventListener('click', function () {

    // let digitId = document.getElementById("digit-id");
    // submitId = document.getElementById("submit-id");
    // perEntry = document.getElementById("new-id-for-table-data");
    // totalAddedResult = document.getElementById("total-added-result");

    // submitIdValue = parseInt(digitId.value);
    // console.log(submitIdValue);
    // // submittedValue = document.addForm.digitId.value;
    // perEntry.innerHTML = submitIdValue;

    let addNewRow = document.getElementById("addNewRow");
    newIdForTableData = document.getElementById("digit-id").value;
    

    newTableDate = document.createElement('td');
    perEntry = newTableDate.setAttribute('id', 'new-id-for-table-data');
    paragraphAppend = addNewRow.appendChild(newTableDate);
    perEntry.innerHTML = newIdForTableData;

});