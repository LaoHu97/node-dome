var User = require("../models/users.js");

async function admin(req, res, next) {
  var user = new User({
        username : '张三',                 //用户账号
        userpwd: 'abcd',                            //密码
        userage: 37,                                //年龄
        logindate : new Date()                      //最近登录时间
    });

    user.save(function (err) {
        if (err) {
            res.send('添加失败');
            console.log("添加失败");
        }
        else {
            res.send('添加成功');
            console.log("添加成功");
        }
    });
}
module.exports = {
  admin:admin
};
