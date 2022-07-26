const express = require('express');
const port = 3030;
const app = express();


const indexRouter = require('./routes/index');
const productRouter = require('./routers/index');
const userRouter = require('./routes/user');

app.use(express.static('public'));

/* rutas */
app.use('/',indexRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(port, () => console.log('Server running in http://localhost:' + port))



/* app.get('/', indexController.index);
app.get('/product-detail', productController.detail); 
app.get('/register', userController.register);
app.get('/login', userController.login);
app.get('/profile', userController.profile); */






/* 
app.get ('/index', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )) 
app.get('/product-detail' (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html' ))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html' )));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html' )));
app.get('/profile', (req,res) => res.sendFile(path.join(__dirname, 'views', 'profile.html' )));
app.listen(port, () => console.log('Server running in http://localhost:' + port))
 */
