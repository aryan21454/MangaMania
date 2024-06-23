import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken :{
        type : String,
        required : true, 
    },
    list :[{
        type: mongoose.Types.ObjectId,
        ref: 'Manga'
    }],
});

userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) {
        return  next();
       }
       this.password = await bcrypt.hash(this.password, 10);
       next();
});
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken  = async  () =>{
    await jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,

    }
    ,process.env.ACCESS_TOKEN_SECRET 
    ,{
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
    
    )
}

userSchema.methods.generateRefreshToken = async () =>{
   await jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,

    }
    ,process.env.REFRESH_TOKEN_SECRET 
    ,{
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
    
    )
};



export const User = mongoose.model('User', userSchema);


