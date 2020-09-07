const mongoose = require('mongoose')
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true,
        unique: true
    },
    matIcon: {
        type: String,
        default: null
    },
    showInMenu: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('MenuItem', menuItemSchema)
