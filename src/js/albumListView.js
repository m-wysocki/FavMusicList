import { getAlbumsFromLocalStorage } from "./albums";

function makeHTMLListFromAlbums(albums) {
  let albumList = "";
  albums.forEach((album) => {
    albumList += `<li class="album list-group-item d-flex align-items-center justify-content-between" data-album-id="${album.id}">
              <span>${album.id} -> <i>${album.title}</i> – ${album.artist}</span>
              <div>
                  <i class="album__remove far fa-trash-alt"></i>
                  <i class="album__toggle-best far fa-heart ml-2"></i>
              </div>
          </li>`;
  });
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
