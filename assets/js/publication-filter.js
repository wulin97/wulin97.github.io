(function () {
  "use strict";

  document.querySelectorAll(".publications").forEach(function (section) {
    var filters = section.querySelector(".publication-filters");
    var entries = Array.from(section.querySelectorAll("[data-publication-id]"));
    if (!filters || !entries.length) return;

    var buttons = [];
    var papers = new Map();
    var tags = new Map();
    var status = section.querySelector("[data-publication-status]");
    var authorRows = Array.from(section.querySelectorAll(".publication-card__author-row"));

    authorRows.forEach(function (row) {
      var toggle = row.querySelector("button");
      toggle.addEventListener("click", function () {
        var expanded = row.classList.toggle("authors-expanded");
        toggle.setAttribute("aria-expanded", String(expanded));
        toggle.setAttribute("aria-label", expanded ? "Collapse author list" : "Expand author list");
        toggle.textContent = expanded ? "▼" : "▶";
      });
    });

    function refreshAuthors() {
      authorRows.forEach(function (row) {
        if (!row.getClientRects().length) return;
        var authors = row.querySelector(".publication-card__authors");
        var expanded = row.classList.contains("authors-expanded");
        row.classList.remove("authors-expanded");
        row.classList.add("authors-collapsible");
        var overflow = authors.scrollWidth > authors.clientWidth + 1;
        row.classList.toggle("authors-collapsible", overflow);
        row.classList.toggle("authors-expanded", expanded);
        row.querySelector("button").hidden = !overflow;
      });
    }

    var resizeFrame;
    function scheduleAuthorRefresh() {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(refreshAuthors);
    }
    window.addEventListener("resize", scheduleAuthorRefresh, { passive: true });
    if (document.fonts) document.fonts.ready.then(scheduleAuthorRefresh);

    entries.forEach(function (entry) {
      var id = entry.dataset.publicationId;
      if (!papers.has(id)) papers.set(id, new Set());
      (entry.dataset.tags || "").split(",").forEach(function (tag) {
        var label = tag.trim();
        if (!label) return;
        var key = label.toLowerCase();
        papers.get(id).add(key);
        if (!tags.has(key)) tags.set(key, label);
      });
    });

    function matches(id, tag) {
      return tag === null || papers.get(id).has(tag);
    }

    function addButton(tag, label) {
      var total = Array.from(papers.keys()).filter(function (id) {
        return matches(id, tag);
      }).length;
      var button = document.createElement("button");
      button.type = "button";
      button.dataset.filter = tag === null ? "all" : tag;
      button.setAttribute("aria-pressed", String(tag === null));
      button.appendChild(document.createTextNode(label + " "));
      var badge = document.createElement("span");
      badge.className = "publication-filter-count";
      badge.textContent = total;
      button.appendChild(badge);
      filters.appendChild(button);
      buttons.push(button);

      button.addEventListener("click", function () {
        entries.forEach(function (entry) {
          entry.hidden = !matches(entry.dataset.publicationId, tag);
        });
        buttons.forEach(function (item) {
          item.setAttribute("aria-pressed", String(item === button));
        });
        if (status) {
          status.textContent = label + ": " + total + " publication" + (total === 1 ? "" : "s") + ".";
        }
        scheduleAuthorRefresh();
      });
    }

    addButton(null, "All");
    tags.forEach(function (label, tag) {
      addButton(tag, label);
    });

    // Without JavaScript, all papers remain readable and the controls stay hidden.
    filters.hidden = false;
    refreshAuthors();
  });
}());
