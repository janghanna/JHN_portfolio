$(function () { //스크롤
    var offset = [];
    for (var i = 0; i < $('.right > div').length; i++) {
        offset.push($('.right > div').eq(i).offset().top);
    }

    var Rskill = 0;
    var RskillSet = true;
    setTimeout(function () { Rskill = $('.skill').offset().top - $(window).height(); }, 300);
    $('.right').on('scroll', function(){
        if($(this).scrollTop() > Rskill){
            $('.skill').addClass('active');
            if (RskillSet) {
                skill();
                RskillSet = false;
            }
        }else{
            $('.skill').removeClass('active');
            RskillSet = true;
        }
    });

    $('.dot a').on('click', function () {
        var idx = $(this).index();

        $('.dot a').removeClass('active');
        $('.dot a').eq(idx).addClass('active');

        $('.right').animate({
            scrollTop: offset[idx]
        });
    });

    var skillpos = 0;
    setTimeout(function () { skillpos = $('.skill').offset().top - $(window).height(); }, 300);
    var skillSet = true;
    $('.index').on('scroll', function () {

        if ($(this).scrollTop() > skillpos) {
            $('.skill').addClass('active');

            if (skillSet) {
                skill();
                skillSet = false;
            }
        } else {
            $('.skill').removeClass('active');
            skillSet = true;
        }

    });

    var html = parseInt($("#html").text());
    var css = parseInt($("#css").text());
    var js = parseInt($("#js").text());
    var php = parseInt($("#php").text());
    var sass = parseInt($("#sass").text());
    var git = parseInt($("#git").text());
    var xd = parseInt($("#xd").text());
    var ps = parseInt($("#ps").text());

    function skill() {

        function counter(count, ele) {
            var idx = 0;
            var loop = setInterval(function () {
                if (idx < count) {
                    idx++;
                } else {
                    clearInterval(loop);
                };
                $(ele).text(idx + "%");
            }, 30)
        };
        counter(html, '#html')
        counter(css, "#css")
        counter(js, "#js")
        counter(php, "#php")
        counter(sass, "#sass")
        counter(git, "#git")
        counter(xd, "#xd")
        counter(ps, "#ps")
    }
});