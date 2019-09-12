const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter); 
server.get('/' , (req,res) => {
    res.status(200).json({message : "Hello From Express .."})
})

module.exports = server;