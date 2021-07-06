//mobile menu
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");
const overlayBtn = document.querySelector(".overlay-active");
const menu = document.querySelector(".menu-mobile");



openBtn.addEventListener("click", function() {
    console.log(menu);
    menu.classList.add("menu-active");

    overlay.classList.add("overlay-active");
});



closeBtn.addEventListener("click", function() {
    console.log(menu);
    menu.classList.remove("menu-active");

    overlay.classList.remove("overlay-active");
});


//Carousel
$(".owl-1").owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    items:1
})

