
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize, Profile } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/profiles', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/profiles', async (req, res) => {
    try {
      const profiles = await Profile.findAll();
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(profiles, null, 2)); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

app.post('/profiles', async (req, res) => {
    try {
      console.log('Received profile:', req.body);
      const profile = await Profile.create(req.body);
      res.status(201).json(profile);
    } catch (error) {
      console.error('Error saving profile:', error); 
      res.status(400).json({ error: error.message });
    }
  });