var express = require('express');
var app = express();
var puerto =5050;

app.get('/TecnologiasWeb?', function (req, res) {
  res.send('Con Javascript');
});

app.post('/TecnologiasWeb', function (req, res) {
    
    var usuario ={
        
        nombre: 'Audita',
        Cedula: 1725386310
        
    }
    
    usuario.apellido='';
    usuario.mascotas=[];
    usuario.casado=false;
    
    
    
    console.log('Lo que tengo en el REQUEST'+req);
    console.log('Lo que tengo en el RESPONSE'+res);
    
    console.log('Cabeceras del REQUEST'+req.headers);
    console.log('Cabeceras del RESPONSE'+res.headers);
    
    res.append('token','1234');
    
  res.send(usuario);
  // res.send('Picachu'); solo se puede mandar una respuesta
});

app.listen(puerto, function () {
  console.log('Example app listening on port'+puerto);
});