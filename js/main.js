/*
 * Brand Builder — Main interactions
 * Mobile nav, hero converter, blog filter, subscribe, scroll reveal
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ── Mobile nav toggle ──────────────────────────────────────────────────
  var nav    = document.getElementById("nav");
  var toggle = document.querySelector(".nav__toggle");
  var panel  = document.getElementById("navPanel");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close panel when a nav link is clicked
    if (panel) {
      panel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Close panel when clicking outside the nav
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ── Hero converter ─────────────────────────────────────────────────────
  var elFrom = document.getElementById("convFrom");
  if (elFrom) {
    var stages = [
      { from: "An idea",        to: "A validated MVP",            time: "≈ 6–10 weeks", steps: "Discovery · UX/UI · Build · Launch" },
      { from: "A prototype",    to: "A production-ready product", time: "≈ 4–8 weeks",  steps: "Architecture · Build · QA · Deploy" },
      { from: "A live product", to: "A platform that scales",     time: "Ongoing",      steps: "Features · Data · Infra · Growth" },
      { from: "Just exploring", to: "A clear product roadmap",    time: "≈ 1–2 weeks",  steps: "Strategy · Scope · Estimate" }
    ];
    var current = 0;
    var chips   = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var elTo    = document.getElementById("convTo");
    var elTime  = document.getElementById("convTime");
    var elSteps = document.getElementById("convSteps");

    function render(i) {
      var s = stages[i]; current = i;
      elFrom.textContent  = s.from;
      elTo.textContent    = s.to;
      elTime.textContent  = s.time;
      elSteps.textContent = s.steps;
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", +c.dataset.stage === i ? "true" : "false");
      });
    }

    chips.forEach(function (c) {
      c.addEventListener("click", function () { render(+c.dataset.stage); });
    });

    var swap = document.getElementById("convSwap");
    if (swap) {
      swap.addEventListener("click", function () {
        render((current + 1) % stages.length);
      });
    }
  }

  // ── Blog category filter ───────────────────────────────────────────────
  var filterWrap = document.querySelector(".filter");
  if (filterWrap) {
    var fchips = Array.prototype.slice.call(filterWrap.querySelectorAll("button"));
    var posts  = Array.prototype.slice.call(document.querySelectorAll(".post"));
    var empty  = document.querySelector(".posts-empty");

    fchips.forEach(function (c) {
      c.addEventListener("click", function () {
        var cat = c.dataset.cat;
        fchips.forEach(function (x) {
          x.setAttribute("aria-pressed", x === c ? "true" : "false");
        });
        var shown = 0;
        posts.forEach(function (p) {
          var show = cat === "all" || (" " + p.dataset.cats + " ").indexOf(" " + cat + " ") > -1;
          p.classList.toggle("hide", !show);
          if (show) shown++;
        });
        if (empty) empty.style.display = shown ? "none" : "block";
      });
    });
  }

  // ── Subscribe form (demo) ──────────────────────────────────────────────
  var sf = document.getElementById("subForm");
  if (sf) {
    sf.addEventListener("submit", function (e) {
      e.preventDefault();
      sf.innerHTML = '<p class="sub-thanks">Thanks — we\u2019ll be in touch. \u2728</p>';
    });
  }

  // ── Scroll reveal ──────────────────────────────────────────────────────
  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("in");
  });
});
