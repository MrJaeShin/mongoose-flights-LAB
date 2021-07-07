const Flight = require('../models/flight');

module.exports = {
    create,
};

function create(req, res) {
    if (!req.body.arrival) delete req.body.arrival;

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