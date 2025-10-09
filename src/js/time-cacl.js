document.getElementById('timeBtn').addEventListener('click', () => {
  const m = parseInt(document.getElementById('minutes').value, 10);
  const out = document.getElementById('timeResult');

  if (isNaN(m)) {
    out.textContent = 'Введіть хвилини';
    return;
  }

  const totalSeconds = m * 60;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  out.textContent = `${days} дн. ${String(hours).padStart(2, '0')}:${String(
    mins
  ).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
});
