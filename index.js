const express = require("express")
require('dotenv').config();
const bodyParser = require("body-parser")
const cors = require("cors")
const submissionRoutes = require('./routes/submissionRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', submissionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
