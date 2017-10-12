// JavaScript Document

$(function(){
	
	$(".screen1").removeClass("no");
	//$(".screen").css({"top":-400+"%"});
	
	var num = 0;
	
	var timer = null;
	
	//gps点击切换
	$(".gps li").click(function(){
		
		var index = $(this).index();
		
		$(this).addClass("current").siblings().removeClass("current");
		
		$(".screen").stop().animate({"top":-100*index+"%"},500);
		
		//点击完之后，要更新num的值，把index的值赋给num
		num = index;
		
		$(".screen>div").eq(num).removeClass("no").siblings().addClass("no");
		
	});
	
	//鼠标滚轮事件
	$(document).mousewheel(function(e,d){
		//console.log(d);
		//现在我们需要0-4五个数字去判断切换哪一屏
		//假设向下滚动
		//num?d=1
		//0?-1=1
		//0--1=1
		//1?-1=2
		//1--1=2
		//3--1-4
		//num=num-d
		
		//通过清空定时器把没执行的指令都不执行了，达到节流的效果
		clearTimeout(timer);
		
		//把鼠标滚轮事件触发的指令延时300ms执行
		timer = setTimeout(function(){
			
			num-=d;
			//console.log(num);
			if(num>4){num=4}
			if(num<0){num=0}
			console.log(num);
			
			$(".screen").stop().animate({"top":-100*num+"%"},500);
			
			$(".gps li").eq(num).addClass("current").siblings().removeClass("current");
			
			$(".screen>div").eq(num).removeClass("no").siblings().addClass("no");
			
			
		},300);
		
	});
});








