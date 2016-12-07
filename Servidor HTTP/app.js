var express = require('express');
var app = express();
var puerto =5050;
var fs = require('fs');

var quePasa='';
quePasa='Esta por leer el archivo';
console.log(quePasa);


//1r parametro es el pathm 2do codificacion


quePasa='Termino de leer el archivo';
console.log(quePasa);

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



app.get('/', function (req, res) {

    console.log('1 antes de leer');
    var todo = '';

    fs.readFile('./paginas/pagina.html',
        'utf8',
        function (error, archivoLeido1) {
        todo+=archivoLeido1;

            fs.readFile('./paginas/usuario.html',
                'utf8',
                function (error, archivoLeido2) {
                
                todo+=archivoLeido2;

                    fs.readFile('./paginas/footer.html',
                        'utf8',
                        function (error, archivoLeido3) {
                            todo+=archivoLeido3;
                        
                            res.send(todo);
                        });
                });

        });

    console.log('2 parece que termino de leer');

})


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