/* get home page */
module.exports.homelist = function(req, res, next){
	res.render('index', {title: 'Home'});
};

/* get location info page */
module.exports.loactionInfo = function(req, res, next){
	res.render('index', {title: 'Location Info'});
};

/* get add review page */
module.exports.addReview = function(req, res, next){
	res.render('index', {title: 'Add Review'});
};