const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientScheam = new Schema({
    email: String,
    responded: { type: Boolean, default: false}
});

module.exports = recipientSchema;