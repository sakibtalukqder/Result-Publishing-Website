
const router = require('express').Router();
const user = require('../Models/userModel');
const bcrypt = require('bcrypt');


// ____________________ Sinup Route ____________________ //

router.post('/post', async (req, res) => {
    const { FullName, Email, Password, Image } = req.body;
    console.log(req.body);
    bcrypt.hash(Password, 10)
        .then((hashPass) => {
            const User = new user({
                FullName: FullName,
                Email: Email,
                Password: hashPass,
                Image: Image,
            });

            User.save()
                .then((result) => {
                    res.status(201).send({
                        message: "Created Succesfully",
                        result,
                    })
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Not Created .... !!",
                        error,
                    })
                })
        })
        .catch((error) => {
            res.status(500).send({
                message: "Password Not Hashed .... !!",
                error,
            })
        })
})

// ____________________ Login Route _____________________ //

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const UserLogin = await user.findOne({ Email })
            .then((user) => {
                bcrypt.compare(Password, user.Password)
                    .then((passTrue) => {
                        if (passTrue) {
                            console.log(user);
                            res.status(200).json(user);
                        }
                    }).catch((err) => {
                        res.status(404).send({
                            message: 'Invalid Password',
                            err,
                        })
                    })
            }).catch((err) => {
                res.status(404).send({
                    message: 'Invalid Email',
                    err,
                })
            })
    } catch (error) {
        console.log(error);
    }
})

// ____________________ Get All Users ____________________ //

router.get('/', async (req, res) => {
    try {
        const allUser = await user.find();
        res.status(200).json(allUser);
    } catch (error) {
        console.log(error);
    }
})

// ____________________ Update Users ____________________ //

router.get('/find/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const upUser = await user.findById({ _id: id })
        res.status(200).json(upUser);
    } catch (error) {
        console.log(error);
    }
})

// ____________________ Update Users ____________________ //

router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const upUser = await user.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(upUser);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;