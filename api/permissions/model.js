const mongoose = require('mongoose')
const permissionsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = mongoose.model('Permission', permissionsSchema)
