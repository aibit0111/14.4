
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

    var signupshopschema = new Schema({
        username: {
            type: String,
            required: true
        },
        userid: {
            type: String,
            required: true
        },
        useremail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });


     var signupshopmodel = mongoose.model("signupshopmodel", signupshopschema); //if there is no model then create model with modelname(movie) with schema(movieSchema)

    module.exports = signupshopmodel;