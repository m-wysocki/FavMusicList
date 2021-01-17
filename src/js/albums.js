import { updateAlbumList } from "./albumListView";

export function addAlbum(id, title, artist) {
  const albums = getAlbumsFromLocalStorage();
  const newAlbum = {
    id,
    title,
    artist,
  };
  albums.push(newAlbum);
  updateAlbums(albums);
}

export function removeAlbum(id) {
  let albums = getAlbumsFromLocalStorage();
  albums = albums.filter((album) => album.id !== id);
  updateAlbums(albums);
}

function updateAlbums(albums) {
  setAlbumsToLocalStorage(albums);
  updateAlbumList();
}

export function generateNewAlbumID() {
  const albums = getAlbumsFromLocalStorage();
  if (albums.length < 1) return 1;

  return albums[albums.length - 1].id + 1;
}

function setAlbumsToLocalStorage(albums) {
  localStorage.setItem("albums", JSON.stringify(albums));
}

export function getAlbumsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("albums")) || [];
}
