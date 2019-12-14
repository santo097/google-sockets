const map = L.map('map-template').setView([51.505, -0.09], 10);

const tileURL = 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
L.tileLayer(tileURL).addTo(map);