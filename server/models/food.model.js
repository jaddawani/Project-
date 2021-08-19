const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
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


module.exports.food = mongoose.model("food", foodSchema);