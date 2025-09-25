Const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
	res.send('¡Hola desde CI/CD! Jose Perez Was here');
});
app.listen(port,()=>{
	console.log('App escuchando http://localhost:${port}');
});
