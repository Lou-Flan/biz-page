// Theme cycle: light → dark → disco. Persists choice in localStorage.
{
  const themes = ['light', 'dark', 'disco'];
  const icons = { light: '☀', dark: '☾', disco: '✨' };

  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const iconEl = btn?.querySelector('.icon');
  const labelEl = btn?.querySelector('.label');

  const paint = (theme) => {
    root.dataset.theme = theme;
    if (iconEl) iconEl.textContent = icons[theme];
    if (labelEl) labelEl.textContent = theme;
    btn?.setAttribute('aria-label', `Theme: ${theme}. Activate to cycle.`);
  };

  const current = root.dataset.theme;
  paint(themes.includes(current) ? current : 'light');

  btn?.addEventListener('click', () => {
    const cur = root.dataset.theme ?? 'light';
    const next = themes[(themes.indexOf(cur) + 1) % themes.length];
    paint(next);
    try {
      localStorage.setItem('theme', next);
    } catch { /* private mode — silently skip */ }
  });
}
