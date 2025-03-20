
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use dynamic port for hosting platforms

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const projects = [
    { title: 'Project One', description: 'Branding for a cafe', image: 'https://via.placeholder.com/300' },
    { title: 'Project Two', description: 'Website for a startup', image: 'https://via.placeholder.com/300' },
    { title: 'Project Three', description: 'App UI design', image: 'https://via.placeholder.com/300' }
];

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact: ${name}, ${email}, ${message}`);
    res.json({ message: "Thanks for your message! I\'ll get back to you soon." }); // Escaped apostrophe
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
