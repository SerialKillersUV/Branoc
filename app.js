(() => {
  'use strict';
  const config = window.BRANOC_CONFIG || {};
  document.querySelectorAll('[data-link]').forEach(link => {
    const value = config[link.dataset.link];
    if (typeof value === 'string' && /^https:\/\//.test(value)) link.href = value;
  });
  document.querySelectorAll('[data-server]').forEach(node => {
    if (config.teamspeak) node.textContent = config.teamspeak;
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(node => {
      node.classList.add('will-reveal');
      observer.observe(node);
    });
  }
  const progress = document.querySelector('.reading-progress');
  const backTop = document.querySelector('.back-top');
  let scheduled = false;
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${height > 0 ? Math.min(1, window.scrollY / height) : 0})`;
      backTop.hidden = window.scrollY < 600;
      scheduled = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
  backTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth'}));
  let toastTimer;
  function toast(message) {
    const node = document.querySelector('.toast');
    node.textContent = message;
    node.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('visible'), 3500);
  }
  document.querySelector('.copy-server')?.addEventListener('click', async () => {
    const address = document.querySelector('[data-server]').textContent;
    try {
      await navigator.clipboard.writeText(address);
      toast('Dirección de TeamSpeak copiada.');
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('[data-server]'));
      selection.removeAllRanges();
      selection.addRange(range);
      toast('Dirección seleccionada. Copia el texto con el menú de tu dispositivo.');
    }
  });
})();
