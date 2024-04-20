const cloudinary = require("cloudinary").v2
cloudinary.config({ 

    cloud:process.env.CLOUDINARY_URL,
    secure:true 
});
// console.log(process.env.CLOUDINARY_URL)
module.exports = cloudinary