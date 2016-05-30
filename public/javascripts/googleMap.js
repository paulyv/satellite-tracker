
var issLat = 0;
var issLon = 0;
var map;
var marker;

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
  });
	marker.setPosition({lat: issLat, lng: issLon});
	map.setCenter(new google.maps.LatLng(issLat, issLon));
	nite.refresh();
}


function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          /*center: {lat: -34.397, lng: 150.644},*/
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.HYBRID
        });

        nite.init(map);

    var icon = '/images/satellite-icon-gold.png';

    marker = new google.maps.Marker({
    /*position: {lat: -34.397, lng: 150.644},*/
    map: map,
    title: 'International Space Station',
    icon: icon,
    label: 'ISS'
    });
  }