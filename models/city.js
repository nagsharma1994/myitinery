const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citiesSchema = new Schema({ name: String, country: String});

const citiesModel = mongoose.model('Cities', citiesSchema);

module.exports = citiesModel;