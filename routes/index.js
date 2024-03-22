const express=require('express')
const { AddStaff,LoginMember,Admindashboard,ChangeStatus,RemoveStaff } = require('../controller/controller')
const { Homepage ,HandleRegister,HandleRegisterSubmit} = require('../controller/homeController')
const { Attendence, MarkAttendence } = require('../controller/staffdetails')

const router=express.Router()



// router.get('/staff',HandleHome)

//main page
router.get('/',Homepage)
router.get('/register',HandleRegister)

router.post('/register',HandleRegisterSubmit)

//user login post
router.post('/login',LoginMember)

//admin add staff
router.post('/login/addStaff',AddStaff)
router.get('/login/status',ChangeStatus)
router.get('/login/Remove',RemoveStaff)

router.get('/login/admin',Admindashboard)
router.get('/login/attendence',Attendence)
router.get('/login/Markattendence',MarkAttendence)


//login admin or staff




module.exports=router