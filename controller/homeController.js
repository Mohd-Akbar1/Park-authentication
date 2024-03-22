const { Admin } = require("../model/data");


async function Homepage(req,res){
    return res.render('MainHome')

}

async function HandleRegister(req,res){

    return res.render('register')

}

async function HandleRegisterSubmit(req,res){
    const {name,email,password,confirmpassword}=req.body;
    if(password!==confirmpassword){
        return res.redirect('back')
    }
    await Admin.create({
        name,
        email,
        password
    })

    
    return res.redirect('/')

}



module.exports={
    Homepage,
    HandleRegister,
    HandleRegisterSubmit
}