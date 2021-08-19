const mongoose = require("mongoose");

const packagesSchema = new mongoose.Schema({
	name:  {
        type: String,
        required: true,
        minLength: 2
    },
	price: {
        type: Number,
        require : true
    } ,
    description: {
        type: String,
        required: true,
        minLength: 2
    },

    image : {
        type : String
    }

},{ timestamps: true }) 


module.exports.package = mongoose.model("package", packagesSchema);