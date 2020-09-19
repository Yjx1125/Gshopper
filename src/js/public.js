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
// 2.获取json数据并转到列表页
// let str = decodeURIComponent(window.location.search);//jump=count
// let s_str = str.substr(1);
// const arr = s_str.split('=')[1];
// $.get('./json/' + arr + '.json', function (res) {
//     var string = '';
//     // string = '';
//     res.forEach(function (item) {
//         string +=
//             `
//                           <div>
//                                         <a href="./details.html">
//                                             <img src="../img/${item.img}.jpeg" class="d1" alt="">
//                                             <div class="brand-box">
//                                                 <img src="../img/small-brand.png" alt="">
//                                                 <span>                                                ${item.name}
//                                                 </span>

//                                             </div>
//                                             <div class="d-info">
//                                             ${item.goodName}
//                                             </div>
//                                             <div class="d-price">￥&nbsp;${item.price}</div>
//                                             <div class="d-level">
//                                                 <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
//                                                     style="width:16px;">
//                                                     <path
//                                                         d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
//                                                         fill="#FEC225">
//                                                     </path>
//                                                 </svg>
//                                                 <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
//                                                     style="width:16px;">
//                                                     <path
//                                                         d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
//                                                         fill="#FEC225">
//                                                     </path>
//                                                 </svg>
//                                                 <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
//                                                     style="width:16px;">
//                                                     <path
//                                                         d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
//                                                         fill="#FEC225">
//                                                     </path>
//                                                 </svg>
//                                                 <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
//                                                     style="width:16px;">
//                                                     <path
//                                                         d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
//                                                         fill="#FEC225">
//                                                     </path>
//                                                 </svg>
//                                                 <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
//                                                     style="width:16px;">
//                                                     <path
//                                                         d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
//                                                         fill="#FEC225">
//                                                     </path>
//                                                 </svg>
//                                                 <span>12</span>

//                                             </div>
//                                         </a>
//                                     </div>

//             `
//     })
//     $(".c-details").html(string);
// })
// 后端获取数据结束
