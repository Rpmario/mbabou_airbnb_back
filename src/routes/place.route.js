const express = require('express');
const router = express.Router();
const PlaceController = require('../controllers/place.controller');

router.get('/', PlaceController.getPlaces);
router.get('/getoneplace/:id', PlaceController.getsingleplace );
router.post('/', PlaceController.createPlace);
router.delete('/:id', PlaceController.deleteOnePlace);
router.put('/:id', PlaceController.updatePlace);

module.exports = router;