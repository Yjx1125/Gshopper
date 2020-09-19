$(function () {
    let flag = false;
    meth1();
    pwds();
    Sub();
    verify_code();
    //方式一
    $(".methond1").click(function () {
        // $(this).css({ "color": "#ff5224" }).siblings("li").css({ "color": "black" });
        meth1();
        pwds();


    })
    // 方式二
    $(".methond2").click(function () {
        meth2();
        pwds();
    })

})

//电子邮件注册样式设置
function meth1() {
    // $(".methond1").css("color", "#ff5224");
    $(".methond1").css({ "color": "#ff5224" }).siblings("li").css({ "color": "black" });

    // 设置方式二隐藏
    $(".detail2").css("display", "none").siblings(".detail1").css("display", "block");
    $(".details").css("height", "70px");
    // 聚焦
    $(".detail1 .emails").focus(function () {
        $(this).css("borderColor", "#ff5224");
        $(".detail1 label").css({ "top": "10px", "fontSize": "12px" });
        $(".p_email").css("display", "none");

    })
    // 失焦
    $(".detail1 .emails").blur(function () {
        $(this).css("borderColor", "#dcdfe6");
        let str_email = $(this).val();
        if (str_email !== "") {
            $(".detail1 label").css({ "top": "10px", "fontSize": "12px" });
            //判断邮箱是否 合法
            let re_email = /^\w+@\w+([-.]\w+)*$/;
            if (!re_email.test(str_email)) {
                $(".p_email").text("邮箱命名不合法").css("display", "block");
                return;
                console.log(148);
            } else {
                $(".p_email").css("display", "none");
            }
        } else {
            $(".detail1 label").css({ "top": "30px", "fontSize": "16px" });
            $(".p_email").text("请输入邮箱！").css("display", "block");
            return;
        }
    })
}
// 方式2样式
function meth2() {
    // alert("1518");
    $(".methond2").click(function () {
        $(this).css({ "color": "#ff5224" }).siblings("li").css({ "color": "black" });
        $(".detail1").css("display", "none").siblings(".detail2").css("display", "block");
        $(".details").css("height", "280px");


    })

    // 电话聚焦
    $(".detail2 .phones").focus(function () {
        $(this).css("borderColor", "#ff5224");
        $(".number label").css({ "top": "10px", "fontSize": "12px" });
    })
    // 失焦
    $(".detail2 .phones").blur(function () {
        $(this).css("borderColor", "#dcdfe6");
        if ($(this).val() !== "") {
            $(".number label").css({ "top": "10px", "fontSize": "12px" });
        } else {
            $(".number label").css({ "top": "30px", "fontSize": "16px" });

        }
    })
    // 图片聚焦
    $(".pic-test .test").focus(function () {
        $(this).css("borderColor", "#ff5224");
        $(".pic-test label").css({ "top": "10px", "fontSize": "12px" });
    })
    // 失焦
    $(".pic-test .test").blur(function () {
        $(this).css("borderColor", "#dcdfe6");
        if ($(this).val() !== "") {
            $(".pic-test label").css({ "top": "10px", "fontSize": "12px" });
        } else {
            $(".pic-test label").css({ "top": "30px", "fontSize": "16px" });

        }
    })
    // 验证码聚焦
    $(".code-test .test").focus(function () {
        $(this).css("borderColor", "#ff5224");
        $(".code-test label").css({ "top": "10px", "fontSize": "12px" });
    })
    // 失焦
    $(".code-test .test").blur(function () {
        $(this).css({ "borderColor": "#dcdfe6" });
        if ($(this).val() !== "") {
            $(".code-test label").css({ "top": "10px", "fontSize": "12px" });
        } else {
            $(".code-test label").css({ "top": "30px", "fontSize": "16px" });

        }
    })

}


//密码处理函数
function pwds() {
    //密码
    $(".in .password").focus(function () {
        $(".in").css({ "borderColor": "#ff5224" });
        $(".p_pwd").css("display", "none");
    })
    $(".in .password").blur(function () {
        $(".in").css("borderColor", "#dcdfe6");
        let str_pwd = $(this).val();
        if (str_pwd !== "") {
            //判断密码是否合法密码(长度在5~17之间，只能包含字母、数字和下划线)：
            let re_pwd = /^\w{5,17}$/;
            if (!re_pwd.test(str_pwd)) {
                $(".p_pwd").text("密码命名不合法").css("display", "block");
                return;

            } else {
                $(".p_pwd").css("display", "none");
            }
        } else {
            // $(".detail1 label").css({ "top": "30px", "fontSize": "16px" });
            $(".p_pwd").text("请输入密码！").css("display", "block");
            return;
        }
    })
    // //确认密码
    $(".te .password").focus(function () {
        $(".te").css("borderColor", "#ff5224");
        $(".p_pwdt").css("display", "none");

    })
    $(".te .password").blur(function () {
        $(".te").css("borderColor", "#dcdfe6");
        //判断是否和密码一致
        let str_pwd = $(".in .password").val();
        let str_pwdt = $(this).val();
        //判断密码是否合法密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
        if (str_pwd !== str_pwdt) {
            $(".p_pwdt").text("与原密码不一致").css("display", "block");
            return;
        } else {
            $(".p_pwdt").css("display", "none");

        }
    })

    // 密码的显示与隐藏
    $('.show_pass').click(function () {
        let pass_type = $(this).siblings('input.password').attr('type');
        if (pass_type === 'password') {
            $(this).siblings('input.password').attr('type', 'text');
            $(this).removeClass('glyphicon-eye-open').addClass('glyphicon-eye-close');
        } else {
            $(this).siblings('input.password').attr('type', 'password');
            $(this).removeClass('glyphicon-eye-close').addClass('glyphicon-eye-open');
        }
    })
}

//注册按钮函数
function Sub() {
    $('.btn').click(function () {
        let uemail = $('#uemails').val();
        let upwd = $('#upwds').val();
        if (uemail !== "" && upwd !== "") {
            //获取cookie
            let cookie_str = $.cookie('users') ? $.cookie('users') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            // console.log(151);
            //判断用户是否存在 
            if (uemail in cookie_obj) {
                console.log(1547);
                console.log(uemail);
                alert('用户已存在！');
                return;
            }
            //不存在，加入对象
            cookie_obj[uemail] = upwd;
            console.log(cookie_obj);
            //存入cookie
            $.cookie('users', JSON.stringify(cookie_obj), { expires: 7, path: '/' });
            // alert('注册成功！');

        }


    })
}


//获取随机验证码
function verify_code() {
    $(".code").click(function () {
        console.log(154);
        let randoms = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        $(this).text(randoms);
        $(this).css("borderColor", "#ff5224");

    })
}













