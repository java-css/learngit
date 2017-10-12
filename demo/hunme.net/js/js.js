// JavaScript Document
$(function(){
	/*返回顶部*/
	$('.subNavIn .top').click(function(e){
		$('html,body').animate({scrollTop:0},600);
	});

	/* index焦点图 */
	//换图；
	
	$('.bannerImg ul li').each(function(index, element) {
		var pic=index+1;
        $(element).css('background','url(images/indexbanner/banner0'+ pic +'.jpg) no-repeat center top');
    });
	
	;(function(){	
		//自动播放功能；
		var timer=null;
		var num=0;
		
		function indexBanner(){	
			clearInterval(timer);
			timer=setInterval(function(){	
				num++;
				if( num > 2){ num = 0; };
				$('.turn ol li').eq(num).addClass('current').siblings().removeClass('current');
				$('.bannerImg ul').animate({left:num*-100+'%'},1000);
			},2000);
		};
		
		indexBanner();
		
		//鼠标移上暂停；
		
		$('#banner').hover(function(e) {
            clearInterval(timer);
        },function(){	
			indexBanner();
		});
		
		//角标控制；
		$('.turn ol li').mouseover(function(e) {
            var index=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('.bannerImg ul').stop().animate({left:index*-100+'%'},1000);
			num=index; //同步自动播放的顺序；
        });
		
	})();

/* listPage tab栏 */
	$('.listConNav li').click(function(e){
		$(this).addClass('current').siblings().removeClass('current');
		$('.listCon_con ul li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
	});

/* aboutPage 轮播 */
	$('.years_info:eq(0)').fadeIn();

//自动播放
;(function(){
	var timer = null;
	var num = 0;
	var lis = $('.years_nav li').length - 1;

	function aboutChange(){
		clearInterval(timer);
		timer = setInterval(function(){
			num++;
			if (num > lis) {num = 0;};
			$('.years_nav li').eq(num).addClass('noopdiv').siblings().removeClass('noopdiv');
			$('.years_info').eq(num).fadeIn().siblings().hide();
		},1000);
	};

	aboutChange();
	//标移入暂停；
	$('.abo_2 .years').hover(function(e) {
            clearInterval(timer);
        },function(){	
			aboutChange();
		});

	//导航控制；
	$('.years_nav li').mouseover(function(e){
		var index = $(this).index();
		$(this).addClass('noopdiv').siblings().removeClass('noopdiv');
			$('.years_info').eq(index).stop().fadeIn().siblings().hide();
			num=index; //同步工作；
	});
})();





	/* 招聘页面控制 */
	$('.rec_tit').click(function(e){
		$(this).parent().toggleClass('current');
	});

});



