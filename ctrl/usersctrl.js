import { registeruser }  from '../service/userscervice.js';

export const register = async (req, res) => {
    try {
        const user = await registeruser(req.body.username, req.body.password);
        res.status(201).json(user);
    } catch (e) { res.status(400).send(e.message); }
};