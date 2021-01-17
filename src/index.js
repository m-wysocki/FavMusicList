import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/main.scss";

import { addAlbum } from "./js/albums";
import { updateAlbumList } from "./js/albumListView";

window.addEventListener("DOMContentLoaded", (event) => {
  updateAlbumList();

  const addNewAlbumForm = document.getElementById("addNewAlbumForm");
  if (addNewAlbumForm) {
    addNewAlbumForm.addEventListener("submit", function (e) {
      e.preventDefault();
      addAlbum(e.target[0].value, e.target[1].value);
    });
  }
});
