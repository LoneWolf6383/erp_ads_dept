const router = require('express').Router()
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require('dotenv').config()
// const mongoURI = "mongodb://localhost:27017/aids_feedback_form_db";
const mongoURI =  process.env.REACT_APP_MONGODB_URL
const { File } = require('../models/fileModel')
const { CourseBackpack } = require('../models/courseBackpackModel')
// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Connection Error'));
let gridFSBucket;
conn.once('open', async () => {
    gridFSBucket = await new mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'BackpackFiles'}); 
})
// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => { 
    return new Promise((resolve) => {
        const fileInfo = {
          filename: req.body.filename,
          bucketName: 'BackpackFiles'
        };
        resolve(fileInfo);
    });
  }
});
const upload = multer({ storage : storage});

//File Upload
router.post('/', upload.any(), async(req, res) => {
  const FileId = String((await File.findOne({ filename: req.body.filename }))._id)
  await CourseBackpack.updateOne(
    {
      courseId: req.body.courseId,
      batch: req.body.batch,
      fileIds: {$nin:FileId}
    },
    {
      $push: { "fileIds": FileId }
    })
    res.send("File Uploaded Successfully");
  });
router.get('/', async (req, res) => {
  let contentType;
  let fileId = req.query.fileId.toString();
  let filename
  await File.find({ _id: fileId }).then((file) => {
    filename = file[0].filename
    contentType = file[0].contentType;
    //setting response header
    res.set({
      "Accept-Ranges": "bytes",
      "Content-Disposition": `attachment; filename=${filename}`,
      "Content-Type": `${contentType}`
    });

    const readstream = gridFSBucket.openDownloadStreamByName(filename);
    readstream.pipe(res);
  })
})

module.exports= router