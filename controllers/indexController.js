const path = require('path');

module.exports = {
    index: (req, res) => res.senFile(path.join(__dirname, '..','views', 'home.html'))
} 