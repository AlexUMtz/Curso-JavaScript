export function PostCard(props) {
  let { date, id, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "app/assets/favicon.png";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;

    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
    <article class="post-card">
        <img src="${urlPoster}">
        <h2>${title.rendered}</h2>
        <p>
        <time datetime="${dateFormat}">${dateFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
        </p>
    </article> 
    `;
}
