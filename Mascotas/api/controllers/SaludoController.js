/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
   if(req.method=='GET'){
    res.json({
        nombre:'Hola Get'
    });
   }else{
    if(req.method=='POST'){
    res.json({
        nombre:'Hola post'
    });

    }else{
       
       res.json({
        nombre:'Hola Todos'
    });
   }
   }
    
},
    Adios:function(req,res){
    res.send('Adios'):
    
    }
},
    hora:function(req,res)
    res.send('Adios'): 
};

