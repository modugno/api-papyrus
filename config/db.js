const mongoose = require('mongoose');

const configDefault = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

const connectionSuccess = () => console.log(`Moogose is connected!`);
const connectionError = (error) => console.error(`Connection Error: ${error}`);

exports.connection = (uri) => {
  mongoose
    .connect(uri, configDefault)
    .then(connectionSuccess)
    .catch(connectionError);
};
