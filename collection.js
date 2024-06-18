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

// product

const search = (searchtext = "") => {

    const searchbox = (searchtext || document.getElementById("search-item").value).toUpperCase();
    const storeitems = document.getElementById("products")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h1")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h1')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }

            else {
                product[i].style.display = "none";
            }
        }
    }
}

// filters
var check = document.getElementsByName("check");
var productList = document.querySelector(".products");
var products = productList.querySelectorAll(".product");

document.body.addEventListener("click", (event) => {
    debugger
    if (event.target.name == "check") {
        console.log("hq")
        search(event.target.value)
    }

});