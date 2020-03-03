window.addEventListener('resize', adjustSidebar);
window.addEventListener('load', loadRequired); 
window.addEventListener('click', triggerWindowClick);
$('.btn-toggle i').click(toggleSidebar)
$('.menu-parent').click(function() { toggleMenu($(this)); })
$('.btn-forgot').click(function(){ $('.login').toggleClass('forgot'); })
$('.logout').click(logout)
 
let processLogin = false;
$('#log-in').submit(function(e) { login(e, $(this).serialize()); });
let processResetPass = false;
$('#forgot-password').submit(function(e) { resetPassword(e, $(this).serialize()); });


function resetPassword(e, d){
    e.preventDefault();
    if(processResetPass) return;
    processResetPass = true;
 
    $.ajax({
        type: "POST",
        url: 'http://5e5a5ce16a71ea0014e61d69.mockapi.io/infoWeb',
        data: d,
        success: function(data)
        { 
            pushNotify('Check your mail to get password');
            processResetPass = false;
        }
    });
}
function login(e, d){
    e.preventDefault();
    if(processLogin) return;
    processLogin = true;
 
    $.ajax({
        type: "POST",
        url: 'http://5e5a5ce16a71ea0014e61d69.mockapi.io/infoWeb',
        data:  d,
        success: function(data)
        {  
            if(data.username) {
                localStorage.token = "login success";
                toggleLogin();
            }
            else {
                pushNotify(data.name);
            }
            processLogin = false;
        }
    });
}
function toggleLogin(){
    $('.login').toggleClass('login-required');
}
function logout(){
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = './index.html';
}
function toggleSidebar(){
    if(window.innerWidth < 1000){
        $('.sidebar').addClass('collapse');
        $('.sidebar').toggleClass('hidden');
    }
    else{
        $('.sidebar').removeClass('hidden');
        $('.sidebar').toggleClass('collapse');
    }
}
function toggleMenu(e){
    let current = e.hasClass('active');
    $('.menu-parent.active').removeClass('active'); 
    if(!current)  e.toggleClass('active');
}
function adjustSidebar(){
    if (window.innerWidth > 1000) { 
        $('.sidebar').removeClass('collapse');
        $('.sidebar').removeClass('hidden'); 
    } else {
        $('.sidebar').addClass('collapse');
        $('.sidebar').addClass('hidden'); 
    } 
}
function loadRequired(){
    if(!localStorage.token) toggleLogin();

    let page = $('.main').attr('page');
    let current = $( `a[href*='${page}']` );
    current.addClass('current-page');
    current.parent().parent().addClass('current-module');

    adjustSidebar();
}
function triggerWindowClick(event){
    let parent = $('.profile-button');
    if(parent.get(0) == event.target || parent.has(event.target).length)
        $('.profile-dropdown').toggleClass('hide');
    else 
        $('.profile-dropdown').addClass('hide');
}
function pushNotify(notify){
    let id = Math.random().toString(36).replace('.', '');
    $('#notification').append(` <div id=${id}>${notify}</div> `); 
    $("#notification").animate({
        scrollTop: $("#notification")[0].scrollHeight
    }, 100);  
    setTimeout(() => $(`#${id}`).remove(), 6100);
}