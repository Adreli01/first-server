Mi primer server
https://www.youtube.com/watch?v=olTgcd5VjX0&list=PLL0TiOXBeDairhQkzlawZNYnYEX45kDJP

Instalamos la funcion npm init --yes desde la consola de windows en la direccion de first-server para crear un pakage json
Instalamos la funcion npm i express desde la consola de windows para instalar express en nuestro proyecto
Instalamos las dependencias con la funcion npm i ejs desde la consola de windows para instalar el motor de plantilla ejs
Instalamos la funcion npm i ejs body-parser desde la consola de windows el modulo body-parser para que mi servidor de express pueda entender las peticiones post
Instalamos el modulo npm i nodemon -D como dependencia de desarrollo para mantener actualizado el servidor ante cualquier cambio en la codificacion

Crear una estructura MVC creando los siguientes folders/archivos dentro del proyecto:
- Folder routes que llevara todas las URL's que el proyecto va a manejar
- Folder views contendra todas las vistas HTML o motores de plantillas (handlebars, pug, ejs)
- Folder public para contener todo el codigo del Front-end (carpetas de css, archivos de JS, imagenes, fuentes y todo lo que enviamos al navegador)
- Folder controlers para mantener las funciones que procesan las respuestas de las peticiones hechas al navegador.
- File app.js que sera el archivo principal que contendra el codigo principal

En el archivo package.json agregamos en Scripts el siguiente parametro:
"start": "node app.js", para hacer una funcion de arranque
"dev": "nodemon app.js", para mantener actualizado el servidor

Agregar codigo en archivo app.js

Crear archivo index.js dento de la carpeta routes
Agregar codigo en archivo index.js y app.js

Crear archivo index.ejs dentro de la carpeta views
Agregarle un formato html y codificacion

Crear archivo products.ejs dentro de la carpeta views
Agregarle un formato html y codificacion

Crear una carpeta partials dentro de la carpeta views para guardar pedazos de codigos que podemos reutilizar
Crear un archivo head.ejs dentro de la carpeta partials y vamos a cortar el codigo de products.ejs de arriba hasta el body y lo pegamos en el archivp hear.ejs
Crear un archivo footer.ejs dentro de la carpeta partials y vamos a cortar el codigo de products.ejs de abajo hasta el body y lo pegamos en el archivo footer.ejs

Crear un archivo index.js dentro de la carpeta de controlers y vamos a cortar el codigo de index.js de la carpeta de routes en router.get a partir de (req, res, next) hasta la ultima llave de cierre } de ese modulo y pegarlo en el archivo nuevo agregandole al principio una constante.
Repetir el paso anterior para los demas modulos de router.get  y router.post  asi como tambien copiar y pegar el boque de const items
