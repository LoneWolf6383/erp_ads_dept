const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const connection = require('./db')
const authRoutes = require('./routes/auth')
const submitReviewRoutes = require('./routes/submitReview');
const addFeedBackRoutes = require('./routes/addFeedback')
const addCourseRoutes = require('./routes/addCourse')
const getAllCourseDetails = require('./utilities/getAllCourseDetails')
const getFeedbackPattern = require('./utilities/getFeedbackPattern')
const getRatings = require('./utilities/getRatings')
const isReviewed = require('./utilities/isReviewed')
const initiateReviews = require('./utilities/initiateReviews')
const getResults = require('./utilities/getResults')
const feedbackGenerator = require('./utilities/feedbackGenerator')
const path = require('path');
var bodyParser = require('body-parser');
const { dirname } = require('path')
const { fileURLToPath } = require('url')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy:false
}))
app.use(express.json())

let __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'./client/build')))

app.use('/feedback/signin',authRoutes)
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

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname,'build','index.html'))
//     })
// }
const port = process.env.PORT || 4901
app.listen(port, () => {
    console.log('Server fired up at',port);
})