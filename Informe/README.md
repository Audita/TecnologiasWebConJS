#NPM

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `NPM` 
### Fecha : `2016-12-08`
### Estudiante : `Audita Jelena Quito Reyes`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#defcss">Definición CSS</a>
  * <a href="#CaracteriticasVentajas">Características y Ventajas de CSS</a>
  * <a href="#partescss">Glosario Básico CSS</a>
  * <a href="#defbootstrap">Bootstrap</a>
  * <a href="#defgrid">Grid</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#usocss">Uso de CSS</a>
  * <a href="#usogrid">Uso de Grid</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Identificar la utilidad del Manejador de Paquetes de Node.js (NPM).
- Crear aplicaciones basicas utilizando ExpressJS.
- Identificar el funcionamiento de métodos(get,post,put,delete).

<a name="marco-teorico"></a>
## Marco Teórico
<a name="defnode"></a>
### Definición Node.js
<br><br>
<p align="center">
<img src="https://ugc.kn3.net/i/origin/http://rockruz.net/wp-content/uploads/2015/02/nodejs_logo.jpg" width="300" height="200">
</p>
<br><br>
Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo. (Fuente: [node.js](https://nodejs.org/es/))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defnpm"></a>
### Definición NPM
<br><br>
<p align="center">
<img src="https://assets.npmjs.com/uploads/2015/11/coding-wombat1.png" width="300" height="200">
</p>
<br><br>
NPM (Node Package Manager) es un gestor de paquetes de node.js, que nos permite descargar librerías y enlazarlas o descargar programas de js. NPM facilita a los desarrolladores de JavaScript compartir y reutilizar el código, y hace que sea fácil de actualizar el código que va a compartir. (Fuente: [npm](https://docs.npmjs.com/getting-started/what-is-npm))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="defnode"></a>
### Definición Express.js
<br><br>
<p align="center">
<img src="https://2.bp.blogspot.com/-gat5ozMNEYs/VvDc3Uj0LzI/AAAAAAAAeto/P6BKU-B8Yik65tH7Wb27WL3JBGQ2vH2OQ/s1600/15-Websites-built-with-Express_785.png" width="300" height="200">
</p>
<br><br>
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. (Fuente: [expressjs](http://expressjs.com/es/))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="defmetodos"></a>
### Métodos
<br><br>
<p align="center">
<img src="https://ugc.kn3.net/i/origin/http://rockruz.net/wp-content/uploads/2015/02/nodejs_logo.jpg" width="300" height="200">
</p>
<br><br>
- **Get:** El concepto GET es obtener información del servidor. Traer datos que están en el servidor, ya sea en un archivo o base de datos, al cliente. 
- **Post:** Es enviar información desde el cliente para que sea procesada o agregue información en el servidor, como sería la carga o actualización en sí de una noticia.
- **Delete:** Se utiliza para eliminar un recurso del servidor
- **Put:**Se utiliza para actualizar un recurso del servidor
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe
<a name="instalacion"></a>
### Instalacion de Express.js


Se debe crear un directorio para que contenga la aplicación en este caso se crea la carpeta servidorHTTP y se ubica dentro de la misma:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/crearcarpeta.png">

</p>

Se ejecuta el comando ```npm init``` para crear un archivo ```package.json``` para la aplicación.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/init.png">

</p>

Mientras se instala solicita varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Para para aceptar los valores predeterminados se tiene que pulsar INTRO. A continuacion se presenta el detalle de las configuraciones realizadas:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/detalle.png">

</p>
Se ejecuta el comando ```npm install express --save``` para instalar npm. Si se deseea instalar temporalmente no se escribe ```--save```.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/instalacion.png">
</p>

### Ejemplo método get

La aplicación inicia un servidor y escucha las conexiones en el puerto 5050. La aplicación responde ```Con Javascript``` para las solicitudes al URL  ```/TecnologiasWEB```. 

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/get1.png">

</p>
Para ejecutar la aplicación se utiliza el comando ```node``` seguido del nombre de la aplicación. Se puede observar en la consola el mensaje donde indica el puerto que esta escuchando.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/ejecucion1.png">

</p>
Para observar lo que devuelve en el navegador se debe poner localhost, el puerto utilizado con la URL establecida anteriormente``` http://localhost:5050/tecnologiasWeb``` como resultado se tendra el mensaje ```Con Javascript```

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/navegador1.png">
</p>

Para evitar el uso de un valor de puerto quemado se usa una variable llamada puerto para facilitar el cambio de puerto cuando se requerido,

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/puerto.png">
</p>

Para el metodo post se realiza de la siguiente forma:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/post1.png">
</p>

Para observar lo que devuelve el metodo post se utiliza postman en la cual se escribe la direccion y el método a utilizar:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/ejecucionpost.png">
</p>

A continuacion con el metodo Post se va a enviar los datos de un usuario de la siguiente manera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/usuario.png">
</p>
 
Con ayuda de Postman se puede observar como envia los datos el metodo post:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/Postusuario.png">
</p>

Con ayuda de Postman se puede observar como envia los datos el metodo post:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/Postusuario.png">
</p>



<br>
<a href="#cabecera">A la cabecera</a>
## Conclusiones y Recomendaciones

- El 


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Audita Quito](https://github.com/Audita)






