const router=require('express').Router();
const Admin=require('./admin.controller');


router.get('/',Admin.AdminSimple);
router.get('/category',Admin.AdminCategory);
router.post('/category/add',Admin.AdminAddCategory);
router.get('/photos',Admin.AdminPhotos);
router.post('/photos/add',Admin.AdminAddPhotos);


module.exports=router;