(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    //Creamos un fragmento para no pegar tanto al DOM
    $fragment = document.createDocumentFragment();

  // console.log(xhr);

  //***** PASOS PARA UNA PETICION AJAX POR XMLHTTPRequest */
  /*El evento readyStateChange detecta todos los demas eventos
    del xhr y se activa cuando hay un cambio en el mismo */
  xhr.addEventListener("readystatechange", (e) => {
    //Validamos que el ReadyState sea Complete o igual a 4
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Exito");

      //La respuesta de la peticion es el método ResponseText
      //console.log(xhr.responseText); //formato JSON

      //Parseamos de JSON a objeto JavaScript
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      //Por cada elemento del arreglo creamos un elemento
      //y lo agregamos al $fragement
      json.forEach((el) => {
        const $li = document.createElement("li");

        //Entramos a las propieades de cada elemento del objeto
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      //Agregamos el fragmento a la lista final
      $xhr.appendChild($fragment);
    } else {
      console.log("Error");

      //Creamos un mensaje de status en caso de que no tenga
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    console.log(xhr);
  });

  /*El método open de XMLHTTPRequest tiene dos parametros:
    - El método HTTP
    - El recurso, URL o EndPoint */
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //Por ultimo enviamos la petición
  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  /*
  Fetch recibe como parametro la URL o el recurso
  Fetch trabaja con promesas por lo que se usa
  -Then
  -Catch
  -Finally 
  */
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      /*Se devuelve un objeto Response
      console.log(res);
      
      La informacioón viene en ReadebleStream por cual
      se debe pasara un formato legible por medio de:
      -.json() ->Para formatos JSON
      -.text() ->Para HTML y XMLDocument
      
      Retornamos el json en un array de objetos
      
        En el return haciendo uso de un operador ternario
        validamos si el parametro ok es igual a true, es decir,
        si se realizo correctamente la peitción de lo contario 
        llamamos al método reject del objeto Promise
      */
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //Este then recibe el json en un array de objetos
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //Arrojamos mensaje de error
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
  // .finally(() =>
  //   console.log(
  //     "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
  //   )
  // );
})();

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  //Declaramos la funcion como asincrona
  async function getData() {
    //Iniciamos try-catch para manejo de errores
    try {
      /*
      El uso de await sustituye al then para el manejo de promeas por lo que
      esperara a resolver el fetch antes de pase al res.json()
      */
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      console.log(res, json);

      /*
      En caso de que la petición tenga error, lanzamos el error
      */
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  }

  //Llamamos a la función
  getData();
})();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  //Llmamos al metdo get() de axios
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      /*
       Para axios ya no es necesario parsear el json, ya que
       los datos viene en el parámetro data
       */
      console.log(res);

      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Error: ", err);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error: ${err.status} ${message}`;
    })
    .finally(() => {
      // console.log("Finally de axios");
    });
})();

(() => {
  console.log("AXIOS ASYNC");
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error: ${err.status} ${message}`;
    }
  }

  getData();
})();
