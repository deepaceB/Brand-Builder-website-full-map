/*
 * Brand Builder — Main interactions
 * Converter, mobile nav, blog filter, subscribe, scroll reveal
 */

// Home: Idea -> product converter
  var elFrom = document.getElementById("convFrom");
  if (elFrom) {
    var stages = [
      { from: "An idea",         to: "A validated MVP",           time: "≈ 6–10 weeks", steps: "Discovery · UX/UI · Build · Launch" },
      { from: "A prototype",     to: "A production-ready product", time: "≈ 4–8 weeks",  steps: "Architecture · Build · QA · Deploy" },
      { from: "A live product",  to: "A platform that scales",     time: "Ongoing",      steps: "Features · Data · Infra · Growth" },
      { from: "Just exploring",  to: "A clear product roadmap",    time: "≈ 1–2 weeks",  steps: "Strategy · Scope · Estimate" }
    ];
    var current = 0;
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var elTo = document.getElementById("convTo");
    var elTime = document.getElementById("convTime");
    var elSteps = document.getElementById("convSteps");
    function render(i) {
      var s = stages[i]; current = i;
      elFrom.textContent = s.from; elTo.textContent = s.to;
      elTime.textContent = s.time; elSteps.textContent = s.steps;
      chips.forEach(function (c) { c.setAttribute("aria-pressed", +c.dataset.stage === i ? "true" : "false"); });
    }
    chips.forEach(function (c) { c.addEventListener("click", function () { render(+c.dataset.stage); }); });
    var swap = document.getElementById("convSwap");
    if (swap) swap.addEventListener("click", function () { render((current + 1) % stages.length); });
  }

  // Blog: category filter
  var filterWrap = document.querySelector(".filter");
  if (filterWrap) {
    var fchips = Array.prototype.slice.call(filterWrap.querySelectorAll("button"));
    var posts = Array.prototype.slice.call(document.querySelectorAll(".post"));
    var empty = document.querySelector(".posts-empty");
    fchips.forEach(function (c) {
      c.addEventListener("click", function () {
        var cat = c.dataset.cat;
        fchips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        var shown = 0;
        posts.forEach(function (p) {
          var show = cat === "all" || (" " + p.dataset.cats + " ").indexOf(" " + cat + " ") > -1;
          p.classList.toggle("hide", !show);
          if (show) shown++;
        });
        if (empty) empty. style.display = shown ? "none": "block";
      });
    });
  }

  // Subscribe (demo only)
  var sf = document.getElementById("subForm");
  if (sf) {
    sf.addEventListener("submit", function (e) {
      e.preventDefault();
      sf.innerHTML = '<p class="sub-thanks">Thanks — we&rsquo;ll be in touch. \u2728</p>';
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }
})();
