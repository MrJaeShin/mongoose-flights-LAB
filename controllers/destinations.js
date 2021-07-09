const Flight = require('../models/flight');

module.exports = {
    create,
    sort,
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
};

function sort(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        flights.destination.sort(req.body);
        flights.save(function(err) {
            res.redirect(`/flights/${flights._id}`);
        });
    });
};