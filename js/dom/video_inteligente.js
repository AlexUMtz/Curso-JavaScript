const d = document,
  w = window;

export default function smartVideo() {
  const $video = d.querySelectorAll("video[data-smart-video]");

  //Callback para el IntersectionObserver
  const cb = (entries) => {
    //Por cada entrada haz lo siguiente...
    entries.forEach((entry) => {
      //Si la entrada ha interceptado...
      if (entry.isIntersecting) {
        entry.target.play(); //La entrada es el video, lo reproducimos
      } else {
        entry.target.pause(); //Pausamos video
      }

      /*El evento visibilityChagen nos ayuda a detectar
      si estamos dentro de la pestraña, evaluando el 
      visibilityState (API) */
      w.addEventListener("visibilityChange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  //Por cada elemento de $videos ejecuta el metodo observe
  $video.forEach((el) => observer.observe(el));
}
