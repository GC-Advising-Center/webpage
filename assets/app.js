const siteContent = window.SITE_CONTENT;

if (!siteContent) {
  throw new Error("SITE_CONTENT is missing. Check content/site-content.js.");
}

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const setText = (id, text) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
};

const renderMeta = () => {
  const container = document.getElementById("siteMeta");
  siteContent.heroMeta.forEach((item) => {
    const card = createElement("div", "meta-card fade-in");
    const label = createElement("p", "meta-label", item.label);
    const value = createElement("p", "meta-value", item.value);
    card.append(label, value);
    container.append(card);
  });
};

const renderQuickLinks = () => {
  const container = document.getElementById("quickLinks");
  siteContent.quickLinks.forEach((item) => {
    const link = createElement("a", "quick-link fade-in");
    link.href = item.href;
    link.target = item.external ? "_blank" : "_self";
    link.rel = item.external ? "noreferrer" : "";

    const title = createElement("div", "quick-link__title", item.title);
    const text = createElement("p", "quick-link__text", item.description);
    const arrow = createElement("div", "quick-link__arrow", item.external ? "Open link" : "View section");
    link.append(title, text, arrow);
    container.append(link);
  });
};

const renderDutySchedule = () => {
  const container = document.getElementById("dutySchedule");
  siteContent.dutySchedule.forEach((item) => {
    const card = createElement("article", "card fade-in");
    const titleRow = createElement("div", "card__title-row");
    const title = createElement("h3", "card__title", item.week);
    const slot = createElement("span", "pill", item.slot);
    titleRow.append(title, slot);

    const body = createElement("p", "card__body", item.summary);
    const tags = createElement("ul", "tag-list");
    item.people.forEach((person) => {
      tags.append(createElement("li", "", person));
    });

    card.append(titleRow, body, tags);
    container.append(card);
  });
};

const renderPiazza = () => {
  const container = document.getElementById("piazzaInfo");
  siteContent.piazza.forEach((item) => {
    const card = createElement("article", "card fade-in");
    const titleRow = createElement("div", "card__title-row");
    const title = createElement("h3", "card__title", item.title);
    titleRow.append(title);
    if (item.badge) {
      titleRow.append(createElement("span", "pill", item.badge));
    }

    const body = createElement("p", "card__body", item.description);
    card.append(titleRow, body);

    if (item.tags?.length) {
      const tags = createElement("ul", "tag-list");
      item.tags.forEach((tag) => {
        tags.append(createElement("li", "", tag));
      });
      card.append(tags);
    }

    container.append(card);
  });
};

const renderAdvisors = () => {
  const container = document.getElementById("advisorList");
  siteContent.advisors.forEach((item) => {
    const card = createElement("article", "card fade-in");
    const titleRow = createElement("div", "card__title-row");
    const title = createElement("h3", "card__title");

    if (item.link) {
      const link = createElement("a", "advisor-link", item.name);
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noreferrer";
      title.append(link);
    } else {
      title.textContent = item.name;
    }

    titleRow.append(title, createElement("span", "pill", item.role));

    const body = createElement("p", "card__body", item.bio);
    const contacts = createElement("ul", "contact-list");
    item.contacts.forEach((contact) => {
      const entry = createElement("li");
      if (contact.href) {
        const link = createElement("a", "");
        link.href = contact.href;
        link.target = contact.href.startsWith("mailto:") ? "_self" : "_blank";
        link.rel = contact.href.startsWith("mailto:") ? "" : "noreferrer";
        link.textContent = contact.label;
        entry.append(link);
      } else {
        entry.textContent = contact.label;
      }
      contacts.append(entry);
    });

    card.append(titleRow, body, contacts);
    container.append(card);
  });
};

setText("siteTagline", siteContent.site.tagline);
setText("siteTitle", siteContent.site.title);
setText("siteDescription", siteContent.site.description);

renderMeta();
renderQuickLinks();
renderDutySchedule();
renderPiazza();
renderAdvisors();
