
$(function () {
    $('.tabbox .content li:eq(0)').show();
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
    let $lis = $(".slides li");
    // console.log(111);
    // console.log($lis);
    //获取所有要显示的内容
    let $content = $(".content div");
    // 首先显示第一个
    $content.eq(0).css("display", "block");

    // console.log($content);
    //添加事件
    $lis.each(function (index, value) {
        $(value).mouseover(function () {
            $content.css("display", "none");
            let $index = $(this).index();
            //在相同的样式中将某一个的样式做出改变时需要考虑到排他思想
            // $lis.css("background", "green");也可以用下面的链式操作
            $(this).css("border", "red").siblings().css("border", "none");
            $content.eq(index).css("display", "block");
        })
    })


    // 后端获取数据
    $.get('../json/count.json', function (res) {

        var string = '';
        string = '';
        res.forEach(function (item) {
            string +=
                `
                                        <div>
                                            <a href="javascript:;">
                                                <img src="../img/d31.jpeg" class="d1" alt="">
                                                <div class="brand-box">
                                                    <img src="../img/small-brand.png" alt="">
                                                    <span>菲诗小铺</span>
                                                </div>
                                                <div class="d-info">
                                                    Kiehl's 科颜氏 亚马逊白泥面膜 专柜明星 净含量:142g
                                                </div>
                                                <div class="d-price">￥&nbsp;189.00</div>
                                                <div class="d-level">
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <span>12</span>

                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src="../img/d2.jpeg" class="d1" alt="">
                                                <div class="brand-box">
                                                    <img src="../img/small-brand.png" alt="">
                                                    <span>科颜氏</span>
                                                </div>
                                                <div class="d-info">
                                                    Kiehl's 科颜氏 亚马逊白泥面膜 专柜明星 净含量:142g
                                                </div>
                                                <div class="d-price">￥&nbsp;189.00</div>
                                                <div class="d-level">
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <span>12</span>

                                                </div>
                                            </a>
                                        </div>
                                        <div class="last">
                                            <a href="javascript:;">
                                                <img src="../img/d3.jpeg" class="d1" alt="">
                                                <div class="brand-box">
                                                    <img src="../img/small-brand.png" alt="">
                                                    <span>科颜氏</span>
                                                </div>
                                                <div class="d-info">
                                                    Kiehl's 科颜氏 亚马逊白泥面膜 专柜明星 净含量:142g
                                                </div>
                                                <div class="d-price">￥&nbsp;189.00</div>
                                                <div class="d-level">
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                                                        style="width:16px;">
                                                        <path
                                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
                                                            fill="#FEC225">
                                                        </path>
                                                    </svg>
                                                    <span>12</span>

                                                </div>
                                            </a>
                                        </div>
                    
                `
        })
        $(".c-details").html(string);
    })
    // 后端获取数据结束
    $(".left-reset").focus(
        function () {
            $(this).css({ "backgroundColor": "#ff5224", "color": "white" });
        }
    )
    // 添加左边的事件
    $(".left-reset").blur(
        function () {
            $(this).css({ "backgroundColor": "white", "color": "#ff5224" });
        }
    )
    // $(".num-range .max").text($("zui-slider-tips").text());
    $(".num-range .max").text(125);
    console.log($("zui-slider-tips").text());


    // 结尾
});

