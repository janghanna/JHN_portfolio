function slide() {
    //slice_box - slide - section
    $('.slide').slick({ //슬라이드할 아이템의 부모
        dots: true, //하단에  페이지 버튼
        infinite: false, //양방향 모션
        speed:500, //슬라이드 속도 1000 - 1초
        slidesToShow: 1, //한 화면에 보여줄 아이템 수
        slidesToScroll: 1, //한번에 슬러이드 할 아이템 수
        arrows: true, //좌우 화살표 버튼
        fade: false, //페이드모션 실행 여부
        autoplay: false, //자동플레이
        // autoplaySpeed: 3000, //자동플레이 속도 1000 - 1초
        //cssEase: '' //css easing 모션 함수
    });

    if($(window).width() > 1024){
        $('.slick-arrow').show();
    }else{
        $('.slick-arrow').hide();
    }

    var slider = $('.slide');
    slider.on('mousewheel', (function(e) {
        e.preventDefault();
   
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
   }));
   
}
export default slide;