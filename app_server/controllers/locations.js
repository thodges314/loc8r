/* get home page */
module.exports.homelist = function(req, res, next){
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with WiFi.',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with WiFi near you!'
		},
		sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for.',
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['hot drinks', 'food', 'premium wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '2125 Benicia Ct Davis CA 95616',
			rating: 4,
			facilities: ['hot drinks', 'food', 'premium wifi'],
			distance: '200m'
		},{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['food', 'premium wifi'],
			distance: '250m'
		}]
	});
};

/* get location info page */
module.exports.locationInfo = function(req, res, next){
	res.render('location-info', {title: 'Location Info'});
};

/* get add review page */
module.exports.addReview = function(req, res, next){
	res.render('location-review-form', {title: 'Add Review'});
};