let webInfo;
function loadInfo(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            webInfo = JSON.parse(this.responseText);
            console.log(webInfo);

            $('.logo-img').attr('src', webInfo.logo);
        }
    };
    xhttp.open("GET", "http://5e5a5ce16a71ea0014e61d69.mockapi.io/infoWeb", true); 
    xhttp.send();
}
loadInfo();

let toggle = $('.toggle-menu');
let menu = $('.menu-list');
let navHeader = $('.nav-header');
let navMenu = $('.nav-menu');  
let offsetTop = navMenu.offset().top + navMenu.outerHeight();
let mainNavLinks = $('.menu-item'); 

toggle.click((e) => { 
    toggle.toggleClass('active');
    if(menu.css('max-height') != '0px') menu.css('max-height', '');
    else menu.css('max-height', menu.prop('scrollHeight'));
})
$(window).scroll(function() {
    let current = window.scrollY + navMenu.outerHeight()*2; 
    mainNavLinks.each(function() {  
        let section = $($(this).prop('hash')); 
        let top = section.offset().top <= current;
        let bottom = section.offset().top + section.outerHeight() > current;
        if (top && bottom) $(this).addClass("active");
        else $(this).removeClass("active"); 
    });    

    if(window.pageYOffset > offsetTop) {
        navHeader.addClass('hide');
        navMenu.addClass('sticky');
    }
    else{
        navHeader.removeClass('hide');
        navMenu.removeClass('sticky');
    }    

    if(toggle.hasClass('active')) toggle.click();
})


$('.gallery .owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    margin: 5,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        }, 
        950: {
            items: 2,
            nav: true
        }
    }
});

$('.owl-carousel.list-food').owlCarousel({  
    loop: true, 
    center: true,
    dots: false,
    autoWidth: true,
    callbacks: true,
    margin: -130,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
}); 

$('.owl-carousel.events-list').owlCarousel({     
    autoWidth: true,
    margin: 10, 
    dots: true
}); 



$('.tab-food-item').click(function(){
    $('.tab-food-item.active').removeClass('active');
    $(this).addClass('active');
})