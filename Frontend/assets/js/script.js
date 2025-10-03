let searchIcon = document.getElementById("searchIcon");
let searchBox = document.getElementById("searchBox");
let navList = document.getElementById("navList");
let btnLogReg = document.getElementById("btnLogReg");

searchIcon.addEventListener("click", function() {
    searchBox.style.display = "block";
    navList.style.opacity = "0";
    btnLogReg.style.opacity = "0";
})