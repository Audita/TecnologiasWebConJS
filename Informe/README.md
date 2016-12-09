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
  * <a href="#defnode">Node,js</a>
  * <a href="#defnpm">NPM</a>
  * <a href="#defexpres">Glosario Básico CSS</a>
  * <a href="#defmetodos">Métodos</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#instalacion">Instalación de Express,js</a>
  * <a href="#ejemplos">Ejemplos</a>
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

<a name="defexpres"></a>
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

<a name="ejemplos"></a>
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

Para evitar el uso de un valor de puerto quemado se usa una variable llamada puerto para facilitar el cambio de puerto cuando se requerido.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/puerto.png">
</p>

Para el método post se realiza de la siguiente forma:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/post1.png">
</p>

Para observar lo que devuelve el método post se utiliza postman en la cual se escribe la dirección y el método a utilizar:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/ejecucionpost.png">
</p>

A continuacion con el método Post se va a enviar los datos de un usuario de la siguiente manera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/usuario.png">
</p>
 
Con ayuda de Postman se puede observar como envia los datos el metodo post:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/Postusuario.png">
</p>

Para enviar mas atributos al usuario se lo debe realziar de la siguiente manera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/usuario2.png">
</p>

Los resultados se los puede observar a traves de Postman

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/Postusuario2.png">
</p>


El metodo append es utilizado para agregar valor a la cabecera, a continuación se va a agregar un token para esto se utiliza el metodo post.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/token.png">
</p>

Utilizando Postman se puede observar que se ha agregado el token en la cabecera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/Posttoken.png">
</p>

A continuación se creará un arreglo de usuarios en el cual se va a recibir como parametro el id del usuario para buscar y devolver el usuario correspondiente:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/arregloUsuario.png">
</p>

En el URL se envia como parametro el id de usuario a buscar y nos devuelve los datos del usuario utilizando un json.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/resArreglo.png">
</p>

Para devolver todo el arreglo de usuario se lo realiza de la siguiente manera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/todos.png">
</p>

En el navegdor se obtiene los resultados siguientes:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/resArregloCompleto.png">
</p>

Para crear un nuevo usuario se utiliza push con el metodo post, para esto se necesita enviar los parametros utilizando res y query.


<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/CrearUsuario.png">
</p>

A continuación en el postman enviamos los datos del nuevo usuario.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/maria.png">
</p>

Se ha podido crear un nuevo usuario y los resultados se puede observar tanto en Postman como en la consola:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/08-Nodejs-02/Informe/Imagenes/maria2.png">
</p>
<br>

<a href="#cabecera">A la cabecera</a>
## Conclusiones y Recomendaciones

- Es necesario identificar el funcionamiento de cada uno de los métodos ya que cada uno tiene un comportamiento distinto.
- Se debe identificar la diferencia entre res y req ya que cada uno tiene un propsito diferente.
- Se logró instalár express.js de una manera rápida, sencilla y asi mismo su instalción reslto bastante corta.
- Postam es de gran ayuda a la hora de entender el funcionamiento de los métodos ya que se puede simular peticiones y ver como el servidor responde a las mismas, además que el tiene una interfaz sencilla que hace intuitivo su funcionamiento.


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Audita Quito](https://github.com/Audita)






