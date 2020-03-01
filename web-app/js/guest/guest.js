let loading = 0;
// let worker = new Worker('event.js');
// worker.postMessage("Have a nice day");

// Web info 
function loadInfo(){
    loading += 10;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            loading += 10;
            let webInfo = JSON.parse(this.responseText); 
            
            $('.logo-img').attr('src', webInfo.logo);
            $('.facebook').attr('href', webInfo.facebook);
            $('.twitter').attr('href', webInfo.twitter);
            $('.instagram').attr('href', webInfo.instagram);
            $('#home').css('background-image', `url(${webInfo.banner.home})`);
            let gallery = $('#gallery .owl-carousel');
            webInfo.gallery_food.forEach(i => gallery.append(`<img src="${i}" alt="foood"/> `));  
            let opentime = $('.working-time ul');
            Object.entries(webInfo.open_time).forEach(([key, val]) => 
                opentime.append(`<li><span>${key}</span><span>${val}</span></li>`)); 
            $('.map-iframe').attr('src', webInfo.location_src);
            $('#menu').css('background-image', `url(${webInfo.banner.menu})`);
            $('#reservation').css('background-image', `url(${webInfo.banner.reserve})`);
            $('.phone-number').text(`Tel: ${webInfo.phone}`);
            $('.address').text(`Address: ${webInfo.address}`);
            $('.email').text(`Address: ${webInfo.mail}`);
            
            enableGallery();
            loading += 10;
        }
    };
    xhttp.open("GET", "http://5e5a5ce16a71ea0014e61d69.mockapi.io/infoWeb", true); 
    xhttp.send();
}
loadInfo();

// Load listEvent
function listEvent(){
    loading += 10;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            loading += 10;
            let data = JSON.parse(this.responseText);
            
            let events = $('.events-list');
            data.forEach(i => events.append(`
            <div class="event-item" style="background-image: url('${i.image}')">
                <div class="event-detail">
                    <div class="event-date">${i.date}</div>
                    <div class="event-title">${i.title}</div>
                    <div class="event-content">${i.content}</div>
                    <div class="read-more"><a href="${i.url}">Read More -></a></div>
                </div>
            </div> `));
            
            enableEventList();
            loading += 10;
        }
    };
    xhttp.open("GET", "http://5e5a5ce16a71ea0014e61d69.mockapi.io/events", true); 
    xhttp.send();
}
listEvent();
 
// Food list
$('.tab-food-item').click(function(){
    $('.tab-food-item.active').removeClass('active');
    $(this).addClass('active');

    loading += 10;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            loading += 10;
            let data = JSON.parse(this.responseText);
            
            let foods = $('.list-food'); 
            foods.trigger('destroy.owl.carousel');
            foods.html('');
            data.forEach(item => foods.append(`
                <div class="item ${item.isPromote? 'promote':''} ${item.isNew? 'new':''}">
                    <div class="img-food"><img src="${item.image}" alt="food"></div>
                    <div class="name-food">${item.name}</div>
                    <div class="price-food"><i class="fa fa-star-o"></i>${item.price}<i class="fa fa-star-o"></i></div>
                    <div class="promote-price"><i>${item.promote}</i></div>
                </div> 
            `)); 
            
            enableListFood();
            loading += 10;
        }
    }; 
    //${$(this).attr('category')}
    xhttp.open("GET", `http://5e5a5ce16a71ea0014e61d69.mockapi.io/contact`, true); 
    xhttp.send();
})
$('.tab-food-item')[0].click();
$('.footer').html(`Copyright &copy; ${new Date().getFullYear()} All rights reserved`);
loading += 10;

// Carousel
function enableGallery(){
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
}
function enableListFood(){ 
    $('.owl-carousel.list-food').owlCarousel({  
        loop: false, 
        center: false,
        dots: false,
        autoWidth: true,
        callbacks: true,
        margin: -130,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    }); 
}
function enableEventList(){     
    $('.owl-carousel.events-list').owlCarousel({     
        autoWidth: true,
        margin: 10, 
        dots: true 
    });     
}  