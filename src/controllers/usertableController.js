import mongoose from 'mongoose'
import userSchema from '../models/usertableModel'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
const Access = mongoose.model('Access', userSchema)



 
// add new download to the database

// exports.addNewUser=(req, res)=> {
//     // console.log(req.body.firstname)
//     let newAccess = new Access(req.body)
//     newAccess.save((error, access) => {
//         if (error) { res.json(error) }
//         res.json(access)
//     })
// }

exports.addNewUser=(req, res)=> {
    const reg=/^[A-Za-z]\w{7,14}$/;
    if(reg.test(req.body.password))
    {
    if(req.body.password === req.body.confirmpassword){
    req.body.password = cryptr.encrypt(req.body.password);
    req.body. confirmpassword = cryptr.encrypt(req.body.confirmpassword);
    }
    } 
    else{
    req.body.password ="";
    }
    let newAccess = new Access(req.body)
    newAccess.save((error, access) => {
    if (error) { res.json(error) }
    console.log("login")
    res.json("logged in successfully")

   
    })
    }

// get all downloads from the database
exports.getUsers=(req, res) => {
    console.log("hii")
    Access.find({}, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// get single download based on the id
exports.getUser=(req, res) => {
    Access.findById(req.params.id, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// update the download information based on id
exports.updateUser=(req, res) => {
    Access.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}
 
// delete the download from the database.
exports.deleteUser=(req, res) => {
    Access.remove((error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}



// let user = await User.findOne({ email: req.body.email });
//     if (user) {
//         return res.status(400).send('That user already exisits!');
//     } else {
//         // Insert the new user if they do not exist yet
//         user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
//         await user.save();
//         res.send(user);
//     }
// });



// exports.statics.addNewUser = function(newUser, callback){
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//     newUser.password = hash;
//     newUser.save(callback);
//     });
//     });
//     }
