# LinkedIn Profile Extractor Chrome Extension

A Chrome extension that automatically extracts LinkedIn profile data and stores it in a Node.js backend with Sequelize database.

## 🚀 Features

- **Automated Data Extraction**: Opens multiple LinkedIn profiles and extracts key information
- **Backend Integration**: Stores data in SQLite database via Express API
- **Modern UI**: Clean, responsive popup interface
- **Robust Scraping**: Handles LinkedIn's dynamic content loading
- **Background Processing**: Continues extraction even when popup closes

## 📋 Extracted Data

- **Name**: Profile holder's full name
- **Location**: Geographic location
- **About**: Professional summary
- **Bio**: Current role and company
- **Follower Count**: Number of followers
- **Connection Count**: Number of connections
- **Bio Line**: Professional headline

## 🛠️ Tech Stack

### Frontend (Chrome Extension)
- **Manifest V3**: Modern Chrome extension architecture
- **Content Scripts**: DOM manipulation and data extraction
- **Background Scripts**: Tab management and process coordination
- **Popup UI**: User interface for URL input and extraction control

### Backend
- **Node.js**: Server runtime
- **Express**: Web framework
- **Sequelize**: ORM for database operations
- **SQLite**: Lightweight database
- **CORS**: Cross-origin resource sharing

## 🚀 Installation & Setup

### 1. Backend Setup
```bash
cd task-backend
npm install
npm start
```

### 2. Chrome Extension Setup
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `task-one` folder
5. The extension will appear in your toolbar

### 1. Prepare LinkedIn URLs
- Open the extension popup
- Enter LinkedIn profile URLs (one per line)
- Example:
  ```
  https://www.linkedin.com/in/username1/
  https://www.linkedin.com/in/username2/
  https://www.linkedin.com/in/username3/
  ```

### 2. Start Extraction
- Click "Start Extraction"
- The extension will:
  - Open each profile in a new tab
  - Extract data automatically
  - Send data to backend
  - Store in database

### 3. View Results
- Visit `http://localhost:3000/profiles`
- View all extracted profile data in JSON format
