// Ablauf der Einrichtung: Die Linie zwischen den Schritten füllt sich beim Scrollen,
// ein Schritt gilt als erreicht, sobald sein Punkt die Lesehöhe passiert.
// Ohne Skript zeigt das CSS den Ablauf komplett gefüllt.

const liste = document.querySelector('[data-flow]');

if (liste) {
  const schritte = [...liste.children].map((li) => ({
    li,
    fill: li.querySelector('.flow-fill'),
    dot: li.querySelector('.flow-dot'),
  }));
  let geplant = false;

  const zeichnen = () => {
    geplant = false;
    // Lesehöhe: etwas unter der Mitte des Fensters
    const lesehoehe = window.innerHeight * 0.6;
    // Erst alles messen, dann schreiben: so rechnet der Browser das Layout nur einmal pro Bild.
    const masse = schritte.map(({ dot, fill }) => {
      const punkt = dot.getBoundingClientRect();
      const strecke = fill.parentElement.getBoundingClientRect();
      return { mitte: punkt.top + punkt.height / 2, oben: strecke.top, hoehe: strecke.height };
    });
    schritte.forEach(({ li, fill }, i) => {
      const m = masse[i];
      li.classList.toggle('on', m.mitte <= lesehoehe);
      if (m.hoehe > 0) {
        const anteil = Math.min(1, Math.max(0, (lesehoehe - m.oben) / m.hoehe));
        fill.style.transform = `scaleY(${anteil})`;
      }
    });
  };

  const planen = () => {
    if (!geplant) {
      geplant = true;
      requestAnimationFrame(zeichnen);
    }
  };

  // Nur mitrechnen, solange der Ablauf in der Nähe des Fensters ist.
  if ('IntersectionObserver' in window) {
    let aktiv = false;
    new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting === aktiv) return;
        aktiv = eintrag.isIntersecting;
        if (aktiv) window.addEventListener('scroll', planen, { passive: true });
        else window.removeEventListener('scroll', planen);
        // Auch beim Verlassen einmal zeichnen, damit schnelle Sprünge (Anker, Bild-runter) den Endstand zeigen.
        planen();
      },
      { rootMargin: '50% 0px' },
    ).observe(liste);
  } else {
    window.addEventListener('scroll', planen, { passive: true });
  }

  window.addEventListener('resize', planen, { passive: true });
  // Die Schritte blenden mit einer kleinen Verschiebung ein. Danach einmal neu messen, sonst stimmt der Stand nach einem Sprung nicht.
  liste.addEventListener('transitionend', planen);
  zeichnen();
}
