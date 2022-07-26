const express = require('express');
const path = require('path');
const { index } = require('./controllers/indexController');
const port = 3030;

const app = express();
const indexController = require('./controllers/indexController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

app.use(express.static('public'));


app.get('/', indexController.index);
app.get('/product-detail', productController.detail); 
app.get('/register', userController.register);
app.get('/login', userController.login);
app.get('/profile', userController.profile);

app.listen(port, () => console.log('Server running in http://localhost:' + port))




/* 
app.get ('/index', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )) 
app.get('/product-detail' (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html' ))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html' )));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html' )));
app.get('/profile', (req,res) => res.sendFile(path.join(__dirname, 'views', 'profile.html' )));
app.listen(port, () => console.log('Server running in http://localhost:' + port))
 */
