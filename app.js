const express = require('express');
const app = express();
const PORT = process.env.PORT || 443;

app.get("/", (req, res) => {
    res.send("Welcome to ShopEasy from Arun!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})