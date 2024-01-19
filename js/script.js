$(function(){
    $(document).keydown(function(e){
        const parkTop = $('.park').offset().top;
        const parkLeft = $('.park').offset().left;
        console.log('주차장의 좌표', parkTop, parkLeft);

        // console.log(e.keyCode);
        let mycar = $('.mycar').offset();
        switch(e.keyCode){
            case 37: //왼쪽 방향키
                $('.cloud').show();
                $('.mycar')
                    .css('transform', 'rotate(270deg)')
                    .stop()
                    .animate({left:'-=200px'}, 500, function(){
                        $('.cloud').hide();
                        if((Math.abs(mycar.top - parkTop) < 200) && Math.abs( mycar.left - parkLeft < 200)){
                          alert("주차 성공");
                        };
                    });
            break;
            case 38: //위
                $('.cloud').show();
                $('.mycar').css('transform', 'rotate(0deg)').stop().animate({top:'-=200px'}, 500, function(){
                    $('.cloud').hide();
                    if((Math.abs(mycar.top - parkTop) < 200) && Math.abs( mycar.left - parkLeft < 200)){
                      alert("주차 성공");
                    };
                });
            break;
            case 39: //오른쪽
                $('.cloud').show();
                $('.mycar').css('transform', 'rotate(90deg)').stop().animate({left:'+=200px'}, 500, function(){
                    $('.cloud').hide();
                    if((Math.abs(mycar.top - parkTop) < 200) && Math.abs( mycar.left - parkLeft < 200)){
                      alert("주차 성공");
                    };
                });
            break;
            case 40: //아래
                $('.cloud').show();
                $('.mycar').css('transform', 'rotate(180deg)').stop().animate({top:'+=200px'}, 500, function(){
                    $('.cloud').hide();
                    if((Math.abs(mycar.top - parkTop) < 200) && Math.abs( mycar.left - parkLeft < 200)){
                      alert("주차 성공");
                    };
                });
            break;
        }
    });

    //$('#park').html('(${parkTop} , ${parkLeft} )');
    //document.getElementById('park').innerHTML = 좌표


});  //jquery
