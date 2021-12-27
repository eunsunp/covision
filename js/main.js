$(function(){
    function fnManSldPgr(){
        $("#cntSld01Prg > div > div > span").addClass("on");
        $("#cntSld01Prg > div > div > s").addClass("on");
        setTimeout(function(){
            $("#cntSld01Prg > div > div > span").removeClass("on");
            $("#cntSld01Prg > div > div > s").removeClass("on");
        },7500);
    }
    
    var mainCnt01 = "";
    mainCnt01 = new Swiper(".mySwiper", {
        effect : 'fade',
            allowTouchMove : false,
            loop : true,
            speed: 500,
            navigation: {
                prevEl: '#cntSld01Prv',
                nextEl: '#cntSld01Nxt',
            },
            autoplay: {
                delay: 8000,
            },
        on:{
            slideChange:function(){
                if(mainCnt01.activeIndex > 0){
                    $("#cntSld01Prg > div > span > span").eq(0).text("0"+(mainCnt01.realIndex+1));
    
                    fnManSldPgr();
    
                }
            }
        }
    });
    
    fnManSldPgr();
});

// 헤더 슬라이드 영역


var blgCntSld = new Swiper(".mySwiper-blgSld", {
    width:670,
    slidesPerView: 1,
    spaceBetween: 15,
    allowTouchMove : true,
    loop : false,
    speed: 500,

    navigation: {
        prevEl: '.blgSldPrv',
        nextEl: '.blgSldNxt',
    },
});

//   블로그 콘텐츠 영역

$(function(){
    $(".cnt03Chp > ul > li > a").each(function(echIdx){
		$(this).click(function(){
			$(".cnt03Chp > ul > li > a").removeClass("on");
			$(this).addClass("on");
			$(".cnt03sls > div").removeClass("on");
			$(".cnt03sls > div").eq(echIdx).addClass("on");
		});
	});
});

//   솔루션 탭 영역
