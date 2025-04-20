export default function scrollToSection(selector: string) {
  const element = document.querySelector(selector);

  if (!element || !(element instanceof HTMLElement)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        element.focus();
        if (!element.getAttribute("tabindex")) {
          element.setAttribute("tabindex", "-1");
          element.style.outline = "none";
        }
        obs.disconnect();
      }
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  observer.observe(element);
  element.scrollIntoView({ behavior: "smooth" });
}
