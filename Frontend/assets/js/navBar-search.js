let searchIcon = document.getElementById("searchIcon");
let searchBox = document.getElementById("searchBox");
let navList = document.getElementById("navList");
let btnLogReg = document.getElementById("btnLogReg");
let overlay = document.querySelector(".overlay");

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