var derby = require('derby');

var app = module.exports = derby.createApp('derby-example', __filename);

if (!derby.util.isProduction) global.app = app;

app.use(require('d-bootstrap'));
app.serverUse(module,'derby-jade');
app.serverUse(module, 'derby-stylus');

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

app.get('/', function(page, model){
  page.render('home');
});
