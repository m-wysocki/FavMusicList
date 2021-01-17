import { updateAlbumList } from "./albumListView";

export function addAlbum(title, artist, bestOfTheBest = false) {
  const albums = getAlbumsFromLocalStorage();
  const newAlbum = {
    id: generateNewAlbumID(),
    title,
    artist,
    bestOfTheBest,
  };
  albums.push(newAlbum);
  updateAlbums(albums);
}

export function removeAlbum(id) {
  let albums = getAlbumsFromLocalStorage();
  albums = albums.filter((album) => album.id !== id);
  updateAlbums(albums);
}

export function toggleBestAlbum(id) {
  const albums = getAlbumsFromLocalStorage();
  albums.map((album) => {
    if (album.id === id) {
      album.bestOfTheBest = !album.bestOfTheBest;
    }
  });
  updateAlbums(albums);
}

function updateAlbums(albums) {
  setAlbumsToLocalStorage(albums);
  updateAlbumList();
}

function generateNewAlbumID() {
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
