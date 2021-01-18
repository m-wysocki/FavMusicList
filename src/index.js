import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/main.scss";

import { addAlbum, removeAlbum, toggleBestAlbum } from "./js/albums";
import { updateAlbumList } from "./js/albumListView";

window.addEventListener("DOMContentLoaded", (event) => {
  updateAlbumList();

  const addNewAlbumForm = document.getElementById("addNewAlbumForm");
  if (addNewAlbumForm) {
    addNewAlbumForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addAlbum(e.target[0].value, e.target[1].value);
      addNewAlbumForm.reset();
    });
  }

  const albumLists = document.getElementsByClassName("album-list");
  for (let albumList of albumLists) {
    albumList.addEventListener("click", (e) => {
      const clickedElement = e.target;
      const albumID = parseInt(
        clickedElement
          .closest("li[data-album-id]")
          .getAttribute("data-album-id")
      );
      if (clickedElement.classList.contains("album__icon--remove")) {
        removeAlbum(albumID);
      } else if (
        clickedElement.classList.contains("album__icon--toggle-best")
      ) {
        toggleBestAlbum(albumID);
      }
    });
  }
});
