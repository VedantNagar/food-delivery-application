const multer = require("multer")

const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"]
const fileFilter = function(req,file,cb){
    if(allowedFileTypes.includes(file.mimetype))cb(null,true)
    else cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"))
}
const storage = multer.memoryStorage()

const upload = multer({
    storage:storage,
    
    
})

module.exports = upload