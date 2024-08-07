// routes/signin.js
const jwt = require('jsonwebtoken');
const { connectDB, User } = require('../database/databaseFile.js');
const signinSchema = require('../zodValidation/signinSchema');
const validate = require('../middlewares/signinValidation');
const { Router } = require("express");
const router = Router();

const SECRET_KEY = "00000000";

// Connect to your MongoDB database
connectDB();

// Sign-in endpoint
router.post('/', validate(signinSchema), async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        // Check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY);

        res.status(200).json({
            message: 'Signed in successfully',
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
});

module.exports = router;
