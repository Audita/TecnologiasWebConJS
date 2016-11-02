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
  * <a href="#partescss">Partes de los estilos CSS</a>
  * <a href="#defbootstrap">Bootstrap</a>
  * <a href="#defgrid">Grid</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#usocss">Uso de CSS</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS.
- Identificar la estructura de un archivo HTML.
- Indetificar cada una de las etiquetas de HTML con sus respectivos atributos.

<a name="marco-teorico"></a>
## Marco Teorico
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

<a name="CaracteriticasVentajas"></a>
### Características y ventajas de las CSS
<br><br>
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
<br><br>
<p align="center">
<img src="http://i0.wp.com/www.webdisenia.com/wp-content/uploads/2015/03/002.png" width="200" height="100">
</p>
<br><br>
Bootstrap, es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice. Es decir, el sitio web se adapta automáticamente al tamaño de una PC, una Tablet u otro dispositivo. Esta técnica de diseño y desarrollo se conoce como “responsive design” o diseño adaptativo. (Fuente: [arweb](http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="defgrid"></a>
### Grids
<br><br>
Bootstrap incluye un potente sistema de grids para la creación de diseños de todas las formas y tamaños. Está basado en un diseño de 12 columnas y tiene múltiples niveles. Se puede utilizar con mixins Sass o nuestras clases predefinidas. (Fuente: [arweb](http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm))

El diseño de páginas basado en grids se realiza mediante filas y columnas donde se colocan los contenidos. Así funcionan los grids de Bootstrap:

- Las filas siempre se definen dentro de un contenedor de tipo .container (anchura fija) o de tipo .container-fluid (anchura variable). De esta forma las filas se alinean bien y muestran el padding correcto.
- Las filas se utilizan para agrupar horizontalmente a varias columnas.
- El contenido siempre se coloca dentro de las columnas, ya que las filas sólo deberían contener como hijos elementos de tipo columna.
- Bootstrap define muchas clases CSS (como por ejemplo .row y .col-xs-4) para crear rejillas rápidamente. También existen mixins de Less para crear diseños más semánticos.
- La separación entre columnas se realiza aplicando padding. Para contrarrestar sus efectos en la primera y última columnas, las filas (elementos .row) aplican márgenes negativos.
- Las columnas del grid define su anchura especificando cuántas de las 12 columnas de la fila ocupan.

<br>
<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe
<a name="usocss"></a>
### Uso de CSS

**Estilo dentro del documento**

- Dentro de la etiqueta head.- se debe aplicar el estilo dentro de la etiqueta style

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/head.png">

</p>

- Utilizando Etiquetas.-Se debe especificar la etiqueta a la que se requiere aplicar el estilo y dentro de la misma se establece una propiedad con su respectivo valor.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/etiquetas.png">

</p>

- Utilizando clases.- Se debe establecer el nombre de la clase u dentro de la misma la propiedad y el valor del estilo. Para llamar al estilo se lo debe realizar dentro de la etiqueta e indicar que es una clase y el nombre del estilo.

<p align="center">
<img src="https://github.com/Audita/TecnologiasWebConJS/blob/02.CSS/Informe2/Imagenes/clase.png">

</p>


<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- El uso de la herramienta inspeccionar dentro del navegador puede ser de gran utilidad para mejorar el proceso de desarrollo web, así como entender el comportamiento de dicha página y encontrar posobles errores.
- Mediante la extención Postman se logró entender de una forma más clara el comportamiento de los métodos.
- Es importante identificar la estructura de un documento HTML ya que cada una de las partes tiene una finalidad específica.
- Es importante memorizar cada una de las etiquetas de HTML con sus respectivos atributos ya que de esta manera se puede realizar de forma rápida una página web así como mejorar con el desarrollo.
- Se debe cuidar la sintaxis de cada una de las etiquetas y no olvidar cerrarlas.
- Es importante identificar los códigos de estado de HTML para así entender el estado de una página web y en caso encontrar un codigo saber la razón del mismo.

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Audita Quito](https://github.com/Audita)
