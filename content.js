console.log('content script loaded');

function extractProfileData() {
  // Name
  const name = document.querySelector('h1[class*="inline"][class*="break-words"]')?.innerText?.trim() || '';

  // About (get the longest span[aria-hidden="true"])
  const about = Array.from(document.querySelectorAll('span[aria-hidden="true"]'))
    .reduce((a, b) => (a.innerText.length > b.innerText.length ? a : b), {innerText: ''}).innerText.trim();

  // Connection count (e.g., "500+")
  let connectionCount = '';
  const connectionEl = document.querySelector('span.t-bold');
  if (connectionEl && connectionEl.innerText.match(/\d+/)) {
    connectionCount = connectionEl.innerText.replace(/\D/g, '');
  }

  // Follower count (e.g., "8,035 followers")
  let followerCount = '';
  const followerEl = document.querySelector('span.pvs-entity__caption-wrapper[aria-hidden="true"]');
  if (followerEl && followerEl.innerText.match(/([\d,]+)\s*followers?/i)) {
    followerCount = followerEl.innerText.match(/([\d,]+)\s*followers?/i)[1].replace(/,/g, '');
  }

  // Other fields as before
  const location = document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText?.trim() || '';
  const bio = document.querySelector('.text-body-medium.break-words')?.innerText?.trim() || '';
  const bioLine = bio;

  const data = {
    name,
    url: window.location.href,
    about,
    bio,
    location,
    followerCount,
    connectionCount,
    bioLine
  };

  console.log('Extracted data:', data);
  return data;
}

// Wait for content to load before extracting
setTimeout(() => {
  const data = extractProfileData();

  fetch('http://localhost:3000/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('Data sent successfully');
      return response.json();
    } else {
      throw new Error('Failed to send data');
    }
  })
  .then(result => {
    console.log('Backend response:', result);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
}, 5000); // Wait 5 seconds for content to load 