/*
 * Brand Builder — Utility helpers
 * Year stamp, team avatar initials
 */

/* Brand Builder — shared behaviour. Every feature is guarded by element presence. */
(function () {
  "use strict";

  // Year stamps
  var y = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = y; });

  // Mobile nav
  var nav = document.getElementById("nav");
  var toggle = document.querySelector(".nav__toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Team avatar initials
  document.querySelectorAll(".avatar[data-name]").forEach(function (el) {
    var p = el.dataset.name.trim().split(/\s+/);
    var ini = (p[0] ? p[0][0] : "") + (p.length > 1 ? p[p.length - 1][0] : "");
    el.textContent = ini.toUpperCase();
  });
