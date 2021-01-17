import { updateAlbumList } from "./albumListView";

export function addAlbum(title, artist) {
  const albums = getAlbumsFromLocalStorage();
  const newAlbum = {
    title,
    artist,
  };
  albums.push(newAlbum);
  setAlbumsToLocalStorage(albums);
  updateAlbumList();
}

export function setAlbumsToLocalStorage(albums) {
  localStorage.setItem("albums", JSON.stringify(albums));
}

export function getAlbumsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("albums")) || [];
}
