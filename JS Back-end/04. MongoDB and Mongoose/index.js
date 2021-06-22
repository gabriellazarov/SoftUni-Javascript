const express = require('express');
const expressConfid = require('./config/express');
const routesConfid = require('./config/routes');
const databaseConfig = require('./config/database')

const { init: storage } = require('./services/storage')

start();

async function start() {
    const port = 3000;
    const app = express();

    expressConfid(app);
    await databaseConfig(app);

    app.use(await storage());
    routesConfid(app);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}