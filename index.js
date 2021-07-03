const express = require('express')
const app = express();



//middleware
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const cors = require('cors')


const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/contacts-db', {    //contacts-db => documents     and table = collection
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
// console.log(db);
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log("database connection done  ");
})
app.use(morgan('dev'))
app.use(cors())

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
// app.use(bodyParser.json())
app.use(express.json())



const port = 5000


// app.listen(
// const https = require('https')
// const http = require('http')
// http.createServer(app).listen(80)
//middlware
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


//middleware  => middleware function e res,next function ke call kora na hole nicer kono function execute hbe na
// app.use((req, res, next) => {
//     console.log('i am middleware');
//     next()
// })


// import router
const contactRoute = require('./api/routes/contact.route');
const userRouter = require('./api/routes/user');
app.use('/api/contacts', contactRoute)
app.use('/api/user', userRouter)

app.get('/', (req, res) => {        //req,res,next = middleware
    res.send('hello i am working ')
})


//mongoose
const { Schema } = mongoose;
const demoSchema = new Schema({
    name: {
        type: String, // String is shorthand for {type: String}
        required: true,
        minlength: 3,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
});
demoSchema.add({ age: Number })

const Demo = mongoose.model('Demo', demoSchema)  //model
app.get('/demo', (req, res) => {
    const demo = new Demo({
        name: "mamun",
        phone: "1222",
        age: 10,
    })
    demo.save()
        .then(data => {
            res.json({ data })
        })
        .catch(err => console.log(err))

    //another way
    // const m = new Demo;
    // m.name = "anoy",
    //     m.phone = "1222",
    //     m.age = 10,
    //     m.save()
    //         .then(data => {
    //             res.json({ data })
    //         })
    //         .catch(err => console.log(err))

})


app.get('/getContact', (req, res) => {
    const contact = new contactSchema({
        name: "ashik",
        phone: "018838736"
    })
    contact.save()
        .then(data => {
            res.json({ data })
        })
})

app.get('/get', (req, res) => {
    Demo.find()
        .then(data => {
            res.json({ data })
        }).catch(err => res.send(err))

})

//http://localhost:5000/details?name=flavio&age=35    => Retrieve the GET query
app.get('/details', (req, res) => {

    console.log(req.query)
    for (const key in req.query) {
        console.log(key, req.query[key])
        res.send(req.query)
    }
})

// app.get('/api/contacts', (req, res) => {
//     // res.send("all contacts")
//     res.json(contacts)
// })
// app.post('/api/contacts', (req, res) => {
//     res.json({
//         message: "i am post man"
//     })
// })
//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOption = require('./swagger')
const jsDoc = swaggerJsDoc(swaggerOption)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(jsDoc));

app.listen(5000)

const contacts = [
    { name: "ashik", id: 1, phone: "019999999" },
    { name: "ashik", id: 1, phone: "019999999" },
    { name: "ashik", id: 1, phone: "019999999" },
    { name: "ashik", id: 1, phone: "019999999" },
]