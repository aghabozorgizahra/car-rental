let searchIcon = document.getElementById("searchIcon");
let searchBox = document.getElementById("searchBox");
let navList = document.getElementById("navList");
let btnLogReg = document.getElementById("btnLogReg");
let overlay = document.querySelector(".overlay");

let dropDown = document.getElementById("dropDown");
let dropDownSec = document.getElementById("dropDownSec");

// SearchBox Section
searchIcon.addEventListener("click", function () {
    searchBox.style.display = "block";
    overlay.style.display = "block";
    navList.style.opacity = "0";
    btnLogReg.style.opacity = "0";
})

overlay.addEventListener("click", function () {
    searchBox.style.display = "none";
    overlay.style.display = "none";
    navList.style.opacity = "1";
    btnLogReg.style.opacity = "1";
})

// DropDown Rezerve Section
dropDown.addEventListener("click", function () {
    if (dropDownSec.style.display == "none") {

        dropDownSec.style.display = "block";
    } else {
        dropDownSec.style.display = "none";
    }
})

// Owned by Persian Datepicker
$(document).ready(function () {
    $(".dateCarRental").pDatepicker({
        timePicker: {
            enabled: false
        },
        format: "YYYY/MM/DD"
    });
});

$('.timeCarRentale').persianDatepicker({
    onlyTimePicker: true,
    format: "HH:mm"
});