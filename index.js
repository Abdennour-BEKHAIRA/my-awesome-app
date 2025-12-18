const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from your animated app!" });
});

app.listen(port, () => {
    console.log(Server running on port );
});
