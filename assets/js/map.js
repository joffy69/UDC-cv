
	
        function initMap() {

        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 3,
          center: {lat: 46.619261, lng: -33.134766}
        });


        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        
    
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        } 
        var locations = [
        {lat: 51.440778, lng: -2.711622},
        {lat: 51.457430, lng: -0.111842},
        {lat: 47.273158, lng: 12.771100}
      ]