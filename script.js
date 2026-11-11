
// ---------------------------------------------
// UNIVERSE — CAMPUS DISCOVERY WEBSITE
// ---------------------------------------------

const OFFICIAL_PORTAL = "https://studentsocieties.thapar.edu/";

// ---------------------------------------------
// 1. SAMPLE EVENT DATA
// Replace these examples with verified announcements.
// ---------------------------------------------

const events = [
  {
    id: "event-1",
    title: "Campus Open Mic",
    category: "culture",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "♫",
    art: "art-pink",
    label: "EXPRESS YOURSELF",
    description: "An example of a campus open-mic experience where students can share music, poetry, comedy and other creative performances.",
    featured: true
  },
  {
    id: "event-2",
    title: "Ideas to Impact",
    category: "learning",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "✧",
    art: "art-blue",
    label: "LEARN SOMETHING NEW",
    description: "An example of a student innovation session featuring ideas, discussions, collaborative learning and creative problem-solving.",
    featured: true
  },
  {
    id: "event-3",
    title: "The Big Board Game",
    category: "fun",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "♟",
    art: "art-yellow",
    label: "PLAY TOGETHER",
    description: "An example of a relaxed campus activity where students can meet new people and enjoy games together.",
    featured: true
  },
  {
    id: "event-4",
    title: "Green Campus Day",
    category: "community",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "✿",
    art: "art-green",
    label: "MAKE A DIFFERENCE",
    description: "An example of a sustainability-themed campus activity focused on environmental awareness and responsible everyday choices.",
    featured: false
  },
  {
    id: "event-5",
    title: "Creative Skills Workshop",
    category: "learning",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "✎",
    art: "art-pink",
    label: "CREATE & COLLABORATE",
    description: "An example of a hands-on workshop where students can explore a creative skill and learn alongside their peers.",
    featured: false
  },
  {
    id: "event-6",
    title: "Campus Culture Meet",
    category: "culture",
    date: "DATE TO BE ANNOUNCED",
    venue: "Venue to be announced",
    icon: "✺",
    art: "art-blue",
    label: "CELEBRATE CAMPUS",
    description: "An example of a cultural gathering celebrating student interests, performances and campus community.",
    featured: false
  }
];

// ---------------------------------------------
// 2. TIET SOCIETY AND CLUB DIRECTORY
// Names and descriptions are based on the official
// TIET student activities portal.
// ---------------------------------------------

const clubs = [
  {
    name: "Creative Computing Society (CCS)",
    category: "Technical",
    icon: "⌘",
    description: "Technology, coding workshops and innovation."
  },
  {
    name: "Mechatronics and Robotics Society (MARS)",
    category: "Technical",
    icon: "⚙",
    description: "Robotics, automation and engineering projects."
  },
  {
    name: "ACM Computing Chapter",
    category: "Technical",
    icon: "⌘",
    description: "Computing workshops, seminars and technical learning."
  },
  {
    name: "Microsoft Learn Student Chapter",
    category: "Technical",
    icon: "▦",
    description: "Technical training, learning and project development."
  },
  {
    name: "OWASP Student Chapter",
    category: "Technical",
    icon: "◈",
    description: "Cybersecurity awareness and secure technology."
  },
  {
    name: "Thapar Mathematical Society",
    category: "Technical",
    icon: "∑",
    description: "Mathematics, problem-solving and academic activities."
  },
  {
    name: "Music and Dramatic Society (MUDRA)",
    category: "Cultural",
    icon: "♫",
    description: "Music, theatre, drama and performing arts."
  },
  {
    name: "Fine Arts and Photography Society (FAPS)",
    category: "Cultural",
    icon: "✿",
    description: "Art, photography and visual creativity."
  },
  {
    name: "Dance Club NOX",
    category: "Cultural",
    icon: "✧",
    description: "Dance workshops, performances and competitions."
  },
  {
    name: "SPIC MACAY",
    category: "Cultural",
    icon: "❋",
    description: "Indian classical arts, culture and heritage."
  },
  {
    name: "Thapar Movie Club (TMC)",
    category: "Cultural",
    icon: "▣",
    description: "Film-making and creative storytelling."
  },
  {
    name: "Literary Society",
    category: "Literary",
    icon: "✎",
    description: "Literature, writing, poetry and language."
  },
  {
    name: "Thapar Model United Nations (TUMUN)",
    category: "Literary",
    icon: "◎",
    description: "Debate, diplomacy and international affairs."
  },
  {
    name: "TU Toastmasters Club",
    category: "Literary",
    icon: "◉",
    description: "Public speaking, communication and leadership."
  },
  {
    name: "ENACTUS",
    category: "Social",
    icon: "↗",
    description: "Entrepreneurial action and social impact."
  },
  {
    name: "Pratigya Society",
    category: "Social",
    icon: "♡",
    description: "Community welfare and educational initiatives."
  },
  {
    name: "Paryavaran Welfare Society (PWS)",
    category: "Social",
    icon: "♧",
    description: "Environmental awareness and conservation."
  },
  {
    name: "National Service Scheme (NSS)",
    category: "Social",
    icon: "♡",
    description: "Community service and social responsibility."
  },
  {
    name: "Adventure Club",
    category: "Fitness",
    icon: "△",
    description: "Outdoor activities and adventure experiences."
  },
  {
    name: "TIET Fitness Club",
    category: "Fitness",
    icon: "✦",
    description: "Fitness, physical activity and healthy habits."
  }
];

// ---------------------------------------------
// 3. OPPORTUNITIES
// ---------------------------------------------

const opportunities = [
  {
    icon: "♡",
    title: "Community volunteering",
    description: "Explore community service, educational outreach and social initiatives.",
    link: OFFICIAL_PORTAL,
    linkText: "Explore student organisations"
  },
  {
    icon: "✧",
    title: "Build something together",
    description: "Find technical, creative and entrepreneurial communities to collaborate with.",
    link: OFFICIAL_PORTAL,
    linkText: "Discover communities"
  },
  {
    icon: "♧",
    title: "Make campus greener",
    description: "Explore environmental awareness and sustainability activities.",
    link: OFFICIAL_PORTAL,
    linkText: "Find a community"
  }
];

// ---------------------------------------------
// 4. BROWSER STORAGE
// ---------------------------------------------

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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function notify(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ---------------------------------------------
// 5. MOBILE NAVIGATION
// ---------------------------------------------

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

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

// ---------------------------------------------
// 6. EVENT EXPLORER
// ---------------------------------------------

const eventGrid = document.getElementById("eventGrid");

function renderEvents() {
  const searchTerm = document
    .getElementById("globalSearch")
    .value.trim().toLowerCase();

  const sortMode = document.getElementById("eventSort").value;

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
          <div class="event-graphic">${event.icon}</div>
          <div class="art-label">${event.label}</div>
        </div>

        <div class="event-info">
          <div class="event-meta">
            ${event.category} <span>✳</span> ${event.date}
          </div>

          <h3>${event.title}</h3>
          <p>${event.description}</p>

          <div class="event-actions">
            <button class="event-details" data-details="${event.id}">
              View details <span>↗</span>
            </button>

            <button
              class="save-btn ${isSaved ? "saved" : ""}"
              data-save-event="${event.id}"
              aria-label="${isSaved ? "Remove bookmark" : "Bookmark event"}"
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

document.getElementById("eventSort").addEventListener("change", renderEvents);

// ---------------------------------------------
// 7. CLUB DIRECTORY
// ---------------------------------------------

const clubList = document.getElementById("clubList");

function renderClubs() {
  const searchTerm = document
    .getElementById("clubSearch")
    .value.trim().toLowerCase();

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
        No matching organisations found. Try another search.
      </div>
    `;
  } else {
    clubList.innerHTML = filtered.map(club => {
      const isSaved = saved.clubs.includes(club.name);

      return `
        <div class="club-item">
          <div class="club-icon">${club.icon}</div>

          <div class="club-item-main">
            <b>${club.name}</b>
            <small>${club.description}</small>
          </div>

          <div class="club-category">${club.category}</div>

          <button
            class="save-btn ${isSaved ? "saved" : ""}"
            data-save-club="${club.name}"
            aria-label="${isSaved ? "Remove saved club" : "Save club"}"
          >
            ${isSaved ? "★" : "☆"}
          </button>
        </div>
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

document.getElementById("clubSearch").addEventListener("input", renderClubs);

// ---------------------------------------------
// 8. OPPORTUNITY CARDS
// ---------------------------------------------

document.getElementById("opportunityGrid").innerHTML =
  opportunities.map(item => `
    <article class="opportunity-card">
      <div class="opportunity-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noopener">
        ${item.linkText} ↗
      </a>
    </article>
  `).join("");

// ---------------------------------------------
// 9. SAVE / REMOVE BOOKMARKS
// ---------------------------------------------

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

// Event delegation: handles buttons even after cards are re-rendered.
document.addEventListener("click", event => {
  const eventSaveButton = event.target.closest("[data-save-event]");
  const clubSaveButton = event.target.closest("[data-save-club]");
  const detailsButton = event.target.closest("[data-details]");

  if (eventSaveButton) {
    toggleSavedEvent(eventSaveButton.dataset.saveEvent);
  }

  if (clubSaveButton) {
    toggleSavedClub(clubSaveButton.dataset.saveClub);
  }

  if (detailsButton) {
    openEventModal(detailsButton.dataset.details);
  }
});

// ---------------------------------------------
// 10. PERSONAL DASHBOARD
// ---------------------------------------------

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
          subtitle: `${event.category} · Example listing`,
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
        <b>${item.title}</b>
        <small>${item.subtitle}</small>
      </div>
      <button
        class="remove-save"
        data-remove-type="${activeDashboardTab}"
        data-remove-id="${item.id}"
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
  notify("Saved item removed.");
});

// ---------------------------------------------
// 11. EVENT DETAIL POPUP
// ---------------------------------------------

const modal = document.getElementById("eventModal");

function openEventModal(id) {
  const event = events.find(item => item.id === id);
  if (!event) return;

  currentModalEvent = event;

  document.getElementById("modalCategory").textContent =
    `${event.category.toUpperCase()} · EVENT EXAMPLE`;

  document.getElementById("modalTitle").textContent = event.title;
  document.getElementById("modalDescription").textContent =
    `${event.description} Date: ${event.date}. Venue: ${event.venue}.`;

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

  const id = currentModalEvent.id;

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
});

// ---------------------------------------------
// 12. GLOBAL SEARCH
// ---------------------------------------------

function runGlobalSearch() {
  const searchTerm = document
    .getElementById("globalSearch")
    .value.trim();

  if (!searchTerm) {
    notify("Type something to search for.");
    return;
  }

  // Reset event filter so matching results are not hidden.
  activeEventFilter = "all";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  renderEvents();

  // Search clubs using the same term.
  document.getElementById("clubSearch").value = searchTerm;
  activeClubFilter = "all";

  document.querySelectorAll(".club-filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.clubFilter === "all"
    );
  });

  renderClubs();

  const matchingEvents = events.filter(event =>
    `${event.title} ${event.category} ${event.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  ).length;

  const matchingClubs = clubs.filter(club =>
    `${club.name} ${club.category} ${club.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  ).length;

  document.getElementById("searchHint").textContent =
    `Found ${matchingEvents} matching event(s) and ${matchingClubs} matching organisation(s).`;

  document.getElementById("events").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("searchButton").addEventListener("click", runGlobalSearch);

document.getElementById("globalSearch").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    runGlobalSearch();
  }
});

// ---------------------------------------------
// 13. INITIAL PAGE RENDER
// ---------------------------------------------

renderEvents();
renderClubs();
renderDashboard();
