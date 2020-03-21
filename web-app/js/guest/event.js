function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let toggle = $('.toggle-menu');
let menu = $('.menu-list');
let navHeader = $('.nav-header');
let navMenu = $('.nav-menu');  
let offsetTop = navMenu.offset().top + navMenu.outerHeight();
let mainNavLinks = $('.menu-item'); 

$('.submit-contact').click(handleFeedback)
$('.btn-book-now').click(handleReserve) 
toggle.click(toggleMenu)
$(window).scroll(highlightCurrentSection)

function toggleMenu(){
    toggle.toggleClass('active');
    if(menu.css('max-height') != '0px') menu.css('max-height', '');
    else menu.css('max-height', menu.prop('scrollHeight'));
}
function highlightCurrentSection(){
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
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(phone){
    var re = /^\d{10}$/;
    return re.test(phone);
}
function validateDate(date){ 
    let re = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(\d{4,4})$/;

    return re.test(date);
}
function validateTime(time){     
    let re = /^([01]\d|2[0-3]):([0-5]\d)$/;

    return re.test(time);
}

let processSubmitContact = false;
function validateFeedback(){
    if($('#full-name-contact').val().trim().length == 0){
        pushNotify("Please let me know your name", false);
        $('#full-name-contact').focus();
        return false;
    } 
    if(!validateEmail($('#mail-contact').val())){
        pushNotify("Your mail entered is not valid", false);
        $('#mail-contact').focus();
        return false;
    }
    if($('#subject-contact').val().trim().length == 0){
        pushNotify("You did not enter subject", false);
        $('#subject-contact').focus();
        return false;
    }
    if($('#message-contact').val().trim().length == 0){
        pushNotify("You did not enter message", false);
        $('#message-contact').focus();
        return false;
    }
    return true;
}
function handleFeedback(){
    if(!validateFeedback()) return;
    if(processSubmitContact) return;
    $(this).addClass('process');
    processSubmitContact = true; 

    let xhr = new XMLHttpRequest();    
    let data = {
        name: $('#full-name-contact').val(),
        email: $('#mail-contact').val(),
        subject: $('#subject-contact').val(),
        message: $('#message-contact').val()
    };  
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {    
            let message = `Thanks so much for your feedback <i class="fa fa-heartbeat"></i>`;
            if(this.status == 200) pushNotify(message, true);
            else pushNotify("Sorry! you can not submit right now", false);

            processSubmitContact = false; 
            $('.submit-contact').removeClass('process');
        }
    }; 
    xhr.open("POST", "https://risotto.azurewebsites.net/api/feedback");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
}

let processBookNow = false;
function validateReserve(){
    if($('#full-name-reservation').val().trim().length == 0){
        pushNotify("Please let me know your name", false);
        $('#full-name-reservation').focus();
        return false;
    }
    if(!validatePhone($('#phone-reservation').val())){
        pushNotify("Your phone entered is not valid", false);
        $('#phone-reservation').focus();
        return false;
    } 
    if(!validateDate($('#date-reservation').val())){
        pushNotify("Date entered is not valid", false);
        $('#date-reservation').focus();
        return false;
    } 
    if(!validateEmail($('#email-reservation').val())){
        pushNotify("Your mail entered is not valid", false);
        $('#email-reservation').focus();
        return false;
    } 
    if(!validateTime($('#time-reservation').val())){
        pushNotify("Time entered is not valid", false);
        $('#time-reservation').focus();
        return false;
    } 
    return true;
}
function handleReserve(){
    if(!validateReserve()) return;
    if(processBookNow) return;
    $(this).addClass('process');
    processBookNow = true;
    

    let xhr = new XMLHttpRequest();    
    let data = {
        fullName: $('#full-name-reservation').val(),
        phoneNumber: $('#phone-reservation').val(),
        email: $('#email-reservation').val(),
        dateBooking : $('#date-reservation').val() + " " + $('#time-reservation').val(),
        numberOfGuest: $('#guests-number-reservation').val()
    };  
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {    
            let message = `Your request have been submit <i class="fa fa-heartbeat"></i><br/> We will contact you to confirm`;
            if(this.status == 200) pushNotify(message, true);
            else pushNotify("Sorry! You can not book a table right now", false);
 
            processBookNow = false;
            $('.btn-book-now').removeClass('process');
        }
    }; 
    xhr.open("POST", "https://risotto.azurewebsites.net/api/Tables/BookTable");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
}

function pushNotify(notify, isSuccess){
    let id = Math.random().toString(36).replace('.', '');
    $('#notification').append(` <div id=${id} class="${isSuccess? 'success': ''}">${notify}</div> `); 
    $("#notification").animate({
        scrollTop: $("#notification")[0].scrollHeight
    }, 100); 
    sleep(6100).then(() => $(`#${id}`).remove());
}