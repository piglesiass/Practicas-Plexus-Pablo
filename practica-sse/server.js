const http = require('http');
contador=0;

const server = http.createServer((req, res) => {
    
  if (req.url === '/events') {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
    });
    setInterval(()=> {
        res.write(`data: ${JSON.stringify({ mensaje: 'Hola', numero: contador })}\n\n`);
        contador++;
    },1000);

    setInterval(()=> {
        res.write(`event: progress\ndata: ${JSON.stringify({ progreso: contador})}\n\n`);
    }, 2000);
    }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});