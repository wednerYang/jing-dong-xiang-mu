// 原生JS方式
window.addEventListener("load",function(){

    var header = document.querySelector('#header');
    // 轮播图的高度
    var sliderHeight = document.querySelector('#slider').offsetHeight;
    

    // 需求：首部的透明度由0-1渐变，初始为0，到达轮播图底部为1
    
    opacityGradients();
    // 函数后面不能加入括号，加入括号后只运行一次，只写函数体
    window.addEventListener('scroll',opacityGradients);
    // 透明度渐变的函数封装
    function opacityGradients(){
        // 获取到滚动距离，兼容
        var scrollTop = document.documentElement.scrollTop ||  document.body.scrollTop;
        var opacity = scrollTop / sliderHeight;
        if(opacity<=1) {
            header.style.backgroundColor = "rgba(222,24,27," + opacity + ")";
        }else {
            header.style.backgroundColor = "rgba(222,24,27,1)";
        }
    }



    //需求:掌上秒杀倒计时
    // 思路分析： 1.获取未来时间
    // new Date(年，月[0-11]，日，时，分，秒)
    var futureTime = new Date(2018,10,16,00,00,00).getTime();
    // 2.获取现在时间
    var nowTime = new Date().getTime();
    // 3.计算时间差
    var timeDis = (futureTime - nowTime) / 1000;//获得秒数
    // 5.设置定时器，并将时间显示在页面上
    var seckill = document.querySelector('.seckill-time').children;
    setInterval(function(){
        timeDis--;
        // 4.转换为时分秒
        var hour = Math.floor(timeDis / (60*60));
        var min = Math.floor(timeDis / 60 % 60);
        var sec = Math.floor(timeDis % 60 % 60);
        seckill[0].innerHTML = Math.floor(hour / 10);
        seckill[1].innerHTML = hour % 10;
        seckill[3].innerHTML = Math.floor(min / 10);
        seckill[4].innerHTML = min % 10;
        seckill[6].innerHTML = Math.floor(sec / 10);
        seckill[7].innerHTML = sec % 10;
    },1000)
    
    


})