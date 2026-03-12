// ============================================
// RED HERRING FALLACY — Main JS
// Auto light/dark mode: light 06:00–18:00, dark 18:00–06:00
// Manual override via toggle button
// ============================================

// ── Theme Logic ─────────────────────────────

function getAutoTheme() {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
}

function applyTheme(theme, isManual = false) {
  const html = document.documentElement;
  const btn = document.getElementById('theme-btn');

  if (theme === 'light') {
    html.classList.add('light-mode');
    if (btn) btn.innerHTML = '☀️ LIGHT';
  } else {
    html.classList.remove('light-mode');
    if (btn) btn.innerHTML = '🌙 DARK';
  }

  if (isManual) {
    // Store manual override with expiry — clears at next auto-switch boundary
    sessionStorage.setItem('theme-override', theme);
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.contains('light-mode');
  applyTheme(isLight ? 'dark' : 'light', true);
}

function initTheme() {
  const override = sessionStorage.getItem('theme-override');
  const theme = override || getAutoTheme();
  applyTheme(theme);
}

// Auto-switch: check every minute, apply if hour boundary crossed
function scheduleAutoSwitch() {
  setInterval(() => {
    // Only auto-switch if no manual override in this session
    if (!sessionStorage.getItem('theme-override')) {
      applyTheme(getAutoTheme());
    }
  }, 60 * 1000); // check every minute

  // Clear override at 06:00 and 18:00 so auto resumes
  setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    if ((h === 6 || h === 18) && m === 0) {
      sessionStorage.removeItem('theme-override');
      applyTheme(getAutoTheme());
    }
  }, 60 * 1000);
}

// ── Init ─────────────────────────────────────
initTheme();
scheduleAutoSwitch();

// ── Live date in header ──────────────────────
const dateEl = document.getElementById('live-date');
if (dateEl) {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
}

// ── Subscribe form handler ───────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('.subscribe-input');
  const btn = form.querySelector('.subscribe-btn');
  const email = input.value;

  btn.textContent = 'Subscribed ✓';
  btn.style.background = 'var(--text-primary)';
  btn.style.color = 'var(--bg)';
  input.value = '';
  input.placeholder = `${email} — you're in.`;

  setTimeout(() => {
    btn.textContent = 'Subscribe Free';
    btn.style.background = '';
    btn.style.color = '';
    input.placeholder = 'your@email.com';
  }, 4000);
}

// ── Stagger post card animations ─────────────
document.querySelectorAll('.post-card').forEach((card, i) => {
  card.style.setProperty('--i', i);
});

// ── Podcast play button ───────────────────────
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isPlaying = btn.textContent === '❚❚';
    btn.textContent = isPlaying ? '▶' : '❚❚';
  });
});
