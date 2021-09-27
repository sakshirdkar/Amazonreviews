const express = require('express');
const router = express.Router();
const Message = require('../database/models/Message');

router.get('/',async (req,res) =>{
    const messages = await Message.find();
    res.json(messages);
});

router.post('/',async (req, res) =>{
    const message = new Message({
        content : req.body.content
    });
    message.save();
})

module.exports = router