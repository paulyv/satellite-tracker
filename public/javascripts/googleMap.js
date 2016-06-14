var mapStyle = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    }
];

var issLat = 0;
var issLon = 0;
var map;
var marker;
var myPosMarker

window.onload = function() {
	
	var timer = setInterval(getData, 2000);
}

function getData() {

	$.getJSON('/iss', function(result) {
		issLat = result.latitude;
		issLon = result.longitude;

		$('#lat').text('Latitude: ' + result.latitude);
		$('#lon').text('Longitude: ' + result.longitude);
		$('#alt').text('Altitude: ' + result.altitude + ' km');
		$('#vel').text('Velocity: ' + result.velocity + ' km/h');
    $('#vis').text('Visibility: ' + result.visibility);
  });
	marker.setPosition({lat: issLat, lng: issLon});
	map.setCenter(new google.maps.LatLng(issLat, issLon));
	nite.refresh();

    navigator.geolocation.getCurrentPosition(function(position) {
        myPosMarker.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
    });
}


function initMap() {
  var myOptions = {
            draggable : false,
            zoom : 3,
            mapTypeId : google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
            };

  map = new google.maps.Map(document.getElementById('map'), myOptions);
  nite.init(map);

    var icon = '/images/satellite-icon-gold.png';
    var yourPosIcon = '/images/your-position.png';

    marker = new google.maps.Marker({
    /*position: {lat: -34.397, lng: 150.644},*/
    map: map,
    title: 'International Space Station',
    icon: icon,
    label: 'ISS'
    });

    myPosMarker = new google.maps.Marker({
        map: map,
        title: "You are here",
        icon: yourPosIcon,
    });
  }

