const { package} = require('../models/packages.model');


    /////// to create a package///////////////////

module.exports.createNewPackeges = (request, response) => {
    const { name, description, price , image} = request.body;
    package.create({
        name,
        description,
        price,
        image

    })
        .then(package => response.json(package))
        .catch(err => response.status(400).json(err))

}

//////////get all packages//////

module.exports.findAllPackeges = (request,response) => {
    package.find({})
    .then(packages => response.json(packages))
    .catch(err => response.json(err))

}

///////// find one package ///////////////////
module.exports.findOneSinglePackeges = (request , response) => {
    package.findOne({_id: request.params.id})
    .then(package => response.json(package))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateExistingPackeges = (request, response) => {
    package.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))

}

/////delete/////////////
module.exports.deleteAnExistingPackeges = (request, response) => {
    package.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}
