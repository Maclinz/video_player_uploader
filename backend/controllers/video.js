const VideoSchema = require('../models/VideoModel');

exports.addVideo =  async (req, res) => {
    const {title, description} = req.body;
    const videoPath = req.file.path;

    const video = new VideoSchema({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    })

    try {
        await video.save();
        res.status(200).json({
            message: 'Video Uploaded Succesfully',
            video
        })
    } catch (error) {
        res.status(400).json({
            message: 'Video upload failed',
            error
        })
    }
}

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await VideoSchema.find({})
        res.status(200).json({
            videos
        })
    } catch (error) {
        res.status(400).json({
            message: 'Videos fetch failed',
            error
        })
    }
}
