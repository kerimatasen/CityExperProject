"use strict";
var map_propertyLoc;
var markers = [];
var generic_icon;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var placesService;
var infowindow
function setAllMap(map) {
    $.each(markers, function (index, marker) {
        marker.infobox.close();
        marker.infobox.isOpen = true;
        marker.setMap(map);
    });
}
function HomeControl(controlDiv, map) {

    controlDiv.style.padding = '5px';

    // locaksyon
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.cursor = 'pointer';
    controlUI.style.margin = '5px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'My Location';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = '<strong>My Location</strong>';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    google.maps.event.addDomListener(controlUI, 'click', function () {
        var myloc = new google.maps.Marker({
            clickable: false,
            icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                new google.maps.Size(22, 22),
                new google.maps.Point(0, 18),
                new google.maps.Point(11, 11)),
            shadow: null,
            zIndex: 999,
            map: map
        });

        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(function (pos) {
                var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                myloc.setPosition(me);
                // Zoom in
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(me);
                map.fitBounds(bounds);
                var zoom = map.getZoom();
                map.setZoom(zoom > zoomOnMapSearch ? zoomOnMapSearch : zoom);
            }, function (error) {
                console.log(error);
            });
    });
}
function LoadMap_main(data) {
    // option
    if ($('#main-map').length) {
        var myLocationEnabled = true;
        //var style_map = [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = true;
        var mapOptions = {
            center: new google.maps.LatLng(38.925533, 34.866287),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            //styles: style_map
        };
        /* markers info ( ltng, icon, image, title) */
        var markers_map = new Array(
            [41.031187, 28.976008, '../assets/img/markers/icons/blueApartman.png', 'assets/img/placeholders/275x165.png', 'Vucino Han'],
            [37.031187, 35.321608, '../assets/img/markers/icons/blueArsa.png', 'assets/img/placeholders/275x165.png', 'Laleli Han'],
            [37.761187, 38.271608, '../assets/img/markers/icons/blueEv.png', 'assets/img/placeholders/275x165.png', 'Kemal Han'],
            [38.750714, 30.556692, '../assets/img/markers/icons/blueEv.png', 'assets/img/placeholders/275x165.png', 'Vahdetttin Han'],
            [41.2061, 32.62035, '../assets/img/markers/icons/blueEv.png', 'assets/img/placeholders/275x165.png', 'Baran Han'],


            [38.361187, 34.031608, '../assets/img/markers/icons/perpleApartman.png', 'assets/img/placeholders/275x165.png', 'Sel Han'],
            [40.641187, 35.831608, '../assets/img/markers/icons/perpleEv.png', 'assets/img/placeholders/275x165.png', 'Rek Han'],
            [39.921187, 32.850608, '../assets/img/markers/icons/perpleArsa.png', 'assets/img/placeholders/275x165.png', 'Dek Han'],
            [41.38871, 33.78273, '../assets/img/markers/icons/perpleArsa.png', 'assets/img/placeholders/275x165.png', 'Vek Han'],
            [39.648369, 27.88261, '../assets/img/markers/icons/perpleArsa.png', 'assets/img/placeholders/275x165.png', 'Sergian Han'],

            [40.145506, 26.406039, '../assets/img/markers/icons/greenArsa.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [40.255506, 40.2206039, '../assets/img/markers/icons/greenArsa.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [40.045506, 30.0406039, '../assets/img/markers/icons/greenArsa.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [37.776520, 29.0863900, '../assets/img/markers/icons/greenArsa.png', 'assets/img/placeholders/275x165.png', 'Hotel'],


            [40.693997, 30.435763, '../assets/img/markers/icons/pinkEv.png', 'assets/img/placeholders/275x165.png', 'Abbas Han'],
            [39.742117, 37.017068, '../assets/img/markers/icons/pinkApartman.png', 'assets/img/placeholders/275x165.png', 'Ağa Han'],
            [38.421187, 27.120608, '../assets/img/markers/icons/pinkArsa.png', 'assets/img/placeholders/275x165.png', 'Tekila Han'],
            [36.881187, 30.7020608, '../assets/img/markers/icons/pinkArsa.png', 'assets/img/placeholders/275x165.png', 'Şhot Han'],
            [41.005506, 39.7106039, '../assets/img/markers/icons/pinkArsa.png', 'assets/img/placeholders/275x165.png', 'Hotel'],







        );
        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);
        $.each(markers_map, function (index, marker_map) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                map: map,
                icon: marker_map[2]
            });
            var myOptions = {
                content: '<div class="infobox">\n\
                            <div class="image hover-default">\n\
                                <img src="' + marker_map[3] + '" alt="">\n\
                                <a href="/Tasinmaz/TasinmazDurum" class="property-card-hover">\n\
                                    <img src="assets/img/property-hover-arrow.png" alt="" class="left-icon">\n\
                                    <img src="assets/img/plus.png" alt="" class="center-icon">\n\
                                    <img src="assets/img/icon-notice.png" alt="" class="right-icon">\n\
                                </a>\n\
                            </div>\n\
                            <div class="title">\n\
                                <a href="/Tasinmaz/TasinmazDurum">' + marker_map[4] + '</a>\n\
                            </div>\n\
                            <div class="content clearfix">\n\
                                <div class="pull-left">\n\
                                Mahalle adı bu kısma gelecektir.<br> \n\
                                Ekstra bilgi bu kısıma gelecektir <br> \n\
                                 Numarası bu alana gelecektir. <br>  \n\
                                 ilçe ve il bu alanada yazılacaktır \n\
                                </div>\n\
                                <div class="pull-right">\n\
                                      <a href="/Tasinmaz/TasinmazDurum" class="infobox-link-btn">DETAY</a> \n\
                                </div>\n\
                            </div>\n\
                                <div class="infobox-footer text-color-primary">\n\
                                    <div class="property-preview-f-left" > \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-home"></i>İŞ YERİ \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-tint"></i>3 \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-square-o"></i>800 m2 \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-try"></i>***** \n\
                                        </span> \n\
                                    </div> \n\
                                </div>\n\
                            </div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-138, -335),
                zIndex: null,
                closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false
            };
            marker.infobox = new InfoBox(myOptions);
            marker.infobox.isOpen = false;
            markers.push(marker);

            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }
            });
        });

        var mcOptions = {
            gridSize: 32,
            styles: [
                {
                    height: 42,
                    url: '../assets/img/cluster/cluster.png',
                    width: 42,
                    textColor: '#46616B'
                }
            ]
        };


        // Burası markerları toplamını göstermektedir---
        marker_clusterer = new MarkerClusterer(map, markers, mcOptions);
        if (myLocationEnabled) {
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;

            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

            HomeControl(controlDiv, map)

            // [END gmap mylocation]
        }
    }
    var triangleCoords = [];
    $.ajaxSetup({
        async: false
    });
    if (data.Ilid != null && data.Ilceid == null) {
        $.getJSON('JSON/il.json', {}, function (jsonData) {
            $.each(jsonData.features, function (index, value) {
                if (value.attributes.IL_ID_PK == data.Ilid) {
                    var rigs = value.geometry.rings[0];
                    $.each(rigs, function (index, kordinat) {
                        triangleCoords.push(new google.maps.LatLng(parseFloat(kordinat[1]), parseFloat(kordinat[0])));
                    });
                }
            });
            var polygon = new google.maps.Polygon({
                paths: triangleCoords,
                strokeColor: 'red',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0,
            });
            //loading bitiş
            polygon.setMap(map);

        });
        var mapOptions2 = {
            center: new google.maps.LatLng(41.031187, 28.976089),
            //SEçilen ilin veritabanından lat longunu cekiceksin gg 
            zoom: 16,
            scrollwheel: scrollwheelEnabled,
        };

        mapOptions2.setmap(map);
    }
    if (data.Ilceid != null) {

        $.getJSON('JSON/ilce.json', {}, function (jsonData) {
            $.each(jsonData.features, function (index, value) {
                if (value.attributes.ILCE_ID_PK == data.Ilceid) {
                    var rigs = value.geometry.rings[0];
                    $.each(rigs, function (index, kordinat) {
                        triangleCoords.push(new google.maps.LatLng(parseFloat(kordinat[1]), parseFloat(kordinat[0])));
                    });
                }
            });
            var polygon = new google.maps.Polygon({
                paths: triangleCoords,
                strokeColor: 'blue',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0,
            });
            polygon.setMap(map);
        });
    }
}

var map;
function map_property() {

    if ($('#property-map').length) {
        // map init    
        var myLocationEnabled = true;
        //var style_map = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = true;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(41.031187, 28.976089),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            //styles: style_map
        };

        map = new google.maps.Map(document.getElementById('property-map'), mapOptions1);
        map_propertyLoc = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(41.031187, 28.976089),
            map: map,
            icon: '../Assets/img/markers/icons/perpleEv.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Seçilen taşınmaz</div>",

            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(41.031187, 28.976089),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if (curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }

        });

        if (myLocationEnabled) {
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }

        $(".places_select a").on('click', function () {
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq(" + selected_place_type + ")").attr('data-rel'), $(".places_select a:eq(" + selected_place_type + ") img").attr('src'));
    }
}
function contactMap() {

    var map;
    if ($('#main-map').length) {
        var myLocationEnabled = true;
        //var style_map = [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = false;
        var markers = new Array();
        var mapOptions = {
            //yazmadan da çalışır
            center: new google.maps.LatLng(41.031187, 28.976089),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            //styles: style_map
        };
        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.031187, 28.976089),
            map: map,
            icon: '../Assets/img/markers/house.png'
        });

        var myOptions = {
            content: "<div class='infobox2'>Address: Tomtom Mh. Muammer Karaca ÇK No:3</div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(41.031187, 28.976089),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker.infobox = new InfoBox(myOptions);
        marker.infobox.isOpen = true;
        markers.push(marker);

        // action        
        google.maps.event.addListener(marker, "click", function (e) {
            var curMarker = this;

            $.each(markers, function (index, marker) {
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if (curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }

        });

        if (myLocationEnabled) {
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }
    }
}


function init_places(places_types, icon) {

    //pyrmot lokasyonundan 1km radiuslu alanda search yapar
    var pyrmont = new google.maps.LatLng(41.031187, 28.976089);

    setAllMap(null);

    generic_icon = icon;


    var places_type_array = places_types.split(',');

    var request = {
        location: pyrmont,
        //Konumuma uzaklığına göre restourant hastane atm vs 
        radius: 1000,
        types: places_type_array
    };

    infowindow = new google.maps.InfoWindow();
    placesService = new google.maps.places.PlacesService(map);
    placesService.nearbySearch(request, callback);

}
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}
function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function calcRoute(source_place, dest_place) {
    var selectedMode = 'WALKING';
    var request = {
        origin: source_place,
        destination: dest_place,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var propertyLocation = new google.maps.LatLng(41.031187, 28.976089);
    if (place.icon.indexOf("generic") > -1) {
        place.icon = generic_icon;
    }

    var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
        map: map,
        icon: image,
        position: place.geometry.location
    });

    markers.push(marker);

    var distanceKm = (calcDistance(propertyLocation, placeLoc) * 1.2).toFixed(2);
    var walkingTime = parseInt((distanceKm / 5) * 60 + 0.5);

    google.maps.event.addListener(marker, 'click', function () {

        //drawing route
        calcRoute(propertyLocation, placeLoc);

        // Fetch place details
        placesService.getDetails({ placeId: place.place_id }, function (placeDetails, statusDetails) {

            //open popup infowindow
            infowindow.setContent(place.name + '<br />Mesafe: ' + distanceKm + 'Km' +
                '<br />Yürüme Zamanı: ' + walkingTime + 'Min' +
                '<br /><a target="_blank" href="' + placeDetails.url + '">Google Haritalarda Görüntüle</a>');
            infowindow.open(map_propertyLoc, marker);
        });

    });
}
function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}
function init_directions() {
    $(".places_select").css('display', 'block');
}
