import mongoose from 'mongoose'
import downloadSchema from '../models/usertableModel'
 
const Download = mongoose.model('Download', downloadSchema)


// app.post('/form', [
//     check('firstname').isLength({ min: 3 }),
//     check('email').custom(email => {
//       if (alreadyHaveEmail(email)) {
//         throw new Error('Email already registered')
//       }
//     }),
//     check('password').isNumeric()
//   ], (req, res) => {
//     const firstname  = req.body.firstname
//     const email = req.body.email
//     const password   = req.body.password
//   })





// function findUserByEmail(email){
//     if(email){
//         return new Promise((resolve, reject) => {
//             newDownload.findOne({ email: email })
//             .exec((err, doc) => {
//               if (err) return reject(err)
//               if (doc) return reject(new Error('This email already exists. Please enter another email.'))
//               else return resolve(email)
//             })
//         })
//       }
//    }



 
// add new download to the database
exports.addNewDownload=(req, res)=> {
    console.log(req.body.firstname)
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download.firstname)
    })
}
 
// get all downloads from the database
exports.getDownloads=(req, res) => {
    console.log("hii")
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}
 
// get single download based on the id
exports.getDownload=(req, res) => {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// update the download information based on id
exports.updateDownload=(req, res) => {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// delete the download from the database.
exports.deleteDownload=(req, res) => {
    Download.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}