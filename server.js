const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const db = requires('./models/index');

const routes = require('/routes');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

// db.sequelize.sync();

app.listen(PORT, () => console.log(`USAF PT Test API server is up and running on port ${PORT}`));

module.exports = app;
