module.exports = function(req, res, next) {

    var parametros =req.allParams();
    
    
  if (parametros.id==req.session.id) {
    return next();
  }
  return res.forbidden('USTED NO PUEDE EDITAR LA INFORMACION DE OTROS USUARIOS');
};