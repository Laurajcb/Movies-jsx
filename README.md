# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Challenge - The Movies Database

Situación inicial 📍
Un cliente que posee diversos cines en diferentes ciudades de Buenos Aires (Argentina),
te contrata para crear un primer boceto de su página web en la que sus usuari@s
puedan visualizar todas las películas disponibles para ir a ver.
Objetivos 📋
Utilizando la API The Movies DB, deberás:
● Crear una APP de React con el paquete create-react-app
● Manejar componentes stateless y stateful (FC) poniendo el foco en
○ JSX
○ Estados
○ Event handlers
○ Props / Keys
○ Renderizado condicional
● Realizar peticiones asincrónicas a distintas API
● Lograr la persistencia de información (token, favoritos, etc) en almacenamiento
local
● Utilizar hooks de estado, efecto y otros para manejo de componentes
● Implementar la librería de ruteo React Router Dom
● Implementar una librería de CSS (Bootstrap, Tailwind o similar).
Requerimientos funcionales 🔧
La aplicación de React tendrá:

● Login - Usará el mismo endpoint de Alkemy para obtener el token
● Listado de películas - traerá las películas más recientes en cartelera con toda su
información
● Detalle de película - mostrará la información particular de cada película
mostrada en el listado, aquí se podrá ampliar más en detalle cada película
● Buscador - permitirá buscar películas por una palabra clave y mostrará los
resultados que coincidan
● Favoritos - cada película tendrá la opción de ser agregada a esta sección. Solo
las películas elegidas por el usuario como "Favorita" podrán estar aquí. Se deberá
validar que haya por lo menos una película de categoría "FAMILIA". También que
se puedan quitar / eliminar películas de las sección Favoritos.
● Barra de navegación - Debe existir un indicador de la cantidad de películas en
favoritos. Y en el detalle, se especificará si esa película ya está en Favoritos y
deberá haber un acumulado de Rating de las películas en "Favoritos".

