const express = require('express');
const app = express();

const vendorRouter = require('./routes/vendors');

const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/vendors', vendorRouter);

app.get('/', (req, res) => {
  res.send('up and running');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
