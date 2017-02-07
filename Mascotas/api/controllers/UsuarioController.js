/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
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
        