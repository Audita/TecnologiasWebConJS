/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },
    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario');
    },
    error: function (req, res) {
        return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    listarUsuarios: function (req, res) {

        Usuario.find()
            .exec(function (errorIndefinido, usuariosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/ListarUsuarios"
                        }
                    });
                }
            
                res.view('vistas/Usuario/ListarUsuarios', {
                    usuarios:usuariosEncontrados
                });
            })
    },

    editarUsuario: function (req, res) {
    var parametros =req.allParams();
    
    if(parametros.id){
        
        Usuario.findOne({
            id:parametros.id
        }).exec(function (errorInesperado, usuarioEncontrado) {

                if (errorInesperado) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "errorInesperado",
                            rawError: errorInesperado,
                            url: "/ListarUsuarios"
                        }
                    });
                }
       
       
            if(usuarioEncontrado){
                
                res.view('vistas/Usuario/editarUsuario',{
                    usuariosAEditar:usuarioEncontrado
                         })   
                
            }else{
                
                //Manejar el error
                return res.view('vistas/Error', {
                error: {
                desripcion: "el usuario con Id:"+paraemtros.id+"NO existe" ,
                rawError: "No existe usuario",
                url: "/ListarUsuarios"
            }
                }); 
            }
            
                
        })
        
        }else{
           
        return res.view('vistas/Error', {
            error: {
                desripcion: "No ha enviado el parametro ID",
                rawError: "Ruta equivocada",
                url: "/ListarUsuarios"
            }
        });   
           
       }
  
}
    
}




    
    
    
    
    