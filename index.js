const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router = require('./routes')


mongoose.connect('mongodb://127.0.0.1:27017/ParkApp')
.then(()=>console.log('DB connected'))
.catch(err=>console.log('Error in connecting'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.set('view engine', 'ejs');

app.use('/',router)



app.listen(8000,function(){
    console.log('Server is running')
})