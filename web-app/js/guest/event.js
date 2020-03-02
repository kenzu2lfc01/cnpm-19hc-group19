function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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


$('.submit-contact').click(function() {
    let xhr = new XMLHttpRequest();    
    let data = {
        name: $('#full-name-contact').val(),
        email: $('#email-contact').val(),
        subject: $('#subject-contact').val(),
        message: $('#message-contact').val()
    };  
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 201) {  
            let response = JSON.parse(this.responseText);

            $('#notification').text(response.message);
            $('#notification').addClass('active');
            sleep(3000).then(() => $('#notification').removeClass('active'));
        }
    }; 
    xhr.open("POST", "http://5e5a5ce16a71ea0014e61d69.mockapi.io/contact");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
})


$('.btn-book-now').click(function() {
    let xhr = new XMLHttpRequest();    
    let data = {
        name: $('#full-name-reservation').val(),
        phone: $('#phone-reservation').val(),
        email: $('#email-reservation').val(),
        date: $('#date-reservation').val(),
        amount: $('#guests-number-reservation').val(),
        time: $('#time-reservation').val()
    };  
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 201) {  
            let response = JSON.parse(this.responseText);

            $('#notification').text(response.message);
            $('#notification').addClass('active');
            sleep(3000).then(() => $('#notification').removeClass('active'));
        }
    }; 
    xhr.open("POST", "http://5e5a5ce16a71ea0014e61d69.mockapi.io/reservation");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
}) 