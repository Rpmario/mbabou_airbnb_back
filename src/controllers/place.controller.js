const Place = require('../models/place.model');

exports.createPlace = (req, res) => {

  Place.create(req.body).then(
    (place) => {
      console.log(place._id);
      res.send(place)
    }
  )
    .catch(err => res.status(400).send(err));
}

exports.getPlaces = (req, res) => {
  Place.find().populate('owner').then(
    (places) => res.send(places))
    .catch(err => res.status(400).send(err))
}


exports.getsingleplace = (req, res) => {
  let id = req.params.id
  Place.find({_id: id}).populate('owner').populate('types').then(
    (place) => res.send(place))
    .catch(err => res.status(400).send(err))
}

exports.updatePlace = (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(place => res.send({ message: `Place with id ${place._id} and title ${place.title} successfully updated` }))
  .catch(err => res.status(400).send(err))
}

exports.deleteOnePlace = (req, res) => {
  Place.findByIdAndDelete(req.params.id)
    .then(place => res.send({ message: `Place with id ${place._id} successfully deleted` }))
    .catch(err => res.status(400).send(err))
}

exports.getMyPlaces = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      res.send(user.places);
    }
  )
}