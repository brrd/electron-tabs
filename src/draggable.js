import dragula from "dragula";
import "./index.js";
import styles from "dragula/dist/dragula.css";

window.dragula = dragula;

// Inject styles
(function () {
  let styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.getElementsByTagName("head")[0].appendChild(styleTag);
})();
