// Initiate connection to MongoDB database
import mongoose from 'mongoose';

export const connecDB = () =>{
        try {
            const connectionInstance = mongoose.connect(process.env.MONGODB_URI); 
            console.log('Connected to MongoDB');     
        } catch (error) {
            console.log(error);     
        }

}