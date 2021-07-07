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


$(".owl-2").owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsive: {
        0:{
            items:1
        },

        768:{
            items:2
        },

        991:{
            items:4
        }
    }
}) 

$(".owl-2").owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsive: {
        0:{
            items:1
        },

        768:{
            items:2
        },

        991:{
            items:4
        }
    }
}) 

$(".owl-3").owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: false,
    responsive: {
        0:{
            items:1
        },

        768:{
            items:3
        },

        991:{
            items:3
        }
    }
}) 



//Prev and next button
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  
    //next
    $('.owl-next').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    })

    //prev
    $('.owl-prev').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    })
  });



