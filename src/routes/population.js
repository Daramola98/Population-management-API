// Controller
import PopulationController from '../controllers/Population';

const {
  insertPopulationInfo,
  getPopulationInfo,
  populationList,
  updatePopulationInfo,
  deletePopulationInfo,
} = PopulationController;

export default (router) => {
  router.post('/api/v1/population', insertPopulationInfo);
  router.get('/api/v1/population/:location', getPopulationInfo);
  router.put('/api/v1/population/:location', updatePopulationInfo);
  router.get('/api/v1/population', populationList);
  router.delete('/api/v1/population/:location', deletePopulationInfo);
};
