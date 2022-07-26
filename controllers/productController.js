
const path = require('path');

module.exports = {
    detail : (req,res) => res.senFile(path.join(__dirname, '..', 'views', 'productDetail.html'))
}