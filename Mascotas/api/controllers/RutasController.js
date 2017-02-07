/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    home:function(req,res){
            
        // res.view(String: Nombre vista, Datos JSON)
        
        
        
        
        
        return res.view('vistas/home',{
            titulo:'Inicio',
            numero:1,
            mauricio:{
                nombre:'Mauricio',
                cedula:1718137159
            },
            usuarios:[]
        })
        
    },
    crearUsuario:function(req,res){
        
        return res.view('vistas/Usuario/crearUsuario')
        
    },
     error:function(req,res){
        
        return res.view('vistas/error',{
    
        error:{
        descripcion:"Usted esta por error en esta ruta dirijase a Inicio",
        rawError:"Ruta Equivocada",
        url:"/Inicio"
}
});
        
    }
    
};


    
    
    
    
    
    