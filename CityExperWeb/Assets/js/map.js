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

    // Set CSS styles for the DIV containing the control
    // Setting padding to 5 px will offset the control
    // from the edge of the map.
    controlDiv.style.padding = '5px';

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
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

function LoadMap_main(color) {
    var prefix = '';
    if (typeof color !== 'undefined') {
        prefix = color + '/';
    }

    // option
    if ($('#main-map').length) {
        var myLocationEnabled = true;
        var style_map = [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = true;
        var mapOptions = {
            center: new google.maps.LatLng(38.825533, 34.866287),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles: style_map
        };

        /* markers info ( ltng, icon, image, title) */
        var markers_map = new Array(
            // İŞYERİ
            [41.031187, 28.976089, 'assets/img/markers/green' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'İŞ YERİM'],
            // istanbul
            [41.078208, 29.010505, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04299, 29.0020010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04099, 29.0030010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04369, 29.0040010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04299, 29.0050010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04319, 29.0060001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04199, 29.0037001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04389, 29.0018001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04309, 29.0030031, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04799, 29.0099001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.02399, 29.0700100, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.01299, 29.0200100, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.06099, 29.0930010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.07369, 29.1004001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.08299, 29.0150010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.03319, 29.0260001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.02199, 29.0127001, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.06389, 29.0138010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.04309, 29.0040010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [41.05799, 29.0250010, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            // ANKARA
            [39.923533, 34.866287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.915533, 36.866287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.905533, 33.866287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.985533, 32.966287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.929533, 32.566287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.025533, 32.806287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.225533, 32.860087, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.325533, 32.766287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.925533, 32.666287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.925433, 32.796287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.925533, 32.899287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.925567, 32.878287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.926633, 32.845287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.926733, 32.856287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.992533, 32.876287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.725533, 32.166287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.995533, 32.827287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.425533, 32.822287, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.825533, 32.816987, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [39.225533, 32.869997, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            // ANTALYA
            [36.90812, 30.695450, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90813, 30.695460, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90822, 30.690560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90817, 30.691560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90837, 30.692560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90819, 30.693460, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90722, 30.695490, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90312, 30.695480, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90612, 30.693240, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90872, 30.693260, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90222, 30.685560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90132, 30.680560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90112, 30.691260, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90012, 30.695450, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90002, 30.695570, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90800, 30.695580, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90072, 30.699560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90834, 30.698560, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90898, 30.695800, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
            [36.90865, 30.695900, 'assets/img/markers/blue' + prefix + 'apartment.png', 'assets/img/placeholders/275x165.png', 'Hotel'],
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
                                <a href="listing.html" class="property-card-hover">\n\
                                    <img src="assets/img/property-hover-arrow.png" alt="" class="left-icon">\n\
                                    <img src="assets/img/plus.png" alt="" class="center-icon">\n\
                                    <img src="assets/img/icon-notice.png" alt="" class="right-icon">\n\
                                </a>\n\
                            </div>\n\
                            <div class="title">\n\
                                <a href="listing.html">' + marker_map[4] + '</a>\n\
                            </div>\n\
                            <div class="content clearfix">\n\
                                <div class="pull-left">\n\
                                Dikilitaş Mah. Eren Sok. <br> \n\
                                Özsoy Plaza K:5 D:11 <br>  \n\
                                        BEŞİKTAŞ/iSTANBUL            \n\
                                </div>\n\
                                <div class="pull-right">\n\
                                      <a href="listing.html" class="infobox-link-btn">DETAY</a> \n\
                                </div>\n\
                            </div>\n\
                                <div class="infobox-footer text-color-primary">\n\
                                    <div class="property-preview-f-left"> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-home"></i>İŞ YERİ \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-tint"></i>1 \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-square-o"></i>200m \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-eur"></i>600 000 \n\
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
            gridSize: 40,
            styles: [
                {
                    height: 42,
                    url: 'assets/img/cluster/' + prefix + 'cluster.png',
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

}

var map;
function map_property() {

    if ($('#property-map').length) {
        // map init    
        var myLocationEnabled = true;
        var style_map = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = true;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(41.031187, 28.976089),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles: style_map
        };

        map = new google.maps.Map(document.getElementById('property-map'), mapOptions1);
        map_propertyLoc = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(41.031187, 28.976089),
            map: map,
            icon: 'assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Vucino Han <br> Tomtom, Muammer Karaca Tiyatro Çk. No:3, 34433 Beyoğlu/İstanbul <br>  <button>Ayrıntılı Görüntülemek İçin Tıklayın.</button>  </div>",
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
        var style_map = [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var scrollwheelEnabled = false;
        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(41.031187, 28.976089),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles: style_map
        };
        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.031187, 28.976089),
            map: map,
            icon: 'assets/img/markers/house.png'
        });

        var myOptions = {
            content: "<div class='infobox2'>Address: Ilica 345, HR-10000 Zagreb</div>",
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
    var pyrmont = new google.maps.LatLng(41.031187, 28.976089);

    setAllMap(null);

    generic_icon = icon;


    var places_type_array = places_types.split(',');

    var request = {
        location: pyrmont,
        //Konumuma uzaklığına göre restourant hastane atm vs 
        radius: 9000,
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
            //console.log(response.routes[0].legs[0].distance.value);
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
            infowindow.setContent(place.name + '<br />Distance: ' + distanceKm + 'Km' +
                '<br />WalkingTime: ' + walkingTime + 'Min' +
                '<br /><a target="_blank" href="' + placeDetails.url + '">Details</a>');
            infowindow.open(map_propertyLoc, marker);
        });

    });
}

//calculates distance between two points
function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

function init_directions() {
    $(".places_select").css('display', 'block');
}
