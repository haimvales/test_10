import { createRowSupa } from '../dal/messagesdal.js';


export const  encryptMessage =  async (cipher_type, encrypted_text) => {
        return await createRowSupa('users',{username:username,cipher_type:cipher_type,encrypted_text:encrypted_text,inserted_at:Date()});
    }



