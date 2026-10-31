// Handwerkerprogramm – Landingpage
// Kein Tracking, keine Cookies, kein Speicher im Browser.
// Das Skript blendet Abschnitte beim Scrollen ein und startet das Handy-Video erst, wenn es sichtbar ist.

const items = document.querySelectorAll('.reveal');

if (!('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => observer.observe(el));

  // Das Video läuft einmal durch und bleibt dann stehen (keine Endlosschleife).
  // Auf kleinen Handys bleibt es beim Standbild, das spart rund 1 MB.
  const video = document.querySelector('.phone video');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gross = window.matchMedia('(min-width: 641px)').matches;
  if (video && !reduce && gross) {
    new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !video.ended) video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.3 },
    ).observe(video);
  }
}
