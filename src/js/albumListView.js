import { getAlbumsFromLocalStorage } from "./albums";

function makeHTMLListFromAlbums(albums) {
  let list = "";
  albums.forEach((album) => {
    list += `<li class="list-group-item d-flex align-items-center justify-content-between" data-album-id="${album.id}">
              <span>${album.id} -> <i>${album.title}</i> – ${album.artist}</span>
              <div>
                  <i class="far fa-trash-alt"></i>
                  <i class="far fa-heart ml-2"></i>
              </div>
          </li>`;
  });
  return list;
}

export function updateAlbumList() {
  const albums = getAlbumsFromLocalStorage();
  const albumList = document.getElementById("albumList");
  albumList.innerHTML = makeHTMLListFromAlbums(albums);
}
