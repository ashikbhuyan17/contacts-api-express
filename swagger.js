const options = {
    definition: {
        // openapi: '3.0.0',
        info: {
            title: 'Swagger Intrgration Demo ',
            version: '1.0.0',
            description: 'Employe Api for employee management',
            // contact: {
            //     name: 'Jayaramachandran Augustin',
            //     url: 'https://whizpath.com',
            //     email: 'jayaramachandran@whizpath.com'
            // },
            // servers: ["http://localhost:5000"]

            contact: {
                name: "Ashik Bhuyan"
            },
            license: {
                name: "Apache License Version 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0"
            }
        }
    },
    apis: ["./api/routes/contact.route.js"]
}

module.exports = options