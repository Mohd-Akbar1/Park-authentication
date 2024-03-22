const {Staff,Admin} = require("../model/data")



async function Admindashboard(req,res){
    const users=await Staff.find({}).sort({'updatedAt': -1})
    if(!users){
        return res.send('List is emplty')
    }else{
        return res.render('admin',{users})
    }
    
   
}
async function AddStaff(req,res){
    const {fullname,Routine}=req.body;
    const user=await Staff.create({
        name:fullname,
        Routine:Routine,

    })

    return res.redirect('admin')
}






//login

async function LoginMember(req,res){
    const {email,password,gridRadios}=req.body
    // console.log(req.body)

    if(gridRadios==='Admin'){
        const admin=await Admin.findOne({email})
        if(!admin) return res.send('invalid id')
        if (admin.password!==password) return res.redirect('back')

        return res.redirect('/login/admin')
    }else{
        try {
            const emailId=email.slice(0,24)
                const users=await Staff.findById({_id:emailId})

            console.log(users)
            return res.json(users)
        } catch (error) {
            return res.redirect('back')
        }

    }
    
   
   

}
async function ChangeStatus(req,res){
    try {
        const Currentstatus = req.query.status;
        const _id = req.query.id;
        console.log(Currentstatus, _id);

        // Assuming Staff is a mongoose model
        const user = await Staff.updateOne({ _id }, { $set: { Status: Currentstatus } });
        console.log(user);

        return res.redirect('back');
    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }

}
async function RemoveStaff(req,res){
    const _id=req.query.id
    await Staff.findOneAndDelete({_id})
 
    return res.redirect('back')
}


module.exports={
    Admindashboard,AddStaff,LoginMember,Admindashboard,
    ChangeStatus,RemoveStaff

}