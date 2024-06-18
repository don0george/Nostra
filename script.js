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

// Move Image

var Moveright = document.getElementById("Move-right")
var MoveLeft = document.getElementById("Move-Left")
var Move = document.querySelector(".Move-Image")
var Movemargin = 0

Moveright.addEventListener("click", function () {
    Movemargin = Movemargin + 100

    if (Movemargin > 200) {
        Movemargin = 0
        Move.style.marginLeft = 0;
    }
    else {
        Move.style.marginLeft = "-" + Movemargin + "vw";
    }

})

MoveLeft.addEventListener('click', function () {

    if (Movemargin == 0) {

        Movemargin = 200
        Move.style.marginLeft = "-" + Movemargin + "vw";
    }
    else {

        Movemargin = Movemargin - 100
        Move.style.marginLeft = "-" + Movemargin + "vw";
    }
})

// like

function toggleImages(container) {
    const image1 = container.querySelector('.image1');
    const image2 = container.querySelector('.image2');

    if (image1.style.display === 'none') {
        image1.style.display = 'flex';
        image2.style.display = 'none'; 
    } else {
        image1.style.display = 'none';
        image2.style.display = 'flex';
    }
}