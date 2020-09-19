//转购物车页
let $buy = $(".carts .buy");
init();

$(".buy").focus(function () {
    $(this).css("background", "#FF5224");

})
$(".buy").blur(function () {
    $(this).css("background", "#ffffff");

})

//为减号添加事件
let num = $(".r-number").val();
$(".r-min").click(function () {
    // console.log(152);
    // $(this).css("backgroundColor", "#ff5224");
    if (num > 1) {
        // num--;
        $(".r-number").val(num--);
    }
})
//为加号添加事件
$(".r-add").click(function () {
    $(".r-number").val(num++);
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
    //先修改详情页加入购物车的数量
    num++;
    $(".r-number").val(num);

    //商品id
    let good_id = $(".main-right").attr("data-good-id");
    //商品名称
    let good_name = $(".r-name").text();
    //商品src
    let good_src = $(".carts-img").attr("src");
    //商品价格
    let good_price = parseInt($(".r-price").children("i").text());
    //商品的数量
    let numc = $(".r-number").val();
    // console.log(good_id, good_name, good_src, good_price);
    //获取coolie
    let cookie_str = $.cookie("carts01") ? $.cookie("carts01") : "";
    //转对象
    let cookie_obj = $toObj(cookie_str);
    //判断对象中是否存在当前购买的商品
    if (good_id in cookie_obj) {
        cookie_obj[good_id].num = parseInt(cookie_obj[good_id].num) + parseInt(numc);

        console.log("input");
        console.log(numc);
        console.log("cookie");
        console.log(parseInt(cookie_obj[good_id].num));
        console.log("和");
        console.log(parseInt(cookie_obj[good_id].num) + parseInt(numc));

    } else {
        cookie_obj[good_id] = {
            "name": good_name,
            "src": good_src,
            "price": good_price,
            "num": numc
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





//   //减号
//   let $minus = $('.r-nums');
//   // $minus.each(function (i, value) {
//   $minus.click(() => {
//       $(this).css("background", "#ff5224");
//       //获取id
//       let id = $(".main-right").attr("data-good-id");
//       //获取cookie
//       let cookie_str = $.cookie('carts01') ? $.cookie('carts01') : '';
//       //转对象
//       let cookie_obj = $toObj(cookie_str);
//       //改变数量
//       if (cookie_obj[id].num > 0) {
//           cookie_obj[id].num--;
//       }
//       //存入cookie
//       $.cookie('carts01', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
//       //修改数量文本框
//       $("r-number").val(cookie_obj[id].num);
//       //修改合计
//       // $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
//   })

