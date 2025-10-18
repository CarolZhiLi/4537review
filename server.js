const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Route for the main quiz page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'javascript_quiz.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'JavaScript Quiz App is running!' });
});

app.listen(PORT, () => {
    console.log(`🚀 JavaScript Quiz App running on port ${PORT}`);
    console.log(`📚 Visit: http://localhost:${PORT}`);
});
