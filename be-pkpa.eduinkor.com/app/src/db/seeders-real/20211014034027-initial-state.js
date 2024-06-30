/* eslint-disable no-unused-vars */
let arrUser = [];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    arrUser = [
      {
        id: 11,
        country_id: 100,
        name: 'ACEH',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        country_id: 100,
        name: 'SUMATERA UTARA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        country_id: 100,
        name: 'SUMATERA BARAT',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        country_id: 100,
        name: 'RIAU',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        country_id: 100,
        name: 'JAMBI',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        country_id: 100,
        name: 'SUMATERA SELATAN',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17, country_id: 100, name: 'BENGKULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 18, country_id: 100, name: 'LAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 19, country_id: 100, name: 'KEPULAUAN BANGKA BELITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 21, country_id: 100, name: 'KEPULAUAN RIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 31, country_id: 100, name: 'DKI JAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 32, country_id: 100, name: 'JAWA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 33, country_id: 100, name: 'JAWA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 34, country_id: 100, name: 'DI YOGYAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 35, country_id: 100, name: 'JAWA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 36, country_id: 100, name: 'BANTEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 51, country_id: 100, name: 'BALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 52, country_id: 100, name: 'NUSA TENGGARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 53, country_id: 100, name: 'NUSA TENGGARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 61, country_id: 100, name: 'KALIMANTAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 62, country_id: 100, name: 'KALIMANTAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 63, country_id: 100, name: 'KALIMANTAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 64, country_id: 100, name: 'KALIMANTAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 65, country_id: 100, name: 'KALIMANTAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 71, country_id: 100, name: 'SULAWESI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 72, country_id: 100, name: 'SULAWESI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 73, country_id: 100, name: 'SULAWESI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 74, country_id: 100, name: 'SULAWESI TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 75, country_id: 100, name: 'GORONTALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 76, country_id: 100, name: 'SULAWESI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 81, country_id: 100, name: 'MALUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 82, country_id: 100, name: 'MALUKU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 91, country_id: 100, name: 'PAPUA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 94, country_id: 100, name: 'PAPUA', created_at: new Date(), updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('states', arrUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('states', null, {});
  },
};
