// Border under the sticky header once the page scrolls.
(function () {
  var bar = document.querySelector(".topbar");
  if (!bar) return;
  var onScroll = function () { bar.classList.toggle("is-scrolled", window.scrollY > 8); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Hero: play the example agent run once, step by step.
(function () {
  var card = document.querySelector(".agent");
  if (!card) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var status = card.querySelector("[data-status]");
  var steps = Array.prototype.slice.call(card.querySelectorAll(".agent-steps li"));

  function finish() {
    card.classList.add("is-finished");
    if (status) { status.textContent = "Needs your OK"; status.classList.add("is-waiting"); }
  }
  if (reduce || !steps.length) { finish(); return; }

  var i = 0;
  function next() {
    if (i > 0) { steps[i - 1].classList.remove("is-active"); steps[i - 1].classList.add("is-done"); }
    if (i >= steps.length) { finish(); return; }
    steps[i].classList.add("is-active");
    i += 1;
    setTimeout(next, i === 1 ? 900 : 1100);
  }

  var started = false;
  function start() { if (!started) { started = true; setTimeout(next, 500); } }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { start(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(card);
  } else { start(); }
})();
