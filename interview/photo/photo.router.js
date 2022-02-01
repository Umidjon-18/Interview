const router=require('express').Router();
const Photo=require('./photo.controller');


router.get('/:id',Photo.ViewPhotoById);


module.exports=router;
