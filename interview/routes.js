const express = require('express');
const router = express.Router();
const homeRouter=require('./home/home.router');
const adminRouter=require('./admin/admin.router');
const photoRouter=require('./photo/photo.router');


router.use('/',homeRouter);
router.use('/admin',adminRouter);
router.use('/photo',photoRouter);


module.exports = router;
