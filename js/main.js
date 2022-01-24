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

var rllPstFlg = true;
	var rllPstLng = $("#bnrCnts > ul > li").length;
	var rllPstCnt = 0;
	var rllPst = $("#bnrCnts > ul");
	$("#bnrCnts > div > a").eq(0).click(function(){
		if(rllPstCnt >= 0 && trxRllPstFlg){
			rllPstFlg = false;
			rllPstCnt--;

			if(rllPstCnt == -1) rllPstCnt = rllPstLng-2;

			bnrCnts.css({
				transform:"translateY(-"+(rllPstCnt*100)+"%)"
			});

			$("#trxAnm").animate({
				"margin-right" : "50px"
			},500,function(){
				rllPstFlg = true;
			});
		}
	});
	$("#bnrCnts > div > a").eq(1).click(function(){
		if(rllPstCnt < rllPstLng && rllPstFlg){
			rllPstFlg = false;
			rllPstCnt++;

			if(rllPstCnt == rllPstLng) rllPstCnt = 0;

			bnrCnts.css({
				transform:"translateY(-"+(rllPstCnt*100)+"%)"
			});

			$("#trxAnm").animate({
				"margin-right" : "50px"
			},500,function(){
				rllPstFlg = true;
			});
		}
	});

// 배너 콘텐츠 롤링 (슬라이드) 영역

    $(document).ready(function(){
        $('.cvsCnt01 > div > ul > li > span > strong').counterUp({ 
            delay: 13, 
            time: 2000 
        });
    });

//  카운트업 영역

var blgCntSld = new Swiper(".mySwiper-blgSld", {
    // width:670,
    slidesPerView: '2',
    spaceBetween: 15,
    // slidesPerGroup: 1,
    allowTouchMove : true,
    loop : false,
    speed: 500,

    navigation: {
        prevEl: '.blgSldPrv',
        nextEl: '.blgSldNxt',
    },
});

//  블로그 콘텐츠 슬라이드 영역

$(function(){
    $(".cnt03Chp > ul > li > a").each(function(echIdx){
		$(this).click(function(){
			$(".cnt03Chp > ul > li > a").removeClass("on");
			$(this).addClass("on");
            $(".cnt03sls > div").eq(echIdx).addClass("on");
            $(".cnt03sls > div").eq(echIdx).prevAll().addClass("on");
            $(".cnt03sls > div").eq(echIdx).nextAll().removeClass("on");
		});
	});
});

//  솔루션 탭 영역

var swiper = new Swiper(".mySwiper_cntItm", {
    width:325,
    spaceBetween: 15,
    allowTouchMove : false, //slide 비활성화
});

// 고객 소개 슬라이드 영역 (비활성화)