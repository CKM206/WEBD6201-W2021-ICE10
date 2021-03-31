import mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ContactSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
},
{
    collection: "contacts"
});

const Model = mongoose.model("contacts", ContactSchema);

module.exports.Model = Model;