/**
 * Element references
 */
const panels = document.querySelectorAll(".panel");
const accordionCtr = document.querySelector(".accordion-ctr");
const callout = document.querySelector(".callout");
const progressBar = document.querySelector(".progress-bar");

/**
 * Callout
 */
const calloutDismissBtn = callout.querySelector("button");
calloutDismissBtn.addEventListener("click", () => {
  callout.classList.add("hide");
  console.log("callout");
});

/**
 * Guide
 */
function toggleGuide() {
  accordionCtr.classList.toggle("active");
  document.querySelector(".toggle-guide").classList.toggle("active");
}

/**
 * Accordion
 */
let activePanel = null;

function togglePanel(p) {
  activePanel = p;

  panels.forEach(panel => {
    panel.classList.remove("active");
    panel.querySelector(".content").classList.remove("active");
  });

  panels[p - 1].classList.add("active");
  panels[p - 1].querySelector(".content").classList.add("active");
}
