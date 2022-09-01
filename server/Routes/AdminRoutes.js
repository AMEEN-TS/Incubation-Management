const {checkAdmin } = require('../Middlewares/AdminMiddlewares');
const {adminlogin,AllApplications,newdata,PendingApplications,viewApplication,changeStatus,allSlots,SlotUpdate,getuser,blockUser,unblockUser,deleteUser}=require('../Controllers/AdminControllers');








const router =require('express').Router();

router.post('/',checkAdmin)
router.post('/login',adminlogin)
router.get('/alldata',AllApplications)
router.get('/newdata',newdata)
router.get("/pendingapplications",PendingApplications)
router.get('/viewApplication/:id',viewApplication)
router.post('/changeStatus',changeStatus)
router.get('/allslots',allSlots)
router.post('/slotUpdate',SlotUpdate)
router.get('/getUser',getuser);
router.put('/blockUser/:id',blockUser)
router.put('/unblockUser/:id',unblockUser)
router.post('/deleteUser/:id',deleteUser)





module.exports=router;