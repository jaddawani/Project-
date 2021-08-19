const { addones} = require('../models/addones.model');


    /////// to create a addones///////////////////

module.exports.createNewAddones = (request, response) => {
    const { name, description, price , image} = request.body;
    addones.create({
        name,
        description,
        price,
        image

    })
        .then(addones => response.json(addones))
        .catch(err => response.status(400).json(err))

}

//////////get all addoness//////

module.exports.findAllAddones = (request,response) => {
    addones.find({})
    .then(addoness => response.json(addoness))
    .catch(err => response.json(err))

}

///////// find one addones ///////////////////
module.exports.findOneSingleAddones = (request , response) => {
    addones.findOne({_id: request.params.id})
    .then(addones => response.json(addones))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateExistingAddones = (request, response) => {
    addones.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))

}

/////delete/////////////
module.exports.deleteAnExistingAddones = (request, response) => {
    addones.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}
