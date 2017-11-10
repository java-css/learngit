/*
* @Author: Administrator
* @Date:   2017-11-08 22:37:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-10 12:04:31
*/
var killerStr = localStorage.ids;
var killer = JSON.parse(killerStr);
var player = localStorage.idx;
var clickNum = 1;
var totalNum = 0;
var i;
var arr = [];
for (i=0;i<player;i++){
    arr.push(i+1);
}
console.log(arr);
console.log("killer"+killer);
console.log("killerstr"+killerStr);
console.log("player"+player);
function check(){
	if (clickNum >= (2 * arr.length)){
		return location.href = "";
	}else{
		if(clickNum % 2 == 0){//偶数时显示身份
			player_show();
		}else{
			player_tip();//奇数是提示查看身份页
		}
	}
	clickNum++;
	console.log("当前点击数为"+clickNum);
}

function player_show(){//偶数显示身份	
	$(".num").text(totalNum+2);
	$(".check").text("查看"+(totalNum+2)+"号身份");
	$(".box img").attr("src","../images/3-1.png");
	$(".role").text("");
	$(".box img").attr("src","images/3-1.png");
	$(".box img").removeClass("flop-show");
	$(".box img").addClass("flop-first")
	totalNum++;
	console.log("编号"+totalNum);
}


function player_tip(){//提示查看身份
	if(totalNum == arr.length - 1){
		$(".check").text("查看法官台本");
	}else{
		$(".check").text("隐藏并传递给"+(totalNum+2)+"号");
	}
	
	$(".box img").attr("src","images/3-2.png").addClass("flop-show");
	$(".box img").removeClass("flop-first");
	$(".box img").addClass("flop-show")


	$(".role").text("角色:水手");
	console.log(arr);

	/*for(var x in killer){
		if (killer[x]===arr) {
			console.log("killer[x]："+killer[x]);
			console.log("killer："+killer);
			console.log("arr："+arr);
			console.log("Y");
		}else{
			console.log("killer[x]："+killer[x]);
			console.log("killer："+killer);
			console.log("arr："+arr);
			console.log("N");
		}
	}*/
	 /*$(function () {
    		console.log("killer："+killer);
			console.log("arr："+arr);
            console.log($.inArray(killer, arr));
        });*/
        for(var y in killer){                                            //使用for-in 判断一个数在不在一个数组里
            if (killer[y]===arr[totalNum]){
                console.log("Y");
                $(".role").text("角色:杀手");
            }
        }
	
}
