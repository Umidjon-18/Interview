var Con = require('../connectMySQL');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single('myImage');



//Functions

function AdminSimple(req, res) {
    res.render('admin');
}

function AdminCategory(req, res) {
    var query = 'SELECT * FROM categoriyalar';
    Con.query(query, (err, result) => {
        if (err) throw err;
        res.render('category', { category: result });
    })
}

function AdminPhotos(req, res) {
    var query = 'SELECT nomi FROM categoriyalar';
    Con.query(query, (err, result) => {
        if (err) throw err;
        res.render('photos', { category: result });
    })
}

function AdminAddCategory(req,res){
    var newCategory=req.body.newCategory;
    var query="INSERT INTO `categoriyalar`( `nomi`) VALUES ('"+newCategory+"')"
    Con.query(query,(err,result)=>{
        if (err) throw err;
        res.redirect('/admin/category');
    })
}

function AdminAddPhotos(req,res){
    upload(req, res, (err) => {
        if (err) {
            res.send(err)
        } else {
            var body = req.body;
            Con.query("INSERT INTO `postlar`( `Category`, `Image`, `Title`, `Description`) VALUES ('" + body.Category + "','" + req.file.filename + "','" + body.Title + "', '" + body.Description + "')", function (err, result) {
                if (err) throw err;
                res.redirect('/');
            });
        }
    })
}

module.exports = {
    AdminSimple,
    AdminCategory,
    AdminAddCategory,
    AdminPhotos,
    AdminAddPhotos
}