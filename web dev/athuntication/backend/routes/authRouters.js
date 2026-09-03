import expess from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pool from '../config/db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'Email and password are required'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
        res.status(201).json({message: 'User registered successfully', user: result.rows[0]});
    } catch (error) {
        next(error);
    }   
});

export default router;