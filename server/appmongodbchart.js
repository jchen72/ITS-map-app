var application_root = __dirname,
    express = require("express"),
	path = require("path");
	var databaseUrl = "treaty"; 
var collections = ["seeds"]
var db = require("mongojs").connect(databaseUrl, collections);

var app = express();



// Config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    seed = req.params.seedname;
	db.seeds.find({seedname:seed}, function(err, seeds) {
	if( err || !seeds) console.log("No seeds found");
	  else 
	{
		res.writeHead(200, {'Content-Type': 'text/json'});
		seedscollection = seeds[0].seedname;
		str = '[';
		//console.log(seedscollection);
		
		seedscollection.forEach( function(seed) {
		   str = str + '{"id":"'+ seed.id + '","country":"'+ seed.country +'","cid":"'+ seed.cid +'"},';
		});
		str = str.substring(0,str.length-1)
		str = str + ']';
		res.end(JSON.stringify(str));
	}
  });
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});