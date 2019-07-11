import mongoose from 'mongoose'

const Schema = mongoose.Schema
 
const userSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    firstname: {
        type: String,
        required:  'firstname cannot be blank'
    },
    lastname: {
        type: String,
        required:  'lastname cannot be blank'
    },
    email:{
        type:String,
        required:  'type a valid email',
        // unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        // match: [^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/] 
    },
    password:{
        type:String,
        required:  'password is not valid'
    },
    confirmpassword:{
        type:String,
        required:  'password not matching'
    },
    
});

 
export default userSchema;





