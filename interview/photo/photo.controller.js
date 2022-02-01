const Con=require('../connectMySQL');


function ViewPhotoById(req,res){
    var photoId=req.params.id;
    var query="SELECT * FROM postlar WHERE id="+photoId+"";
    Con.query(query,(err,result)=>{
        if(err) throw err;
        res.render('photoById' ,{result:result});
    })

}

module.exports={
    ViewPhotoById
}