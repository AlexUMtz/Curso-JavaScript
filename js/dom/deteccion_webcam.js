const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  //console.log(n.mediaDevices.getUserMedia);

  //El objeto mediaDevices tiene la función getUserMedia
  //Se valida si tiene ese objeto el navegador
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      //Se pasa como parametro un objeto indicado las propiedades
      .getUserMedia({ video: true, audio: false })
      //La función .getUserMedia() es una promesa
      //por lo que permite usar then y catch
      .then((stream) => {
        console.log(stream);
        //La etiqueta video tiene una propiedad srcObjetc
        //que es los el origen de los datos
        $video.srcObject = stream;
        //Para que no solo tome foto se usa la sig linea
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>!Sudeció el siguiente error!: <mark>${err}</mark></p>`
        );
        console.log(err);
      });
  }
}
