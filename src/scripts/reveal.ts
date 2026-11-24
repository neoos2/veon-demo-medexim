// Motion and small enhancements. Content is visible without JS and with prefers-reduced-motion.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasIO = "IntersectionObserver" in window;

// [data-reveal] hook from the demo base
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
// Motion 1–2: devices step onto the floor, the floor line is drawn ([data-floor] → .is-on)
const floors = document.querySelectorAll<HTMLElement>("[data-floor]");

if (reduce || !hasIO) {
  items.forEach((el) => el.classList.add("is-visible"));
  floors.forEach((el) => el.classList.add("is-on"));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add(e.target.hasAttribute("data-floor") ? "is-on" : "is-visible");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });
  items.forEach((el) => io.observe(el));
  floors.forEach((el) => {
    // the first-screen row starts at once, on the next frame
    if (el.closest("#top")) requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-on")));
    else io.observe(el);
  });
}

// Motion 3: current step of the cycle (desktop only, no reduced motion)
const steps = document.querySelector<HTMLElement>("[data-steps]");
const wide = window.matchMedia("(min-width: 1024px)");
if (steps && hasIO && !reduce) {
  const list = Array.from(steps.querySelectorAll<HTMLElement>("[data-step]"));
  let stepIO: IntersectionObserver | null = null;
  const setCurrent = (el: HTMLElement) => list.forEach((s) => s.classList.toggle("is-current", s === el));
  const start = () => {
    if (!wide.matches) {
      stepIO?.disconnect(); stepIO = null;
      steps.removeAttribute("data-steps-on");
      return;
    }
    if (stepIO) return;
    steps.setAttribute("data-steps-on", "");
    setCurrent(list[0]);
    stepIO = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setCurrent(e.target as HTMLElement);
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    list.forEach((s) => stepIO!.observe(s));
  };
  start();
  wide.addEventListener("change", start);
}

// Motion 5: «Показати всі бренди»
const brandList = document.querySelector<HTMLElement>("[data-brands]");
const more = document.querySelector<HTMLButtonElement>("[data-brands-more]");
if (brandList && more && brandList.querySelector("[data-extra]")) {
  more.hidden = false;
  more.addEventListener("click", () => {
    const open = !brandList.classList.contains("is-all");
    brandList.classList.toggle("is-all", open);
    more.setAttribute("aria-expanded", String(open));
    more.textContent = open ? "Згорнути список" : "Показати всі бренди";
    if (!open) brandList.scrollIntoView({ block: "nearest" });
  });
}

// FutureLink notes never leave the screen: shift the note left when it would cross the right edge
const fitNote = (link: HTMLElement) => {
  const note = link.querySelector<HTMLElement>(".future-link__note");
  if (!note) return;
  note.style.marginLeft = "";
  const r = note.getBoundingClientRect();
  const over = r.right - (document.documentElement.clientWidth - 8);
  if (over > 0) note.style.marginLeft = `${-Math.ceil(over)}px`;
};
document.querySelectorAll<HTMLElement>(".future-link").forEach((link) => {
  link.addEventListener("pointerenter", () => fitNote(link));
  link.addEventListener("focus", () => fitNote(link));
});
