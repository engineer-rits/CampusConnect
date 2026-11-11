// =============================================
// UNIVERSE — CAMPUS DISCOVERY WEBSITE
// =============================================



// =============================================
// 1. SAMPLE EVENT DATA
// These are illustrative examples, not confirmed
// TIET announcements.
// =============================================

const events = [
  {
    id: "event-1",
    title: "Ruhaniyat",
    category: "culture",
    icon: "♫",
    art: "art-pink",
    label: "EXPRESS YOURSELF",
    description: "A blissful experience where students can share music, poetry, comedy and other creative performances.",
    featured: true
  },
  {
    id: "event-2",
    title: "RoboWars",
    category: "learning",
    icon: "✧",
    art: "art-blue",
    label: "LEARN SOMETHING NEW",
    description: "An event featuring robots sparring with each other",
    featured: true
  },
  {
    id: "event-3",
    title: "Readathon",
    category: "fun",
    icon: "📖",
    art: "art-yellow",
    label: "READ TOGETHER",
    description: "An example of a relaxed campus activity where students can meet new people and read books together.",
    featured: true
  },
  {
    id: "event-4",
    title: "Green Campus Day",
    category: "community",
    icon: "✿",
    art: "art-green",
    label: "MAKE A DIFFERENCE",
    description: "An example of a sustainability-themed campus activity focused on environmental awareness and responsible everyday choices.",
    featured: false
  },
  {
    id: "event-5",
    title: "Cybersecurity Workshop",
    category: "learning",
    icon: "✎",
    art: "art-pink",
    label: "CREATE & COLLABORATE",
    description: "A hands-on workshop where students can explore cybersecurity and learn alongside their peers.",
    featured: false
  },
  {
    id: "event-6",
    title: "Wild West Showdown",
    category: "culture",
    icon: "✺",
    art: "art-blue",
    label: "CELEBRATE CAMPUS",
    description: "A cultural gathering celebrating student interests, performances and campus community.",
    featured: false
  }
];

// =============================================
// 2. CLUB AND SOCIETY DIRECTORY
// Verify current names and joining information
// through the official TIET student portal.
// =============================================

const clubs = [
  {
    name: "OWASP Student Chapter:",
    category: "Technical",
    icon: "◈",
    description: "Cybersecurity awareness and secure technology."
  },
  {
    name: "Mechatronics and Robotics Society (MARS):",
    category: "Technical",
    icon: "⚙",
    description: "Robotics, automation and engineering projects."
  },
  {
    name: "ACM Computing Chapter:",
    category: "Technical",
    icon: "⌘",
    description: "Computing workshops, seminars and technical learning."
  },
  {
    name: "Microsoft Learn Student Chapter:",
    category: "Technical",
    icon: "▦",
    description: "Technical training, learning and project development."
  },
  {
    name: "Creative Computing Society (CCS):",
    category: "Technical",
    icon: "⌘",
    description: "Technology, coding workshops and innovation."
  },
  {
    name: "Thapar Mathematical Society:",
    category: "Technical",
    icon: "∑",
    description: "Mathematics, problem-solving and academic activities."
  },
  {
    name: "Music and Dramatic Society (MUDRA):",
    category: "Cultural",
    icon: "♫",
    description: "Music, theatre, drama and performing arts."
  },
  {
    name: "Fine Arts and Photography Society (FAPS):",
    category: "Cultural",
    icon: "✿",
    description: "Art, photography and visual creativity."
  },
  {
    name: "Dance Club NOX:",
    category: "Cultural",
    icon: "✧",
    description: "Dance workshops, performances and competitions."
  },
  {
    name: "SPIC MACAY:",
    category: "Cultural",
    icon: "❋",
    description: "Indian classical arts, culture and heritage."
  },
  {
    name: "Thapar Movie Club (TMC):",
    category: "Cultural",
    icon: "▣",
    description: "Film-making and creative storytelling."
  },
  {
    name: "Literary Society:",
    category: "Literary",
    icon: "✎",
    description: "Literature, writing, poetry and language."
  },
  {
    name: "Thapar Model United Nations (TUMUN):",
    category: "Literary",
    icon: "◎",
    description: "Debate, diplomacy and international affairs."
  },
  {
    name: "TU Toastmasters Club:",
    category: "Literary",
    icon: "◉",
    description: "Public speaking, communication and leadership."
  },
  {
    name: "ENACTUS:",
    category: "Social",
    icon: "↗",
    description: "Entrepreneurial action and social impact."
  },
  {
    name: "Pratigya Society:",
    category: "Social",
    icon: "♡",
    description: "Community welfare and educational initiatives."
  },
  {
    name: "Paryavaran Welfare Society (PWS):",
    category: "Social",
    icon: "♧",
    description: "Environmental awareness and conservation."
  },
  {
    name: "National Service Scheme (NSS):",
    category: "Social",
    icon: "♡",
    description: "Community service and social responsibility."
  },
  {
    name: "Adventure Club:",
    category: "Fitness",
    icon: "△",
    description: "Outdoor activities and adventure experiences."
  },
  {
    name: "TIET Fitness Club:",
    category: "Fitness",
    icon: "✦",
    description: "Fitness, physical activity and healthy habits."
  }
];

// =============================================
// 4. BROWSER STORAGE
// =============================================

const STORAGE_KEY = "universe_tiet_saved_v1";

function loadSaved() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return {
      events: Array.isArray(stored?.events) ? stored.events : [],
      clubs: Array.isArray(stored?.clubs) ? stored.clubs : []
    };
  } catch (error) {
    return { events: [], clubs: [] };
  }
}

let saved = loadSaved();
let activeEventFilter = "all";
let activeClubFilter = "all";
let activeDashboardTab = "events";
let currentModalEvent = null;
let toastTimer;

function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    notify("Your browser could not save this change.");
  }
}

// Escape text before inserting data into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function notify(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// =============================================
// 5. MOBILE NAVIGATION
// =============================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// =============================================
// 6. EVENT EXPLORER
// =============================================

const eventGrid = document.getElementById("eventGrid");
const globalSearchInput = document.getElementById("globalSearch");
const eventSort = document.getElementById("eventSort");

function renderEvents() {
  if (!eventGrid) return;

  const searchTerm = globalSearchInput.value.trim().toLowerCase();
  const sortMode = eventSort.value;

  let filtered = events.filter(event => {
    const matchesCategory =
      activeEventFilter === "all" ||
      event.category === activeEventFilter;

    const searchableText = [
      event.title,
      event.category,
      event.description,
      event.venue
    ].join(" ").toLowerCase();

    const matchesSearch =
      !searchTerm || searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (sortMode === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  if (!filtered.length) {
    eventGrid.innerHTML = `
      <div class="empty-state">
        No matching events found. Try another search or category.
      </div>
    `;
    return;
  }

  eventGrid.innerHTML = filtered.map(event => {
    const isSaved = saved.events.includes(event.id);

    return `
      <article class="event-card">
        <div class="event-art ${event.art}">
          <div class="event-date">TIET <b>EVENT</b></div>
          <div class="event-graphic">${escapeHTML(event.icon)}</div>
          <div class="art-label">${escapeHTML(event.label)}</div>
        </div>

        <div class="event-info">
          <div class="event-meta">
            ${escapeHTML(event.category)}
            <span>✳</span>
            <span>Campus event</span>
          </div>

          <h3>${escapeHTML(event.title)}</h3>
          <p>${escapeHTML(event.description)}</p>

          <div class="event-actions">
            <button class="event-details" data-details="${escapeHTML(event.id)}">
              View details <span>↗</span>
            </button>

            <button
              class="save-btn ${isSaved ? "saved" : ""}"
              data-save-event="${escapeHTML(event.id)}"
              aria-label="${isSaved ? "Remove bookmark" : "Bookmark event"}"
              aria-pressed="${isSaved}"
            >
              ${isSaved ? "★ Saved" : "☆ Save"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeEventFilter = button.dataset.filter;

    renderEvents();
  });
});

eventSort.addEventListener("change", renderEvents);

// =============================================
// 7. CLUB DIRECTORY — CARD LAYOUT
// =============================================

const clubList = document.getElementById("clubList");
const clubSearchInput = document.getElementById("clubSearch");

function renderClubs() {
  if (!clubList) return;

  const searchTerm = clubSearchInput.value.trim().toLowerCase();

  const filtered = clubs.filter(club => {
    const matchesCategory =
      activeClubFilter === "all" ||
      club.category === activeClubFilter;

    const searchableText =
      `${club.name} ${club.category} ${club.description}`.toLowerCase();

    return matchesCategory && searchableText.includes(searchTerm);
  });

  if (!filtered.length) {
    clubList.innerHTML = `
      <div class="club-empty">
        No matching organisations found. Try another search or category.
      </div>
    `;
  } else {
    clubList.innerHTML = filtered.map(club => {
      const isSaved = saved.clubs.includes(club.name);

      return `
        <article class="club-item">

          <div class="club-card-top">
            <div class="club-icon">${escapeHTML(club.icon)}</div>
            <span class="club-category">${escapeHTML(club.category)}</span>
          </div>

          <h3>${escapeHTML(club.name)}</h3>

          <p>${escapeHTML(club.description)}</p>

          <div class="club-save-row">
            <button
              class="save-btn ${isSaved ? "saved" : ""}"
              data-save-club="${escapeHTML(club.name)}"
              aria-label="${isSaved ? "Remove saved club" : "Save club"}"
              aria-pressed="${isSaved}"
            >
              ${isSaved ? "★ Saved" : "☆ Save club"}
            </button>
          </div>

        </article>
      `;
    }).join("");
  }

  document.getElementById("clubCount").textContent =
    `Showing ${filtered.length} of ${clubs.length} listed organisations.`;
}

document.querySelectorAll(".club-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".club-filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeClubFilter = button.dataset.clubFilter;

    renderClubs();
  });
});

clubSearchInput.addEventListener("input", renderClubs);

// =============================================
// 9. SAVE / REMOVE BOOKMARKS
// =============================================

function toggleSavedEvent(id) {
  if (saved.events.includes(id)) {
    saved.events = saved.events.filter(item => item !== id);
    notify("Event removed from your saved list.");
  } else {
    saved.events.push(id);
    notify("Event saved to your dashboard!");
  }

  saveStorage();
  renderEvents();
  renderDashboard();
  updateModalSaveButton();
}

function toggleSavedClub(name) {
  if (saved.clubs.includes(name)) {
    saved.clubs = saved.clubs.filter(item => item !== name);
    notify("Club removed from your saved list.");
  } else {
    saved.clubs.push(name);
    notify("Club added to your saved list!");
  }

  saveStorage();
  renderClubs();
  renderDashboard();
}

// Event delegation handles buttons even after cards are re-rendered.
document.addEventListener("click", event => {
  const target = event.target;

  if (!target.closest) return;

  const eventSaveButton = target.closest("[data-save-event]");
  const clubSaveButton = target.closest("[data-save-club]");
  const detailsButton = target.closest("[data-details]");

  if (eventSaveButton) {
    toggleSavedEvent(eventSaveButton.dataset.saveEvent);
    return;
  }

  if (clubSaveButton) {
    toggleSavedClub(clubSaveButton.dataset.saveClub);
    return;
  }

  if (detailsButton) {
    openEventModal(detailsButton.dataset.details);
  }
});

// =============================================
// 10. PERSONAL DASHBOARD
// =============================================

const savedList = document.getElementById("savedList");

function renderDashboard() {
  const eventCount = saved.events.length;
  const clubCount = saved.clubs.length;

  document.getElementById("savedCount").textContent =
    `${eventCount + clubCount} saved`;

  document.getElementById("savedEventCount").textContent = eventCount;
  document.getElementById("savedClubCount").textContent = clubCount;

  const items = activeDashboardTab === "events"
    ? saved.events.map(id => {
        const event = events.find(item => item.id === id);

        return event ? {
          title: event.title,
          subtitle: `${event.category} · Campus Event`,
          id
        } : null;
      }).filter(Boolean)
    : saved.clubs.map(name => ({
        title: name,
        subtitle: "TIET student organisation",
        id: name
      }));

  if (!items.length) {
    savedList.innerHTML = `
      <div class="saved-empty">
        Nothing saved here yet.<br>
        Explore the events and clubs above and tap ☆ to save something.
      </div>
    `;
    return;
  }

  savedList.innerHTML = items.map(item => `
    <div class="saved-item">
      <div>
        <b>${escapeHTML(item.title)}</b>
        <small>${escapeHTML(item.subtitle)}</small>
      </div>

      <button
        class="remove-save"
        data-remove-type="${activeDashboardTab}"
        data-remove-id="${escapeHTML(item.id)}"
      >
        Remove
      </button>
    </div>
  `).join("");
}

document.querySelectorAll(".dash-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".dash-tab").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeDashboardTab = button.dataset.dashTab;

    renderDashboard();
  });
});

savedList.addEventListener("click", event => {
  const button = event.target.closest("[data-remove-type]");
  if (!button) return;

  const id = button.dataset.removeId;

  if (button.dataset.removeType === "events") {
    saved.events = saved.events.filter(item => item !== id);
  } else {
    saved.clubs = saved.clubs.filter(item => item !== id);
  }

  saveStorage();
  renderEvents();
  renderClubs();
  renderDashboard();
  updateModalSaveButton();

  notify("Saved item removed.");
});

// =============================================
// 11. EVENT DETAIL POPUP
// =============================================

const modal = document.getElementById("eventModal");

function openEventModal(id) {
  const event = events.find(item => item.id === id);
  if (!event) return;

  currentModalEvent = event;

  document.getElementById("modalCategory").textContent =
    {event.category.toUpperCase()};

  document.getElementById("modalTitle").textContent = event.title;

  document.getElementById("modalDescription").textContent =
    event.description;

  updateModalSaveButton();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.getElementById("modalClose").focus();
}

function closeEventModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  currentModalEvent = null;
}

function updateModalSaveButton() {
  if (!currentModalEvent) return;

  const button = document.getElementById("modalSave");
  const isSaved = saved.events.includes(currentModalEvent.id);

  button.innerHTML = isSaved
    ? 'Saved to dashboard <span>★</span>'
    : 'Save event <span>☆</span>';
}

document.getElementById("modalClose").addEventListener("click", closeEventModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeEventModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeEventModal();
  }
});

document.getElementById("modalSave").addEventListener("click", () => {
  if (!currentModalEvent) return;

  toggleSavedEvent(currentModalEvent.id);
});

// =============================================
// 12. GLOBAL SEARCH
// =============================================

function runGlobalSearch() {
  const searchTerm = globalSearchInput.value.trim();

  if (!searchTerm) {
    notify("Type something to search for.");
    return;
  }

  activeEventFilter = "all";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  renderEvents();

  clubSearchInput.value = searchTerm;
  activeClubFilter = "all";

  document.querySelectorAll(".club-filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.clubFilter === "all"
    );
  });

  renderClubs();

  const term = searchTerm.toLowerCase();

  const matchingEvents = events.filter(event =>
    `${event.title} ${event.category} ${event.description}`
      .toLowerCase()
      .includes(term)
  ).length;

  const matchingClubs = clubs.filter(club =>
    `${club.name} ${club.category} ${club.description}`
      .toLowerCase()
      .includes(term)
  ).length;

  document.getElementById("searchHint").textContent =
    `Found ${matchingEvents} matching event(s) and ${matchingClubs} matching organisation(s).`;

  // Take the user to the section containing matching results.
  const destination = matchingEvents > 0
    ? document.getElementById("events")
    : document.getElementById("clubs");

  destination.scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("searchButton").addEventListener("click", runGlobalSearch);

globalSearchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    runGlobalSearch();
  }
});

// =============================================
// 13. INITIAL PAGE RENDER
// =============================================

renderEvents();
renderClubs();
renderDashboard();
