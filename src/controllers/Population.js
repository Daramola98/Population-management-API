import { respondWithWarning, respondWithSuccess } from '../helpers/httpResponse';
import PopulationService from '../services/population';
import handleErrors from '../helpers/errorHandler';

class PopulationController {
  static async insertPopulationInfo(req, res) {
    const {
      male, female, location, parentId,
    } = req.body;
    try {
      let parentLocationInfo;
      if (parentId) {
        parentLocationInfo = await PopulationService.findById(parentId);
        if (!parentLocationInfo) {
          return respondWithWarning(res, 404, 'ParentId not found');
        }
      }
      const population = await PopulationService
        .create({ ...req.body, location: location.toUpperCase(), totalPopulation: male + female });
      if (parentId) {
        await PopulationService
          .update({ location: parentLocationInfo.location },
            // eslint-disable-next-line no-underscore-dangle
            { children: [...parentLocationInfo.children, population._id] });
      }
      return respondWithSuccess(res, 201, 'Population Information has been added successfully', population);
    } catch (error) {
      if (error.errors) {
        return respondWithWarning(res, 400, 'The following validation errors occured', handleErrors(error.errors));
      }
      console.error(error);
      return respondWithWarning(res, 500, { message: 'An Error Occurred' });
    }
  }

  static async getPopulationInfo(req, res) {
    const { location } = req.params;
    const query = { location: location.toUpperCase() };

    try {
      const populationInfo = await PopulationService.findOne(query);
      if (!populationInfo) {
        return respondWithWarning(res, 404, 'Population Information not found');
      }
      return respondWithSuccess(res, 200, 'Population Information has been found successfully', populationInfo);
    } catch (error) {
      console.error(error);
      return respondWithWarning(res, 500, { message: 'An Error Occurred' });
    }
  }

  static async populationList(req, res) {
    try {
      const populationList = await PopulationService.getList();
      return respondWithSuccess(res, 200, 'Population list has been fetched successfully', populationList);
    } catch (error) {
      console.error(error);
      return respondWithWarning(res, 500, { message: 'An Error Occurred' });
    }
  }

  static async updatePopulationInfo(req, res) {
    const { location } = req.params;
    const { male, female, parentId } = req.body;
    const query = { location: location.toUpperCase() };
    try {
      const populationInfo = await PopulationService.findOne(query);
      if (!populationInfo) {
        return respondWithWarning(res, 404, 'Population Information not found');
      }
      const populationDetails = {
        male: male || populationInfo.male,
        female: female || populationInfo.female,
        parentId: parentId || populationInfo.parentId,
      };
      const updatedPopulationInfo = await PopulationService
        .updateOnly({
          ...populationDetails,
          totalPopulation: populationDetails.male + populationDetails.female,
        });
      return respondWithSuccess(res, 200, 'Population Information has been updated successfully', updatedPopulationInfo);
    } catch (error) {
      if (error.errors) {
        return respondWithWarning(res, 400, 'The following validation errors occured', handleErrors(error.errors));
      }
      console.error(error);
      return respondWithWarning(res, 500, { message: 'An Error Occurred' });
    }
  }

  static async deletePopulationInfo(req, res) {
    const { location } = req.params;
    const query = { location: location.toUpperCase() };
    try {
      const deletedPopulation = await PopulationService.delete(query);
      if (!deletedPopulation) {
        return respondWithWarning(res, 404, 'Population Information not found');
      }
      return respondWithSuccess(res, 200, 'Population Information has been deleted successfully');
    } catch (error) {
      console.error(error);
      return respondWithWarning(res, 500, { message: 'An Error Occurred' });
    }
  }
}

export default PopulationController;
