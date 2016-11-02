#CSS - Clases y Frameworks css

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `CSS` 
### Fecha : `2016-11-01`
### Estudiante : `Audita Jelena Quito Reyes`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

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
El tema de la práctica es: `CSS - Clases y Frameworks css`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer el lenguaje de hojas de estilo CSS.
- Conocer las formas de aplicar un estilo dentro y fuera de un documento HTML.
- Identificar el funcionamiento de grid en Bootstrap.
- Identificar los prefijos de clase de un grid dependiedno del dispositivo a utilizar.

<a name="marco-teorico"></a>
## Marco Teórico
<a name="defcss"></a>
### Definición CSS
<br><br>
<p align="center">
<img src="http://desarrollolibre.net/public/download/empty/empty-con-otras-pseudo-class/css3.jpg" width="300" height="200">
</p>
<br><br>
CSS(Cascading Style Sheets) es un lenguaje de hojas de estilos creado para controlar el aspecto o presentación de los documentos electrónicos definidos con HTML y XHTML. CSS es la mejor forma de separar los contenidos y su presentación y es imprescindible para crear páginas web complejas. (Fuente: [Librosweb](http://librosweb.es/libro/css/capitulo_1.htm))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="CaracteríticasVentajas"></a>
### Características y ventajas de las CSS
<br>
El modo de funcionamiento de las CSS consiste en definir, mediante una sintaxis especial, la forma de presentación que se le aplicará a:
- Un web entero, de modo que se puede definir la forma de todo el web de una sola
vez.
- Un documento HTML o página, se puede definir la forma, en un pequeño trozo de código en la cabecera, a toda la página.
- Una porción del documento, aplicando estilos visibles en un trozo de la página.
- Una etiqueta en concreto, llegando incluso a poder definir varios estilos diferentes para una sola etiqueta. Esto es muy importante ya que ofrece potencia en la  programación. Se puede definir, por ejemplo, varios tipos de párrafos: en rojo, en azul, con márgenes, sin ellos, etc.(Fuente: [bbeltran.cs](http://bbeltran.cs.buap.mx/CSS.pdf)) 
<br>
<a href="#cabecera">A la cabecera</a>

<a name="partescss"></a>
### Glosario Básico

CSS define una serie de términos que permiten describir cada una de las partes que componen los estilos CSS. El siguiente esquema muestra las partes que forman un estilo CSS muy básico:
<br>
<p align="center">
<img src="http://1.bp.blogspot.com/-apvRlDefoLc/UAXVRQIRAoI/AAAAAAAAAY0/jta7pcys7tw/s1600/foto5.jpg" width="200" height="100">
</p>
<br>
Los diferentes términos se definen a continuación:
- Regla: cada uno de los estilos que componen una hoja de estilos CSS. Cada regla está compuesta de una parte de "selectores", un símbolo de "llave de apertura" ({), otra parte denominada "declaraciones" y por último, un símbolo de "llave de cierre" (}).
- Selector: indica el elemento o elementos HTML a los que se aplica la regla CSS.
- Declaración: especifica los estilos que se aplican a los elementos. Está compuesta por una o más propiedades CSS.
- Propiedad: permite modificar el aspecto de una característica del elemento.
- Valor: indica el nuevo valor de la característica modificada en el elemento.
(Fuente: [CSS](http://www.jesusda.com/docs/ebooks/introduccion_css.pdf))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defbootstrap"></a>
### Bootstrap
<br>
<p align="center">
<img src="http://i0.wp.com/www.webdisenia.com/wp-content/uploads/2015/03/002.png" width="200" height="100">
</p>
<br><br>
Bootstrap, es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice. Es decir, el sitio web se adapta automáticamente al tamaño de una PC, una Tablet u otro dispositivo. Esta técnica de diseño y desarrollo se conoce como “responsive design” o diseño adaptativo. (Fuente: [arweb](http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defgrid"></a>
### Grids
<br>
Bootstrap incluye un potente sistema de grid para la creación de diseños de todas las formas y tamaños. Está basado en un diseño de 12 columnas y tiene múltiples niveles. Se puede utilizar con mixins Sass o nuestras clases predefinidas. (Fuente: [arweb](http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm))

El diseño de páginas basado en grids se realiza mediante filas y columnas donde se colocan los contenidos. Así funcionan los grids de Bootstrap:

- Las filas siempre se definen dentro de un contenedor de tipo .container (anchura fija) o de tipo .container-fluid (anchura variable). De esta forma las filas se alinean bien y muestran el padding correcto.
- Las filas se utilizan para agrupar horizontalmente a varias columnas.
- El contenido siempre se coloca dentro de las columnas, ya que las filas sólo deberían contener como hijos elementos de tipo columna.
- Bootstrap define muchas clases CSS (como por ejemplo .row y .col-xs-4) para crear un grid rápidamente. También existen mixins de Less para crear diseños más semánticos.
- La separación entre columnas se realiza aplicando padding. Para contrarrestar sus efectos en la primera y última columnas, las filas (elementos .row) aplican márgenes negativos.
- Las columnas del grid define su anchura especificando cuántas de las 12 columnas de la fila ocupan.

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
