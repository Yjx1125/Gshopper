//转购物车页
let $buy = $(".carts .buy");
init();

$(".buy").focus(function () {
    $(this).css("background", "#FF5224");

})
$(".buy").blur(function () {
    $(this).css("background", "#ffffff");

})

$buy.click(function () {
    // $(this).css("background", "#FF5224");
    location.href = "./carts.html";
})


// 获取添加购物车按钮
let $to_cart = $(".add");
$(".add").focus(function () {
    $(this).css("background", "#FF5224");

})
$(".add").blur(function () {
    $(this).css("background", "#ffffff");

})
// 添加事件
$to_cart.on("click", (event) => {
    //商品id
    let good_id = $(".main-right").attr("data-good-id");
    //商品名称
    let good_name = $(".r-name").text();
    //商品src
    let good_src = $(".carts-img").attr("src");
    //商品价格
    let good_price = parseInt($(".r-price").children("i").text());
    console.log(good_id, good_name, good_src, good_price);
    //获取coolie
    let cookie_str = $.cookie("carts01") ? $.cookie("carts01") : "";
    //转对象
    let cookie_obj = $toObj(cookie_str);
    //判断对象中是否存在当前购买的商品
    if (good_id in cookie_obj) {
        cookie_obj[good_id].num++;
    } else {
        cookie_obj[good_id] = {
            "name": good_name,
            "src": good_src,
            "price": good_price,
            "num": 1
        }
    }
    $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });


})

function init() {
    //获取cookie
    let cookie_str = $.cookie('carts01') ? $.cookie('carts') : '';
    //转对象
    let cookie_obj = $toObj(cookie_str);
    let sum = 0;
    for (let i in cookie_obj) {
        sum += cookie_obj[i].num;
    }
    $(".carts-number").val(`购物车(${sum})`)
}
