# toolbox-pruebatecnica

Este repositorio contiene una aplicación web compuesta por una API construida con Express y Node.js en la carpeta "API" y un cliente web desarrollado en React en la carpeta "FE". A continuación, se detalla la estructura y los scripts disponibles en cada carpeta:

## Carpeta "API"
La carpeta "API" contiene la implementación de la API construida con Express y Node.js.

### Estructura de Archivos
- package.json: Archivo de configuración de npm que contiene las dependencias y los scripts relacionados con la API.
- index.js: Archivo principal de la API que configura y ejecuta el servidor.

### Scripts disponibles
- npm start: Inicia la aplicación de la API.
- npm test: Ejecuta las pruebas unitarias de la API.

## Carpeta "FE"
La carpeta "FE" contiene el cliente web desarrollado en React.

### Estructura de Archivos
- package.json: Archivo de configuración de npm que contiene las dependencias y los scripts relacionados con el cliente web.
- src/: Carpeta que contiene el código fuente del cliente web, incluyendo los componentes, las páginas y los estilos.
- public/: Carpeta que contiene los archivos públicos estáticos del cliente web, como el archivo HTML principal y los recursos multimedia.
- dist/: Carpeta generada después de ejecutar el comando npm run build, que contiene la versión de producción optimizada del cliente web.

## Scripts disponibles
- npm start: Inicia la aplicación del cliente web en modo de desarrollo.
- npm run build: Genera la versión de producción optimizada del cliente web en la carpeta "build".

## Instrucciones de Ejecución
Para ejecutar tanto la API como el cliente web, se deben seguir los siguientes pasos:

1) Acceder a la carpeta "API" y ejecutar el comando **npm install** para instalar las dependencias de la API.
2) Ejecutar el comando **npm start** para iniciar la API.
3) Acceder a la carpeta "FE" y ejecutar el comando **npm install** para instalar las dependencias del cliente web.
4) Ejecutar el comando **npm start** para iniciar el cliente web en modo de desarrollo.
5) Una vez completados estos pasos, la API estará disponible en **http://localhost:3000** y el cliente web estará disponible en **http://localhost:3001**.

