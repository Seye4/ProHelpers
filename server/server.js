require('dotenv').config()
require('express-async-errors')
const cors = require('cors')

// express
const express = require('express')
const app = express()

const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// database
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleware = require('./middleware/notfound')
const authRouter = require('./routes/authRoutes')
// const errorHandlerMiddleware = require('')

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send('prohelpers api')
})

app.get('/api/v1', (req, res) => {
    // console.log(req.cookies);
    console.log(req.signedCookies);
    
    res.send('prohelpers api')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5100

const start = async () => {

    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on port ${port} ...`))
    }
    catch (err) {
        console.log(err);        
    }
}

start()