var express = require('express');
var router = express.Router();
var request = require('request');
var satDataJson;

timer = setInterval(getSatelliteData, 2000);

function getSatelliteData() {
  	request('https://api.wheretheiss.at/v1/satellites/25544', function(error, response, body) {
                if(!error) {
                  satDataJson = JSON.parse(body);
                }
	// console.log(satDataJson);
    });
}

router.get('/', function(req, res, next) {
	
	request('https://api.wheretheiss.at/v1/satellites/25544', function(error, response, body) {
		if(!error) {
		  sat = JSON.parse(body);	
		}

	res.render('iss', { data: sat});
    });
});

router.get('/iss', function(req, res, next) {

        res.json(satDataJson);
});

module.exports = router;
