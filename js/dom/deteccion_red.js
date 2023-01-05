const d = document,
  w = window,
  n = navigator; //Tiene propiedad online

export default function networkStatus() {
  const isOnLine = () => {
    //Función que agregara div
    const $div = d.createElement("div"); //Creamos elemento div

    if (n.onLine) {
      //Evalua si navigator.onLine es True
      $div.textContent = "Conexión Restablecida"; //Agregamos contenido a div
      $div.classList.add("online"); //Agregamos clase
      $div.classList.remove("offline"); //Quitamos clase
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div); //Insertamos el div como primer hijo de body

    setTimeout(() => {
      //setTimeout para temporizar el banner
      d.body.removeChild($div);
    }, 2000); //Después de dos segundos removemos el div
  };

  w.addEventListener("online", (e) => isOnLine()); //Evento "online"
  w.addEventListener("offline", (e) => isOnLine()); //Evento "online"
}
