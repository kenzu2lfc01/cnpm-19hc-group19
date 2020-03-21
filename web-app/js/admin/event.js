let processLogin = false;
let processResetPass = false;

window.addEventListener('resize', adjustSidebar);
window.addEventListener('load', loadRequired); 
window.addEventListener('click', triggerWindowClick);

function loadRequired(){
    renderSidebar();
    renderHeaader();
    renderLogin();
    
    if(!localStorage.auth) toggleLogin();
    else updateLoginInfo();

    highlightCurrentPage();
    adjustSidebar();
        
    enableEventPage();
}

function enableEventPage(){
    $('.btn-toggle i').click(toggleSidebar)
    $('.menu-parent').click(function() { toggleMenu($(this)); })
    $('.btn-forgot').click(function(){ $('.login').toggleClass('forgot'); })
    $('.logout').click(logout)
    $('#btn-filter').click(toggleFilter);
    
    $('.btn-main').click(toggleDrawer);
    $('.btn-close-drawer').click(toggleDrawer);

    $('#log-in').submit(function(e) { login(e, $(this).serialize()); });
    $('#forgot-password').submit(function(e) { resetPassword(e, $(this).serialize()); });
}
function highlightCurrentPage(){
    let page = $('.main').attr('page');
    let current = $(`a[href*='${page}']`);
    current.addClass('current-page');
    current.parent().parent().addClass('current-module');

}
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
            pushNotify('Check your mail to get password', true);
            processResetPass = false;
        }
    });
}
function updateLoginInfo(){
    let auth = JSON.parse(localStorage.auth);
    $('.name').text(auth.name);
    $('.avatar').attr('src', auth.avatar);
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
                localStorage.auth = JSON.stringify({
                    token: data.username,
                    name: data.name,
                    avatar: data.avatar
                });
                updateLoginInfo();
                toggleLogin();
            }
            else {
                pushNotify(data.name, true);
            }
            processLogin = false;
        }
    });
}
function toggleFilter(){
    $('.d-form-filter').toggleClass('active');
}
function toggleLogin(){
    $('.login').toggleClass('login-required');
}
function toggleDrawer(){
    $('.drawer').toggleClass('active');
}
function logout(){
    event.preventDefault();
    localStorage.removeItem('auth');
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
function triggerWindowClick(event){
    let parent = $('.profile-button');
    if(parent.get(0) == event.target || parent.has(event.target).length)
        $('.profile-dropdown').toggleClass('hide');
    else 
        $('.profile-dropdown').addClass('hide');
}
function pushNotify(notify, isSuccess){
    let id = Math.random().toString(36).replace('.', '');
    $('#notification').append(` <div id=${id} class='${isSuccess? "success" : ""}'>${notify}</div> `); 
    $("#notification").animate({
        scrollTop: $("#notification")[0].scrollHeight
    }, 100);  
    setTimeout(() => $(`#${id}`).remove(), 6100);
}
function renderSidebar(){
    $('.sidebar').html(`
    <div class="sidebar-top">
            <a href="#">
                <i class="fa fa-paw"></i>
                <p>Admin Dashboard</p>
            </a>
        </div>
        <div class="sidebar-welcome">
            <img class="avatar" src="../img/img.webp" alt="avatar">
            <div class="welcome-text">
                <span>Welcom,</span>
                <h2 class="name">THÁI VÕ</h2>
            </div>
        </div>
        <div class="nav-menu">
            <div class="menu-container">
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Finance
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./finance-revanue.html" class="menu-child">Revenue</a>
                        <a href="./finance-receipts.html" class="menu-child">Receipts Voucher</a>
                        <a href="./finance-payment.html" class="menu-child">Payment Voucher</a>
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Human Resource
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./employee.html" class="menu-child">Employee</a>
                        <a href="./employee-timesheet.html" class="menu-child">Timesheet</a>
                        <a href="./employee-payroll.html" class="menu-child">Payroll</a>
                        <a href="./employee-department.html" class="menu-child">Department</a>
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Customers
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./customer.html" class="menu-child">Infomation</a>
                        <a href="./history-book.html" class="menu-child">History Book</a>
                        <a href="./history-payment.html" class="menu-child">History Payment</a>
                        <a href="./feedback.html" class="menu-child">Feedback</a>
                        <a href="./customer-group.html" class="menu-child">Customer Group</a>
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Tables
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./table.html" class="menu-child">Infomation</a>
                        <a href="./reservation.html" class="menu-child">Reservation</a>
                        <a href="./table-type.html" class="menu-child">Table Type</a>
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Food 
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./list-foog.html" class="menu-child">Menu</a>
                        <a href="./food-category.html" class="menu-child">Food Category</a> 
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Provider 
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./provider.html" class="menu-child">Infomation</a>
                        <a href="./history-import.html" class="menu-child">History Import</a>
                        <a href="./provider-type.html" class="menu-child">Provider Type</a> 
                    </div>
                </div>
                <div class="menu-parent">
                    <div class="menu-title">
                        <i class="fa fa-home"></i>
                        Config Website
                        <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="menu-body">
                        <a href="./website-image.html" class="menu-child">Image</a>
                        <a href="./website-info.html" class="menu-child">Infomation</a>
                        <a href="./working-time.html" class="menu-child">Working Time</a> 
                    </div>
                </div>
            </div>
        </div>
    `);
}
function renderHeaader(){
    $('.header').html(`
        <div class="btn-toggle"><i class="fa fa-bars"></i></div> 
            <div class="search-form">
                <form id="form-search">
                    <div class="form-wrapper">
                        <input name="q" id="search-input" placeholder="Search" autocomplete="off"/>
                        <button name="btn-search" id="btn-search" type="submit"><i class="fa fa-search"></i></button> 
                        <button id="btn-filter" type="button"><i class="fa fa-angle-down"></i></button> 
                    </div>
                </form>
                <div class="d-form-filter">
                    <form id="form-filter">
                        
                    </form>
                </div>
            </div>
            <div class="profile">
                <div class="profile-button">
                    <img class="avatar" src="../img/img.webp" alt="avt" class=" profile">
                    <span class="name">Thái Võ</span> 
                    <i class="fa fa-angle-down"></i> 
                </div>
                <div class="profile-dropdown hide">
                    <a href="#">Profile</a>
                    <a class="logout">Log out</a>
                </div>
            </div>
    `);
}
function renderLogin(){
    $('.login').html(`
    <div class="form-login form-custom">
            <form action="#" id="log-in">
                <h1 class="title-form">Login System</h1>
                <div>
                    <input autofocus required type="text" name="username" id="username" placeholder="Username" autocomplete="off" >
                </div>
                <div>         
                    <input required type="text" name="password" id="password" placeholder="Password" autocomplete="off" >
                </div>
                <div>
                    <input type="submit" value="Login">
                    <input class="btn-forgot" type="button" value="Forgot password?">
                </div>
                
                <div class="end-form">From Thái Võ with  
                    <i class="fa fa-heartbeat" aria-hidden="true"></i>
                </div>
            </form>
        </div>
        <div class="form-forgot form-custom">
            <form action="#" id="forgot-password">
                <h1 class="title-form">Reset Password</h1>
                <div>
                    <input required type="text" name="username" id="username" placeholder="Username" autocomplete="off" >
                </div> 
                <div>
                    <input type="submit" value="Send password to mail">
                    <input class="btn-forgot" type="button" value="Back to login">
                </div>
                
                <div class="end-form">From Thái Võ with  
                    <i class="fa fa-heartbeat" aria-hidden="true"></i>
                </div>
            </form>
        </div>
    `);
}