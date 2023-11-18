const router = require('express').Router();
const Results = require('../Models/ResultModel');


// get Data 
router.get('/', async (req, res) => {
    try {
        const allResult = await Results.find();
        res.status(201).json(allResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

// Post Requeat 
router.post('/post', async (req, res) => {
    const { Name, Roll, Shift, Class, Sub, cgpa, Total } = req.body;
    console.log(req.body);
    try {
        const newResult = await Results.create({ Name, Roll, Shift, Class, Sub, cgpa, Total });
        res.status(200).json(newResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//Single Result
router.get('/single/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const singleResult = await Results.findById({ _id: id });
        res.status(200).json(singleResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

// Update Data 
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const upResult = await Results.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(upResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

// Delete
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteResult = await Results.findByIdAndDelete({ _id: id });
        res.status(200).json(deleteResult);
    } catch (error) {
        console.log(error);
        res.status(501).json({ error: error.message })
    }
})


// Search Results 

router.get('/search', async (req, res) => {

    console.log(req.query);
    const { Roll, Shift, Class } = req.query;

    const query = {};

    if (Roll) {
        query.Roll = Roll;
    }

    if (Shift) {
        query.Shift = Shift;
    }

    if (Class) {
        query.Class = Class;
    }


    try {
        const items = await Results.find(query);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while searching for items.' });
    }

})

module.exports = router;