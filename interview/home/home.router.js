const router=require('express').Router();
const Home=require('./home.controller');

router.get('/',Home.All);
router.get('/cars',Home.Cars);
router.get('/code',Home.Code);
router.get('/design',Home.Design);
router.get('/books',Home.Books);
router.post('/search',Home.Search);

module.exports=router;