exports.index = function(req, res) {
 res.render('hike', {title: 'My Hiking Log'});
};

exports.add_hike = function(req, res) {
  console.log('added a hike!', req.body);
  res.send('hello world');
};