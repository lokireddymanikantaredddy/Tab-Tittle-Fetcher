document.getElementById('start').addEventListener('click', async () => {
  const links = document.getElementById('links').value
    .split('\n')
    .map(link => link.trim())
    .filter(link => link);

  if (links.length === 0) {
    alert('Please enter at least one LinkedIn profile URL');
    return;
  }

  console.log('Starting extraction for', links.length, 'profiles');
  
  // Send message to background script to handle the process
  chrome.runtime.sendMessage({
    action: 'startExtraction',
    links: links
  }, (response) => {
    if (response && response.status === 'started') {
      console.log('Background script started processing profiles');
      // Clear the textarea after starting
      document.getElementById('links').value = '';
  }
  });
}); 