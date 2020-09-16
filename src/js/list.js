
$(function () {
    // $('.tabbox .content li:eq(0)').show();
    // $(".on")
    $(".tabbox .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');

    })
    $(".tabbox .tab a").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.tabbox .content li').hide();
        $('.tabbox .content li:eq(' + index + ')').show();
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.tabbox .tab a').length;
        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.tabbox .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('.tabbox .content ul li:eq(' + number + ')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.tabbox').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.tabbox').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }



    // 轮播
    //获取所有的导航元素
    let $lis = $(".slide li");
    console.log($lis);
    //获取所有要显示的内容
    let $content = $(".content div");
    console.log($content);
    //添加事件
    $lis.each(function (index, value) {
        $(value).mouseover(function () {
            console.log(111);
            let $index = $(this).index();
            //在相同的样式中将某一个的样式做出改变时需要考虑到排他思想
            // $lis.css("background", "green");也可以用下面的链式操作
            $(this).css("border", "red").siblings().css("border", "none");
            $content.css("display", "none");
            $content.eq(index).css("display", "block");
        })
    })


    // 轮播结束
});
// $(function () {
//     $('.tabbox .content ul').width(500 * $('.tabbox .content li').length + 'px');
//     $(".tabbox .tab a").mouseover(function () {
//         $(this).addClass('on').siblings().removeClass('on');
//         var index = $(this).index();
//         number = index;
//         var distance = -500 * index;
//         $('.tabbox .content ul').stop().animate({
//             left: distance
//         });
//     });

//     var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
//     if (auto == 1) {
//         var number = 0;
//         var maxNumber = $('.tabbox .tab a').length;
//         function autotab() {
//             number++;
//             number == maxNumber ? number = 0 : number;
//             $('.tabbox .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
//             var distance = -500 * number;
//             $('.tabbox .content ul').stop().animate({
//                 left: distance
//             });
//         }
//         var tabChange = setInterval(autotab, 3000);
//         //鼠标悬停暂停切换
//         $('.tabbox').mouseover(function () {
//             clearInterval(tabChange);
//         });
//         $('.tabbox').mouseout(function () {
//             tabChange = setInterval(autotab, 3000);
//         });
//     }
// });
