//routes/userRoutes
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register',authMiddleware, registerUser);
router.post('/login',authMiddleware, loginUser);


module.exports = router;
