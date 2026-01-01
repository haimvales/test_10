import { createRow }  from '../dal/usersdal.js';

export const  registeruser =  async (username, password) => {
        return await createRow('users',{username:username,password:password,encryptedMessagesCount:0,createdAt:Date()});
    }


