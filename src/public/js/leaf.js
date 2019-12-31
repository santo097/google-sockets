
// Definir ubicacion por defecto del mapa
const map = L.map('map-template').setView([4.814438399999999, -75.7055488], 10);
// Definir mapa para renderizar
const tileURL = 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
L.tileLayer(tileURL).addTo(map);

// Colicitar la ubicacion del usuario

map.locate({enableHighAccuracy: true})

// sockets

const socket = io();

// Renderiza la ubicacion solicitada al cliente

map.on('locationfound', e =>{
    const coords = [e.latlng.lat, e.latlng.lng]
    // Marcar puntos en especifico por mapa
    const marker = L.marker(coords);
    // Enviar mensajes al punto marcado
    marker.bindPopup('Te encuentras aqui');
    // Agregar marcas
    map.addLayer(marker);
    socket.emit('userCoordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords)=>{
    console.log('a new user is connected');
    const marker = L.marker([coords.lat + 1, coords.lng + 1]);
    marker.bindPopup('Hello there!');
    map.addLayer(marker);
});

/*

// Marcar puntos en especifico por mapa

const marker = L.marker([51.5, -0.09]);
// Enviar mensajes al punto marcado
marker.bindPopup('Hello there!');

// Agregar marcas
map.addLayer(marker);

*/
