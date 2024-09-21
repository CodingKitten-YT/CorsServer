const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/:url', async (req, res) => {
    const { url } = req.params; // Extract the URL from the request
    
    try {
        const response = await axios.get(`https://${url}`); // Fetch from the external site
        res.json(response.data); // Send the data back to the client
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
