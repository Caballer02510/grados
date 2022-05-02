const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT;
app.use(express.static('public'));

 app.get('/', function (req, res) {
     res.send('Hello World')
 });

 app.get('/cambiar', function (req, res) {
     let grados = req.query.grados;
     res.send('Los gradosF son:' + convertirgrados(grados) + "<br><a href='index.html'>Volver</a>");
 }); 



function convertirgrados(gradosC) {
    let conversion = (gradosC * 9/5) + 32;
    return conversion;

}




app.listen(PORT, console.log("Escuchando el puerto" + PORT))

 