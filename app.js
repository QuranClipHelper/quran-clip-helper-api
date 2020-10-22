var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var app = express();
var server = require('http').createServer(app);
var cors = require('cors');

var t20 = require('./public/translations/t20.json');
var t31 = require('./public/translations/t31.json');
var t40 = require('./public/translations/t40.json');
var t46 = require('./public/translations/t46.json');
var t54 = require('./public/translations/t54.json');
var t76 = require('./public/translations/t76.json');
var t85 = require('./public/translations/t85.json');
var t97 = require('./public/translations/t97.json');
var t95 = require('./public/translations/t95.json');
var t17 = require('./public/translations/t17.json');
var t18 = require('./public/translations/t18.json');
var t19 = require('./public/translations/t19.json');
var t22 = require('./public/translations/t22.json');
var t23 = require('./public/translations/t23.json');
var t24 = require('./public/translations/t24.json');
var t25 = require('./public/translations/t25.json');
var t26 = require('./public/translations/t26.json');
var t27 = require('./public/translations/t27.json');
var t28 = require('./public/translations/t28.json');
var t29 = require('./public/translations/t29.json');
var t30 = require('./public/translations/t30.json');
var t32 = require('./public/translations/t32.json');
var t33 = require('./public/translations/t33.json');
var t34 = require('./public/translations/t34.json');
var t35 = require('./public/translations/t35.json');
var t36 = require('./public/translations/t36.json');
var t37 = require('./public/translations/t37.json');
var t38 = require('./public/translations/t38.json');
var t39 = require('./public/translations/t39.json');
var t41 = require('./public/translations/t41.json');
var t42 = require('./public/translations/t42.json');
var t43 = require('./public/translations/t43.json');
var t44 = require('./public/translations/t44.json');
var t45 = require('./public/translations/t45.json');
var t47 = require('./public/translations/t47.json');
var t48 = require('./public/translations/t48.json');
var t49 = require('./public/translations/t49.json');
var t50 = require('./public/translations/t50.json');
var t51 = require('./public/translations/t51.json');
var t52 = require('./public/translations/t52.json');
var t53 = require('./public/translations/t53.json');
var t55 = require('./public/translations/t55.json');
var t56 = require('./public/translations/t56.json');
var t57 = require('./public/translations/t57.json');
var t74 = require('./public/translations/t74.json');
var t75 = require('./public/translations/t75.json');
var t77 = require('./public/translations/t77.json');
var t78 = require('./public/translations/t78.json');
var t79 = require('./public/translations/t79.json');
var t80 = require('./public/translations/t80.json');
var t81 = require('./public/translations/t81.json');
var t82 = require('./public/translations/t82.json');
var t83 = require('./public/translations/t83.json');
var t84 = require('./public/translations/t84.json');
var t86 = require('./public/translations/t86.json');
var t87 = require('./public/translations/t87.json');
var t88 = require('./public/translations/t88.json');
var t89 = require('./public/translations/t89.json');
var t101 = require('./public/translations/t101.json');
var t102 = require('./public/translations/t102.json');
var t104 = require('./public/translations/t104.json');


// App Settings & Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); // log every request to the console
//app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
	var string = "<h2>This is an API used by QuranClipHelper.com</h2><br>";
	string += "\n <div>You're more than welcome to use it but please don't bog down the network.</div><br>"
	string += "\n <div>usage --> url/translations/{translationID}/{surahNumber}/{ayahNumber} where translationID is a numeric value given by https://quran.api-docs.io/v3/getting-started API</div><br>"
	string += "\n If you have any questions or issues, please contact us at moazelsayedquran@gmail.com"
	res.send(string);
});

app.get('/translations/:id/:surah/:ayah', function(req, res, next) {
	// console.log(req.params);
	// console.log(req.params.surah);
	// console.log(req.params.ayah);

	var translationArray = eval('t'+req.params.id);
	var translationText = '';
	for (var i = 0; i < translationArray.length; i++){
		if (translationArray[i].surahAyah.split(":")[0] == req.params.surah && translationArray[i].surahAyah.split(":")[1] == req.params.ayah){
        	translationText = translationArray[i].translation;
        }
	}
	//vatranslationText translationArray.surah[req.params.surah].ayah[req.params.ayahtranslationText;
	//res.set('Content-Type', 'application/json');
	if (translationText == ''){
		translationText = "Translation text cannot be found! Please contact us immediately with the surah & ayah number."
	}

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send(translationText);
});


// Server listen on port 3000
server.listen(port, function(){
	console.log("Server started on port: " + port);
});