import { mainContent } from "../index.js";

const sidebarList = document.querySelector("[data-sidebar-list]");

const rederRoute = () => {
  const hash = window.location.hash;

  mainContent(hash);
};

sidebarList.addEventListener("click", (event) => {
  const clickedLink = event.target.closest("a");

  if (!clickedLink || !sidebarList.contains(clickedLink)) return;
});

window.addEventListener("hashchange", rederRoute);

rederRoute();
