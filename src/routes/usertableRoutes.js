import { addNewUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/usertableController'
const { check, validationResult  } = require('express-validator/check')

const routes = (app) => {
    app.route('/login')
        .get(getUsers)
        .delete(deleteUser)
        
    app.route('/signup')
    .post(addNewUser)
        app.post('/login', [
            check('firstname').isEmpty().trim(),
            check('lastname').isEmpty().trim(),
            check('email').isEmpty().trim(),
            check('password').isEmpty().trim(),
            check('confirmpassword').isEmpty().trim()
            ], addNewUser, (req, res) => {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
            }
            
            User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmpassword
            }).then(user => res.json(user));
            });
    app.route('/access/:id')
        .get(getUser)
        .put(updateUser)
       
}
 
export default routes