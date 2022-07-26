const path = require('path');

module.exports = {
    index: (req, res) => {
        console.log('>>>>>>>>>>>>>>>>', __dirname)
        return res.sendFile(path.join(__dirname,'..','views','home.html'))
    }
} 