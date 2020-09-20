//滚动监听事件
$(window).scroll(function () {
    /*  $("body").css("position", "relative");
     var offset = $(".header").offset();
     console.log(offset.top);
     console.log(offset);
     if (offset.top > 40) {
         // $(".header").animate({ marginTop: '-38px' }, "slow");
         $(".header").css({ "position": "sticky", "top": "-38px" });
 
 
     }
 
 
     console.log(1456); */
    if ($(this).scrollTop() > 38) {
        $('.header-top').slideUp(300);
        $('.header').css('height', '82px');
        $('.main').css('margin-top', '82px');
    } else {
        $('.header-top').slideDown(300);
        $('.header').css('height', '120px');
        $('.main').css('margin-top', '120px');
    }
});

//将字符串转为对象
function $toObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}
// console.log("public");
$(".h_inform").mouseover(function () {
    $(this).css("color", "#ff5224");
})
$(".h_inform").mouseout(function () {
    $(this).css("color", "rgba(0, 0, 0, 0.85)");
})

//h_nav部分导航功能
//1.点击事件
$(".h_nav ul").children().click(function () {
    let search_text = $(this).text();
    $(".h_search").val(search_text);
})
/* 回到顶部 */
$('.top').click(function () {
    $(document).scrollTop(0);
    $('body').scrollTop(0);
})



