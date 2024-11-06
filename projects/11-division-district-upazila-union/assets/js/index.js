var divisionDistrictUpazilaUnion = {
    Dhaka: {
        "Dhaka": ["Dhaka Upazile", "Savar Upazila"],
        "Narayanganj": ["Narayanganj Sadar Upazila", "Rupganj Upazila"],
    },
    Chittagong: {
        "Chittagong Distrcit": ["Chittagong Sadar Upazila", "Satkania Upazila"],
        "Brahmanbaria": ["Brahmanbaria Sardar Upazila", "Sarail Upazila", "kasbaria Upazila", "Bancharampur Upazila"],
    },
    Sylhet: {
        "Sylhet Distrcit": ["Habiganj Upazila", "Madabpur Upazila"],
        "Chatok District": ["Chatok Sardar Upazila", "Tila Upazila"],
    },
}

window.onload = function () {

    const selectDivision = document.getElementById("division");
    selectDistrict = document.getElementById("district");
    selectUpazile = document.getElementById("upazile");
    selectUnion = document.getElementById("union");

    selects = document.querySelectorAll("select");

    selectDistrict.disabled = true;
    selectUpazile.disabled = true;
    selectUnion.disabled = true;

    selects.forEach(select => {
        if (select.disabled == true) {
            select.style.cursor = "auto";
        }
    })


    // *************************************************** for division start ************************************************

    for (let division in divisionDistrictUpazilaUnion) {
        console.log(division);

        // I have to study below code ************************************************************** STUDY ************************************************
        selectDivision.options[selectDivision.options.length] = new Option(division, division);
        // I have to study below code ************************************************************** STUDY ************************************************
    }

    // *************************************************** for division end ************************************************



    // *************************************************** for district start ************************************************
    selectDivision.onchange = (e) => {
        selectDistrict.disabled = false;
        selectUnion.disabled = true;

        // I have to study below code ************************************************************** STUDY ************************************************
        selectDistrict.length = 1
        selectUpazile.length = 1
        // I have to study below code ************************************************************** STUDY ************************************************

        for (let district in divisionDistrictUpazilaUnion[e.target.value]) {
            console.log(district);
            selectDistrict.options[selectDistrict.options.length] = new Option(district, district);
        }
    }
    // *************************************************** for district end ************************************************


    // *************************************************** for upazila start ************************************************
    selectDistrict.onchange = (e) => {
        selectUpazile.disabled = false;
        selectUnion.disabled = true;

        // I have to study below code ************************************************************** STUDY ************************************************
        selectUpazile.length = 1
        selectUnion.length = 1
        // I have to study below code ************************************************************** STUDY ************************************************


        for (let upazila in divisionDistrictUpazilaUnion[e.target.value]) {
            console.log(upazila);
            selectUpazile.options[selectUpazile.options.length] = new Option(upazila, upazila);
        }

        // let upazilas = divisionDistrictUpazilaUnion[selectDivision.value][selectDistrict.value][e.target.value];

        // for(let i=0; i<upazilas.lenght; i++){
        //     selectUpazile.options[selectUpazile.options.length] = new Option(upazilas[i], upazilas[i]);
        // }

        
    }
    // *************************************************** for upazila end ************************************************


}



// study link
// https://www.youtube.com/watch?v=q_LGyAYXS2Q