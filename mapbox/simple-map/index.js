var url = "https://gist.githubusercontent.com/milafrerichs/78ef5702db2dc514fc2bed465d58406b/raw/f1366ee2a83a9afb1dd2427e9cbd4cd3db8d87ca/bundeslaender_simplify200.geojson";
mapboxgl.accessToken = 'pk.eyJ1IjoibWlsYWZyZXJpY2hzIiwiYSI6IkNTOW8tQTgifQ.1Dh_DEF5--fPq_t0mhIkQA';
var map = new mapboxgl.Map({
  container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [13.79,53.545], 
    zoom: 5
  });
  map.on('load', function () {
    map.addSource('bb', { type: 'geojson', data: url });
    map.addLayer({
      'id': 'berlin',
      'type': 'fill',
      'source': 'bb',
      'paint': {
        'fill-color': '#088',
        'fill-opacity': 0.8
      }
    });
    map.addLayer({
      'id': 'berlin-stroke',
      'type': 'line',
      'source': 'bb',
      'paint': {
        'line-width': 1,
        'line-color': '#000',
      }
    });
  });
