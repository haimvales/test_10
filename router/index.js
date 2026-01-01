import express from "express";
import { register } from "../ctrl/usersctrl.js";
import { correctKeys, correctNumberOfKeys, existingReportNumber, IsTheTypeCorrectr, validateUser } from "../middleware/usersmiddleware.js";
import { correctKeysM, correctNumberOfKeysM, IsTheTypeCorrectrM } from "../middleware/messagesmiddleware.js";
import { encrypt } from "../ctrl/messagesctrl.js";
// import { createUser } from "../ctrls/usersC.js";




const router = express.Router();

// User routes
router.post('/auth/register',correctNumberOfKeys,correctKeys,IsTheTypeCorrectr,existingReportNumber, register);
// router.post('/login', login);       

// messages routes 
router.post('/messages/encrypt/:username/:id',validateUser,correctNumberOfKeysM,correctKeysM,IsTheTypeCorrectrM,encrypt);             
// router.get('/messages', authMiddleware, getAll);             
// router.get('/messages/user/:userId', authMiddleware, getByUser); 
// router.put('/messages/:id', authMiddleware, update);          
// router.delete('/messages/:id', authMiddleware,deletee); 


// export const authMiddleware = async (req, res, next) => {
//     const { username, password } = req.headers; 

//     if (!username || !password) return res.status(401).send("Auth required");

//     const user = await userDal.findByUsername(username);
//     if (user && user.password === password) { 
//         req.user = user;
//         next();
//     } else {
//         res.status(401).send("Invalid credentials");
//     }
// };




export default router;










// import { createUser } from "../ctrls/usersC.js";
// import { confirmed, createReports, deleteById, getAllReports, getAllReportsHi4 } from "../ctrl/reportsC.js";
// import { correctKeys, correctNumberOfKeys, existingReportNumber, heHasConfirmed, IsTheTypeCorrectr, itHasDate } from "../middleware/reportsM.js";

// router.post("/login",validateUser);
// router.get("/products",validateUser,getsproducts,getAllProducts);
// router.post("/",correctNumberOfKeys,correctKeys,IsTheTypeCorrectr,existingReportNumber,itHasDate,heHasConfirmed,createReports);
// router.get("/",getAllReports);
// router.get("/high",getAllReportsHi4);
// router.put("/:id/confirm",confirmed);
// router.delete("/:id",deleteById);


