const mockPopulationInfo = {
  location: `LAGOS${Math.floor(Math.random() * 10) + 1}`,
  male: 200,
  female: 30,
  totalPopulation: 230,
};

const mockPopulationList = [
  {
    parentId: null,
    children: [
      '5d1005a67dc7d5b39199af9e',
    ],
    _id: '5d0ff9b51a0f0fa6c7bd845c',
    location: 'LAGOS',
    male: 200,
    female: 30,
    totalPopulation: 230,
  },
  {
    parentId: '5d0ff9b51a0f0fa6c7bd845c',
    children: [],
    _id: '5d1005a67dc7d5b39199af9e',
    location: 'MUSHIN',
    male: 80,
    female: 30,
    totalPopulation: 110,
  },
];

export { mockPopulationInfo, mockPopulationList };
