const mongoose=require('mongoose')
const staffSchema=new mongoose.Schema({
    name:String,
    Routine:String,
    Status:{type:String,default:"Active"},
    StaffAttendance:[]


},{ timestamps: true })

const AdminSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
    


},{ timestamps: true })

const Admin=new mongoose.model('Admin',AdminSchema)
const Staff=new mongoose.model('Staff',staffSchema)
module.exports={
    Admin,
    Staff
    
}