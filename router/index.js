import express from "express";
import { register } from "../ctrl/usersctrl.js";
import { correctKeys, correctNumberOfKeys, existingReportNumber, IsTheTypeCorrectr, validateUser } from "../middleware/usersmiddleware.js";
import { correctKeysM, correctNumberOfKeysM, IsTheTypeCorrectrM } from "../middleware/messagesmiddleware.js";
import { encrypt } from "../ctrl/messagesctrl.js";





const router = express.Router();

// User routes
router.post('/auth/register',correctNumberOfKeys,correctKeys,IsTheTypeCorrectr,existingReportNumber, register);
     

// messages routes 
router.post('/messages/encrypt/:username/:id',validateUser,correctNumberOfKeysM,correctKeysM,IsTheTypeCorrectrM,encrypt);             





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


