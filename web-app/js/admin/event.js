$('.btn-toggle i').click(function(){
    toggleSidebar();
})
$('.menu-parent').click(function() { 
    let current = $(this).hasClass('active');
    $('.menu-parent.active').removeClass('active'); 
    if(!current)  $(this).toggleClass('active');
})
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
function adjustSidebar(){
    if (window.innerWidth > 1000) { 
        $('.sidebar').removeClass('collapse');
        $('.sidebar').removeClass('hidden'); 
    } else {
        $('.sidebar').addClass('collapse');
        $('.sidebar').addClass('hidden'); 
    } 
}

window.addEventListener('resize', adjustSidebar);
window.addEventListener('load', function(){
    let page = $('.main').attr('page');
    let current = $( `a[href*='${page}']` );
    current.addClass('current-page');
    current.parent().parent().addClass('current-module');
    adjustSidebar();
}); 
window.addEventListener('click', function(event){
    let parent = $('.profile-button');
    if(parent.get(0) == event.target || parent.has(event.target).length)
        $('.profile-dropdown').toggleClass('hide');
    else 
        $('.profile-dropdown').addClass('hide');
});
