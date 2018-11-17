
window.addEventListener("load", function () {
    // 分类页面内容左侧滑动栏初始化
    var swiperLeft = new Swiper('.category-left .swiper-container', {
        direction: 'vertical',
        /* 容器能够同时显示的slider的数量 */
        slidesPerView: 'auto',
        /* slider是否贴合边界 */
        freeMode: true,

    });

    // 分类页面内容右侧滑动栏初始化
    var swiperRight = new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        /* 容器能够同时显示的slider的数量 */
        slidesPerView: 'auto',
        /* slider是否贴合边界 */
        freeMode: true,
    });

    // 需求：1.左侧滑动栏点击之后变红：添加active的class
    // 2.左侧滑动栏某个li点击之后，将该li放置在左侧滑动栏的最顶端
    // 思路分析：1.遍历所有的li，并给所有的li添加index属性
    // 2.给每个li添加点击事件
    // 3.获取该li的高度
    // 4.将左侧滑动栏向上移动  li的高度*li的index
    // 5.添加active类名

    var liListLeft = document.querySelectorAll('.category-left ul li');
    // console.log(liListLeft);
    // 1.遍历所有的li，并给所有的li添加index属性
    for(var i=0;i<liListLeft.length;i++){
        //    1.1 通过点语法添加属性
        liListLeft[i].index = i;
        // 2.给每个li添加点击事件，click事件会延迟300ms
        // 使用touchstart和touchend模拟不延迟的click事件
        var isMove = false;
        liListLeft[i].addEventListener('touchstart',function(){
            
        })
        liListLeft[i].addEventListener('touchmove',function(){
            // 如果触发了move，表示不是单击事件
            isMove = true
        })
        liListLeft[i].addEventListener('touchstart',function(){
            if(!isMove){

                // liListLeft[i].onclick = function(){
                // 3.获取该li的高度
                var height = this.offsetHeight;
                //相对初始点移动的距离 = li的高度*li的index.向上移动为负数
                var translateY = - height * this.index;
                //最大移动距离 = 左侧滑动栏高度 - 左侧滑动栏显示高度 （负数）
                var minHeight = document.querySelector('.category-left').offsetHeight - document.querySelector('.category-left .swiper-slide').offsetHeight;
                // 4.将左侧滑动栏向上移动  
                // 当相对初始点移动的距离大于最大移动距离，则相对初始点移动的距离 = 最大移动距离
                if(translateY<minHeight){
                    translateY = minHeight;
                }
                document.querySelector('.category-left .swiper-wrapper').style.transform = 'translateY(' + translateY + 'px)';
                document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.5s';
    
                // console.log(this.style.transform); 
                // 删除所有的active类名
                for(var j=0;j<liListLeft.length;j++){
                    liListLeft[j].classList.remove('active');
                }
                // 给点击的li添加active类名
                this.className = 'active';
            // }

            }
            //每次触摸完成重置isMove的值
            isMove = false
        })

    }
})