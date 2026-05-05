const FEATURES = [
  "Autenticação (placeholder)",
  "Dashboard de progresso",
  "Plano alimentar diário",
  "Registro de água",
  "Sync com backend",
  "Push notifications"
];

const featuresEl = document.querySelector('#features');
FEATURES.forEach((feature) => {
  const item = document.createElement('div');
  item.className = 'pill';
  item.textContent = feature;
  featuresEl.appendChild(item);
});

const input = document.querySelector('#meal');
const status = document.querySelector('#status');
const save = document.querySelector('#save');
const KEY = 'nutriaura:meal';

function load() {
  const saved = localStorage.getItem(KEY);
  if (saved) {
    input.value = saved;
    status.textContent = `Salvo: ${saved}`;
  }
}

save.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;
  localStorage.setItem(KEY, value);
  status.textContent = `Salvo: ${value}`;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('/service-worker.js');
      console.info('Service Worker registrado');
    } catch (err) {
      console.error('Erro ao registrar SW', err);
    }
  });
}

load();
