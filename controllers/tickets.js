const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add Ticket',
        flights: req.params.id,
    })
};

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    })
};

