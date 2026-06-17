const siteContent = window.SITE_CONTENT;
const siteLanguage = window.SITE_LANGUAGE;

if (!siteContent) {
  throw new Error("SITE_CONTENT is missing. Check content/site-content.js.");
}

if (!siteLanguage) {
  throw new Error("SITE_LANGUAGE is missing. Check content/site-content.js.");
}

const pageType = document.body.dataset.page || "home";
let materialsCache = null;
const openAdvisorGroups = new Set();

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

const isLocalizedValue = (value) => siteLanguage.isLocalizedValue(value);

const resolveText = (value) => {
  if (value === undefined || value === null) {
    return "";
  }

  if (isLocalizedValue(value)) {
    const lang = siteLanguage.getCurrentLanguage();
    return value[lang] ?? value.zh ?? value.en ?? "";
  }

  return value;
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined && text !== null) {
    element.textContent = resolveText(text);
  }
  return element;
};

const getById = (id) => document.getElementById(id);

const fillText = (element, value) => {
  if (!element) {
    return;
  }

  const text = resolveText(value);
  element.textContent = text;

  if (text) {
    element.hidden = false;
    return;
  }

  element.hidden = true;
};

const createContentElement = (tag, className, value) => {
  const element = createElement(tag, className);
  fillText(element, value);
  return element;
};

const setText = (id, value) => {
  fillText(getById(id), value);
};

const toggleParentHidden = (id, ...values) => {
  const element = getById(id);
  if (!element || !element.parentElement) {
    return;
  }

  const hasContent = values.some((value) => Boolean(resolveText(value)));
  element.parentElement.hidden = !hasContent;
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

  nav.textContent = "";
  siteContent.navigation.forEach((item) => {
    const link = createElement("a", item.id === pageType ? "nav-link nav-link--active" : "nav-link");
    link.href = item.href;
    fillText(link, item.label);
    nav.append(link);
  });
};

const renderLanguageToggle = () => {
  const toggle = getById("langToggle");
  if (!toggle) {
    return;
  }

  const toggleContent = siteContent.languageToggle;
  fillText(toggle, toggleContent.label);
  toggle.setAttribute("aria-label", toggleContent.ariaLabel);
  toggle.onclick = () => {
    siteLanguage.toggleLanguage();
  };
};

const renderDocumentMetadata = () => {
  const brandText = resolveText(siteContent.brand.text);
  const pageContent = siteContent.pages[pageType];
  const title = pageType === "home"
    ? brandText
    : `${resolveText(pageContent?.title || brandText)} | ${brandText}`;
  const description = pageType === "home"
    ? resolveText(siteContent.site.description)
    : resolveText(pageContent?.description || siteContent.site.description);

  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", description);
  }
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
      fillText(anchor, entry.label);
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

const renderAdvisorAccordion = () => {
  const container = getById("accordionContainer");
  if (!container) {
    return;
  }

  container.textContent = "";

  siteContent.advisors.groups.forEach((group, index) => {
    const defaultExpanded = openAdvisorGroups.size === 0 && index === 0;
    const isExpanded = openAdvisorGroups.has(group.id) || defaultExpanded;

    if (defaultExpanded) {
      openAdvisorGroups.add(group.id);
    }

    const groupEl = createElement("section", `accordion-group${isExpanded ? " active" : ""}`);
    const headerEl = createElement("button", "accordion-header");
    headerEl.type = "button";
    headerEl.setAttribute("aria-expanded", isExpanded ? "true" : "false");

    const title = createElement("h3", "accordion-title");
    title.append(
      createContentElement("span", "accordion-title__text", group.title),
      createElement("span", "accordion-title__count", group.items.length),
    );

    const icon = createElement("span", "accordion-icon", "▼");
    icon.setAttribute("aria-hidden", "true");
    headerEl.append(title, icon);

    const contentEl = createElement("div", "accordion-content");
    const gridEl = createElement("div", "accordion-grid");

    group.items.forEach((item) => {
      const card = createElement("article", "card advisor-card fade-in");
      const titleRow = createElement("div", "card__title-row");
      titleRow.append(
        createElement("h3", "card__title", item.name),
        createElement("span", "pill", item.role),
      );

      const email = createElement("a", "advisor-card__email text-link", item.email);
      email.href = `mailto:${item.email}`;

      const expertiseTitle = createContentElement("p", "detail-label", siteContent.advisors.expertiseLabel);
      const expertiseList = createElement("ul", "tag-list");
      item.expertise.forEach((entry) => {
        expertiseList.append(createContentElement("li", "", entry));
      });

      card.append(
        titleRow,
        createContentElement("p", "card__body", item.bio),
        expertiseTitle,
        expertiseList,
        email,
      );

      gridEl.append(card);
    });

    contentEl.append(gridEl);
    groupEl.append(headerEl, contentEl);
    container.append(groupEl);

    headerEl.addEventListener("click", () => {
      const nextExpanded = !groupEl.classList.contains("active");
      groupEl.classList.toggle("active", nextExpanded);
      headerEl.setAttribute("aria-expanded", nextExpanded ? "true" : "false");

      if (nextExpanded) {
        openAdvisorGroups.add(group.id);
      } else {
        openAdvisorGroups.delete(group.id);
      }
    });
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
    headRow.append(createContentElement("th", "", column));
  });
  thead.append(headRow);

  const tbody = createElement("tbody");
  siteContent.dutySchedule.rows.forEach((row) => {
    const tr = createElement("tr");
    row.forEach((value) => {
      tr.append(createContentElement("td", "", value));
    });
    tbody.append(tr);
  });

  table.append(thead, tbody);
};

const renderPageHero = () => {
  const pageContent = siteContent.pages[pageType];
  if (!pageContent) {
    return;
  }

  setText("pageKicker", pageContent.kicker);
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
    card.target = item.external ? "_blank" : "_self";
    card.rel = item.external ? "noreferrer" : "";
    card.append(
      createContentElement("p", "meta-label", item.kicker),
      createContentElement("h2", "card__title", item.title),
      createContentElement("p", "card__body", item.body),
      createContentElement("p", "quick-link__arrow", item.cta),
    );
    container.append(card);
  });
};

const renderHome = () => {
  setText("siteTagline", siteContent.site.tagline);
  setText("siteTitle", siteContent.site.title);
  setText("siteDescription", siteContent.site.description);
  renderHomeEntryCards();
};

const renderMaterialsPage = async () => {
  renderPageHero();
  setText("materialsArchiveKicker", siteContent.pages.materials.sectionKicker);
  setText("materialsArchiveTitle", siteContent.pages.materials.sectionTitle);
  toggleParentHidden(
    "materialsArchiveTitle",
    siteContent.pages.materials.sectionKicker,
    siteContent.pages.materials.sectionTitle,
  );

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
  setText("advisorDirectoryKicker", siteContent.pages.advisors.sectionKicker);
  setText("advisorDirectoryTitle", siteContent.pages.advisors.sectionTitle);
  toggleParentHidden(
    "advisorDirectoryTitle",
    siteContent.pages.advisors.sectionKicker,
    siteContent.pages.advisors.sectionTitle,
  );
  renderAdvisorAccordion();
};

const renderSchedulePage = () => {
  renderPageHero();
  setText("scheduleTableKicker", siteContent.pages.schedule.sectionKicker);
  setText("scheduleTableTitle", siteContent.pages.schedule.sectionTitle);
  toggleParentHidden(
    "scheduleTableTitle",
    siteContent.pages.schedule.sectionKicker,
    siteContent.pages.schedule.sectionTitle,
  );
  renderSchedule();
};

const renderPage = async () => {
  renderDocumentMetadata();
  renderBrand();
  renderNav();
  renderLanguageToggle();

  if (pageType === "materials") {
    await renderMaterialsPage();
    return;
  }

  if (pageType === "advisors") {
    renderAdvisorsPage();
    return;
  }

  if (pageType === "schedule") {
    renderSchedulePage();
    return;
  }

  renderHome();
};

renderPage().catch((error) => {
  console.error(error);
});

window.addEventListener("site-language-change", () => {
  renderPage().catch((error) => {
    console.error(error);
  });
});
