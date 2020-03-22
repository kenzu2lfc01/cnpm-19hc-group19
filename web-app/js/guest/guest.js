let loading = 0; 
function loadingProcess(step){
    loading += step;
    $('#loading .process-bar .process').width( loading + '%' )
}

let loadingFunc = setInterval(function(){ 
    if(loading < 100) return; 
    $('#loading').addClass('loaded'); 
    clearInterval(loadingFunc);
}, 1);

// Web info 
function loadInfo(){
    loadingProcess(10);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) { 
            loadingProcess(10);
            let webInfo = JSON.parse(this.responseText); 
            
            $('.logo-img').attr('src', webInfo.logoURL);
            $('.facebook').attr('href', webInfo.faceBookURL);
            $('.twitter').attr('href', webInfo.twitterURL);
            $('.instagram').attr('href', webInfo.instagramURL);
            $('#home').css('background-image', `url(${webInfo.homeURL})`);
            // let gallery = $('#gallery .owl-carousel');
            // webInfo.gallery_food.forEach(i => gallery.append(`<img src="${i}" alt="foood"/> `));  
            $('.open-time').text(webInfo.openTime);
            $('.map-iframe').attr('src', webInfo.location_src);
            $('#menu').css('background-image', `url(${webInfo.menuURL})`);
            $('#reservation').css('background-image', `url(${webInfo.reserveURL})`);
            $('.phone-number').text(`Tel: ${webInfo.phoneNumber}`);
            $('.address').text(`Address: ${webInfo.adresss}`);
            $('.email').html(`Email: <a href='mailto:${webInfo.email}'>${webInfo.email}</a>`);
            
            enableGallery();
            loadingProcess(10);
            console.log("[Render Web Info]");
        }
    };
    xhttp.open("GET", "https://risotto.azurewebsites.net/api/Restaurants", true); 
    xhttp.send();
}
loadInfo();

// Load listEvent
function loadEvent(){
    loadingProcess(10);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) { 
            loadingProcess(10);
            let data = JSON.parse(this.responseText);
            
            let events = $('.events-list');
            data.forEach(i => events.append(`
            <div class="event-item" style="background-image: url('${i.imgURL}')">
                <div class="event-detail">
                    <div class="event-date">${i.dateStart}</div>
                    <div class="event-title">${i.title}</div>
                    <div class="event-content">${i.content}</div>
                    <div class="read-more"><a href="${i.eventURL}">Read More -></a></div>
                </div>
            </div> `));
            
            enableEventList();
            loadingProcess(10);
            console.log("[Render Event]");
        }
    };
    xhttp.open("GET", "https://risotto.azurewebsites.net/api/event", true); 
    xhttp.send();
}
loadEvent();
 
// Food list
function loadFood(){
    loadingProcess(10);
    let foodList;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 ) { 
            loadingProcess(10);
            
            foodList = JSON.parse(this.responseText); 
         
            $('.tab-food-item').click(function(){
                $('.tab-food-item.active').removeClass('active');
                $(this).addClass('active');

                let foods = $('.list-food'); 
                foods.trigger('destroy.owl.carousel');
                foods.html('');
                foodList.filter(i => i.category == $(this).attr('category')).forEach(item => foods.append(`
                    <div class="item ${item.isPromote? 'promote':''} ${item.isNew? 'new':''}">
                        <div class="img-food"><img src="${item.imageURL}" alt="food"></div>
                        <div class="name-food">${item.name}</div>
                        <div class="price-food"><i class="fa fa-star-o"></i>${item.price}<i class="fa fa-star-o"></i></div>
                        <div class="promote-price"><i>${item.promote}</i></div>
                    </div> 
                `));   
                enableListFood();
            }) 

            $('.tab-food-item')[0].click();
            loadingProcess(10);
            console.log("[Render Menu Food]");
        }
    };  
    xhttp.open("GET", `https://risotto.azurewebsites.net/api/foods`, true); 
    xhttp.send();
}
loadFood();

$('.footer').html(`Copyright &copy; ${new Date().getFullYear()} All rights reserved`);
loadingProcess(10);

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