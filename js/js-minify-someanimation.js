if($(function(){function e(){$(".nav__dropmenu").hide()}function i(){$(".nav__dropmenu").show()}$("[data-scroll]").on("click",function(e){e.preventDefault();var i=$(this),n=i.data("scroll"),t=$(n).offset().top;$("#nav a").removeClass("active"),i.addClass("active"),$("html, body").animate({scrollTop:t},1e3)}),$(".accordion__header").on("click",function(e){e.preventDefault();var i=$(this).next(".accordion__content");$(".accordion__content").not(i).slideUp(),i.slideToggle()}),$(".accordionarenda__header").on("click",function(e){e.preventDefault();var i=$(this).next(".accordionarenda__content");$(".accordionarenda__content").not(i).slideUp(),i.slideToggle()}),$(document).ready(function(){$(".dropmenu2").on("mouseover",i),$(".nav__link").on(" mouseleave",e),$(".nav__dropmenu").on(" mouseleave",e)})}),window.matchMedia("screen and (width >= 768px)").matches)var swiper=new Swiper(".mySwiper2",{effect:"coverflow",loop:!0,grabCursor:!0,centeredSlides:!0,initialSlide:3,slidesPerView:"3",coverflowEffect:{rotate:50,stretch:0,depth:50,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});else swiper=new Swiper(".mySwiper2",{effect:"navigation",loop:!0,grabCursor:!0,centeredSlides:!0,initialSlide:3,slidesPerView:"1",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});if(window.matchMedia("screen and (width >= 768px)").matches)swiper=new Swiper(".mySwiper",{effect:"coverflow",loop:!0,grabCursor:!0,centeredSlides:!0,initialSlide:3,slidesPerView:"3",coverflowEffect:{rotate:50,stretch:0,depth:50,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});else swiper=new Swiper(".mySwiper",{effect:"navigation",loop:!0,grabCursor:!0,centeredSlides:!0,initialSlide:3,slidesPerView:"1",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});