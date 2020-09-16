$('#re_sub').click(function () {
    let remails = $('.re #remails').val();
    let rpwd = $('.re #rpwds').val();
    console.log(remails);
    console.log(rpwd);
    let cookie_str = $.cookie('users') ? $.cookie('users') : '';
    let cookie_obj = $toObj(cookie_str);
    if (remails in cookie_obj) {
        if (rpwd === cookie_obj[remails]) {
            alert('登录成功');
            location.href = '../index.html';
        } else {
            alert('密码错误！');
        }
    } else {
        alert('用户名不存在');
    }
})




