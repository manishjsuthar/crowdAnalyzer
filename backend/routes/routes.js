const express = require('express');
const router = express.Router();
const Users = require('../model/user');

//Post Method
router.post('/post', async (req, res) => {
    try {
        const data = new Users({
            hospitalId:1,
            slot: req.body.slot,
            count: req.body.count,
            total:1
        })
    
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.mes2sage})
    }
})

//Update by ID Method
router.post('/update/:id', async (req, res) => {
    try {
        const slot = req.params.id;
        const data = await Users.find({"slot":slot});
        if(data.length != 0){
            const count1 = req.body.count;
            const count = count1 + data[0].count;
            const total = data[0].total + 1;
            const result = await Users.findOneAndUpdate(
                {slot}, {count, total}
            )
            res.send(result)
        }
        else{
            const data = new Users({
                hospitalId:req.body.hospitalId,
                slot: slot,
                count : req.body.count,
                total :  1,
            })
        
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error)
    }
})

//Get all Method
router.get('/get', async (req, res) => {
    try{
        const data = await Users.find().sort(
          { slot:1}
        );
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;