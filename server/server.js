const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const connection = require('./db')
const authRoutes = require('./routes/auth')
const addFeedBackRoutes = require('./routes/addFeedback')
const addCourseRoutes = require('./routes/addCourse')
const getAllCourseDetails = require('./utilities/getAllCourseDetails')
const getFeedbackPattern = require('./utilities/getFeedbackPattern')
const getRatings = require('./utilities/getRatings')
const isReviewed = require('./utilities/isReviewed')
const initiateReviews = require('./utilities/initiateReviews')
const getResults = require('./utilities/getResults')
const feedbackGenerator = require('./utilities/feedbackGenerator')
const addCourseToBackpack = require('./routes/addCourseToBackpack')
const fileUploadDownload = require('./routes/fileUploadDownload')
const getBackpackFiles  = require('./utilities/getBackpackFiles')
const submitReviewRoutes = require('./routes/submitReview')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy:false
}))
app.use(express.json())

app.use('/getBackpackFiles',getBackpackFiles)
app.use('/feedback/signin', authRoutes)
app.use('/feedback/review',submitReviewRoutes)
app.use('/addFeedBack', addFeedBackRoutes)
app.use('/addCourse', addCourseRoutes)
app.use('/getAllCourseDetails', getAllCourseDetails)
app.use('/getFeedbackPattern', getFeedbackPattern)
app.use('/getRatings',getRatings)
app.use('/isReviewed',isReviewed)
app.use('/initiateReviews',initiateReviews)
app.use('/getResults', getResults)
app.use('/feedbackGenerator', feedbackGenerator)
app.use('/addCourseToBackpack', addCourseToBackpack)
app.use('/file', fileUploadDownload)
 
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server fired up at',port);
})