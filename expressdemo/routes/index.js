
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.get_name = function(req, res) {
	res.send('OK!');
};