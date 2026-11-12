// Home page only, loaded in the head: "pagereveal" fires at the first render, before a script at the end of the body has run.
//
// Only the card of the project being opened or left keeps its transition names.
// The other cards then cross-fade with the page instead of each fading on top of the new header.
// Browsers without these events or the Navigation API keep every card named, as before.
function soloCard(otherUrl) {
  const page = otherUrl ? new URL(otherUrl).pathname.split("/").pop() : null;
  document.querySelectorAll(".carousel-link").forEach((link) => {
    link
      .closest(".carousel-container")
      .classList.toggle("solo-off", page !== null && link.getAttribute("href") !== page);
  });
}

window.addEventListener("pageswap", (e) => {
  if (e.viewTransition) soloCard(e.activation?.entry?.url);
});

window.addEventListener("pagereveal", (e) => {
  // also clears what "pageswap" left behind when the page comes back from the back/forward cache
  soloCard(e.viewTransition ? window.navigation?.activation?.from?.url : null);
  e.viewTransition?.finished.finally(() => soloCard(null));
});
