const requestedTimeline = new URLSearchParams(location.search).get("timeline");
document.body.dataset.timeline = ["rail", "editorial", "margin"].includes(
  requestedTimeline,
)
  ? requestedTimeline
  : "margin";
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
    url: "https://github.com/yanchen01/sapflow",
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
    url: "https://github.com/yanchen01/hackmit2020",
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
    src: "photos/japan-06.jpg",
    fullSrc: "photos/japan-06-full.jpg",
    title: "Waiting for the train",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Green train beside a station platform under overhead wires",
    width: 933,
    height: 1400,
  },
  {
    src: "photos/japan-10.jpg",
    fullSrc: "photos/japan-10-full.jpg",
    title: "After dark",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Illuminated restaurant signs and lanterns on a street at night",
    width: 1400,
    height: 933,
  },
  {
    src: "photos/switzerland-19.jpg",
    fullSrc: "photos/switzerland-19-full.jpg",
    title: "Blue, all the way down",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Alpine lake framed by evergreen trees and mountains",
    width: 1400,
    height: 1050,
  },
  {
    src: "photos/los-angeles-15.jpg",
    fullSrc: "photos/los-angeles-15-full.jpg",
    title: "Under the palms",
    category: "los-angeles",
    collection: "Los Angeles · July 2026",
    alt: "Palm trees lining a quiet street under a blue sky",
    width: 933,
    height: 1400,
  },
  {
    src: "photos/elsewhere-01.jpg",
    fullSrc: "photos/elsewhere-01-full.jpg",
    title: "Over the water",
    category: "elsewhere",
    collection: "Somewhere",
    alt: "Birds flying over wooden pilings beside a waterfront",
    width: 1400,
    height: 933,
  },
  {
    src: "photos/japan-07.jpg",
    fullSrc: "photos/japan-07-full.jpg",
    title: "Along the coast",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Green coastal train passing beside the ocean",
    width: 1400,
    height: 933,
  },
  {
    src: "photos/japan-08.jpg",
    fullSrc: "photos/japan-08-full.jpg",
    title: "Across the harbor",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Boats crossing blue water beside a harbor",
    width: 1400,
    height: 933,
  },
  {
    src: "photos/japan-09.jpg",
    fullSrc: "photos/japan-09-full.jpg",
    title: "Above the avenue",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "View down an urban avenue framed by tall buildings",
    width: 933,
    height: 1400,
  },
  {
    src: "photos/japan-11.jpg",
    fullSrc: "photos/japan-11-full.jpg",
    title: "Beneath the surface",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Whale shark swimming in a large aquarium above visitors",
    width: 1400,
    height: 1050,
  },
  {
    src: "photos/japan-12.jpg",
    fullSrc: "photos/japan-12-full.jpg",
    title: "Where the coast opens",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Rocky green headland with a natural arch beside the sea",
    width: 1400,
    height: 1050,
  },
  {
    src: "photos/japan-13.jpg",
    fullSrc: "photos/japan-13-full.jpg",
    title: "A little blue",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Turquoise water and a sandy beach around a sheltered bay",
    width: 1400,
    height: 1050,
  },
  {
    src: "photos/japan-14.jpg",
    fullSrc: "photos/japan-14-full.jpg",
    title: "Between green and blue",
    category: "japan",
    collection: "Japan · July 2026",
    alt: "Clear blue water beneath a wooded coastal hillside",
    width: 1400,
    height: 1050,
  },
  {
    src: "photos/switzerland-17.jpg",
    fullSrc: "photos/switzerland-17-full.jpg",
    title: "Into the valley",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Cable car view over a village in an alpine valley",
    width: 1400,
    height: 788,
  },
  {
    src: "photos/switzerland-18.jpg",
    fullSrc: "photos/switzerland-18-full.jpg",
    title: "At the water’s edge",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Turquoise alpine lake beneath rocky mountain peaks",
    width: 1400,
    height: 788,
  },
  {
    src: "photos/switzerland-20.jpg",
    fullSrc: "photos/switzerland-20-full.jpg",
    title: "A town by the lake",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Village and lake beneath green slopes and distant mountains",
    width: 1400,
    height: 788,
  },
  {
    src: "photos/switzerland-21.jpg",
    fullSrc: "photos/switzerland-21-full.jpg",
    title: "Among the stones",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Stone cairns beside an alpine hiking route",
    width: 1050,
    height: 1400,
  },
  {
    src: "photos/switzerland-22.jpg",
    fullSrc: "photos/switzerland-22-full.jpg",
    title: "Out in the open",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Wildflowers and green hills beneath mountain peaks",
    width: 787,
    height: 1400,
  },
  {
    src: "photos/switzerland-23.jpg",
    fullSrc: "photos/switzerland-23-full.jpg",
    title: "The long way down",
    category: "switzerland",
    collection: "Switzerland · June 2025",
    alt: "Walking path and village buildings in an alpine valley",
    width: 787,
    height: 1400,
  },
  {
    src: "photos/steamboat-16.jpg",
    fullSrc: "photos/steamboat-16-full.jpg",
    title: "A day on the mountain",
    category: "steamboat",
    collection: "Steamboat · March 2026",
    alt: "Skier on a snowy slope beside frost-covered trees",
    width: 1050,
    height: 1400,
  },
  {
    src: "photos/elsewhere-02.jpg",
    fullSrc: "photos/elsewhere-02-full.jpg",
    title: "At the market",
    category: "elsewhere",
    collection: "Somewhere",
    alt: "Peaches and other produce displayed at an outdoor market",
    width: 1400,
    height: 933,
  },
  {
    src: "photos/elsewhere-03.jpg",
    fullSrc: "photos/elsewhere-03-full.jpg",
    title: "Through the bamboo",
    category: "elsewhere",
    collection: "Somewhere",
    alt: "Sunlit path through a dense stand of bamboo",
    width: 933,
    height: 1400,
  },
  {
    src: "photos/elsewhere-04.jpg",
    fullSrc: "photos/elsewhere-04-full.jpg",
    title: "A quiet passage",
    category: "elsewhere",
    collection: "Somewhere",
    alt: "Covered wooden passage beside a white wall and garden",
    width: 933,
    height: 1400,
  },
  {
    src: "photos/elsewhere-05.jpg",
    fullSrc: "photos/elsewhere-05-full.jpg",
    title: "Around the corner",
    category: "elsewhere",
    collection: "Somewhere",
    alt: "Shaded walkway with sunlight and greenery beyond",
    width: 933,
    height: 1400,
  },
];
const photoTrips = [
  {
    id: "elsewhere-october",
    category: "elsewhere",
    location: "Somewhere",
    date: "October 2026",
    datetime: "2026-10",
  },
  {
    id: "elsewhere-september",
    category: "elsewhere",
    location: "Somewhere",
    date: "September 2026",
    datetime: "2026-09",
  },
  {
    id: "elsewhere-august",
    category: "elsewhere",
    location: "Somewhere",
    date: "August 2026",
    datetime: "2026-08",
  },
  {
    id: "japan",
    category: "japan",
    location: "Japan",
    date: "July 2026",
    datetime: "2026-07",
  },
  {
    id: "los-angeles",
    category: "los-angeles",
    location: "Los Angeles",
    date: "July 2026",
    datetime: "2026-07",
  },
  {
    id: "steamboat",
    category: "steamboat",
    location: "Steamboat, Colorado",
    date: "March 2026",
    datetime: "2026-03",
  },
  {
    id: "switzerland",
    category: "switzerland",
    location: "Switzerland",
    date: "June 2025",
    datetime: "2025-06",
  },
];
photos.forEach((p) => {
  p.tripId =
    p.category === "elsewhere"
      ? p.src.includes("elsewhere-02.")
        ? "elsewhere-october"
        : p.src.includes("elsewhere-01.")
          ? "elsewhere-september"
          : "elsewhere-august"
      : p.category;
  const trip = photoTrips.find((t) => t.id === p.tripId);
  p.collection = `${trip.location} · ${trip.date}`;
});
let activeTrip = null;
let timelineFrame = null;
function updateTimeline() {
  if (document.querySelector("#photo-page").hidden) return;
  document.querySelector("#photo-back-top").hidden =
    window.scrollY < Math.max(500, window.innerHeight * 0.75);
  const sections = [...document.querySelectorAll(".photo-collection")];
  if (!sections.length) return;
  const edge =
    document.querySelector(".nav").getBoundingClientRect().bottom + 90;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= edge) current = section;
  }
  const nav = document.querySelector("#photo-timeline");
  const buttons = [...nav.querySelectorAll("[data-trip-target]")];
  const index = sections.indexOf(current);
  const rect = current.getBoundingClientRect();
  const next = sections[index + 1];
  const span = next ? next.getBoundingClientRect().top - rect.top : rect.height;
  const progress = Math.max(
    0,
    Math.min(1, (edge - rect.top) / Math.max(1, span)),
  );
  const start = buttons[index];
  const end = buttons[index + 1];
  if (start) {
    const position =
      start.offsetTop +
      22 +
      progress *
        (end ? end.offsetTop - start.offsetTop : start.offsetHeight - 22);
    nav.style.setProperty("--timeline-position", `${position}px`);
  }
  if (current.dataset.trip === activeTrip) return;
  activeTrip = current.dataset.trip;
  document.querySelectorAll("[data-trip-target]").forEach((button) => {
    const selected = button.dataset.tripTarget === activeTrip;
    button.classList.toggle("active", selected);
    if (selected) button.setAttribute("aria-current", "location");
    else button.removeAttribute("aria-current");
  });
  const button = document.querySelector(`[data-trip-target="${activeTrip}"]`);
  if (button)
    nav.scrollTo({
      top: button.offsetTop - nav.clientHeight / 2 + button.offsetHeight / 2,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
}
function scheduleTimeline() {
  if (timelineFrame !== null) return;
  timelineFrame = requestAnimationFrame(() => {
    timelineFrame = null;
    updateTimeline();
  });
}
window.addEventListener("scroll", scheduleTimeline, { passive: true });
window.addEventListener("resize", scheduleTimeline);
let filter = "all",
  layout = "journal",
  film = "neutral",
  photoIndex = 0;
const gallery = document.querySelector("#gallery");
const projectDialog = document.querySelector("#project-dialog"),
  lightbox = document.querySelector("#lightbox");
let activeDialogTrigger = null;
const filteredIndices = () =>
  photoTrips.flatMap((trip) =>
    photos
      .map((p, i) => i)
      .filter(
        (i) =>
          photos[i].tripId === trip.id &&
          (filter === "all" || photos[i].category === filter),
      ),
  );
function renderGallery() {
  const indices = filteredIndices();
  const trips = photoTrips.filter((trip) =>
    indices.some((i) => photos[i].tripId === trip.id),
  );
  gallery.className = "photo-collections";
  gallery.innerHTML = trips
    .map((trip) => {
      const frames = indices.filter((i) => photos[i].tripId === trip.id);
      return `<section class="photo-collection" id="trip-${trip.id}" data-trip="${trip.id}" aria-labelledby="trip-title-${trip.id}"><header class="collection-heading"><div><span class="eyebrow">${String(frames.length).padStart(2, "0")} ${frames.length === 1 ? "FRAME" : "FRAMES"}</span><h2 id="trip-title-${trip.id}">${trip.location}</h2></div><time datetime="${trip.datetime}">${trip.date}</time></header><div class="gallery ${layout === "sheet" ? "sheet" : ""}">${frames
        .map((i) => {
          const p = photos[i];
          return `<figure class="photo-card"><button data-photo="${i}" aria-label="View ${p.title}" aria-haspopup="dialog"><img src="assets/${p.src}" alt="${p.alt}" width="${p.width}" height="${p.height}" loading="${i === indices[0] ? "eager" : "lazy"}"><span class="photo-open" aria-hidden="true">View photograph ↗</span></button><figcaption><span><span class="frame-number">${String(indices.indexOf(i) + 1).padStart(2, "0")}</span>${p.title}</span><span>${p.collection}</span></figcaption></figure>`;
        })
        .join("")}</div></section>`;
    })
    .join("");
  document.querySelector("#photo-timeline").innerHTML =
    `<span class="timeline-hand" aria-hidden="true"></span>` +
    trips
      .map(
        (trip) =>
          `<button data-trip-target="${trip.id}" aria-label="Scroll to ${trip.location}, ${trip.date}"><span class="timeline-number" aria-hidden="true">${String(trips.indexOf(trip) + 1).padStart(2, "0")}</span><span class="timeline-place">${trip.location}</span><time datetime="${trip.datetime}"><span>${trip.date.split(" ")[0]}</span> <span>${trip.date.split(" ")[1]}</span></time></button>`,
      )
      .join("");
  activeTrip = null;
  document.querySelector("#gallery-status").textContent =
    `${indices.length} photographs · ${trips.length} ${trips.length === 1 ? "collection" : "collections"}`;
  document.querySelector("#roll-count").textContent =
    `END OF ROLL / ${String(indices.length).padStart(2, "0")} FRAMES`;
  scheduleTimeline();
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
  scheduleTimeline();
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
  document.title = "Yan Chen - Personal Portfolio";
}
const collectionOptions = [
  ["all", "All"],
  ["japan", "Japan"],
  ["switzerland", "Switzerland"],
  ["steamboat", "Steamboat"],
  ["los-angeles", "Los Angeles"],
  ["elsewhere", "Somewhere"],
];
const filterGroup = document.querySelector(".photo-filters");
filterGroup.innerHTML = collectionOptions
  .map(
    ([key, label]) =>
      `<button data-filter="${key}" class="${key === "all" ? "active" : ""}">${label}<span class="filter-count">${key === "all" ? photos.length : photos.filter((p) => p.category === key).length}</span></button>`,
  )
  .join("");
const collectionSelect = document.querySelector("#collection-select");
collectionSelect.innerHTML = collectionOptions
  .map(
    ([key, label]) =>
      `<option value="${key}">${label} (${key === "all" ? photos.length : photos.filter((p) => p.category === key).length})</option>`,
  )
  .join("");
collectionSelect.addEventListener("change", () => {
  filter = collectionSelect.value;
  selectControl(
    "[data-filter]",
    document.querySelector(`[data-filter="${filter}"]`),
  );
  renderGallery();
});
window.addEventListener("hashchange", route);
route();
renderGallery();
const summaries = [
  "A textbook marketplace for Boston University students.",
  "Finding teammates for events and hackathons.",
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
  document.querySelector("#lightbox-image").src = "assets/" + p.fullSrc;
  document.querySelector("#lightbox-image").alt = p.alt;
  document.querySelector("#lightbox-caption").innerHTML =
    `<span>${p.title}</span><span class="mono">${indices.indexOf(photoIndex) + 1} / ${indices.length} · ${p.collection}</span>`;
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
  const tripButton = e.target.closest("[data-trip-target]");
  if (tripButton) {
    document
      .querySelector(`#trip-${tripButton.dataset.tripTarget}`)
      .scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
  }
  const project = e.target.closest("[data-project]");
  if (project) showProject(Number(project.dataset.project), project);
  const photo = e.target.closest("[data-photo]");
  if (photo) showPhoto(Number(photo.dataset.photo), photo);
  const f = e.target.closest("[data-filter]");
  if (f) {
    filter = f.dataset.filter;
    collectionSelect.value = filter;
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

// Keep the hero controls independent from the photography journal's film studies.
document.querySelectorAll("[data-hero-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const frame = button.closest(".hero-frame");
    frame.dataset.heroFilm = button.dataset.heroFilter;
    frame.querySelectorAll("[data-hero-filter]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    frame.querySelector(".hero-film-name").textContent = {
      cc: "Classic Chrome",
      nc: "Classic Negative",
      mono: "Monochrome",
    }[button.dataset.heroFilter];
  });
});

document.querySelector("#photo-back-top").addEventListener("click", () => {
  document.querySelector("#photo-heading").focus({ preventScroll: true });
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
