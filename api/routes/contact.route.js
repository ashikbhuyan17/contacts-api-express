// const express = require('express').Router()

const { json } = require('body-parser')
const express = require('express')
const { postAllContactController,
    getAllContactController,
    getSingleContactController,
    deleteSingleContact,
    editContact } = require('../controllers/Contact')
const router = express.Router()


//Get
// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: "hello"
//     })

// })

//post
// router.post('/', (req, res, next) => {
//     const name = req.body.name    //name =  object ja client patabe 
//     const email = req.body.email
//     console.log(name, email);  
//     res.status(200).json({
//         message: "hello",
//         name,
//         email
//     })
// })

router.post('/', postAllContactController)


router.get('/', getAllContactController)

router.get('/:id', getSingleContactController)


router.put('/:id', editContact)

router.delete('/:id', deleteSingleContact)

//variable route  => http://localhost:5000/api/contacts/abcjcvhjkchvkjfsh

// router.get('/:id', (req, res) => {  //for url
//     console.log(req.url);
//     res.json({
//         id: req.url
//     })
// })

// router.get('/:id', (req, res) => {     // specific value
//     const { id } = req.params
//     console.log(id);
//     res.json({
//         // id: id
//         id
//     })
// })

router.put('/:id', (req, res) => {  //for url
    res.json({
        message: "i am single contact", id: req.params.id
    })
})

router.delete('/:id', (req, res) => {  //for url
    res.json({
        message: "i am single contact", id: req.params.id
    })
})

module.exports = router