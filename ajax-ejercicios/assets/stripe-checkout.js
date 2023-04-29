import STRIPE_KEYS from "./stripe-keys.js";

//console.log(STRIPE_KEYS);

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment(),
  //fetchOptions establce la cabecera para las peticones
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let products, prices;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

/*Se utiliza Promise.all porque se realizarán varias peticios y es neceserio
garantizar que todas se cumplan o ninguna de ellas*/
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    //console.log(json);
    /*Al convertir en formato JSON las responses, obtenemos un array compuesto
    por dos elementos, el primero corresponde a los productos y el segundo
    a los precios*/
    products = json[0].data;
    prices = json[1].data;
    //console.log(products, prices);

    //Por cada elemento de precio...
    prices.forEach((el) => {
      /*Almacenamos en la variable el producto que con el id que esta
      almacenado en el atributo product del elemento de precio
      similar a un INNER JOIN*/
      let productData = products.filter((product) => product.id === el.product);
      //console.log(productData);

      //A la figure le establecemos el data-attribute data-price con el id del precio
      $template.querySelector(".taco").setAttribute("data-price", el.id);
      /*Establecemos el valor de src de la imagen de acuerdo al taco, el cual se 
      obtiene de la variable productData el cual es un array por lo que pone
      el elemento cero, y su aritbuto images en la posicion[0]*/
      $template.querySelector("img").src = productData[0].images[0];
      //Obtenemos el valor de alt
      $template.querySelector("img").alt = productData[0].name;
      /*Establecemos el nombre y el precio*/
      $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
    $tacos.innerHTML = `<p>Erro ${err.status}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.matches(".taco *")) {
    // alert("A comprar");
    let price = e.target.parentElement.getAttribute("data-price");
    console.log(price);

    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: "payment",
        successUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $tacos.insertAdjacentElement("afterend", res.error.message);
        }
      });
  }
});

/*
//Fetch para acceder a los productos
fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

//Fetch para acceder a los precios
fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });
*/
