const Flight = require('../models/flight');

module.exports = {
	new: newFlight,
	create,
	index,
};

function index(req, res) {
	Flight.find({}, function (err, flights) {
		console.log(flights)
		res.render('flights/index', {
			flights,
		});
	});
}

function newFlight(req, res) {
	res.render('flights/new');
}

function create(req, res) {
	req.body.departed = !!req.body.departed;
	if(!req.body.departs) {
		var dt = new Date();
		dt = dt.setFullYear(dt.getFullYear()+1)
		req.body.departs = dt;;
	}
	const flight = new Flight(req.body);
	flight.save(function (err) {
		if (err) return res.render('flights/new');
		res.redirect('flights/');
	});
}
