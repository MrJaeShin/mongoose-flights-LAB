const Flight = require('../models/flight');
const Tickets = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    res.render('ticket/new', {
        title: 'Add Ticket',
        flight: req.params.id,
    })
};

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    })
};

