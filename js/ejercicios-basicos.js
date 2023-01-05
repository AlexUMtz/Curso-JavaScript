/* 1) Programa una función que cuente el número de caracteres 
de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá 10. */

/*
function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}
*/

const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadea "${cadena}" tiene ${cadena.length} caracteres`);

//contarCaracteres();
//contarCaracteres("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste el texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

//recortarTexto("Hola Mundo", 4);
//recortarTexto();
//recortarTexto("Hola Hola");
//recortarTexto("", 5);

/*3) Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal'].*/

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste el texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

//cadenaAArreglo("lorem ipsum dolor sit amet", " ");
//cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul", ",");
//cadenaAArreglo("Hola");
//cadenaAArreglo("", ",");

/*4) Programa una función que repita un texto X veces, p
e. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste el texto");
  if (veces === undefined)
    return console.warn("No ingresas el número de veces a repetir el texto");
  if (veces === 0) return console.error("El número de veces no puede ser 0");
  if (Math.sign(veces) === -1)
    return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);

  //console.info(texto.repeat(veces));
};

//repetirTexto("Hola Mundo", 3);
//repetirTexto("", 3);
//repetirTexto("Hola Mundo");
//repetirTexto();
//repetirTexto("Hola Mundo", -3);
//repetirTexto("Hola Mundo", 0);

/* 




5) Programa una función que invierta las palabras 
de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH". */

//https://www.delftstack.com/es/howto/javascript/reverse-string-javascript/#:~:text=Para%20invertir%20una%20cadena%2C%20primero,()%20para%20invertir%20una%20cadena.

const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : console.info(cadena.split("").reverse().join(""));

//invertirCadena("Hola Mundo");
//invertirCadena();

/* 




6) Programa una función para contar el número de veces que 
se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");
  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

//textoEnCadena();
//textoEnCadena("", "mundo");
//textoEnCadena("hola mundo adios mundo");
//textoEnCadena("hola mundo adios mundo", "mundo");

/* 




7) Programa una función que valide si una palabra o frase 
dada, es un palíndromo (que se lee igual en un sentido que en 
  otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      )
    : console.info(
        `No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      );
};

//palindromo("Salas");
//palindromo("Hola");

/*




8) Programa una función que elimine cierto patrón de 
caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patrón")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

//eliminarCaracteres();
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

/*
 */

/*




9) Programa una función que obtenga un numero aleatorio entre 
501 y 600.
*/

const aleatorio = () => console.log(Math.round(Math.random() * 100 + 500));
//aleatorio();

/*




10) Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true. */

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Si es capicua, Numero Original ${numero}, Número al reves ${alReves}`
      )
    : console.info(
        `No es capicua, Numero Original ${numero}, Número al reves ${alReves}`
      );
};

//capicua();
//capicua("19");
//capicua({});
//capicua(2000);
//capicua(2002);

/*




11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el 
  producto de todos los números enteros positivos desde 1 
  hasta n), pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);

  // if (numero == 0) {
  //   return 1;
  // }
  // return numero * factorial(numero - 1);
};

// factorial(5);

/*




12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (numero === 1) return console.error("El número no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  // for (let i = 2; i < numero; i++) {
  //   if (numero % i === 0)
  //     return console.info(`El numero ${numero} no es primo`);
  // }

  // return console.info(`El numero ${numero} es primo`);

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El número ${numero} NO es primo`)
    : console.log(`El número ${numero} SI es primo`);
};

/*




13) Programa una función que determine si un número es
par o impar, pe. miFuncion(29) devolverá Impar.
*/

const parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (numero % 2 === 0 || numero === 0)
    return console.info(`El número ${numero} es par`);

  return console.info(`El número ${numero} es impar`);
};

//parImpar(0);
//parImpar(10);
//parImpar(3);

/*




14) Programa una función para convertir grados Celsius 
a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("No ingresaste grados a convertir");

  if (typeof grados !== "number")
    return console.error(`El valor "${grados}" ingresado, NO es un número`);

  if (unidad === undefined)
    return console.warn(`No ingresaste el tipo de grado a convertir`);

  if (typeof unidad !== "string")
    return console.error(
      `El valor "${unidad}" ingresado, NO es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  }
};

// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2, true);
// convertirGrados(2, "Hola");
// convertirGrados(2, "E");
// convertirGrados(0, "C");
// convertirGrados(100, "C");
// convertirGrados(32, "F");
// convertirGrados(100, "F");

/*




15) Programa una función para convertir números de base 
binaria a decimal y viceversa, pe. miFuncion(100,2) 
devolverá 4 base 10.
*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el número a convertir");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");

  if (typeof base !== "number")
    return console.error(`El valor "${base}" ingresado, NO es un número`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir NO es válido");
  }
};

// convertirBinarioDecimal();
// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100, "2");
// convertirBinarioDecimal(100, 2);
// convertirBinarioDecimal(101, 2);
// convertirBinarioDecimal(111001, 2);
// convertirBinarioDecimal(4, 10);
// convertirBinarioDecimal(57, 10);
// convertirBinarioDecimal(63, 11);

/*




16) Programa una función que devuelva el monto final después de aplicar un 
descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");

  if (typeof monto !== "number")
    return console.error(`El valor "${monto}" ingresado. NO es un número`);

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");

  if (typeof descuento !== "number")
    return console.error(`El valor "${descuento}" ingresado, NO es un número`);

  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");

  return console.info(
    `$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

// aplicarDescuento();
// aplicarDescuento("200");
// aplicarDescuento(0);
// aplicarDescuento(-1000);
// aplicarDescuento(1000, "20");
// aplicarDescuento(1000, -20);
// aplicarDescuento(1000);
// aplicarDescuento(1000, 25);

/*




17) Programa una función que dada una fecha válida determine cuantos años han 
pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).
*/

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste una fecha");

  if (!(fecha instanceof Date))
    return console.warn("El valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    //getTime() devuelve en milisegundos
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(1984, 4, 23));
// calcularAnios(new Date(1884, 4, 23));
// calcularAnios(new Date(2084, 4, 23));

/*




18) Programa una función que dada una cadena de texto cuente el número de 
vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texo");

  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (const letra of cadena) {
    if (/[aeiouáéíóíü]/.test(letra)) vocales++;

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

// contarLetras();
// contarLetras(3);
// contarLetras("Hola Mundo");
// contarLetras("Ñoño");

/*




19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste una cadena de texo");

  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );

  let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}" es un nombre válido`)
    : console.info(`${nombre} NO es un nombre válido`);
};

// validarNombre();
// validarNombre(3);
// validarNombre("Alejandro");
// validarNombre("Alejandro Uriel");
// validarNombre("Alejandro23w");

/*




20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste una cadena de texo");

  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, NO es una cadena de texto`
    );

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`"${email}" es un email válido`)
    : console.info(`${email} NO es un email válido`);
};

// validarEmail();
// validarEmail(34);
// validarEmail("jon,mir,cha@gmail.com");
// validarEmail("alexxldalex@yahoo.com.mx");

/*




21) Programa una función que dado un array numérico devuelve otro array 
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
devolverá [1, 16, 25].
*/

const devolverCuadrado = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado NO es un número`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `Arreglo original: ${arr} \nArreglo al cuadrado: ${newArr}`
  );
};

// devolverCuadrado();
// devolverCuadrado(true);
// devolverCuadrado({});
// devolverCuadrado([]);
// devolverCuadrado([1, "3", 4]);
// devolverCuadrado([1, 4, {}]);
// devolverCuadrado([1, 4, 8]);

/*




22) Programa una función que dado un array devuelva el número 
mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado NO es un número`);
  }

  return console.info(
    `Arreglo original: ${arr}\nValor mayor: ${Math.max(
      ...arr
    )}\nValor menor: ${Math.min(...arr)}`
  );
};

// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax([]);
// arrayMinMax([1, "3", 4]);
// arrayMinMax([1, 2, 3, 4]);

/*




23) Programa una función que dado un array de números 
devuelva un objeto con 2 arreglos en el primero almacena 
los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado NO es un número`);
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

// separarParesImpares();
// separarParesImpares("hola");
// separarParesImpares([]);
// separarParesImpares([1, 2, "3"]);
// separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*
 */

/*




24) Programa una función que dado un arreglo de números devuelva 
un objeto con dos arreglos, el primero tendrá los numeros ordenados 
en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordernarNumeros = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado NO es un número`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    des: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// ordernarNumeros();
// ordernarNumeros("hola");
// ordernarNumeros([]);
// ordernarNumeros([1, 2, "32", 2, 3]);
// ordernarNumeros([7, 5, 7, 8, 6]);

/*




25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  // return console.info({
  //   original: arr,
  //   sinDuplicados: arr.filter(
  //     (value, index, self) => self.indexOf(value) === index
  //   ),
  // });

  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados([1]);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/*




26) Programa una función que dado un arreglo de números obtenga el 
promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado NO es un número`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

// promedio();
// promedio({});
// promedio([]);
// promedio([1, 2, "3"]);
// promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*




27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, 
Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un número`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un arreglo`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, NO es una cadena de texto`
        );
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IDMB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLongitudCadena("Título", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de Estreno "${estreno}" no es válido, debe ser un número de 4 digitos`
        );
      }
    }
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (const genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero))
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            "La calificación tiene que estar en un rango entre 0 y 10"
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(
        "-"
      )}"\nGéneros: "${this.generos.join(",")}"\nCalificación: "${
        this.calificacion
      }"\nIMDB Id: "${this.id}"`
    );
  }
}

// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "Título de la Peli",
//   director: "Director de la Peli",
//   estreno: 2022,
//   pais: ["México", "Estados Unidos"],
//   generos: ["Comedy", "Sport"],
//   calificacion: 7.789,
// });

// peli.fichaTecnica();

const misPelis = [
  {
    id: "tt1234567",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt1231234",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt4564567",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
