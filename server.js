const express =require('express');
const data=require('./store');
const multer= require('multer');
const app=express();
const upload=multer();

app.use(express.static('./templates'));
app.set('view engine', 'ejs');
app.set('views','./templates');

app.get('/',(req,res)=>{
    
return res.render('index',{data: data});

});
app.post('/',upload.fields([]),(req,res)=>{
data.push(req.body);
return res.redirect('/');

});
app.listen(4000, ()=>{
    console.log('server is running on port 4000')
});
