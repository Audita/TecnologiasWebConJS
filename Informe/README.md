#NPM

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `CSS` 
### Fecha : `2016-12-08`
### Estudiante : `Audita Jelena Quito Reyes`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#defsails">Definición Sails</a>
  * <a href="#defass">Carpeta Assets</a>
  * <a href="#defpub">Carpeta Public</a>
  * <a href="#defcon">Carpeta Config</a>
  * <a href="#defvie">Carpeta Views</a>
  * <a href="#defapi">Carpeta Api</a>
  * <a href="#defgr">Grunt</a>
- <a href="#desarrollo">Desarrollo</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sails`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer para que sirve y como emplear Sails.js
- Conocer el funcionamiento de Assets - Views - Routes - Controllers - Pipeline

<a name="marco-teorico"></a>
## Marco Teórico
<a name="defsails"></a>
### Definición Sails
<br><br>
<p align="center">
<img src="http://sailsjs.com/images/original/bkgd_squiddy.png" width="300" height="200">
</p>
<br><br>
Sails es un framework de JavaScript diseñado para parecerse a la arquitectura MVC de framework como Ruby on Rails. Esto hace que el proceso de construcción de aplicaciones en Node.js  más fácil, especialmente las API, las aplicaciones de una sola página y prestaciones en tiempo real, como el chat. (Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390))

- La capacidad de crear RESTfull JSON API de forma automática.
- Trae incorporado el modulo Socket.io.
- Genera rutas automáticas para sus controladores.
- Provee sistema de autenticación de usuarios y control de acceso basado en roles.
- **Grunt** como Task Runner (Tareas automáticas como minificación, compilación, testing, etc)
- **Assets:** Todos los archivos de sus correspondientes directorios (css,js) son unificados en un único archivo y minificados, para reducir considerablemente la carga de la página y la cantidad limitada de peticiones del navegador.

<br>
<a href="#cabecera">A la cabecera</a>

<a name="defass"></a>
### Carpeta Assets
<br><br>
<p align="center">
<img src="https://sites.google.com/site/wwwlosensayos1/carpeta.jpg" width="300" height="200">
</p>
<br><br>
La carpeta assets contiene subdirectorios para los archivos Javascript y CSS que deben ser cargados en tiempo de ejecución. Este es el mejor lugar para almacenar bibliotecas auxiliares utilizados por la aplicación. (Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-353900))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defpub"></a>
### Carpeta Public
<br><br>
<p align="center">
<img src="http://2.bp.blogspot.com/-jnP92igu444/UGszfGyyOCI/AAAAAAAACR8/bt7A_lZ8BcU/s1600/Hotmail-Carpeta-de-Borradores.jpg" width="300" height="200">
</p>
<br><br>
Contiene los archivos que están disponibles públicamente, tales como imágenes que utiliza su sitio, el favicon, etc. (Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-353900))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defcon"></a>
### Carpeta Config
<br><br>
<p align="center">
<img src="https://thumbs.dreamstime.com/z/carpeta-de-las-configuraciones-14335038.jpg" width="300" height="200">
</p>
<br><br>
Esta es una de las carpetas más importantes. Sails está diseñado para ser flexible. Asume algunas convenciones estándar, sino que también permite al desarrollador cambiar la forma de las configuraciones de sails de la aplicación creada para adaptarse a las necesidades del proyecto. (Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-353900))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defvie"></a>
### Carpeta Views
<br><br>
<p align="center">
<img src="http://pngimg.com/upload/folder_PNG8765.png" width="300" height="200">
</p>
<br><br>
las views de la aplicación se guardan en esta carpeta. En cuanto a su contenido, nos damos cuenta de que las opiniones se generan por defecto como (JavaScript incrustado) EJS. Además, la carpeta views contiene views para el tratamiento de errores (404 y 500) y también el archivo de diseño ( layout.ejs) y las views para el controlador del home, generados por sailsS.(Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-353900))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defapi"></a>
### Carpeta Api
<br><br>
<p align="center">
<img src="http://www.graphicsfuel.com/wp-content/uploads/2012/03/folder-icon-512x512.png" width="300" height="200">
</p>
<br><br>
Esta carpeta se compone de un Buch de subcarpetas:

- La carpeta adapters contiene los adaptadores utilizados por la aplicación para manejar las conexiones de base de datos.
- La carpeta controllers contiene los controladores de aplicaciones modelos de la aplicación se almacenan en la carpeta models.
- En la carpeta policies se almacenan las reglas para el acceso de usuarios de aplicaciones-
- Los servicios API implementadas por la aplicación se almacenan en la carpeta services.
(Fuente: [envatutsplus](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-353900))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defgru"></a>
### Grunt
<br><br>
<p align="center">
<img src="http://res.cloudinary.com/julitogtu/image/upload/v1454421849/grunt1_xkahrj.png" width="300" height="200">
</p>
<br><br>
es una librería JavaScript que nos permite configurar tareas automáticas y así ahorrarnos tiempo en nuestro desarrollo y despliegue de aplicaciones webs.
(Fuente: [gruntjs](http://gruntjs.com/))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe
Para instalar sails se debe ejecutar el siguiente comando ```npm install sails```:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/instalacion.png">

Para crear un proyecto se debe ejecutar el comando ```sails new nombreProyecto``` en este caso se creará el proyecto Mascotas:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/proyecto.png">

En el archivo index.html se puede configurar la presentacion inicial del proyecto

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/index.png">

A continuacion se puede observar las carpetas creadas en el proyecto Mascotas:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/carpetas.png">

Para ejecutar el prouecto creado se lo debe realizar con el comando ```sails lift```.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/ejecucion.png">


Para poder observar desde el navegador se lo realiza con el puerto 1337.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/ejecucionN.png">

En el archivo ```pipeline.js``` se especifican la ubicación de los archivos css que se utiliza la aplicación.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/css.png">

En el navegador se puede observar los cambios con los nuevo estilo utilizado:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/cssN.png">

En la carpeta Views se puede encontrar el archivo ```layout.ejs``` en el cual podemos establecer un encabezado y pie de página, el contenido de la página se puede llamar desde otro archivo de la siguiente forma:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/body.png">

El contenido del body se encuentra en el archivo ```homepage.ejs```:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/homepage.png">

El resultado obtenido es el siguiente:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/corridahome.png">
<br>
<a href="#cabecera">A la cabecera</a>

En la carpeta config se encuntra el archivo routes.js en el cual se define las necesarias para la aplicación. En este caso la rutaprincipal es la del homepage y las demas son las ciudades Quito, Guayaquil y Cuenca.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/routers.png">

Las los archivos con las vistas en este caso de cada una de las ciudades se deben guardar en la carpeta views:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/views.png">

En el navegador se especifica la ruta definida:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/10-sails-01/Informe/Imagenes/rutaguay.png">


## Conclusiones y Recomendaciones

- SailsJS, entre otras cosas, nos facilita en gran medida el desarrollo de APIs REST, servidores de archivos, seguridad y websockets.
- SailsJS se utiliza para la creación de pequeñas o grandes aplicaciones de forma rápida, sencilla y segura. 


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Audita Quito](https://github.com/Audita)






