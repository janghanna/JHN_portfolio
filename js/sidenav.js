$(function () { //sidenav 사라락
    $('header').load('inc_head.html header .sidenav', sidenav);

    function sidenav() {
        const side = document.querySelector('.sidenav');
        const menu = document.querySelector('.menu-trigger');
        const nav = document.querySelector('.nav');
        const main = document.querySelector('.main');
        const body = document.querySelector('body');

        menu.addEventListener('click', function () {
            side.classList.toggle('active');
            menu.classList.toggle('active');
            nav.classList.toggle('active');
            main.classList.toggle('active');
            body.classList.toggle('active');
        });

        $('.sub a').removeClass('active');
        $('.sub a').eq(localStorage.page).addClass('active');

        $('.sub a').on('click',function(){
            localStorage.page = $(this).index();
            location.href = $(this).attr('href');
        });               

        // $('.sub a').on('click', function (e) {
        //     e.preventDefault();
        //     localStorage.page=$(this).index();
        //     // console.log(e);

        //     var page = localStorage.page;
        //     $('.sub a').removeClass('active');
        //     $('.sub a').eq(page).addClass('active');
            
        //     var type = $(this).attr('href');
        //     location.href = type; 
        //     $(this).addClass('active');
        // });
    }
    sidenav();
});