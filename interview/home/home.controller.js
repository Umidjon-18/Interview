var Con=require('../connectMySQL');

function All(req,res){
    var query='SELECT * FROM postlar';
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

function Cars(req,res){
    var query="SELECT * FROM `postlar` WHERE Category='Cars'";
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

function Code(req,res){
    var query="SELECT * FROM `postlar` WHERE Category='Code'";
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

function Design(req,res){
    var query="SELECT * FROM `postlar` WHERE Category='Design'";
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

function Books(req,res){
    var query="SELECT * FROM `postlar` WHERE Category='Books'";
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

function Search(req,res){
    var searchPost=req.body.searchPost;
    var query="SELECT * FROM `postlar` WHERE `Title` LIKE "+`"${searchPost}"`+" OR `Category` LIKE "+`"${searchPost}"`;
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('index',{posts:result});
    })
}

module.exports={
    All,
    Cars,
    Code,
    Design,
    Books,
    Search
}