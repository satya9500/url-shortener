const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Url = require('./model');
const { nanoid } = require('nanoid');

exports.shortenURL = asyncHandler(async (req, res, next)=>{
    let expirationTime = req.body.expirationTime;
    const {extendedUrl} = req.body;
    if(!req.body.expirationTime) {
        expirationTime = new Date();
        expirationTime.setMinutes( expirationTime.getMinutes() + 30 );
    }
    console.log(req.body);
    const shortUrl = await nanoid(6);
    const url = await Url.create({extendedUrl, userId: req.user.id, expirationTime, shortUrl});
    res.status(200).json({
        url
    });
});

exports.redirectURL = asyncHandler(async (req, res, next)=>{
    const shortUrl = req.params.id;
    const urlDetails = await Url.findOne({shortUrl});
    console.log(urlDetails);
    if(!urlDetails)
        return next(new ErrorResponse('No such URL exists!', 404));
    if(Date.now() > urlDetails.expirationTime)
        return next(new ErrorResponse(('This URL has expired'), 400));
    return res.status(200).json({
        extendedUrl: urlDetails.extendedUrl
    })
});

