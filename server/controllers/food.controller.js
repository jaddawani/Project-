const { food} = require('../models/food.model');


    /////// to create a food///////////////////

module.exports.createNewFood = (request, response) => {
    const { name, description, price , image} = request.body;
    food.create({
        name,
        description,
        price,
        image

    })
        .then(food => response.json(food))
        .catch(err => response.status(400).json(err))

}

//////////get all foods//////

module.exports.findAllFood = (request,response) => {
    food.find({})
    .then(foods => response.json(foods))
    .catch(err => response.json(err))

}

///////// find one food ///////////////////
module.exports.findOneSingleFood = (request , response) => {
    food.findOne({_id: request.params.id})
    .then(food => response.json(food))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateExistingFood = (request, response) => {
    food.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))

}

/////delete/////////////
module.exports.deleteAnExistingFood = (request, response) => {
    food.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}
