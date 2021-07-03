const Contact = require('../models/Contact.model')
const { json } = require('body-parser')

const getAllContactController = (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.status(200).json({

                message: 'All Contact',
                contact: contacts
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error ',
                error: err
            })
        })
}


const postAllContactController = (req, res, next) => {
    // const contact = new Contact({  //schema modhe contact name object add hbe
    //     name: req.body.name,
    //     phone: req.body.phone,
    //     email: req.body.email,
    // })
    const contact = new Contact(req.body)
    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'contact added',
                contact: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error ',
                error: err
            })
        })

}


const getSingleContactController = (req, res, next) => {
    const { id } = req.params
    console.log(id);
    Contact.findById(id)
        .then(contact => {
            res.status(201).json({
                message: 'Find One',
                contact: contact
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error ',
                error: err
            })
        })
    // next()

}

const editContact = (req, res, next) => {
    const { id } = req.params
    console.log(id);
    const updateContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    }
    Contact.findOneAndUpdate(id, { $set: updateContact })
        .then(contact => {
            Contact.findById(contact._id)
                .then(newContact => {
                    res.json({
                        message: 'contact update',
                        contact
                    })
                })

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occurred',
                error: err
            })
        })
    // next()

}


const deleteSingleContact = (req, res, next) => {
    const { id } = req.params
    console.log(id);
    Contact.findByIdAndRemove(id)
        .then(contact => {
            res.json({  //For a DELETE request: HTTP 200 or HTTP 204 should imply "resource deleted successfully
                message: 'contact deleted',
                contact
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occurred',
                error: err
            })
        })
    // next()

}


module.exports = {
    getAllContactController,
    postAllContactController,
    getSingleContactController,
    editContact,
    deleteSingleContact,

}