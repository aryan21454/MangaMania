import dotenv from 'dotenv';
import express from 'express';

dotenv.config(
    {
        path: '../.env'
    }
)
// console.log(process.env.PORT);
connectDB().then(
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
)).catch((err)=>console.log(err));