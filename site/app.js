const projects = [
  {
    title: "CI/CD Pipeline for Python APIs",
    type: "DEVELOPER TOOLS / 2020",
    description:
      "A Flask API and React frontend, packaged with Docker and deployed to OpenShift. GitHub Actions handles continuous integration, while a Node.js CLI automates pipeline setup for one-command deployment. Built with a four-person Agile team and stakeholders from State Street.",
    tags: ["Flask", "React", "Docker", "OpenShift", "GitHub Actions"],
    url: "https://github.com/BU-CLOUD-F20/Building_CI_CD_for_API",
  },
  {
    title: "Sapflow Analytics",
    type: "DATA & VISUALIZATION / 2020",
    description:
      "A web platform built for the Hutyra Research Lab at Boston University to manage and visualize environmental sensor data in real time. Node.js, Express, and MongoDB provide authenticated data access; Chart.js and Socket.io power live visualizations.",
    tags: ["Node.js", "Express", "MongoDB", "Chart.js", "Socket.io"],
    url: null,
  },
  {
    title: "Terrier Exchange",
    type: "MOBILE / 2019–2020",
    description:
      "An Android marketplace for Boston University students to buy, rent, and sell textbooks. Led a team of five as technical lead, built the app in Java, and integrated Firebase authentication, database, and storage.",
    tags: ["Android", "Java", "Firebase"],
    url: "https://github.com/nicolekwon/TerrierExchange",
  },
  {
    title: "Lobby",
    type: "COMMUNITY / PROJECT ARCHIVE",
    description:
      "A platform for finding teammates for educational events, gaming tournaments, and hackathons, whether virtual or in person.",
    tags: ["React", "Firebase", "HTML", "CSS"],
    url: null,
  },
  {
    title: "Sentithink",
    type: "NLP / PROJECT ARCHIVE",
    description:
      "A sentiment analysis web application that uses natural language processing to generate a sentiment heat map for a group of people.",
    tags: ["C#", "Python", "MySQL", "JavaScript"],
    url: "https://github.com/JWPM77/Sentithink",
  },
  {
    title: "Burger Builder",
    type: "WEB APPLICATION / 2020",
    description:
      "An interactive web app for choosing ingredients, building burgers in real time, and submitting orders. Implemented with React, Redux, and Firebase.",
    tags: ["React", "Redux", "Firebase"],
    url: "https://github.com/yanchen01/burger-builder",
  },
  {
    title: "Yelp Camp",
    type: "WEB APPLICATION / PROJECT ARCHIVE",
    description:
      "A campground review forum where users can publish reviews and interact with campground posts.",
    tags: ["Node.js", "Express", "MongoDB"],
    url: null,
  },
];
const photos = [
  {
    src: "city.jpg",
    title: "Between avenues",
    category: "city",
    note: "URBAN / SAMPLE FRAME",
    alt: "A rain-darkened New York avenue framed by tall buildings",
  },
  {
    src: "architecture.jpg",
    title: "A rhythm of windows",
    category: "city",
    note: "ARCHITECTURE / SAMPLE FRAME",
    alt: "Dense urban architecture and repeating windows",
  },
  {
    src: "sea.jpg",
    title: "Somewhere, nowhere",
    category: "nature",
    note: "COAST / SAMPLE FRAME",
    alt: "Ocean waves rolling toward the shore",
  },
  {
    src: "mountain.jpg",
    title: "Still, for a moment",
    category: "nature",
    note: "LANDSCAPE / SAMPLE FRAME",
    alt: "Dramatic mountain peaks beneath clouds",
  },
  {
    src: "night.jpg",
    title: "When the world gets quiet",
    category: "nature",
    note: "NIGHT / SAMPLE FRAME",
    alt: "A quiet urban street at night",
  },
];
let filter = "all",
  layout = "journal",
  film = "neutral",
  photoIndex = 0;
const gallery = document.querySelector("#gallery");
const projectDialog = document.querySelector("#project-dialog"),
  lightbox = document.querySelector("#lightbox");
let activeDialogTrigger = null;
const filteredIndices = () =>
  photos
    .map((p, i) => i)
    .filter((i) => filter === "all" || photos[i].category === filter);
function renderGallery() {
  const indices = filteredIndices();
  gallery.className = "gallery " + (layout === "sheet" ? "sheet" : "");
  gallery.innerHTML = indices
    .map((i) => {
      const p = photos[i];
      return `<figure class="photo-card"><button data-photo="${i}" aria-label="View ${p.title}" aria-haspopup="dialog"><img src="assets/${p.src}" alt="Sample photograph: ${p.alt}" loading="${i === indices[0] ? "eager" : "lazy"}"><span class="photo-open" aria-hidden="true">View photograph ↗</span></button><figcaption><span><span class="frame-number">0${i + 1}</span>${p.title}</span><span>${p.category === "city" ? "City" : "Elsewhere"}</span></figcaption></figure>`;
    })
    .join("");
  document.querySelector("#gallery-status").textContent =
    `${indices.length} photographs · Select a frame to view`;
  document.querySelector("#roll-count").textContent =
    `END OF ROLL / ${String(indices.length).padStart(2, "0")} FRAMES`;
}
let themePreference = null;
try {
  const saved = localStorage.getItem("yan-portfolio-theme");
  if (saved === "light" || saved === "dark") themePreference = saved;
} catch {}
const themeToggle = document.querySelector("#theme-toggle");
function applyTheme() {
  const theme =
    themePreference ||
    (document.body.classList.contains("photography") ? "light" : "dark");
  document.body.dataset.theme = theme;
  const target = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${target} mode`);
  themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  themeToggle.title = `Switch to ${target} mode`;
  themeToggle.querySelector(".theme-label").textContent =
    target === "light" ? "Light" : "Dark";
  themeToggle.querySelector(".theme-icon").textContent =
    target === "light" ? "☼" : "☾";
  document.querySelector('meta[name="theme-color"]').content =
    theme === "dark" ? "#141719" : "#e9ece9";
  document.documentElement.style.colorScheme = theme;
  document.documentElement.style.backgroundColor =
    theme === "dark" ? "#141719" : "#e9ece9";
}
themeToggle.addEventListener("click", () => {
  themePreference = document.body.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("yan-portfolio-theme", themePreference);
  } catch {}
  applyTheme();
});
let currentPage = null;
function route() {
  const isPhoto =
    location.hash === "#photography" ||
    (location.hash === "#main-content" && currentPage === "photo");
  document.body.classList.toggle("photography", isPhoto);
  applyTheme();
  document.querySelector("#work-page").hidden = isPhoto;
  document.querySelector("#photo-page").hidden = !isPhoto;
  for (const [id, active] of [
    ["work-tab", !isPhoto],
    ["photo-tab", isPhoto],
  ]) {
    const tab = document.getElementById(id);
    tab.classList.toggle("active", active);
    if (active) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  }
  const page = isPhoto ? "photo" : "work";
  if (page !== currentPage || location.hash === "#work")
    window.scrollTo({ top: 0, behavior: "instant" });
  currentPage = page;
  if (["#projects", "#experience"].includes(location.hash))
    requestAnimationFrame(() =>
      document
        .querySelector(location.hash)
        .scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  document.title = `Yan Chen — ${isPhoto ? "Photography" : "Engineer / Observer"}`;
}
window.addEventListener("hashchange", route);
route();
renderGallery();
const summaries = [
  "A textbook marketplace for Boston University students.",
  "Finding teammates for events and hackathons.",
  "Mapping group sentiment with natural language processing.",
  "Build a burger, choose ingredients, and place an order.",
  "A community forum for campground reviews.",
];
document.querySelector("#project-list").innerHTML = projects
  .slice(2)
  .map(
    (p, i) =>
      `<button class="project-row" data-project="${i + 2}" aria-label="Explore ${p.title}" aria-haspopup="dialog"><span class="mono">0${i + 3}</span><span class="row-content"><strong>${p.title}</strong><span>${summaries[i]}</span></span><span class="mono tech">${p.tags.slice(0, 3).join(" / ")}</span><span aria-hidden="true">→</span></button>`,
  )
  .join("");
function showProject(i, trigger) {
  const p = projects[i];
  activeDialogTrigger = trigger;
  const paragraphs = p.description.split(/(?<=[.!?])\s+(?=[A-Z])/);
  document.querySelector("#project-detail").innerHTML =
    `<div class="mono dialog-type">${p.type}</div><h2 id="project-title">${p.title}</h2><div class="project-overview">${paragraphs.map((text) => `<p>${text.trim()}</p>`).join("")}</div><h3 class="detail-label">Built with</h3><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="solid">View source on GitHub <span>↗</span></a>` : '<p class="archive-note">Archived project · Original demo no longer linked.</p>'}`;
  projectDialog.showModal();
  document.body.classList.add("modal-open");
}
function showPhoto(i, trigger) {
  const indices = filteredIndices();
  photoIndex = indices.includes(i) ? i : indices[0];
  const p = photos[photoIndex];
  if (trigger) activeDialogTrigger = trigger;
  document.querySelector("#lightbox-image").src = "assets/" + p.src;
  document.querySelector("#lightbox-image").alt = "Sample photograph: " + p.alt;
  document.querySelector("#lightbox-caption").innerHTML =
    `<span>${p.title}</span><span class="mono">${indices.indexOf(photoIndex) + 1} / ${indices.length} · SAMPLE FRAME</span>`;
  if (!lightbox.open) lightbox.showModal();
  document.body.classList.add("modal-open");
}
function nextPhoto(direction) {
  const indices = filteredIndices();
  showPhoto(
    indices[
      (indices.indexOf(photoIndex) + direction + indices.length) %
        indices.length
    ],
  );
}
function selectControl(selector, selected) {
  document.querySelectorAll(selector).forEach((b) => {
    b.classList.toggle("active", b === selected);
    b.setAttribute("aria-pressed", String(b === selected));
  });
}
document.addEventListener("click", (e) => {
  const studies = document.querySelector(".film-studies");
  if (!e.target.closest(".film-studies")) studies.open = false;
  const project = e.target.closest("[data-project]");
  if (project) showProject(Number(project.dataset.project), project);
  const photo = e.target.closest("[data-photo]");
  if (photo) showPhoto(Number(photo.dataset.photo), photo);
  const f = e.target.closest("[data-filter]");
  if (f) {
    filter = f.dataset.filter;
    selectControl("[data-filter]", f);
    renderGallery();
  }
  const l = e.target.closest("[data-layout]");
  if (l) {
    layout = l.dataset.layout;
    selectControl("[data-layout]", l);
    renderGallery();
  }
  const treatment = e.target.closest("[data-film]");
  if (treatment) {
    film = treatment.dataset.film;
    document.documentElement.style.setProperty(
      "--film",
      film === "mono"
        ? "grayscale(1) contrast(1.08)"
        : film === "neutral"
          ? "none"
          : "saturate(.55) contrast(.92) brightness(.95)",
    );
    selectControl("[data-film]", treatment);
  }
});
document.querySelectorAll("dialog").forEach((d) => {
  d.querySelector(".close").onclick = () => d.close();
  d.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    activeDialogTrigger?.focus();
  });
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.close();
    }
  });
});
lightbox.querySelector(".prev").onclick = () => nextPhoto(-1);
lightbox.querySelector(".next").onclick = () => nextPhoto(1);
document.addEventListener("keydown", (e) => {
  if (lightbox.open) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextPhoto(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextPhoto(1);
    }
  }
});
let touchStart = null;
lightbox.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1)
      touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    else touchStart = null;
  },
  { passive: true },
);
lightbox.addEventListener(
  "touchend",
  (e) => {
    if (!touchStart || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - touchStart.x,
      dy = e.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
      nextPhoto(dx < 0 ? 1 : -1);
  },
  { passive: true },
);
document
  .querySelectorAll("[data-filter],[data-film],[data-layout]")
  .forEach((b) =>
    b.setAttribute("aria-pressed", String(b.classList.contains("active"))),
  );

document.addEventListener("keydown", (e) => {
  const studies = document.querySelector(".film-studies");
  if (
    e.key === "Escape" &&
    studies.open &&
    !lightbox.open &&
    !projectDialog.open
  ) {
    studies.open = false;
    studies.querySelector("summary").focus();
  }
});
