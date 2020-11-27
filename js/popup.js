$(function () {
    //PC버전-top    
    $('.top').on('click',function(e){
        e.preventDefault();
         $(this).parents('.popup').animate({scrollTop : 0},300);
    });

    //하일리
    $('#H_popup_open a').on('click',function(e){       
        e.preventDefault();
        $('.popup_open a').addClass('active');        
        $('#H_popup').fadeIn(350);
        $('.popup_back').show();       
    });

    //샐러드
    $('#S_popup_open a').on('click',function(e){      
        e.preventDefault();
        $('.popup_open a').addClass('active');        
        $('#S_popup').fadeIn(350);
        $('.popup_back').show();
    });

    //장가네
    $('#J_popup_open a').on('click',function(e){  
        e.preventDefault();
        $('.popup_open a').addClass('active');            
        $('#J_popup').fadeIn(350);
        $('.popup_back').show();
    });

    //닫기버튼
    $('.popup_close').on('click',function(e){
        e.preventDefault();
        $('.popup_open a').removeClass('active');

        $('.popup').fadeOut(350);
        $('.popup_back').hide();
    });

    //배경누르면닫기
    $('.popup_back').on('click',function(e){
        e.preventDefault();
        $('.popup_open a').removeClass('active');

        $('.popup').fadeOut(350);
        $('.popup_back').hide();
        $('.popup').scrollTop(0);
    });     
});