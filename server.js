const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Роут /time возвращает текущее unix-time
app.get('/time', (req, res) => {
    res.json({ time: Math.floor(Date.now() / 1000) });
});

// Экспортируем app для тестов, и запускаем если файл запущен напрямую
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
