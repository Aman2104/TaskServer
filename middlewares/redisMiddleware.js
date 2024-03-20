const redis = require('redis');

const REDIS_PORT= process.env.REDIS_PORT||6379
const client = redis.createClient(REDIS_PORT);


const redisMiddleware = (req, res, next) => {
    (async () => { 
        console.log(client.isOpen);
        await client.connect(); 
        console.log(client);
    })(); 
    const cacheKey = "cache"; 
    client.get(cacheKey, (err, data) => {
        console.log(data);
        if (err) {
            console.error('Error retrieving data from cache:', err);
            next();
            return;
        }

        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
};

module.exports = { redisMiddleware, client };
