const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let timeRequestCount = 0; // Переменная-счетчик

app.get('/time', (req, res) => {
    timeRequestCount++; // Инкремент при каждом запросе
    res.json({ time: Math.floor(Date.now() / 1000) });
});

// Новый роут /metrics
app.get('/metrics', (req, res) => {
    res.json({ count: timeRequestCount });
});

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;


