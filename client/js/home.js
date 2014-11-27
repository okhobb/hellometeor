Router.route('/', function () {
  this.render('home');
});

Router.route('/datasets', function () {
  this.render('datasets');
});

Router.route('/methods', function () {
  this.render('methods');
});

Router.route('/publish', function () {
  this.render('publish');
});
