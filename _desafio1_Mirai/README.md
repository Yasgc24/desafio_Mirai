# APLICACION WEB

***
Este proyecto contiene el desarrollo de una aplicación sencilla, implementando funciones como registro, inicio de sesión, y permite crear, modificar y eliminar tareas a los usuarios registrados. Se desarrollo mediante la implementación de los stacks MEVN(MongoDB, Express.js, Vuejs, Node.js). 
***

Para llevar a cabo el desarrollo del proyecto se llevaron a cabo las siguientes fases:

* Configurar una base de datos en MongoDB.
* Crear una API con Node.js y Express.js para conectar la base de datos y permitir registrar y autenticar los usuarios existentes y les permita crear, modificar o eliminar tareas. También se hizo uso de la librería **bycrypt** para encriptar contraseñas y se generaron tokens de autenticación mediante **jsonwebtoken**.
* Crear una interfaz de usuario con Vuejs para el registro e inicio de sesión de usuarios y la creación de tareas. Se utilizó la biblioteca **axios** para hacer las solicitudes HTTP al servidor web y **vue-router** para manejar la navegación entre las diferentes páginas y crear rutas protegidas que solo estén disponibles para los usuarios autenticados mediante el token almacenado.


Para la ejecución de estre programa instala Node.js y configura una base de datos MongoDB. Luego clona este repositorio con el siguiente comando en la terminal:

````
git clone https://github.com/Yasgc24/pruebaApp.git
````

Ejecuta los siguientes comandos para navegar entre las carpetas de el proyecto y finalmente instalar las dependencias necesarias dentro de la carpeta **backend**:

````
cd pruebaApp
cd appProject
cd backend
npm install
````
En otra terminal, ejecuta el mismo comando para instalar las dependencias necesarias dentro de la carpeta **frontend**:

````
npm install
````

Ahora desde la carpeta **backend** ejecuta el comando:

````
node bin/www
````

Al mismo tiempo, en otra terminal ejecuta dentro de la carpeta **frontend**

````
npm run serve
````
Finalmente, abres el navegador, introduces lo siguiente:

````
http://localhost:8080/
````

Y con esto podrás probar el funcionamiento de la aplicación.
