const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
// Register 
router.post('/register', async (req, res) => {
    try{
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);
       const user = new User({ email, username, password : hashpassword });
       await user.save().then(()=> res.status(200).json({message: "User created successfully"})
       );
    }
    catch(err){
        res.status(200).json({message: "User already exists"})
    }
});
// Sign in 
router.post('/signin', async (req, res) => {
    try{
        const user = await User.findOne({email : req.body.email});
        if (!user) {
             res.status(200).json({message: "User does not exist"})
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            res.status(200).json({message: "Password is incorrect"})
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others});
    }
    catch(err){
        res.status(200).json({message: "User already exists"})
    }
});
module.exports = router;