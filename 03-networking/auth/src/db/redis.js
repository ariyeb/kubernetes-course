const redis = require('redis');
const { promisifyAll } = require('bluebird');

promisifyAll(redis);

const redisClient = redis.createClient({
    host: process.env.REDIS_SERVICE_SERVICE_HOST,
    port: process.env.REDIS_SERVICE_SERVICE_PORT
});

module.exports = redisClient;