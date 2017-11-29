/*
 * Yingli Sieh, Portfolio
 * main.js
 * -----------------------------------------------
 * Edited version of the javascript demo of the Google Map API from lab
 */

// Coordinates of some cities I have visited
var Pittsburgh = {lat: 40.442792, lng: -79.943174}
var SantaBarbara = {lat: 34.421408, lng: -119.700287}
var NewYork = {lat: 40.783481, lng: -73.970606}
var KualaLumpur = {lat: 3.150023, lng: 101.686769}
var HongKong = {lat: 22.238548, lng: 114.223571}
var London = {lat: 51.525681, lng: -0.133300}
var Barcelona = {lat: 41.391633, lng: 2.164766}
var Amsterdam = {lat: 52.358442, lng: 4.881065}
var Boston = {lat: 42.360075, lng: -71.094214}
var Paris = {lat: 48.860611, lng: 2.337590}
var Philadelphia = {lat: 39.956637, lng: -75.190008}
var LosAngeles = {lat: 34.068946, lng: -118.445038}

function myMap() {
	//Defines the properties of the map 
	var mapProp= {
		center: Pittsburgh, //defines where the map is centered on load
		zoom:2, //specifies map initial zoom level 
	};
	// Get the map element and center the map on Pittsburgh
	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

	// Creating markers for 12 cities I have visited on the Google map
	var marker1 = new google.maps.Marker({
        position: Pittsburgh,
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: SantaBarbara,
        map: map
    });

    var marker3 = new google.maps.Marker({
        position: NewYork,
        map: map
    });

    var marker4 = new google.maps.Marker({
        position: KualaLumpur,
        map: map
    });

    var marker5 = new google.maps.Marker({
        position: HongKong,
        map: map
    });

    var marker6 = new google.maps.Marker({
        position: London,
        map: map
    });

    var marker7 = new google.maps.Marker({
        position: Barcelona,
        map: map
    });

    var marker8 = new google.maps.Marker({
        position: Amsterdam,
        map: map
    });

    var marker9 = new google.maps.Marker({
        position: Boston,
        map: map
    });

    var marker10 = new google.maps.Marker({
        position: Paris,
        map: map
    });

    var marker11 = new google.maps.Marker({
        position: Philadelphia,
        map: map
    });

    var marker12 = new google.maps.Marker({
        position: LosAngeles,
        map: map
    });
}

