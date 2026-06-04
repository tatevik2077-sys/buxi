const request = require('supertest');
const app = require('./server');

// Блок тестов для /time
describe('GET /time', () => {
    it('should return status 200 and time not equal to 0', async () => {
        const res = await request(app).get('/time');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('time');
        expect(res.body.time).not.toBe(0);
    });
}); // <- Здесь мы четко закрыли первый блок

// Блок тестов для /metrics
describe('GET /metrics', () => {
    it('should increment count when /time is called', async () => {
        // Сначала проверяем, сколько было в счетчике изначально
        const resMetricsBefore = await request(app).get('/metrics');
        const initialCount = resMetricsBefore.body.count;

        // Делаем запрос на /time, который должен увеличить счетчик
        await request(app).get('/time');

        // Проверяем, что счетчик стал на 1 больше
        const resMetricsAfter = await request(app).get('/metrics');
        expect(resMetricsAfter.statusCode).toEqual(200);
        expect(resMetricsAfter.body.count).toEqual(initialCount + 1);
    });
}); // Res четко закрыли второй блок