$(function () { //index화면 옆으로 사라락
    function loading() {
        
        const loader = document.querySelector('.Loader');
        const text = document.querySelector('.text');

        loader.addEventListener('click', function () {
            loader.classList.toggle('active');
            text.classList.toggle('active');
            
            setTimeout(function () { location.href = "about_me.html"; }, 1000);       
            localStorage.page=0;
        });
    }
    localStorage.clear();
    // $('.index .logo').on('click', function (e) {
    //     // e.preventDefault();
    //     $('.Loader').removeClass('active');
    //     $('.text').removeClass('active');
    //     $(this).addClass('active');
    // });    
    loading();
    console.log('export');

});