function initMap() {
  var dojobarber = {lat: 34.180838, lng: -118.308966};
  var barberGotee = {lat: 34.180005, lng: -118.302227};
  var barberKT = {lat: 34.063509 , lng: -118.308407};
  var barberUK = {lat: 51.528742, lng: -0.110141};
  var barberSC = {lat: 34.150198, lng: -118.387913};
  var barberSCI = {lat: 33.342531, lng: -118.326586};
  var barberTX = {lat: 33.342531, lng: -118.326586};
  var barberMSC = {lat: 55.689826, lng: 37.544282};
  var barberCADC = {lat: 55.338085, lng: -123.094365 };
  var barberIL = {lat: 64.143941, lng: -21.920341 };
  var barberNYC = {lat: 40.763667, lng: -73.992178 };
  var barberTYKO = {lat: 35.690419, lng: 139.767125 };
  var barberTIB = {lat: 29.65175, lng: 91.130502 };
  var barberVC = {lat: 49.28237, lng: -123.124942};
  var barberAlaska = {lat: 64.8364, lng: -147.804502};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.180838, lng: -118.308966},

    zoom: 13,
    mapTypeId: 'roadmap'

  });

    // infoWindow onclick
var barberianHQ = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<img border = "1px" src = "http://i.imgur.com/AKf1Gps.png">'+
'<h4 id="firstHeading" class="firstHeading">MEAN Cuts HQ</h4>'+
'<div id="bodyContent">'+
'<p><b>MEAN Cuts:</b>, is an elite barber agency ready to takeover the world, OR help you find extremely talented freelancer barbers in your area </b>' +
'<p><b>location:</b> 175 E Olive Ave, Burbank, CA 91502</b>'+
'<p><b>Phone:</b> 213 523 9480</b> '+
'</div>'+
'</div>';

var Todd = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<img border = "1px" src = "http://i.imgur.com/A2l7Kp8.png">'+
'<h1 id="firstHeading" class="firstHeading">Sweet Tod</h1>'+
'<div id="bodyContent">'+
'<p><b>Barber Profile:</b>, Mr. Tod may look a bit creepy, but he sure knows how to get your hairs done, maybe your throat too<b>' +
'<p><b>Loction:</b>11723 Moorpark St, Studio City, CA 91604</b>'+
'<p><b>Phone:</b>31 42 203 24024</b>'+

'</div>'+
'</div>';

var Goatee = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<img border = "1px" src = "http://i.imgur.com/wj7lBe2.png">'+
'<h1 id="firstHeading" class="firstHeading">Mr. Goatee</h1>'+
'<div id="bodyContent">'+
'<p><b>Barber Profile:</b>, Mr. Goatee is a new brother in agency  since burbank dont have a decent barber<b>' +
'<p><b>Loction:</b>11723 Moorpark St, Studio City, CA 91604</b>'+
'<p><b>Phone:</b> 213 923 2830</b>'+

'</div>'+
'</div>';

var Yeti = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<img border = "1px" src = "http://i.imgur.com/cFuANsk.png">'+
'<h1 id="firstHeading" class="firstHeading">Bro Yeti</h1>'+
'<div id="bodyContent">'+
'<p><b>Barber Profilen:</b>, Brother Yeti never had many visitors, he needs some love, so hes always out there looking for customers<b>' +
'<p><b>Loction:</b>???????????</b>'+
'<p><b>Phone:</b>????????</b>'+

'</div>'+
'</div>';


   // Marker's image
  var imageIcon = {
    url: 'assets/shop.png',
    size: new google.maps.Size(58, 65),
    origin: new google.maps.Point(0, 5),
    anchor: google.maps.Point(0.5, 1)
  } ;
  // dummy marker on the map

  // content box reference here
  var infoBox = new google.maps.InfoWindow({
  content: barberianHQ
  });

  var infoTodd = new google.maps.InfoWindow({
  content: Todd
  });

  var infoGoatee = new google.maps.InfoWindow({
    content: Goatee
  });

  var infoYeti = new google.maps.InfoWindow({
    content: Yeti
  });


  // marker's on map here

  var markerHQ = new google.maps.Marker({
    position: dojobarber,
    map: map,
    icon: imageIcon,
    title: 'DojoHQ'
  });

   markerHQ.addListener('click', function(){
    infoBox.open(map, markerHQ);
  });


  var markerKT = new google.maps.Marker({
    position: barberKT,
    map: map,
    title: 'ktBarber',
    icon: imageIcon
  });

  var markerinLD = new google.maps.Marker({
    position: barberUK,
    map: map,
    title: 'Barber London',
    icon: imageIcon
  });

  markerinLD.addListener('click', function(){
    infoTodd.open(map, markerinLD);
  });



  var markerSC = new google.maps.Marker({
    position: barberSC,
    map: map,
    title: 'Barber Studio City',
    icon: imageIcon
  });

  markerSC.addListener('click', function(){
    infoGoatee.open(map, markerSC);
  });

  var markerNY = new google.maps.Marker({
    position: barberSCI,
    map: map,
    title: 'Barber in SCI',
    icon: imageIcon

  });

  var markerMSC = new google.maps.Marker({
    position: barberMSC,
    map: map,
    title: 'Barber in Moscow',
    icon: imageIcon
  });

  var markerCADC = new google.maps.Marker({
    position: barberCADC,
    map: map,
    title: 'Barber in Vancuver',
    icon: imageIcon
  });

  var markerIL = new google.maps.Marker({
    position: barberIL,
    map: map,
    title: 'Barber in Ice Land',
    icon: imageIcon
  });

  var markerNYC = new google.maps.Marker({
    position: barberNYC,
    map: map,
    title: 'Barber in NYC',
    icon: imageIcon
  });

  var markerTYKO = new google.maps.Marker({
    position: barberTYKO,
    map: map,
    title: 'Barber in Toyko',
    icon: imageIcon
  });

  var markerTibet = new google.maps.Marker({
    position: barberTIB,
    map: map,
    title: 'Barber in Tibet',
    icon: imageIcon
  });

  var markerVC = new google.maps.Marker({
    position: barberVC,
    map: map,
    title: 'Barber in Vancuver',
    icon: imageIcon
  });

  var markerAlaska = new google.maps.Marker({
    position: barberAlaska,
    map: map,
    title: 'a barber from north pole',
    icon: imageIcon
  });

   markerAlaska.addListener('click', function(){
    infoYeti.open(map, markerAlaska);
  });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);


  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("WTF IS GOING ON???????!!!!!");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
