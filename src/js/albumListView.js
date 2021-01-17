import { getAlbumsFromLocalStorage } from "./albums";

function makeHTMLListFromAlbums(albums) {
  let albumList = "";
  if (albums.length < 1) {
    albumList =
      '<li class="list-group-item" data-album-id="${album.id}"><i>We\'re sorry. No albums here</i> 😥</li>';
  } else {
    albums.forEach((album) => {
      albumList += `
        <li class="album list-group-item d-flex align-items-center justify-content-between flex-column flex-sm-row" 
        data-album-id="${album.id}">
          <span class="align-self-start">${album.id} -> <i>${
        album.title
      }</i> – ${album.artist}</span>
          <div class="mt-2 mt-sm-0 align-self-end">
              <i class="album__icon album__icon--remove far fa-trash-alt" title="remove album"></i>
              <i 
              class="album__icon album__icon--toggle-best far fa-heart ml-2  ${
                album.bestOfTheBest && "album__icon--active"
              }" 
              title="${
                album.bestOfTheBest
                  ? "remove from best of the best"
                  : "set as best of the best"
              }"></i>
          </div>
        </li>`;
    });
  }
  return albumList;
}

export function updateAlbumList() {
  const albums = getAlbumsFromLocalStorage();

  const albumList = document.getElementsByClassName("album-list--normal")[0];
  const bestAlbumList = document.getElementsByClassName("album-list--best")[0];

  albumList.innerHTML = makeHTMLListFromAlbums(
    albums.filter((album) => album.bestOfTheBest !== true)
  );

  bestAlbumList.innerHTML = makeHTMLListFromAlbums(
    albums.filter((album) => album.bestOfTheBest === true)
  );
}
