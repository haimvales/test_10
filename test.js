// import db from './db/dbMongoConnect.js'
// import { MongoClient, ObjectId, Db } from "mongodb";

// export async function createRow(nameTable, objInsert) {
//     const insert = await db.collection(nameTable).insertOne(objInsert);
//     // console.log(insert);
//     return insert
// }

// createRow('users',{username:"haim",password:"1234",encryptedMessagesCount:0,createdAt:Date()})



export const  createUser  = async (username, password) => {
        const { data, error } = await supabase.from('users').insert([{ username, password }]).select().single();
        if (error) throw error;
        return data;
    }

export const  registeruser =  async (username, password) => {
        return await userDal.createUser(username, password);
    }

export const register = async (req, res) => {
    try {
        const user = await registeruser(req.body.username, req.body.password);
        res.status(201).json(user);
    } catch (e) { res.status(400).send(e.message); }
};