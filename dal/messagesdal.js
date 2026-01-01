import db from '../db/dbMongoConnect.js'
// import { MongoClient, ObjectId, Db } from "mongodb";
import supabase  from '../db/dbSupabaseConnect.js';

// export async function createRow(nameTable, objInsert) {
//     const insert = await db.collection(nameTable).insertOne(objInsert);
//     return {_id:insert.insertedId,username:objInsert.username} //_id: new ObjectId(id)
// }

// export async function getFirstByValue(nameTable, byValue, value) {
//     const row = await db.collection(nameTable).findOne({ [byValue]: value });
//     return row
// }


// export async function  createUser  (username, password)  {
//         const { data, error } = await db.collection(nameTable).insertOne(objInsert);
//         if (error) throw error;
//         return data;
//     }

export const  createRowSupa  = async (nameTable, objInsert) => {
        const { data, error } = await supabase.from(nameTable).insert(objInsert).select().single();
        if (error) throw error;
        return data;
    }

