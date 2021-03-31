import mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ContactSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
})