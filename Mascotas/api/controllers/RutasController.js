/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {

    // res.view(String: Nombre vista, Datos JSON)
    return res.view('vistas/home', {
      titulo: 'Inicio',
      title: 'Inicio',
      numero: 1,
      mauricio: {
        nombre: 'Mauricio',
        cedula: 1718137159
      },
      usuarios: []
    })
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
  crearUsuario: function (req, res) {
    return res.view('vistas/crearUsuario', {
      title: 'Crear Usuarios'
    })
  },
  editarUsuario: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError()
        return res.view('vistas/editarUsuario', {
          title: 'Editar usuario - ' + usuarioEncontrado.apellidos,
          usuario: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarUsuarios: function (req, res) {

    Usuario.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('vistas/listarUsuarios', {
        title: 'Lista de Usuarios',
        usuarios: usuariosEncontrados
      })
    });
  },
  crearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('vistas/Mascota/crearMascota', {
        title: 'Crear Mascota',
        razas: razasEncontrados
      });
    });

  },
  editarMascota: function (req, res) {

    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('vistas/Mascota/editarMascota', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascota: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarMascotas: function (req, res) {

    Mascota.find().exec(function (error, mascotasEncontrados) {
      if (error) return res.serverError()
      return res.view('vistas/Mascota/listarMascotas', {
        title: 'Lista de Mascotas',
        mascotas: mascotasEncontrados
      })
    });
  },
  crearRaza: function (req, res) {


    return res.view('vistas/Raza/crearRaza');
  },
  listarRazas: function (req, res) {
      Raza.find()
        .exec(function (errorIndefinido, razasEncontrados) {

          if (errorIndefinido) {
            res.view('vistas/Error', {
              error: {
                desripcion: "Hubo un problema cargando las razas",
                rawError: errorIndefinido,
                url: "/listarRazas"
              }
            });
          }

          res.view('vistas/Raza/listarRazas', {
            razas: razasEncontrados
          });
        })
    },
  editarRaza: function (req, res) {

    var parametros = req.allParams();

    if (parametros.id) {

      Raza.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, RazaEncontrado) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/listarRazas"
            }
          });
        }
        if(RazaEncontrado){
          return res.view("vistas/Raza/editarRaza",{
            razaAEditar:RazaEncontrado,
            inicioSesion:true
          });
        }else{
          return res.view('vistas/Error', {
            error: {
              desripcion: "La raza con id: "+parametros.id+" no existe.",
              rawError: "No existe la raza",
              url: "/listarRazas"
            }
          });
        }
      })
    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/listarRazas"
        }
      });

    }
  }
};
