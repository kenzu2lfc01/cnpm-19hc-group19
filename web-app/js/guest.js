let toggle = $('.toggle-menu');
let menu = $('.menu-list');  
$('.menu-item').click(function() {
    $('.menu-item.active').removeClass('active');
    $(`.menu-${$(this).attr('href').substring(1)}`).addClass('active'); 
    if(!['none', '0px'].includes(menu.css('max-height'))) toggle.click();  
})
toggle.click((e) => { 
    toggle.toggleClass('active');
    if(menu.css('max-height') != '0px') menu.css('max-height', '');
    else menu.css('max-height', menu.prop('scrollHeight'));
})