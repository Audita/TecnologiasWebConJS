/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearRaza: function(req, res) {

    if (req.method == "POST") {

      var parametros = req.allParams();
      if(parametros.nombre){
        var razaCrear = {
          nombre: parametros.nombre
        }
        Raza.create(razaCrear).exec(function (err, razaCrear) {
          if (err) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Fallo al crear el Artista",
                rawError: err,
                url: "/crearRaza"
              }

            });
          }

          Raza.find()
            .exec(function (errorIndefinido, razasEncontrados) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las razas",
                    rawError: errorIndefinido,
                    url: "/crearRaza"
                  }
                });
              }

              res.view('vistas/Raza/listarRazas', {
                razas: razasEncontrados
              });
            })

        })


      } else {

        return res.view('vistas/Error', {
          error: {
            desripcion: "Llena todos los parametros",
            rawError: "Fallo en envio de parametros",
            url: "/crearRazas"
          }

        });

      }


    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "Error en el uso del Metodo HTTP",
          rawError: "HTTP Invalido",
          url: "/crearRaza"
        }
      });

    }

  },
  borrarRaza: function (req, res) {

    var parametros = req.allParams();

    if (parametros.id) {

      Raza.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, RazaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/listarRazas"
            }
          });
        }
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
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envia ID",
          url: "/listarRazas"
        }
      });
    }
  },
  editarRaza: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.idRaza) {
      var razaAEditar = {
        nombre: parametros.nombre
      }

      if (razaAEditar.nombre == "") {
        delete razaAEditar.nombre
      }
      console.log(parametros);
      Raza.update({
        id: parametros.idRaza
      }, razaAEditar)
        .exec(function (errorInesperado, RazaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Tuvimos un Error Inesperado",
                rawError: errorInesperado,
                url: "/listarRazas"
              }
            });
          }

          Raza.find()
            .exec(function (errorIndefinido,RazaEncontrado) {

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
                razas: RazaEncontrado
              });
            })

        })

    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies el ID y el nombre",
          rawError: "No envia Parametros",
          url: "/listarRazas"
        }
      });
    }

  }
};
