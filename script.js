(() => {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const apply = (value) => {
    theme = value;
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      toggle.textContent = theme === 'dark' ? '\u2600' : '\u25D0';
    }
  };
  apply(theme);
  if (toggle) toggle.addEventListener('click', () => apply(theme === 'dark' ? 'light' : 'dark'));
})();
