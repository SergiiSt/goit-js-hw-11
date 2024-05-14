export const createGalleryItemMarcup = images => {
  return images
    .map(
      image =>
        `<div class="card">
      <img
        src='${image.previewURL}'
        alt="book"
        width="360"
        height="200"
      />
      <ul class="card-list">
        <ul>
          Likes
          <li>'${image.likes}'</li>
        </ul>
        <ul>
          Views
          <li>'${image.views}'</li>
        </ul>
        <ul>
          Comments
          <li>'${image.comments}'</li>
        </ul>
        <ul>
          Downloads
          <li>'${image.downloads}'</li>
        </ul>
      </ul>
    </div>`
    )
    .join(' ');
};
