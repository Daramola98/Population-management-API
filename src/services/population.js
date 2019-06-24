import Population from '../db/models/population';

class PopulationService {
  static create(populationDetails) {
    return Population.create(populationDetails);
  }

  static findOne(query) {
    return Population.findOne(query);
  }

  static findById(id) {
    return Population.findById(id);
  }

  static getList() {
    return Population.find();
  }

  static update(query, populationDetails) {
    return Population.findOneAndUpdate(query, populationDetails);
  }

  static updateOnly(populationDetails) {
    return Population.update(populationDetails);
  }

  static delete(query) {
    return Population.findOneAndDelete(query);
  }
}

export default PopulationService;
