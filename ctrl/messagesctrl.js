import { getFirstByValue, updateCounter } from '../dal/usersdal.js';
import { encryptMessage }  from '../service/messagesservice.js';


export const encrypt = async (req, res) => {
    try {
        const text = req.body.encrypted_text.toUpperCase().split('').reverse().join('');
        const user = await getFirstByValue('users','username',req.params.username)
        const count = user.encryptedMessagesCount + 1
        await updateCounter(req.params.username,count)
        const msg = await encryptMessage(req.body.cipher_type, text);
        res.status(201).json(msg);
    } catch (e) { res.status(400).send(e.message); }
};