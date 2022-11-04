const router = require('express').Router()
const {File} = require('../models/fileModel')

router.post('/', async (req, res) => {
    try {
        let docs = {}
        for (let index = 0; index < req.body.length; index++) {
            const fileId = req.body[index];
            docs[fileId] = await File.findOne({_id:fileId})
        }
        console.log(docs)
        return res.status(200).send(docs)
    } catch (error) {
        console.log(error,'getFileDetails')
        return res.status(500).send(error)
    }
}) 

module.exports = router   