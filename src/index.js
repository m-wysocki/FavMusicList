import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/main.scss";

import { addAlbum, generateNewAlbumID, removeAlbum } from "./js/albums";
import { updateAlbumList } from "./js/albumListView";

window.addEventListener("DOMContentLoaded", (event) => {
  updateAlbumList();

  const addNewAlbumForm = document.getElementById("addNewAlbumForm");
  if (addNewAlbumForm) {
    addNewAlbumForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const albumID = generateNewAlbumID();
      addAlbum(albumID, e.target[0].value, e.target[1].value);
    });
  }

  const albumList = document.getElementById("albumList");
  albumList.addEventListener("click", (e) => {
    const albumID = parseInt(
      e.target.closest("li[data-album-id]").getAttribute("data-album-id")
    );
    removeAlbum(albumID);
  });
});
