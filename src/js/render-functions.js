export const createGalleryItemMarcup = images => {
  return images
    .map(
      image =>
        `<div class="card">
        <a href='${image.largeImageURL}'><img
        src='${image.webformatURL}'
        alt= '${image.tags}'
        width="360"
        height="152"
      /></a>
      <div>
      <ul class="card-list">
        <li>
          Likes
          ${image.likes}
        </li>
        <li>
          Views
          ${image.views}
        </li>
        <li>
          Comments
        ${image.comments}
        </li>
        <li>
          Downloads
        ${image.downloads}
        </li>
      </ul>
      </div>
    </div>`
    )
    .join(' ');
};
