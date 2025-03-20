const express = require('express');
const path = require('path'); // Add this for file path handling
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve public folder explicitly

const projects = [
    { title: 'Project One', description: 'Branding for a cafe', image: 'https://via.placeholder.com/300' },
    { title: 'Project Two', description: 'Website for a startup', image: 'https://via.placeholder.com/300' },
    { title: 'Project Three', description: 'App UI design', image: 'https://via.placeholder.com/300' }
];

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoints
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact: ${name}, ${email}, ${message}`);
    res.json({ message: "Thanks for your message! I'll get back to you soon." });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});