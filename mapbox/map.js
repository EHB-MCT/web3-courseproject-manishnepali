var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuaXNobmVwYWxpIiwiYSI6ImNrdWNubDZ2cjEyNzEydW1va3VhMXIycDgifQ.n2XtlNGQ4lDXAJt65-Db3w';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
