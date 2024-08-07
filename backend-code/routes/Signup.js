const jwt = require('jsonwebtoken');
const { connectDB, User } = require('../database/databaseFile.js');
const signupSchema = require('../zodValidation/signupSchema');
const validate = require('../middlewares/signupValidation');
const { Router } = require("express");
const router = Router();

const SECRET_KEY = "00000000";

// Connect to your MongoDB database
connectDB();

// Signup endpoint
router.post('/', validate(signupSchema), async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email is already in use'
            });
        }

        // Create a new user
        const newUser = new User({
            fullName: fullName,
            email: email,
            password: password,
        });

        await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id }, SECRET_KEY);

        res.status(201).json({
            message: 'User created successfully',
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
