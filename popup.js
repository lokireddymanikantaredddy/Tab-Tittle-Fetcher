document.getElementById('fetch-title').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const titleDisplay = document.getElementById('title-display');
  if (tab && tab.title) {
    titleDisplay.textContent = tab.title;
  } else {
    titleDisplay.textContent = 'Unable to fetch title.';
  }
}); 