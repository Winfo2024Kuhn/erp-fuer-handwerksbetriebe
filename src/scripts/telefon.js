// Macht aus der geschützten Telefonnummer (siehe src/components/Telefon.astro) einen normalen tel:-Link.
for (const el of document.querySelectorAll('.tel-schutz[data-t]')) {
  const nummer = atob(el.dataset.t).split('').reverse().join('');
  const link = document.createElement('a');
  link.href = 'tel:' + nummer.replace(/[^+\d]/g, '');
  link.textContent = nummer;
  el.replaceChildren(link);
  el.removeAttribute('data-t');
}
