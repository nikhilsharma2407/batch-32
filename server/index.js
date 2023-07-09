// import express node pkg
const express = require('express')
const app = express()
const port = 4000
const requestLogger = require('./utils/requestLogger');

const router = require('./routes/router');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

const errorHandler = require('./utils/errorHandler');
const cookieParser = require('cookie-parser');
// connect to DB 
const db = require('./dbConnection');
const cors = require('cors');
const authController = require('./controllers/authController');

// This middleware will allow us to read the body of the contents shared with req
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(requestLogger);

app.use('/router', router);
app.use('/user', userRouter);
app.use('/post', authController, postRouter);
// app.use('/posts',post);
// app.use('/electric',middleware)

// app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/', (req, res) => {
//     // data shared by client is present in req.body
//     console.log(req.body);
//     res.send({success:true,message:"request completed"});
// });

app.use(errorHandler)
app.listen(port, () => {
    console.clear()
    console.log(`Server running on port ${port}!`)
})

