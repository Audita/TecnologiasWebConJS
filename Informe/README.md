#NPM

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `CSS` 
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
<a name="usocss"></a>
### Uso de CSS

**Estilo dentro del documento HTML**

- Dentro de la etiqueta ```<head>```.- se debe aplicar el estilo dentro de la etiqueta style

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/head.png">

</p>

- Por Etiquetas.-Se debe especificar la etiqueta a la que se requiere aplicar el estilo y dentro de la misma se establece una propiedad con su respectivo valor.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/etiquetas.png">

</p>

- Por clase.- Se debe establecer el nombre de la clase y dentro de la misma la propiedad y el valor del estilo. Para llamar al estilo se lo debe realizar dentro de la etiqueta e indicar que es una clase con su respectivo nombre.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/clase.png">

</p>

- Por id.- Primero de debe poner el simbolo **#** y luego el nombre del id y dentro establecer la propiedad a utilizar con su respectivo valor
<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/id.png">

</p>

- Estilo como atributo.-Dentro de determinada etiqueta se debe poner poner como atributo ```style``` con su respectiva propiedad y valor.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/atributo.png">
</p>

**Estilo fuerda del documento HTML**

 Para definir un estilo fuera del documento HTML simplemente se debe crear un archivo.css y ubicar ahi los estilos a utilizar.
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/estilos.png">
</p>
 
 Para poder utilizar los estilos del archivo estilos.css en el docuemnto HTML se debe hacer uso de la etiqueta ```<link>``` dentro de la cual se ubica el atributo ```rel``` el cual sirve para especificar la relación existente entre el documento web y el documento con el que se está realizando el enlace en este caso es una hoja de estilos ```stylesheet```, posteriormente a esto es ubica el atrubuto ```href``` el cual permite establecer la URL o ruta en la que se encuentra el documento el cual se quiere enlazar, con el documento web. En este caso es una ruta dentro de Windows.
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/ruta.png">
</p>
<a name="usogrid"></a>
### Uso de Grid
Lo primero que se debe tener en cuenta para usar grid con Bootstrap es que se debe buscar el CDN de Bootstrap y copiarlo dentro de la cabecera  ```<head>```de la siguiente manera:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/cdn.png">
</p>

Una grid en Bootstrap cuenta con un diseño de 12 columnas que tienen múltiples niveles. Las 12 columnas pueden ser divididas de forma diferente pero siempre la suma total debe ser igual a doce. A continuacion se muestran varias formas de implementar:

- ```col-md```: Este prefijo de clase es utilizado para pantallas de dispositivos medianos como ordenadores de sobremesa (≥992px).Para este ejemplo se ha creado 3 columnas del mismo tamaño:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colmd.png">
</p>
 Resultado obtenido:
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colmdres.png">
</p>
 
- ```col-sm```: Este prefijo de clase es utilizado para pantallas de pequeños dispositivos como Tablets (≥768px).Para este ejemplo se ha creado 4 columnas de igual tamaño:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colsm.png">
</p>
 Resultado obtenido:
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colsmres.png">
</p>

- ```col-lg```: Este prefijo de clase es utilizado para pantallas de grandes dispositivos de sobremesa (≥1200px).Para este ejemplo se ha creado 2 columnas de igual tamaño:

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/collg.png">
</p>
 Resultado obtenido:
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/collgres.png">
</p>
- ```col-xs```: Este prefijo de clase es utilizado para pantallas de extra pequeños dispositivos móviles (≤768px).Para este ejemplo se ha creado una columa de tamaño 2 y dos de 5.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colxs.png">
</p>
 Resultado obtenido:
 
 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/colxsres.png">
</p>

Al finalizar el resultado obtenido fue el siguiente:

 <p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/resultadofinal.png">
</p>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- El uso de las hojas de estilo mejoran en gran medida la apariencia de una página web.
- El uso de estilos fuera del documento permite unificar en una declaración todos los estilos para uno o varios archivos html, ya que si el mismo estilo es utilizado en varios documentos y este cambia es más fácil cambiar los estilos en un docuemnto que cambiar en todos los documentos html que requieran el cambio.
- Se puede establecer estilos de varias formas las cuales deben ser aprendidas y utilizadas dependiendo de la facilidad para usar por parte del programador. 
- Una etiqueta en concreto puede definir varios estilos diferentes.
- las columnas de un grid en Bootstrap se ajustan a la pantalla confrome vaya cambiado su tamaño, dichas columas se las puede dividir de varias formas pero la suma total siempre debe ser igual a doce.


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Audita Quito](https://github.com/Audita)
