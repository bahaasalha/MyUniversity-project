// Handler function
const nav = document.querySelector(".navbar");
const handle = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav-link");
    const logo = document.querySelector(".navbar-brand");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handle.bind(0.5));
nav.addEventListener("mouseout", handle.bind(1));

// Smooth Scroll
const btnScroll = document.querySelector(".btn--scroll");
const section1 = document.querySelector(".header");
btnScroll.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
//Intersection Observer
const header = document.querySelector(".header");
const sectioAbout = document.querySelector(".about");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries; // if we have one observer
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const Observerheader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // The apperance of the elemetnt
  rootMargin: `-${navHeight}px`, //margin before the sectoin
});
Observerheader.observe(header);

//Revealing Elements on scroll
const sections = document.querySelectorAll(".section");
const revealScroll = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const observerScroll = new IntersectionObserver(revealScroll, {
  root: null,
  threshold: 0.15,
});
sections.forEach((el) => {
  observerScroll.observe(el);
  el.classList.add("section--hidden");
});
// Progress Bar
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = function (entries, observer) {
  entries.forEach(entry => {
    const { target } = entry;
    const value = target.getAttribute('aria-valuenow');
    if (!entry.isIntersecting) target.style.width = 0;
    else {
    target.style.width = `${value}%`;
    observer.unobserve(target);}
  });
};

const observeProgress = new IntersectionObserver(animateProgress, {
  root: null,
  threshold: 0,
});

progressBars.forEach(bar => observeProgress.observe(bar));
