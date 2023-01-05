const d = document,
  n = navigator;

export default function getGeolocation(id) {
  //Declaramos variables, el div y las opciones
  const $id = d.getElementById(id),
    options = {
      //Dispositivo hace la mejor lectura posible
      enableHighAccuracy: true,
      //Tiempo que espera para tomar la lectura
      timeout: 5000,
      //Para no considerar la lectura anterior
      maximumAge: 0,
    };

  //Función en caso de que se haya realizado con éxito
  const success = (position) => {
    //Guardamos el objetio position en coords
    let coords = position.coords;
    console.log(position);

    //Insertamos el contenido HTML
    $id.innerHTML = `<p>Tiu posición actual es</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>`;
    //API de Google Maps
  };

  //Función en caso de que se haya realizado con error
  const error = (err) => {
    console.log(err);
  };

  //Funcion getCurrentPosition par obtener la posición
  //Tiene 3 parametros
  // 1. Función si se localiza con exito
  // 2. Función si se localiza con error
  // 3. Opciones de la función
  n.geolocation.getCurrentPosition(success, error, options);
  //Otro metodo aparte de getCurrentPosition
  //es WatchPosition, se usa para detectar cambios en ubicación
}
