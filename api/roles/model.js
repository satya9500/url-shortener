const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    permissions: [{
        permissionId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Permission'
        },
        read: Boolean,
        update: Boolean,
        delete: Boolean,
        create: Boolean
    }],
    menuItems: [{
        type: [mongoose.Schema.ObjectId],
        ref: 'MenuItem',
        default: undefined
    }]
})

module.exports = mongoose.model('Role', rolesSchema)
