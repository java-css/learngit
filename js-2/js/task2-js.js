"use strict";
var range = document.getElementById("range");
var val_range = range.value;
var num = document.getElementById("Num");
var click = 0;
var set_peopleNum = document.getElementsByClassName("set");
var setNum_changeNum;
var maxVal_range = 18;
var i;
function less(){
    if(val_range>6){
        val_range--;
    }else{
        alert("最少6个人");
    }
    document.getElementById("range").value = val_range;
    num.value = val_range;
}

function add(){
    if(val_range<18){
        val_range++;
    }else{
        alert("最多18个人");
    }
    range.value = val_range;
    num.value = val_range;
}

function change(){
    val_range = range.value;
    num.value=val_range;
}

function on_change(){
    if(num.value>=6&&num.value<=18&&isNaN(num.value)===false&&num.value/1===0){
        range.value = num.value;
    }else{
        alert("唉呀嘛！大兄弟！输入6-18的整数啊！找削吗")
        num.value=6;
        range.value=6;
    }
}

function set() {
    click = 1;
    var arr = [];
   for(i=0;i<val_range;i++){
       arr.push(i+1);

   }
    var set_peopleNum = document.getElementsByClassName("set");
    for(i=0;i<maxVal_range;i++){
        set_peopleNum[i].style.display="none";
        set_peopleNum[i].childNodes[1].innerHTML = "水　民　";
        set_peopleNum[i].childNodes[1].style.color = "#29bde0";
    }
    for(i=0;i<val_range;i++){
        set_peopleNum[i].style.display="inline-block";

    }
    var KillerNum = Math.floor(val_range/4);
    var newArr = RandomArr(arr,KillerNum);
    for(i=0;i<newArr.length;i++){
        set_peopleNum[newArr[i]-1].childNodes[1].innerHTML = "杀　手　";
        set_peopleNum[newArr[i]-1].childNodes[1].style.color = "#fab344";

    }
    var playerStr = JSON.stringify(newArr);
    localStorage.ids = playerStr;
    localStorage.idx = val_range;
    console.log("杀手的数字" + playerStr);
    console.log("玩家的人数" + val_range);
}

var RandomArr = function( arr, length ){
    var newArr = [],
        index;
    for( i=0; i < length; i++ ){
        // 利用数组长度生成随机索引值
        index = parseInt( Math.random() * arr.length );
        // 将随机索引对应的数组元素添加到新的数组中
        newArr.push( arr[index] );
        // 删除原数组中随机生成的元素
        arr.splice( index, 1 );
    }
    return newArr;
};

function to_flop(){
    if(click===1&&num.value === val_range){
        location.href = "flop.html";
    }else{
        alert("请点击设置再发牌");
    }
}
