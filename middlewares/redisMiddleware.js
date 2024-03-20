// const redis = require('redis');
const { createClient } = require('redis');

const client = createClient({
    password: process.env.redis_password,
    socket: {
        host: process.env.redis_host,
        port: process.env.redis_port
    }
});

(async () => {

    client.on("error", (error) => console.error(`Error : ${error}`));

    await client.connect();
})();


const redisMiddleware = async (req, res, next) => {
    const data = await client.get("cache")
    if (data) {
        await res.send(JSON.parse(data));
    } else {
        next();
    }

};

module.exports = { redisMiddleware, client };
