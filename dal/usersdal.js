import db from '../db/dbMongoConnect.js'
import { MongoClient, ObjectId, Db } from "mongodb";
import supabase  from '../db/dbSupabaseConnect.js';

export async function createRow(nameTable, objInsert) {
    const insert = await db.collection(nameTable).insertOne(objInsert);
    return {_id:insert.insertedId,username:objInsert.username} //_id: new ObjectId(id)
}

export async function getFirstByValue(nameTable, byValue, value) {
    const row = await db.collection(nameTable).findOne({ [byValue]: value });
    return row
}

export async function updateCounter( username, newValue) {
    const newObj = { $set: { encryptedMessagesCount: newValue } }
    const rows = await db.collection('users').updateOne({ username: username }, newObj);
    return rows
}
