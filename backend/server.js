const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000; // Or any other port you prefer

// Middleware
app.use(express.json());
const auth = require('./routes/auth')
// Connect to MongoDB
mongoose.connect('mongodb+srv://aryan21454:aryan%409868@mangatracker.u97s7o1.mongodb.net/')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!'); // Just a test route
});

app.use('/api/v1',auth);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
