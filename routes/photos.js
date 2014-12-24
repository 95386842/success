/**
 * Created by zcui on 12/13/14.
 */
var express = require('express');
var router = express.Router();
var photos = [];
var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;
//photos.push({
//
//
//    name:'nodejs logo',
//    path:'http://nodejs.org/images/logos/nodejs-green.png'
//});
//photos.push({
//    name:'ryan',
//    path:'http://nodejs.org/images/ryan-speaker.jpg'
//});

//exports.list = function(req, res){ res.render('photos', {
//    title: 'Photos',
//    photos: photos });
//};
var list = function(req, res, next){
    Photo.find({}, function(err, photos){
        if (err) return next(err);
        res.render('photos', {
            title: 'Photos',
            photos: photos
        });
    });
};
//exports.form = function(req, res){
//    res.render('photos/upload', {
//        title: 'Photo upload'
//    });
//};
//exports.submit = function (dir) {
//    return function(req, res, next){
//
//
//        console.log(JSON.stringify(req.body));
//        console.log(JSON.stringify(req.files));
//        console.log(req.body.photo.name);
//        console.log(req.files.image.name);
//        var img = req.files.image;
//        var name = req.body.photo.name || img.name;
//        var path = join(dir, img.name);
//
//        fs.rename(img.path, path, function(err){
//            if (err) return next(err);
//
//            Photo.create({
//                name: name,
//                path: img.name
//            }, function(err) {
//                if (err) return next(err);
//                res.redirect('/');
//            });
//        });
//    };
//};
//
//exports.download = function(dir){
//
//    return function(req,res,next) {
//
//        var id = req.params.id;
//
//        Photo.findById(id,function(err,photo){
//
//            if(err) return next(err);
//            var path = join(dir,photo.path);
//            res.sendfile(path);
//
//        });
//    }
//}
router.get('/');
router.get('/',list);
module.exports = router;