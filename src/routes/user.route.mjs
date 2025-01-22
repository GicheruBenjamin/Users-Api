import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.mjs';
import { authenticate } from '../middleware/auth.mjs';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Profile accessed', user: req.user });
});

export default router;
