const { addVideo, getAllVideos } = require('../controllers/video')
const { videoUpload } = require('../middlewares/videoUpload')

const router = require('express').Router()


router.post('/upload', videoUpload.single('video'), addVideo)
    .get('/videos', getAllVideos)
module.exports = router