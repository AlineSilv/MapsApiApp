
var myLatLng = {  lat: 48.85, lng: 2.35 };
var mapOptions = {
    mapId: "28f08bb4a23eb650",
    center: myLatLng,
    minZoom: 2,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};


var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);



function calcRoute() {

    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }


    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

           
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'><strong>From</strong>: " 
            + document.getElementById("from").value + ".<br /><strong>To</strong>: "
            + document.getElementById("to").value + ".<br /> <strong>Driving distance</strong> <i class='fas fa-road'></i> : " 
            + result.routes[0].legs[0].distance.text + ".<br /><strong>Duration</strong> <i class='fas fa-hourglass-start'></i> : " 
            + result.routes[0].legs[0].duration.text + ".</div>";

            
            directionsDisplay.setDirections(result);
        } else {
            
            directionsDisplay.setDirections({ routes: [] });
            
            map.setCenter(myLatLng);

            
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}


var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
