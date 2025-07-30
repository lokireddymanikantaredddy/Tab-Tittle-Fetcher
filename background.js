
let profileLinks = [];
let currentIndex = 0;

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startExtraction') {
    profileLinks = request.links;
    currentIndex = 0;
    processNextProfile();
    sendResponse({ status: 'started' });
  }
});

function processNextProfile() {
  if (currentIndex < profileLinks.length) {
    const link = profileLinks[currentIndex];
    console.log(`Opening profile ${currentIndex + 1} of ${profileLinks.length}: ${link}`);
    
    chrome.tabs.create({ url: link }, (tab) => {
      // Wait for the page to load and content script to run
      setTimeout(() => {
        currentIndex++;
        if (currentIndex < profileLinks.length) {
          // Wait a bit before processing the next profile
          setTimeout(processNextProfile, 3000);
        } else {
          console.log('All profiles processed');
        }
      }, 8000);
    });
  }
} 