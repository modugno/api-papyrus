const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'config.env' });

const { PREFIX, port } = require('./config/api-config');
const commentsRoutes = require('./routes/comments-routes');
const discoveriesRoutes = require('./routes/discoveries-routes');

const db = require('./config/db');
db.connection(process.env.DATABASE);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get(['/', PREFIX], (req, res) => res.send('API Works!'));
app.use(`${PREFIX}/comments`, commentsRoutes);
app.use(`${PREFIX}/discoveries`, discoveriesRoutes);

app.listen(port, function() {
  console.log(`API is running in http://localhost:${this.address().port}`)
});
