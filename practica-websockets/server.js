const WebSocket = require('ws');
contador =0;
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (socket) => {
    console.log('Cliente conectado');
    setInterval(()=>{
        socket.send(JSON.stringify({ mensaje: 'Hola', numero: contador }));
        contador++;
    }, 1000);

    socket.on('message', (data) =>{
        console.log('Mensaje del cliente:', data.toString());
    })
});