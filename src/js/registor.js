 //表单验证-用户名
 $().ready(function () {



    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({

        // debug: true,
        submitHandler: function (form) {
            // console.log(form);
            $(form).find('input[name="username"]');
            // console.log($(form).find('input[name="username"]').val());
            $.ajax({
                type: 'POST',
                url: '../php/regis.php',
                data: {
                    username: $(form).find('input[name="username"]').val(),
                    pass: $(form).find('input[name="pass"]').val(),

                },
               success: function () {
                    console.log('success');
                    location.href = "http://localhost/weipinhui/src/login.html";

                },
                dataType:"json"
            });


        },
        rules: {

            username: {
                required: true,
                minlength: 5
            },
            pass: {
                required: true,
                minlength: 6,
                maxlength: 20,
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength: 20,
                equalTo: "#pass"
            },


            agree: "required"
        },
        messages: {
            username: {
                required: "",
                minlength: "用户名必需由个5字母组成"
            },
            pass: {
                required: "请输入密码",
                minlength: "密码由6-20位字母，数字和符号组合",
                maxlength: "密码由6-20位字母，数字和符号组合"
            },
            confirm_password: {
                required: "请再次输入密码",
                minlength: "密码由6-20位字母，数字和符号组合",
                maxlength: "密码由6-20位字母，数字和符号组合",
                equalTo: "两次密码输入不一致"
            },

            agree: "接受服务条款才能注册",

        }



    })
});