const Movie = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
   flight.findById(req.paras.id, function(err, flight) {
       flight.destinations.push(req.body)
       flight.save(function(err) {
           res.redirect(`flights/${flight._id}`);
       });
   }); 
}