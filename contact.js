// offer-bar

var offer = document.getElementById("offerBar")
var closes = document.getElementById("close")

closes.addEventListener("click", function () {
    offer.style.display = "none"
})

// Side Navbar

var menuBar = document.getElementById("menuBar")
var sideNavbar = document.getElementById("sideNavbar")
var sideclose = document.getElementById("side-close")

menuBar.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "0"
})

sideclose.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "-60%"
})