function initialize() {
var styles = [
{
    stylers: [
      { saturation: -1 }
    ]
  },
	{	
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ saturation: -20 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'geometry',
		stylers: [
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ lightness: -23 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
		{ saturation: -20 },
			{ visibility: 'on' }
		]
	}
];

var options = {
	mapTypeControlOptions: {
		mapTypeIds: [ 'Styled']
	},
	mapTypeControl: false, 
	center: new google.maps.LatLng(53.743382, -0.345746),
	zoom: 17,
	mapTypeId: 'Styled'
};

maphull = new google.maps.Map(document.getElementById("map-hac"),options);

var image = '/hac/hac-logo-map.svg';
var HullLatLng = new google.maps.LatLng(53.743382, -0.345746);

var rfdMarkerHull = new google.maps.Marker({
      position: HullLatLng,
      map: maphull,
      icon: image
  });
  
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Hull Art Circle' });
maphull.mapTypes.set('Styled', styledMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);