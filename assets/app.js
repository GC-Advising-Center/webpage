const siteContent = window.SITE_CONTENT;

if (!siteContent) {
  throw new Error("SITE_CONTENT is missing. Check content/site-content.js.");
}

const pageType = document.body.dataset.page || "home";
const isBilingual = (value) => value && typeof value === "object" && "zh" in value && "en" in value;
let materialsCache = null;

const RESOURCE_LABELS = {
  "预告推送": { zh: "预告推送", en: "Preview Post" },
  "分享会回放": { zh: "分享会回放", en: "Recording" },
  "资料存档": { zh: "资料存档", en: "Archive" },
  "共享文档": { zh: "共享文档", en: "Shared Document" },
  "回顾推送": { zh: "回顾推送", en: "Recap Post" },
  "总结推送": { zh: "总结推送", en: "Summary Post" },
  "推送链接": { zh: "推送链接", en: "Post Link" },
};

const TITLE_FALLBACKS = {
  "夏季学期高阶课workshop": {
    zh: "夏季学期高阶课工作坊",
    en: "Summer Advanced Courses Workshop",
  },
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined && text !== null && !isBilingual(text)) {
    element.textContent = text;
  }
  return element;
};

const getById = (id) => document.getElementById(id);

const fillText = (element, value, options = {}) => {
  if (!element) {
    return;
  }

  const { inline = false } = options;
  element.textContent = "";

  if (isBilingual(value)) {
    const wrapper = createElement("span", inline ? "bilingual bilingual--inline" : "bilingual");
    wrapper.append(
      createElement("span", "bilingual__zh", value.zh),
      createElement("span", "bilingual__en", value.en),
    );
    element.append(wrapper);
    return;
  }

  if (value !== undefined && value !== null) {
    element.textContent = value;
  }
};

const createContentElement = (tag, className, value, options = {}) => {
  const element = createElement(tag, className);
  fillText(element, value, options);
  return element;
};

const setText = (id, value, options = {}) => {
  fillText(getById(id), value, options);
};

const getResourceLabel = (label) => RESOURCE_LABELS[label] || { zh: label, en: label };

const parseTitlePair = (rawTitle) => {
  const cleanTitle = rawTitle.replace(/<[^>]+>/g, " ").trim();
  const matched = cleanTitle.match(/^(.*?)\s*(?:\|\s*|\-\s*)\*([^*]+)\*\s*$/);
  if (matched) {
    return {
      zh: matched[1].trim(),
      en: matched[2].trim(),
    };
  }

  return TITLE_FALLBACKS[cleanTitle] || {
    zh: cleanTitle,
    en: cleanTitle,
  };
};

const parseNoteSuffix = (suffix) => {
  const trimmed = suffix.trim();
  if (!trimmed) {
    return null;
  }

  return {
    zh: trimmed,
    en: trimmed.replace("提取码", "Code"),
  };
};

const parseWorkshopMarkdown = (markdown) => {
  const items = [];
  const lines = markdown.split(/\r?\n/);
  let currentItem = null;

  const pushCurrentItem = () => {
    if (!currentItem) {
      return;
    }

    const availableLinks = currentItem.links.filter((entry) => entry.href);

    items.push({
      week: currentItem.date,
      title: currentItem.title,
      links: availableLinks.map((entry) => ({
        label: entry.note
          ? {
              zh: `${entry.label.zh}（${entry.note.zh}）`,
              en: `${entry.label.en} (${entry.note.en})`,
            }
          : entry.label,
        href: entry.href,
        external: true,
      })),
    });

    currentItem = null;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return;
    }

    const headingMatch = trimmed.match(/^###\s+(\d{4}\/\d{1,2}\/\d{1,2})\s*<br>(.+)$/i);
    if (headingMatch) {
      pushCurrentItem();
      currentItem = {
        date: headingMatch[1],
        title: parseTitlePair(headingMatch[2]),
        links: [],
      };
      return;
    }

    if (!currentItem) {
      return;
    }

    const linkedResource = trimmed.match(/^\+\s+\[(.+?)\]\((.*?)\)\s*(.*)$/);
    if (linkedResource) {
      currentItem.links.push({
        label: getResourceLabel(linkedResource[1].trim()),
        href: linkedResource[2].trim(),
        note: parseNoteSuffix(linkedResource[3] || ""),
      });
      return;
    }

    const plainResource = trimmed.match(/^\+\s+(.+)$/);
    if (plainResource) {
      currentItem.links.push({
        label: getResourceLabel(plainResource[1].trim()),
        href: "",
        note: null,
      });
    }
  });

  pushCurrentItem();
  return items;
};

const loadMaterials = async () => {
  if (materialsCache) {
    return materialsCache;
  }

  const response = await fetch(siteContent.pastMaterials.source);
  if (!response.ok) {
    throw new Error(`Failed to load materials archive: ${response.status}`);
  }

  const markdown = await response.text();
  materialsCache = parseWorkshopMarkdown(markdown);
  return materialsCache;
};

const renderBrand = () => {
  setText("brandText", siteContent.brand.text);
};

const renderNav = () => {
  const nav = getById("siteNav");
  if (!nav) {
    return;
  }

  siteContent.navigation.forEach((item) => {
    const link = createElement("a", item.id === pageType ? "nav-link nav-link--active" : "nav-link");
    link.href = item.href;
    fillText(link, item.label, { inline: true });
    nav.append(link);
  });
};

const renderMaterialCards = (items, targetId, limit) => {
  const container = getById(targetId);
  if (!container) {
    return;
  }

  container.textContent = "";
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  visibleItems.forEach((item) => {
    const card = createElement("article", "card material-card fade-in");
    const titleRow = createElement("div", "card__title-row");
    titleRow.append(
      createContentElement("h3", "card__title", item.title),
      createElement("span", "pill", item.week),
    );

    const links = createElement("div", "material-links");
    item.links.forEach((entry) => {
      const anchor = createElement("a", "text-link");
      anchor.href = entry.href;
      anchor.target = entry.external ? "_blank" : "_self";
      anchor.rel = entry.external ? "noreferrer" : "";
      fillText(anchor, entry.label, { inline: true });
      links.append(anchor);
    });

    card.append(titleRow, links);
    container.append(card);
  });
};

const renderMaterialsError = (targetId) => {
  const container = getById(targetId);
  if (!container) {
    return;
  }

  container.textContent = "";
  const card = createElement("article", "card material-card");
  card.append(
    createContentElement("h3", "card__title", siteContent.pastMaterials.loadError.title),
    createContentElement("p", "card__body", siteContent.pastMaterials.loadError.body),
  );
  container.append(card);
};

const renderAdvisorCards = (targetId, limit) => {
  const container = getById(targetId);
  if (!container) {
    return;
  }

  container.textContent = "";
  const visibleItems = typeof limit === "number" ? siteContent.advisors.items.slice(0, limit) : siteContent.advisors.items;

  visibleItems.forEach((item) => {
    const card = createElement("article", "card advisor-card fade-in");
    const titleRow = createElement("div", "card__title-row");
    titleRow.append(
      createElement("h3", "card__title", item.name),
      createContentElement("span", "pill", item.role, { inline: true }),
    );

    const email = createElement("a", "text-link", item.email);
    email.href = `mailto:${item.email}`;

    const expertiseTitle = createContentElement("p", "detail-label", siteContent.advisors.expertiseLabel, { inline: true });
    const expertiseList = createElement("ul", "tag-list");
    item.expertise.forEach((entry) => {
      expertiseList.append(createContentElement("li", "", entry, { inline: true }));
    });

    card.append(titleRow, email, expertiseTitle, expertiseList, createContentElement("p", "card__body", item.bio));
    container.append(card);
  });
};

const renderSchedule = () => {
  const table = getById("dutyScheduleTable");
  if (!table) {
    return;
  }

  setText("scheduleIntro", siteContent.dutySchedule.intro);
  table.textContent = "";

  const thead = createElement("thead");
  const headRow = createElement("tr");
  siteContent.dutySchedule.columns.forEach((column) => {
    headRow.append(createContentElement("th", "", column, { inline: true }));
  });
  thead.append(headRow);

  const tbody = createElement("tbody");
  siteContent.dutySchedule.rows.forEach((row) => {
    const tr = createElement("tr");
    row.forEach((value) => {
      tr.append(createContentElement("td", "", value, { inline: true }));
    });
    tbody.append(tr);
  });

  table.append(thead, tbody);
};

const renderPiazza = () => {
  const summary = getById("piazzaSummary");
  const links = getById("piazzaLinks");
  const notes = getById("piazzaNotes");
  if (!summary || !links || !notes) {
    return;
  }

  summary.append(
    createContentElement("p", "card__body", siteContent.piazza.description),
    createContentElement("p", "integration-note", siteContent.piazza.integrationNote),
  );

  siteContent.piazza.links.forEach((item) => {
    const anchor = createElement("a", item.variant === "ghost" ? "button button--ghost" : "button");
    anchor.href = item.href;
    anchor.target = item.external ? "_blank" : "_self";
    anchor.rel = item.external ? "noreferrer" : "";
    fillText(anchor, item.label);
    links.append(anchor);
  });

  siteContent.piazza.notes.forEach((item) => {
    const note = createElement("article", "card note-card fade-in");
    note.append(createContentElement("h3", "card__title", item.title), createContentElement("p", "card__body", item.body));
    notes.append(note);
  });
};

const renderPageHero = () => {
  const pageContent = siteContent.pages[pageType];
  if (!pageContent) {
    return;
  }

  setText("pageKicker", pageContent.kicker, { inline: true });
  setText("pageTitle", pageContent.title);
  setText("pageDescription", pageContent.description);
};

const renderHomeEntryCards = () => {
  const container = getById("homeEntryCards");
  if (!container) {
    return;
  }

  container.textContent = "";

  siteContent.homeCards.forEach((item) => {
    const card = createElement("a", "overview-card fade-in");
    card.href = item.href;
    card.append(
      createContentElement("p", "meta-label", item.kicker, { inline: true }),
      createContentElement("h2", "card__title", item.title),
      createContentElement("p", "quick-link__arrow", item.cta, { inline: true }),
    );
    container.append(card);
  });
};

const renderHome = () => {
  setText("siteTagline", siteContent.site.tagline, { inline: true });
  setText("siteTitle", siteContent.site.title);
  setText("siteDescription", siteContent.site.description);
  renderHomeEntryCards();
};

const renderMaterialsPage = async () => {
  renderPageHero();
  setText("materialsArchiveKicker", siteContent.pages.materials.sectionKicker, { inline: true });
  setText("materialsArchiveTitle", siteContent.pages.materials.sectionTitle);

  try {
    const items = await loadMaterials();
    renderMaterialCards(items, "materialsArchive");
  } catch (error) {
    renderMaterialsError("materialsArchive");
    console.error(error);
  }
};

const renderAdvisorsPage = () => {
  renderPageHero();
  setText("advisorDirectoryKicker", siteContent.pages.advisors.sectionKicker, { inline: true });
  setText("advisorDirectoryTitle", siteContent.pages.advisors.sectionTitle);
  renderAdvisorCards("advisorList");
};

const renderSchedulePage = () => {
  renderPageHero();
  setText("scheduleTableKicker", siteContent.pages.schedule.sectionKicker, { inline: true });
  setText("scheduleTableTitle", siteContent.pages.schedule.sectionTitle);
  renderSchedule();
};

const renderPiazzaPage = () => {
  renderPageHero();
  setText("piazzaSectionKicker", siteContent.pages.piazza.sectionKicker, { inline: true });
  setText("piazzaSectionTitle", siteContent.pages.piazza.sectionTitle);
  renderPiazza();
};

const init = async () => {
  renderBrand();
  renderNav();

  if (pageType === "materials") {
    await renderMaterialsPage();
  } else if (pageType === "advisors") {
    renderAdvisorsPage();
  } else if (pageType === "schedule") {
    renderSchedulePage();
  } else if (pageType === "piazza") {
    renderPiazzaPage();
  } else {
    renderHome();
  }
};

init();

