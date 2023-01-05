/*
let texto = "Hola CompuMundo";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
*/

/*
console.log("*****Elementos del Documentos*****");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM </h2>");
*/
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu")); //Más rapido
console.log(document.querySelector("#menu")); //Más lento
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/
/*
console.log(document.documentElement.lang); //es

console.log(document.documentElement.getAttribute("lang")); //es

console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/dom.html

console.log(document.querySelector(".link-dom").getAttribute("href")); //dom.html

document.documentElement.lang = "es";
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel", "noopener");

console.log($linkDOM.hasAttribute("rel"));

//Data Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete";
console.log($linkDOM.dataset.description);





*/
/*
const $linkDOM = document.querySelector(".link-dom");

//Mostrar todos los estilos
console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.backgroundColor); //
console.log($linkDOM.style.color); //

console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

//Variables CSS - Custom Properties CSS

const $html = document.documentElement, //Selecciona el HTML
  $body = document.body; //Selecciona el Body

//Variables declaradas en :root
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowkColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor);
console.log(varYellowkColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowkColor;

$html.style.setProperty("--dark-color", "#000");
//Volvemos a declarar la variable haciendo refrencia al nuevo valor
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//Aplicamos el estilo
$body.style.setPropertyS("background-color", varDarkColor);
*/
/*
const $card = document.querySelector(".card");

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia");





*/
/*
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Objetc Model</i></b>) es un API para 
  documentos HTML y XML.
</p>
<p>
  Este provee una representación estructural del documento, permitiendo modificar su contenido y
  presentación visual mediante código JS.
</p>
<p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerText = text; //Desarrollada para Internet Explorer
$whatIsDOM.textContent = text; //Agrega en formato de texto
$whatIsDOM.innerHTML = text; //Agrega respetando código HTML, remplaza contenido del elemento
$whatIsDOM.outerHTML = text; //Remplaza el elemento del DOM por el contenido



*/
/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));



*/

/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//Agregar elementos al DOM por medio de Nodos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//Agregar elementos al DOM con innerHTML
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = ""; //Se debe inicializar como vacio el contenido

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Añadir elementos al DOM por medio de fragmentos

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);



*/

/*

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //Apunta al contenido
  $fragment = document.createDocumentFragment(),
  $cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

$cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  //La etiqueta template solo esta una vez por lo que se necesita clonar
  //para lograr tener otra tarjeta
  //EL true indica que copia toda la estructra y no solo la etiqueta
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);



*/

/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//Remplazar un elemento
$cards.replaceChild($newCard, $cards.children[2]);

//Inserta la carta antes de la primera tarjeta
$cards.insertBefore($newCard, $cards.firstElementChild);

//Eliminar la ultima carta
$cards.removeChild($cards.lastElementChild);

//Clonar un elemento
document.body.appendChild($cloneCards);





*/

/*
.inserAdjacent...
  .insertAdjacentElement(position, el) -> .appendChild
  .insertAdjacentHTML(position, html) -> .innerHTML
  .insertAdjacentText(position, text) -> .textContent
  
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
 */
/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

//Contenido HTML
let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

//Añadimos la clase .card
$newCard.classList.add("card");

//Insertamos contenido HTML
$newCard.insertAdjacentHTML("beforeend", $contentCard);

//Insertamos contenido al figcaption
$newCard.querySelector("figcaption").insertAdjacentText("beforeend", "Any");

//Insertar elemento
$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard); //Primer hijo
$cards.before($newCard) //Hermano anterior
$cards.append($newCard) //Ultimo hijo
$cards.after($newCard) //Hermano posterior





*/
/*
function holaMundo() {
  alert("Hola");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

//Evento semantico
const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo; //No lleva parentesis

$eventoSemantico.onclick = function (e) {
  alert("Manejador de eventos semántico");
  console.log(e);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos multiples");
  console.log(e); //Evento
  console.log(e.type); //Tipo de evento
  console.log(e.target); //Objeto que lo origina
});

$eventoMultiple.addEventListener("click", () => saludar("Alejandro"));

const removerDobleClick = (e) => {
  alert(`Removimiendo el evento de tipo ${event.type}`);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);






*/
/*
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo originó ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy Alejandro Uriel");
    e.preventDefault();
  }
});





*/

/*
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***** Evento Resize *****");
  console.log(window.innerWidth); //Ancho del Viewport
  console.log(window.innerHeight); //Largo del Viewport
  console.log(window.outerWidth); //Ancho Navegador
  console.log(window.outerHeight); //Alto Navgador
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("***** Evento Scroll *****");
  console.log(window.scrollX); //Desplazamiento X
  console.log(window.scrollY); //Desplazamiento Y
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("***** Evento Load *****");
  //Coordenadas del Navegador
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("***** Evento DOMContentLoaded *****");
  //Coordenadas del Navegador
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});





*/

//window.alert("Alerta");
//window.confirm("Confirmation");
//window.prompt("Aviso");

/*
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com"); //Abre ventana
});

$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});



*/

/*
console.log("*** Objeto URL (Location) ***");
console.log(location);
console.log(location.origin); //http:127.0.0.1:5500
console.log(location.protocol); // http:
console.log(location.host); // 127.0.0.1:550
console.log(location.hostname); // 127.0.0.1
console.log(location.port); // 5500
console.log(location.href); // http://127.0.0.1:5500/dom.html
console.log(location.hash); //
console.log(location.search); //Parametros de la URL
console.log(location.pathname); // /dom.html
//location.reload();

console.log("*** Objeto History ***");
console.log(history); //Imprime historial
console.log(history.length); //Cantidad de paginas en historial
console.log(history.back(2)); //Regresa X cantidad de paginas
console.log(history.forward(2)); //Avanza X cantidad de paginas
console.log(history.go(3)); //Indica pagina a ir

console.log("*** Objeto Navigation ***");
console.log(navigator);
console.log(navigator.connection); //Inf de la Conexión
console.log(navigator.geolocation); //Inf de Geolocalización
console.log(navigator.mediaDevices); //Dispositivos
console.log(navigator.mimeTypes); //Tipos de formatos soportados
console.log(navigator.onLine); //Si esta en linea o no
console.log(navigator.serviceWorker); //ProgressiveWebApps
console.log(navigator.storage); //Almacenamiento
console.log(navigator.usb); //Dispositivos USB
console.log(navigator.userAgent); //Inf sobre usuario, plataforma, navegador

*/
