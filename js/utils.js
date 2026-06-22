/*
 * Brand Builder — Utility helpers
 * Year stamp, team avatar initials
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Year stamps
  var y = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = y;
  });

  // Team avatar initials
  document.querySelectorAll(".avatar[data-name]").forEach(function (el) {
    var parts = el.dataset.name.trim().split(/\s+/);
    var ini = (parts[0] ? parts[0][0] : "") + (parts.length > 1 ? parts[parts.length - 1][0] : "");
    el.textContent = ini.toUpperCase();
  });
});
