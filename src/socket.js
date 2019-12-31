module.exports = io => {
    io.on('connection', socket =>{
        console.log('new user conected');
        socket.on('userCoordinates', coords =>{
            socket.broadcast.emit('newUserCoordinates', coords)
        })
    });
}