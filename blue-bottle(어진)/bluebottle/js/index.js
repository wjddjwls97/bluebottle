/* main.js */

$(function(){
    // GNB 메인메뉴 열기
    $(".btn_toggle").on('click', function(){
        $('#gnb').show();
    });

    // GNB 메인메뉴 닫기
    $(".btn_close").on('click', function(){
        $('#gnb').hide();
    });
    


    /* 이미지배너 슬라이더 : fade in/out효과로 */
    let num = 1;
    let slider = setInterval(function(){
        if(num >2) {num = 0; }
        // 전체 이미지를 fade out
        $('.slider > img').removeClass('show');

        //다음 이미지 표시
        $('.slider > img').eq(num).addClass('show');
        console.log(num)
        num++;
    }, 3000);



});
