const mongoUrl='mongodb://127.0.0.1:27017/aids_feedback_form_db'
const mongodb = require('mongodb');
const fs = require('node:fs');
const client = new mongodb.MongoClient(mongoUrl)
const db = client.db('aids_feedback_form_db');
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'BackpackFiles' });
fs.createReadStream('./AIDS-BAD-R19.pdf').//Upload
     pipe(bucket.openUploadStream('AIDS-BAD-R19', {
         chunkSizeBytes: 1048576,
         metadata: { field: 'AIDS-BAD-R19', value: 'myValue' }
     }))
const cursor = bucket.find({});
cursor.forEach(doc => console.log(doc));//Display
cursor.forEach(doc => bucket.delete(doc._id));//Delete

bucket.openDownloadStreamByName('AIDS-BAD-R19.pdf').//Download
    pipe(fs.createWriteStream('./outputFile.pdf'));