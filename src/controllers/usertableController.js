import mongoose from 'mongoose'
import userSchema from '../models/usertableModel'
 
const Access = mongoose.model('Access', userSchema)

// exports.statics.addNewUser = (newUser, callback)=>{
//     bcrypt.genSalt(10,(err, salt)=> {
//     bcrypt.hash(newUser.password, salt,(err, hash)=> {
//     newUser.password = hash;
//     newUser.save(callback);
//     });
//     });
//     }


 
// add new download to the database

exports.addNewUser=(req, res)=> {
    // console.log(req.body.firstname)
    let newAccess = new Access(req.body)
    newAccess.save((error, access) => {
        if (error) { res.json(error) }
        res.json(access)
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
    Access.remove({ _id: req.params.id }, (error, access) => {
        if (error) { res.json(error) }
        res.json(access)
    })
}




// exports.statics.addNewDownload = function(newUser, callback){
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//     newUser.password = hash;
//     newUser.save(callback);
//     });
//     });
//     }
