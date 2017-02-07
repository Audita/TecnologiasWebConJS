/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        
         if (req.method == 'POST') {
           
           var parametros = req.allParams();
           if(parametros.nombres && parametros.apellidos){
               if(parametros.correo =""){
                   parametros.correo =null;
               }
               
               Usuario.create({
                   nombres:parametros.nombres
                   apellidos:parametros.apellidos
                   correo:parametros.correo
                   
                   
               }).exec(function(err,usuarioCreado)
                      
                      {
                   
                   if(err){
                       return res.view('vistas/error',{
    
                error:{
                descripcion:"Fallo usuario",
                rawError: err,
                url:"/crearUsuario"
                           }
               });
               
           }
                   
           return res.view('vistas/Usuario/crearUsuario');
        })
               
               
       }else{

        return res.view('vistas/error',{
        error:{
        descripcion:"Llena todos los parametros",
        rawError:"Fallo envio de parametros",
        url:"/Inicio"
        }

    });
       }
        
       if (req.method == 'POST') {
           
       
           
       }else{

        return res.view('vistas/error',{
        error:{
        descripcion:"Error Metodo HTTP",
        rawError:"Ruta Equivocada",
        url:"/Inicio"
        }

    });
       }
    }

};
        