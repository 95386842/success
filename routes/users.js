var express = require('express');
var router = express.Router();
var User = require('../models/User');
var qs = require('querystring');
/* GET users listing. */


var save = function(req,res){



    var u = qs.stringify(req.body);
    console.log(u);
    console.log((req.params));
    console.log(req.query);
    console.log(req.body.user);
    console.log(req.body);
    var user = new User(req.body.user);
    user.save(function(err){

        if(!err){
            console.log('save ,success');
            res.redirect('/');
        }else{


        }
    });

}

var getusers = function(res,callback){




    var query = User.find({});
    query.exec(function(err,users){


        if(!err){

            data = users;
            callback(res,users);
            //console.log(users);
        }
    });

    //console.log(data);
    //return data;
}

var  users_callback = function(res,users)
{
    res.render('users/list',{"users":users});
}

var delete_ = function(req,res,next){

    console.log('enter delete');
    User.remove({username:"xiaowang"},function(err){

        if(!err){

            console.log('remove success');
        }

    });

}
var put = function(req,res,next){


}
router.get('/list', function (req,res) {

    //var users = getusers();
    //console.log(users);
    //res.render('/users/list',{"users":users});
    getusers(res,users_callback)
});
router.get('/', function(req, res) {
    console.log((req.params));
    console.log(req.query);
    console.log(req.body.user);
    console.log(req.body);
    res.render('users/reg',{"title":"用户注册"});
});
router.delete('/',delete_);
router.post('/',save);
router.put('/',put);

module.exports = router;
