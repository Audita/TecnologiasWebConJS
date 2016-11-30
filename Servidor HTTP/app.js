var express = require('express');
var app = express();
var puerto =5050;
var usuarios=[
    {
        
        id:1,
        nombre:'Pepe',
        cedula:'172635485'
        
    },
    
    {
        
        id:2,
        nombre:'Pedro',
        cedula:'132635485'
        
    },
    
    {
        
        id:3,
        nombre:'Carlos',
        cedula:'122635485'
        
    }
    
];
var contador =3;

app.get('/Usuarios/:idUsuario', function (req, res) {
 
     var idActual=req.params.idUsuario;
     
     for(var i=0; i<usuarios.length;i++){
         //busca
         if(idActual == usuarios[i].id){
             //responder usuario con id actual
             res.json(usuarios[i]);
         }
     }
    res.send('No esiste usuario');
     
});

/*app.get('/Usuarios', function (req, res) {

    res.json(usuarios);
    
});*/



app.get('/TecnologiasWeb?', function (req, res) {
  res.send('Con Javascript');
});


app.post('/Usuarios', function (req, res) {
    
    console.log(req.query.nombre);
     console.log(req.query.cedula);
    
    
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio el cedula');
    }
    
    
    var nuevoUsuario ={
        
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    
    };
    
    usuarios.push(nuevoUsuario);
    contador=contador++;
    res.json(usuarios);
    
});


app.post('/TecnologiasWeb', function (req, res) {
    
    var parametros =req.params
    console.log(parametros);
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