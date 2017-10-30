var boxs = document.getElementById('header').getElementsByTagName('div'); 

var colors = [];
while (colors.length < 10){
    for (var i = 0; i < 3; i++) {
        var r = Math.round((Math.random()*255)).toString(16);
		var g = Math.round((Math.random()*255)).toString(16);
		var b = Math.round((Math.random()*255)).toString(16);
		var color = "#"+r+g+b;
        } 
        colors.push(color);
    }
   

var timer = null;
function changes(){
		for (var i = 0; i < boxs.length; i++) {
			boxs[i].style.background = "#ffa600";
		}
		var arr = new Array(3);
		var arr1 = new Array(3);
		for (var i = 0; i < arr.length; i++) {
			var a = parseInt(Math.random() * 9);
			console.log(a);
			if (i==0) {
				arr[i]=a;
			}else{
				for (var j = 0; j < i; j++) {
				if (a==arr[j]) {
					i--
				}else{
					arr[i]=a;
				}
			}
		}
		}

		for (var i = 0; i < arr1.length; i++) {
			var a = parseInt(Math.random() * 9);
			if (i==0) {
				arr1[i]=a;
			}else{
				for (var j = 0; j < i; j++) {
				if (a==arr1[j]) {
					i--
				}else{
					arr1[i]=a;
				}
			}
		}
		}

		for (var i = 0; i < arr.length; i++) {
		boxs[arr[i]].style.background=colors[arr1[i]];
		console.log(i);
	}
}


function start(){
	clearInterval(timer);
	timer = setInterval(function(){
		changes();
	},1000)
}

function stop(){
	for (i = 0; i < boxs.length; i++) {
		boxs[i].style.background="#ffa600";
	}
	clearInterval(timer);
}



