import mongoose from 'mongoose';

const { Schema } = mongoose;

const populationSchema = new Schema({
  location: {
    type: String,
    required: 'Location is required',
    unique: 'This location already exists',
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  male: {
    type: Number,
    required: 'Male population is required',
  },
  female: {
    type: Number,
    required: 'Female population is required',
  },
  totalPopulation: {
    type: Number,
    required: 'Total population has to be calculated and saved',
  },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Population' }],
});

export default mongoose.model('Population', populationSchema);
