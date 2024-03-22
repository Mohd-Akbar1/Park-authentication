const {Staff} = require("../model/data")
const moment=require('moment')

async function Attendence(req,res){
    const id=req.query.attendence
    
    const users=await Staff.findById({_id:id})
    const attendies=users.StaffAttendance
    console.log(attendies)
    
    
    return res.render('Staff',{users,attendies})
   



}



async function MarkAttendence(req, res) {
    try {

        
        const Status = req.query.status;
        const id = req.query.id;
        console.log(Status, id);
        
        const date = moment();
        const formattedDate = date.format('DD MM,YYYY,hh:mm:ss A');
        console.log(formattedDate);

        const user = await Staff.updateOne({_id: id}, {$push: {StaffAttendance: {formattedDate, Status}}});
        
        return res.redirect('back');
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}


module.exports={
    Attendence,MarkAttendence
}