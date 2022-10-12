const express = require('express');
const router = express.Router();
const user = require("./Schema");


router.post('/Login', (req, res) => {
    user.findOne({ "email": req.body.email }, (err, user) => {
        if (user) {
            if (req.body.password === user.password) {
                res.json("Successfully Logged In")
            }
            else {
                res.json("Wrong Credentials");
            }
        }
        else {
            res.json("User Not Found");
        }
    })

});

router.post('/Register', (req, res) => {
    user.findOne({ "email": req.body.email }, (err, userss) => {
        if (userss) {
            res.json("User already existing")
        }
        else {
            const users = new user({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            users.save((err) => {
                if (err) {
                    res.json("Error")
                }
                else {
                    res.json("Added Successfully")
                }
            });
        }
    })

})


module.exports = router;