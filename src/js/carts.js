//获取cookie
let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
if (!cookie_str) {
    $('.blank').css('display', 'block');
    console.log(111112);
} else {
    //转为对象
    let cookie_obj = $toObj(cookie_str);
    //遍历对象
    for (let key in cookie_obj) {
        let good = cookie_obj[key];
        $('.goods').append(`
        <ul class="goodInfo goods-list" data-good-id="${key}">
        <li class="img1"><input type="checkbox"> <img class="cart-img" src="${good.src}" /></li>
        <li class="name1">${good.name}</li>
        <li class="price1">${good.price}</li>
        <li class="num number1">
            <a href="javascript:;" class="minus">-</a>
            <input type="text" name="" id="" value="${good.num}" />
            <a href="javascript:;" class="plus">+</a>
        </li>
        <li class="total sum1">${good.price * good.num}</li>
        <li class="del1"><a href="javascript:;" class="del">删除</a></li>
    </ul>

					`)
    }
    //减号
    let $minus = $('.minus');
    $minus.each(function (i, value) {
        $(value).click(() => {

            //获取id
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            //获取cookie
            let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //改变数量
            if (cookie_obj[id].num > 0) {
                cookie_obj[id].num--;
            }
            //存入cookie
            $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
            //修改数量文本框
            $(this).next().val(cookie_obj[id].num);
            //修改合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    $('.plus').each(function (i, value) {
        $(value).click(() => {
            //当前商品的id
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            //获取cookie
            let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //数量增加
            cookie_obj[id].num++;
            //存入cookie
            $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
            //修改数量文本框
            $(this).prev().val(cookie_obj[id].num);
            //合计
            //修改合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //数量框
    $('.num input').each(function (index, value) {
        $(value).blur(() => {
            //id
            let id = $(this).parents('.goodInfo').attr('data-good-id');

            //获取cookie
            let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //文本框数量
            //非数字   正整数
            let num = $(this).val();
            if (!/^\d+$/.test(num)) {
                num = 0;
            }
            cookie_obj[id].num = num;

            //存入cookie
            $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
            $(this).val(cookie_obj[id].num);
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //删除
    $('.del').each(function (index, value) {
        $(value).click(() => {
            let id = $(this).parents('.goodInfo').attr('data-good-id');
            //获取cookie
            let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //删除对象中的属性
            delete cookie_obj[id];
            //存入cookie
            $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
            //删除页面中的商品信息
            $(this).parents('.goodInfo').remove();
        })
    })
}
