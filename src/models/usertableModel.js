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
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        unique: true,
        
    },
    password:{
        type:String,
        required:  'password is not valid',
        match:/^[A-Za-z]\w{7,14}$/
    },
    confirmpassword:{
        type:String,
        required:  'password not matching',
        match:/^[A-Za-z]\w{7,14}$/
    },
    
});

 
export default userSchema;








// exports.addNewDownload=(req, res)=> {
//     const reg= /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
//     if(reg.test(req.body.Password))
//     {
//     if(req.body.Password === req.body. ConfirmPassword){
//     req.body.Password = cryptr.encrypt(req.body.Password);
//     req.body. ConfirmPassword = cryptr.encrypt(req.body.ConfirmPassword);
//     }
//     } 
//     else{
//     req.body.Password ="";
//     }
 