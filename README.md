# Parcial-2
Santiago Prieto Álvarez - 202013173 - Sección 2

# Parcial en clase
Para ejecutarlo abra el directrorio del parcial para que en la consola haga npm install y luego npm start para ejecutarlo, y solo hay una ventana que muestra todo lo que se realizó.
En esta parte no se logró mucho, decidí solo poner los componentes estáticos con React-Bootstrap como se puede ver en el release de clase, los hice en orden como aparecían en el enunciado y quedaron muy simples.

# Parcial en casa
Para ejecutarlo: 
1. Descargue el release, y abra el directorio en la consola en que desea ejecutarlo, e instale las dependencias con npm install.
2. Clone el back, porque el parcial se conecta a las direcciones locales, y en el main.ts, la línea que tiene la constante app debe quedar así: "const app = await NestFactory.create(AppModule, { cors: true });", para evitar problemas con el CORS.
3. Instale las dependencias necesarias con npm install del back y luego ejecútelo con npm start.
4. Ejecute el parcial (front) con npm start. Este corre al mismo tiempo que el back, pero primero debió haber ejecutado el back.
5. En este punto, el front debería haberse abierto en la página del login.
6. En el login ponga los datos de ejemplo que aparecen en el readme del back, es decir estos, {"email": "parcial2@hotmail.com","password": "123456"}, para lograr entrar al home y luego dele clic a una de las tarjetas para ver su detalle.
7. Para ver la internacionalización, cambie el idioma del navegador, y automáticamente el idioma cambiará en el front, los idiomas soportados son inglés y español. Las alertas del login también están internacionalizadas, y para verlas deje ambos campos vacíos y luego pruebe con un campo ilegal, y estas solo se muestran cuando se le da al botón de iniciar sesión. También hay una alerta para indicar que el inicio de sesión fue correcto.

Respecto a las decisiones tomadas se usa React-Bootstrap por familiaridad en vez de bootstrap, la navegación se hace con el router de react debido a lo aprendido en los tutoriales, se separan los componentes de detalle en uno para el administrador y el otro para los roles restantes, para poder renderizarlos condicionalmente en el componente home, este componente tiene las cartas con la información básica de los libros.

Para desarrollar todo completamente, inicié con las rutas utilizando el react router dom en el app.js, luego hice el login, donde lo primero fue construir todos los elementos gráficos ordenándolos adecuadamente y usando los elementos de react-bootstrap tales como el container, el row y columns para dividir la pantalla, el image para la imagen, los h2 para los textos, y el uso de las herramientas de formulario para el login con el botón.

A continuación se crean los estados para el manejo de la contraseña y el usuario mediante una función (handleInChange) para controlar y actulizar los valores obtenidos de las entradas de texto, y la cual se invoca en las etiquetas que obtienen el usuario y la contraseña.

Luego se conectó el front con el back del login, y para esto se utilizó un método que llama al back con la url con la función fetch, el cual hace una petición POST y con esto se envían los datos del formulario, y este se llama desde la etiqueta del botón. El método también sirve para validar los campos y manda una alerta para los casos inválidos requeridos en el enunciado. Finalmente en el boton se llama a otra función de navegación del router para ir a la siguiente parte de la galería de libros con su detalle y llevando la información del rol como un párametro.

A continuación se crea el componente home donde primero se realizó la parte gráfica con las cartas con su información y los títulos del detalle. Lo de las cartas se realizó con un hook de efecto para traer la información básica de los libros, y mediante la función map se crearon todas las cartas. 

Luego se creó la función para buscar el libro con sus detalles el cual se activa con un click en la alguna carta, al tiempo que se despliega el renderizado condicional mediante el cambio de un estado del display. En el renderizado condicional se trae los componentes de detalles que funcionan casi igual, solo que el de Admin está con campos editables de texto, y el otro si con texto normal, los cuales están dentro de una Col y tienen toda la información.

Finalmente apliqué la internacionalización, primero creando los JSON con sus id para cada idioma llamdos en y es. Luego en el index llamé al intlProvider y a estos archivos, los cuales quedaron en una constante y luego utilizar otra constante para obtener el idioma del navegador. A continuación, creé las etiquetas de intlProvider, la cual tiene como parámetros las dos constantes anteriormente creadas. 

Luego en los siguientes componentes en los labels estáticos, se utilizaron o bien las etiquetas de formattedMessage, o mediante una función para los atributos de las etiquetas u otros contextos. Y estas van a tener cargado el texto en el idioma del navegador.