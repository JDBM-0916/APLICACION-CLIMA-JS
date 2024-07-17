const apiKey = "77f8f6b80f276d55071e62c979e5eb0b";
const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const difGradosKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  // al clickear el boton de busqueda
  const ciudad = document.getElementById("ciudadEntrada").value; // obtenemos el valor de entrada y lo almacenamos en la variable
  if (ciudad) {
    consultarClima(ciudad);
  }
});

function consultarClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosCiudad(data));
}

function mostrarDatosCiudad(data) {
  const contenedorDatosCLima = document.getElementById("datosClima");
  contenedorDatosCLima.innerHTML = " ";

  const ciudadNombre = data.name;
  const nombrePais = data.sys.country;
  const ciudadTemperatura = data.main.temp;
  const ciudadHumedad = data.main.humidity;
  const icono = data.weather[0].icon;
  const ciudadDescripcion = data.weather[0].description;

  const ciudadNombreInfo = document.createElement("h2"); // aqui creamos un h2 y le ponemos un titulo
  ciudadNombreInfo.textContent = `${ciudadNombre} - ${nombrePais}`;

  const ciudadtemperaturaInfo = document.createElement("p"); // aqui creamos un h2 y le ponemos un titulo
  ciudadtemperaturaInfo.textContent = `la temperatura del dia de hoy es:  ${Math.floor(
    ciudadTemperatura - difGradosKelvin
  )}°C `;

  const iconoclimaInfo = document.createElement("img");
  iconoclimaInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const ciudadHumedadInfo = document.createElement("p"); // aqui creamos un h2 y le ponemos un titulo
  ciudadHumedadInfo.textContent = `Humedad : ${ciudadHumedad}%`;

  const ciudadDescripcionInfo = document.createElement("p"); // aqui creamos un h2 y le ponemos un titulo
  ciudadDescripcionInfo.textContent = `Descripcion meteorologica: ${ciudadDescripcion}`;

  contenedorDatosCLima.appendChild(iconoclimaInfo);
  contenedorDatosCLima.appendChild(ciudadNombreInfo);
  contenedorDatosCLima.appendChild(ciudadtemperaturaInfo);
  contenedorDatosCLima.appendChild(ciudadHumedadInfo);
  contenedorDatosCLima.appendChild(ciudadDescripcionInfo);
}
