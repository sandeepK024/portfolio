// Animate header elements
gsap.from(".animate-title", { duration: 1.2, y: -50, opacity: 0, ease: "bounce.out" });
gsap.from(".animate-subtitle", { duration: 1, y: 30, opacity: 0, delay: 0.5 });

// Animate sections as they scroll into view
const sections = document.querySelectorAll("section");

sections.forEach((sec, index) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.3,
  });
});
