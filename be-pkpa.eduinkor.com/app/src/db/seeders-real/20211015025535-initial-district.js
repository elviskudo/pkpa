/* eslint-disable no-unused-vars */
let arrDistrict = [];
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
    arrDistrict = [
      {
        id: 1, city_id: 1101, name: 'TEUPAH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2, city_id: 1101, name: 'SIMEULUE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3, city_id: 1101, name: 'TEUPAH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4, city_id: 1101, name: 'TEUPAH TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5, city_id: 1101, name: 'SIMEULUE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6, city_id: 1101, name: 'TELUK DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7, city_id: 1101, name: 'SIMEULUE CUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8, city_id: 1101, name: 'SALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9, city_id: 1101, name: 'SIMEULUE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 10, city_id: 1101, name: 'ALAFAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 11, city_id: 1102, name: 'PULAU BANYAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 12, city_id: 1102, name: 'PULAU BANYAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 13, city_id: 1102, name: 'SINGKIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 14, city_id: 1102, name: 'SINGKIL UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 15, city_id: 1102, name: 'KUALA BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 16, city_id: 1102, name: 'SIMPANG KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 17, city_id: 1102, name: 'GUNUNG MERIAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 18, city_id: 1102, name: 'DANAU PARIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 19, city_id: 1102, name: 'SURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 20, city_id: 1102, name: 'SINGKOHOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 21, city_id: 1102, name: 'KOTA BAHARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 22, city_id: 1103, name: 'TRUMON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 23, city_id: 1103, name: 'TRUMON TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 24, city_id: 1103, name: 'TRUMON TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 25, city_id: 1103, name: 'BAKONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 26, city_id: 1103, name: 'BAKONGAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 27, city_id: 1103, name: 'KOTA BAHAGIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 28, city_id: 1103, name: 'KLUET SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 29, city_id: 1103, name: 'KLUET TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 30, city_id: 1103, name: 'KLUET UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 31, city_id: 1103, name: 'PASIE RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 32, city_id: 1103, name: 'KLUET TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 33, city_id: 1103, name: 'TAPAK TUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 34, city_id: 1103, name: 'SAMA DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 35, city_id: 1103, name: 'SAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 36, city_id: 1103, name: 'MEUKEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 37, city_id: 1103, name: 'LABUHAN HAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 38, city_id: 1103, name: 'LABUHAN HAJI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 39, city_id: 1103, name: 'LABUHAN HAJI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 40, city_id: 1104, name: 'LAWE ALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 41, city_id: 1104, name: 'BABUL RAHMAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 42, city_id: 1104, name: 'TANOH ALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 43, city_id: 1104, name: 'LAWE SIGALA-GALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 44, city_id: 1104, name: 'BABUL MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 45, city_id: 1104, name: 'SEMADAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 46, city_id: 1104, name: 'LEUSER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 47, city_id: 1104, name: 'BAMBEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 48, city_id: 1104, name: 'BUKIT TUSAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 49, city_id: 1104, name: 'LAWE SUMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 50, city_id: 1104, name: 'BABUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 51, city_id: 1104, name: 'LAWE BULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 52, city_id: 1104, name: 'BADAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 53, city_id: 1104, name: 'DARUL HASANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 54, city_id: 1104, name: 'KETAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 55, city_id: 1104, name: 'DELENG POKHKISEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 56, city_id: 1105, name: 'SERBA JADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 57, city_id: 1105, name: 'SIMPANG JERNIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 58, city_id: 1105, name: 'PEUNARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 59, city_id: 1105, name: 'BIREM BAYEUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 60, city_id: 1105, name: 'RANTAU SELAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 61, city_id: 1105, name: 'SUNGAI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 62, city_id: 1105, name: 'PEUREULAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 63, city_id: 1105, name: 'PEUREULAK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 64, city_id: 1105, name: 'PEUREULAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 65, city_id: 1105, name: 'RANTO PEUREULAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 66, city_id: 1105, name: 'IDI RAYEUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 67, city_id: 1105, name: 'PEUDAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 68, city_id: 1105, name: 'BANDA ALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 69, city_id: 1105, name: 'IDI TUNONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 70, city_id: 1105, name: 'DARUL IHSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 71, city_id: 1105, name: 'IDI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 72, city_id: 1105, name: 'DARUL AMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 73, city_id: 1105, name: 'NURUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 74, city_id: 1105, name: 'DARUL FALAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 75, city_id: 1105, name: 'JULOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 76, city_id: 1105, name: 'INDRA MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 77, city_id: 1105, name: 'PANTE BIDARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 78, city_id: 1105, name: 'SIMPANG ULIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 79, city_id: 1105, name: 'MADAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 80, city_id: 1106, name: 'LINGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 81, city_id: 1106, name: 'ATU LINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 82, city_id: 1106, name: 'JAGONG JEGET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 83, city_id: 1106, name: 'BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 84, city_id: 1106, name: 'LUT TAWAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 85, city_id: 1106, name: 'KEBAYAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 86, city_id: 1106, name: 'PEGASING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 87, city_id: 1106, name: 'BIES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 88, city_id: 1106, name: 'BEBESEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 89, city_id: 1106, name: 'KUTE PANANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 90, city_id: 1106, name: 'SILIH NARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 91, city_id: 1106, name: 'KETOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 92, city_id: 1106, name: 'CELALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 93, city_id: 1106, name: 'RUSIP ANTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 94, city_id: 1107, name: 'JOHAN PAHLAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 95, city_id: 1107, name: 'SAMATIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 96, city_id: 1107, name: 'BUBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 97, city_id: 1107, name: 'ARONGAN LAMBALEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 98, city_id: 1107, name: 'WOYLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 99, city_id: 1107, name: 'WOYLA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 100, city_id: 1107, name: 'WOYLA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 101, city_id: 1107, name: 'KAWAY XVI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 102, city_id: 1107, name: 'MEUREUBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 103, city_id: 1107, name: 'PANTAI CEUREMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 104, city_id: 1107, name: 'PANTON REU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 105, city_id: 1107, name: 'SUNGAI MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 106, city_id: 1108, name: 'LHOONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 107, city_id: 1108, name: 'LHOKNGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 108, city_id: 1108, name: 'LEUPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 109, city_id: 1108, name: 'INDRAPURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 110, city_id: 1108, name: 'KUTA COT GLIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 111, city_id: 1108, name: 'SEULIMEUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 112, city_id: 1108, name: 'KOTA JANTHO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 113, city_id: 1108, name: 'LEMBAH SEULAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 114, city_id: 1108, name: 'MESJID RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 115, city_id: 1108, name: 'DARUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 116, city_id: 1108, name: 'BAITUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 117, city_id: 1108, name: 'KUTA BARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 118, city_id: 1108, name: 'MONTASIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 119, city_id: 1108, name: 'BLANG BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 120, city_id: 1108, name: 'INGIN JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 121, city_id: 1108, name: 'KRUENG BARONA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 122, city_id: 1108, name: 'SUKA MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 123, city_id: 1108, name: 'KUTA MALAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 124, city_id: 1108, name: 'SIMPANG TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 125, city_id: 1108, name: 'DARUL IMARAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 126, city_id: 1108, name: 'DARUL KAMAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 127, city_id: 1108, name: 'PEUKAN BADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 128, city_id: 1108, name: 'PULO ACEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 129, city_id: 1109, name: 'GEUMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 130, city_id: 1109, name: 'MANE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 131, city_id: 1109, name: 'GLUMPANG TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 132, city_id: 1109, name: 'GLUMPANG BARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 133, city_id: 1109, name: 'MUTIARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 134, city_id: 1109, name: 'MUTIARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 135, city_id: 1109, name: 'TIRO/TRUSEB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 136, city_id: 1109, name: 'TANGSE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 137, city_id: 1109, name: 'KEUMALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 138, city_id: 1109, name: 'TITEUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 139, city_id: 1109, name: 'SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 140, city_id: 1109, name: 'MILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 141, city_id: 1109, name: 'PADANG TIJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 142, city_id: 1109, name: 'DELIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 143, city_id: 1109, name: 'GRONG GRONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 144, city_id: 1109, name: 'INDRAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 145, city_id: 1109, name: 'PEUKAN BARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 146, city_id: 1109, name: 'KEMBANG TANJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 147, city_id: 1109, name: 'SIMPANG TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 148, city_id: 1109, name: 'KOTA SIGLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 149, city_id: 1109, name: 'PIDIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 150, city_id: 1109, name: 'BATEE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 151, city_id: 1109, name: 'MUARA TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 152, city_id: 1110, name: 'SAMALANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 153, city_id: 1110, name: 'SIMPANG MAMPLAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 154, city_id: 1110, name: 'PANDRAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 155, city_id: 1110, name: 'JEUNIEB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 156, city_id: 1110, name: 'PEULIMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 157, city_id: 1110, name: 'PEUDADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 158, city_id: 1110, name: 'JULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 159, city_id: 1110, name: 'JEUMPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 160, city_id: 1110, name: 'KOTA JUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 161, city_id: 1110, name: 'KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 162, city_id: 1110, name: 'JANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 163, city_id: 1110, name: 'PEUSANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 164, city_id: 1110, name: 'PEUSANGAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 165, city_id: 1110, name: 'PEUSANGAN SIBLAH KRUENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 166, city_id: 1110, name: 'MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 167, city_id: 1110, name: 'GANDA PURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 168, city_id: 1110, name: 'KUTA BLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 169, city_id: 1111, name: 'SAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 170, city_id: 1111, name: 'NISAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 171, city_id: 1111, name: 'NISAM ANTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 172, city_id: 1111, name: 'BANDA BARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 173, city_id: 1111, name: 'KUTA MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 174, city_id: 1111, name: 'SIMPANG KERAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 175, city_id: 1111, name: 'SYAMTALIRA BAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 176, city_id: 1111, name: 'GEUREUDONG PASE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 177, city_id: 1111, name: 'MEURAH MULIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 178, city_id: 1111, name: 'MATANGKULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 179, city_id: 1111, name: 'PAYA BAKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 180, city_id: 1111, name: 'PIRAK TIMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 181, city_id: 1111, name: 'COT GIREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 182, city_id: 1111, name: 'TANAH JAMBO AYE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 183, city_id: 1111, name: 'LANGKAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 184, city_id: 1111, name: 'SEUNUDDON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 185, city_id: 1111, name: 'BAKTIYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 186, city_id: 1111, name: 'BAKTIYA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 187, city_id: 1111, name: 'LHOKSUKON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 188, city_id: 1111, name: 'TANAH LUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 189, city_id: 1111, name: 'NIBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 190, city_id: 1111, name: 'SAMUDERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 191, city_id: 1111, name: 'SYAMTALIRA ARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 192, city_id: 1111, name: 'TANAH PASIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 193, city_id: 1111, name: 'LAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 194, city_id: 1111, name: 'MUARA BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 195, city_id: 1111, name: 'DEWANTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 196, city_id: 1112, name: 'MANGGENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 197, city_id: 1112, name: 'LEMBAH SABIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 198, city_id: 1112, name: 'TANGAN-TANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 199, city_id: 1112, name: 'SETIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 200, city_id: 1112, name: 'BLANG PIDIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 201, city_id: 1112, name: 'JEUMPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 202, city_id: 1112, name: 'SUSOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 203, city_id: 1112, name: 'KUALA BATEE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 204, city_id: 1112, name: 'BABAH ROT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 205, city_id: 1113, name: 'KUTA PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 206, city_id: 1113, name: 'BLANG JERANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 207, city_id: 1113, name: 'BLANGKEJEREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 208, city_id: 1113, name: 'PUTRI BETUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 209, city_id: 1113, name: 'DABUN GELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 210, city_id: 1113, name: 'BLANG PEGAYON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 211, city_id: 1113, name: 'PINING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 212, city_id: 1113, name: 'RIKIT GAIB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 213, city_id: 1113, name: 'PANTAN CUACA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 214, city_id: 1113, name: 'TERANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 215, city_id: 1113, name: 'TRIPE JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 216, city_id: 1114, name: 'TAMIANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 217, city_id: 1114, name: 'BANDAR PUSAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 218, city_id: 1114, name: 'KEJURUAN MUDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 219, city_id: 1114, name: 'TENGGULUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 220, city_id: 1114, name: 'RANTAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 221, city_id: 1114, name: 'KOTA KUALA SIMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 222, city_id: 1114, name: 'SERUWAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 223, city_id: 1114, name: 'BENDAHARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 224, city_id: 1114, name: 'BANDA MULIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 225, city_id: 1114, name: 'KARANG BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 226, city_id: 1114, name: 'SEKERAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 227, city_id: 1114, name: 'MANYAK PAYED', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 228, city_id: 1115, name: 'DARUL MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 229, city_id: 1115, name: 'TRIPA MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 230, city_id: 1115, name: 'KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 231, city_id: 1115, name: 'KUALA PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 232, city_id: 1115, name: 'TADU RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 233, city_id: 1115, name: 'BEUTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 234, city_id: 1115, name: 'BEUTONG ATEUH BANGGALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 235, city_id: 1115, name: 'SEUNAGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 236, city_id: 1115, name: 'SUKA MAKMUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 237, city_id: 1115, name: 'SEUNAGAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 238, city_id: 1116, name: 'TEUNOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 239, city_id: 1116, name: 'PASIE RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 240, city_id: 1116, name: 'PANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 241, city_id: 1116, name: 'KRUENG SABEE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 242, city_id: 1116, name: 'SETIA BAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 243, city_id: 1116, name: 'SAMPOINIET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 244, city_id: 1116, name: 'DARUL HIKMAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 245, city_id: 1116, name: 'JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 246, city_id: 1116, name: 'INDRA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 247, city_id: 1117, name: 'TIMANG GAJAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 248, city_id: 1117, name: 'GAJAH PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 249, city_id: 1117, name: 'PINTU RIME GAYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 250, city_id: 1117, name: 'BUKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 251, city_id: 1117, name: 'WIH PESAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 252, city_id: 1117, name: 'BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 253, city_id: 1117, name: 'BENER KELIPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 254, city_id: 1117, name: 'SYIAH UTAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 255, city_id: 1117, name: 'MESIDAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 256, city_id: 1117, name: 'PERMATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 257, city_id: 1118, name: 'MEUREUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 258, city_id: 1118, name: 'MEURAH DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 259, city_id: 1118, name: 'BANDAR DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 260, city_id: 1118, name: 'JANGKA BUYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 261, city_id: 1118, name: 'ULIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 262, city_id: 1118, name: 'TRIENGGADENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 263, city_id: 1118, name: 'PANTERAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 264, city_id: 1118, name: 'BANDAR BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 265, city_id: 1171, name: 'MEURAXA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 266, city_id: 1171, name: 'JAYA BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 267, city_id: 1171, name: 'BANDA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 268, city_id: 1171, name: 'BAITURRAHMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 269, city_id: 1171, name: 'LUENG BATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 270, city_id: 1171, name: 'KUTA ALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 271, city_id: 1171, name: 'KUTA RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 272, city_id: 1171, name: 'SYIAH KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 273, city_id: 1171, name: 'ULEE KARENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 274, city_id: 1172, name: 'SUKAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 275, city_id: 1172, name: 'SUKAKARYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 276, city_id: 1173, name: 'LANGSA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 277, city_id: 1173, name: 'LANGSA LAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 278, city_id: 1173, name: 'LANGSA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 279, city_id: 1173, name: 'LANGSA BARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 280, city_id: 1173, name: 'LANGSA KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 281, city_id: 1174, name: 'BLANG MANGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 282, city_id: 1174, name: 'MUARA DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 283, city_id: 1174, name: 'MUARA SATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 284, city_id: 1174, name: 'BANDA SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 285, city_id: 1175, name: 'SIMPANG KIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 286, city_id: 1175, name: 'PENANGGALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 287, city_id: 1175, name: 'RUNDENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 288, city_id: 1175, name: 'SULTAN DAULAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 289, city_id: 1175, name: 'LONGKIB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 290, city_id: 1201, name: 'IDANO GAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 291, city_id: 1201, name: 'BAWOLATO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 292, city_id: 1201, name: 'ULUGAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 293, city_id: 1201, name: 'GIDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 294, city_id: 1201, name: 'SOGAEADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 295, city_id: 1201, name: 'MA U', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 296, city_id: 1201, name: 'SOMOLO - MOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 297, city_id: 1201, name: 'HILIDUHO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 298, city_id: 1201, name: 'HILI SERANGKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 299, city_id: 1201, name: 'BOTOMUZOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 300, city_id: 1202, name: 'BATAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 301, city_id: 1202, name: 'SINUNUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 302, city_id: 1202, name: 'BATANG NATAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 303, city_id: 1202, name: 'LINGGA BAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 304, city_id: 1202, name: 'RANTO BAEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 305, city_id: 1202, name: 'KOTANOPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 306, city_id: 1202, name: 'ULU PUNGKUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 307, city_id: 1202, name: 'TAMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 308, city_id: 1202, name: 'LEMBAH SORIK MARAPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 309, city_id: 1202, name: 'PUNCAK SORIK MARAPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 310, city_id: 1202, name: 'MUARA SIPONGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 311, city_id: 1202, name: 'PAKANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 312, city_id: 1202, name: 'PANYABUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 313, city_id: 1202, name: 'PANYABUNGAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 314, city_id: 1202, name: 'PANYABUNGAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 315, city_id: 1202, name: 'PANYABUNGAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 316, city_id: 1202, name: 'PANYABUNGAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 317, city_id: 1202, name: 'HUTA BARGOT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 318, city_id: 1202, name: 'NATAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 319, city_id: 1202, name: 'MUARA BATANG GADIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 320, city_id: 1202, name: 'SIABU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 321, city_id: 1202, name: 'BUKIT MALINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 322, city_id: 1202, name: 'NAGA JUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 323, city_id: 1203, name: 'BATANG ANGKOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 324, city_id: 1203, name: 'SAYUR MATINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 325, city_id: 1203, name: 'TANO TOMBANGAN ANGKOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 326, city_id: 1203, name: 'ANGKOLA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 327, city_id: 1203, name: 'ANGKOLA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 328, city_id: 1203, name: 'ANGKOLA  BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 329, city_id: 1203, name: 'ANGKOLA SANGKUNUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 330, city_id: 1203, name: 'BATANG TORU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 331, city_id: 1203, name: 'MARANCAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 332, city_id: 1203, name: 'MUARA BATANG TORU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 333, city_id: 1203, name: 'SIPIROK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 334, city_id: 1203, name: 'ARSE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 335, city_id: 1203, name: 'SAIPAR DOLOK HOLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 336, city_id: 1203, name: 'AEK BILAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 337, city_id: 1204, name: 'PINANG SORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 338, city_id: 1204, name: 'BADIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 339, city_id: 1204, name: 'SIBABANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 340, city_id: 1204, name: 'LUMUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 341, city_id: 1204, name: 'SUKABANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 342, city_id: 1204, name: 'PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 343, city_id: 1204, name: 'TUKKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 344, city_id: 1204, name: 'SARUDIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 345, city_id: 1204, name: 'TAPIAN NAULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 346, city_id: 1204, name: 'SITAHUIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 347, city_id: 1204, name: 'KOLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 348, city_id: 1204, name: 'SORKAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 349, city_id: 1204, name: 'SORKAM BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 350, city_id: 1204, name: 'PASARIBU TOBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 351, city_id: 1204, name: 'BARUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 352, city_id: 1204, name: 'SOSOR GADONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 353, city_id: 1204, name: 'ANDAM DEWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 354, city_id: 1204, name: 'BARUS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 355, city_id: 1204, name: 'MANDUAMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 356, city_id: 1204, name: 'SIRANDORUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 357, city_id: 1205, name: 'PARMONANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 358, city_id: 1205, name: 'ADIANKOTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 359, city_id: 1205, name: 'SIPOHOLON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 360, city_id: 1205, name: 'TARUTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 361, city_id: 1205, name: 'SIATAS BARITA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 362, city_id: 1205, name: 'PAHAE JULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 363, city_id: 1205, name: 'PAHAE JAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 364, city_id: 1205, name: 'PURBATUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 365, city_id: 1205, name: 'SIMANGUMBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 366, city_id: 1205, name: 'PANGARIBUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 367, city_id: 1205, name: 'GAROGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 368, city_id: 1205, name: 'SIPAHUTAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 369, city_id: 1205, name: 'SIBORONGBORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 370, city_id: 1205, name: 'PAGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 371, city_id: 1205, name: 'MUARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 372, city_id: 1206, name: 'BALIGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 373, city_id: 1206, name: 'TAMPAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 374, city_id: 1206, name: 'LAGUBOTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 375, city_id: 1206, name: 'HABINSARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 376, city_id: 1206, name: 'BORBOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 377, city_id: 1206, name: 'NASSAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 378, city_id: 1206, name: 'SILAEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 379, city_id: 1206, name: 'SIGUMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 380, city_id: 1206, name: 'PORSEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 381, city_id: 1206, name: 'PINTU POHAN MERANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 382, city_id: 1206, name: 'SIANTAR NARUMONDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 383, city_id: 1206, name: 'PARMAKSIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 384, city_id: 1206, name: 'LUMBAN JULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 385, city_id: 1206, name: 'ULUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 386, city_id: 1206, name: 'AJIBATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 387, city_id: 1206, name: 'BONATUA LUNASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 388, city_id: 1207, name: 'BILAH HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 389, city_id: 1207, name: 'PANGKATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 390, city_id: 1207, name: 'BILAH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 391, city_id: 1207, name: 'BILAH HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 392, city_id: 1207, name: 'PANAI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 393, city_id: 1207, name: 'PANAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 394, city_id: 1207, name: 'PANAI HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 395, city_id: 1207, name: 'RANTAU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 396, city_id: 1207, name: 'RANTAU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 397, city_id: 1208, name: 'BANDAR PASIR MANDOGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 398, city_id: 1208, name: 'BANDAR PULAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 399, city_id: 1208, name: 'AEK SONGSONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 400, city_id: 1208, name: 'RAHUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 401, city_id: 1208, name: 'PULAU RAKYAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 402, city_id: 1208, name: 'AEK KUASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 403, city_id: 1208, name: 'AEK LEDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 404, city_id: 1208, name: 'SEI KEPAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 405, city_id: 1208, name: 'SEI KEPAYANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 406, city_id: 1208, name: 'SEI KEPAYANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 407, city_id: 1208, name: 'TANJUNG BALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 408, city_id: 1208, name: 'SIMPANG EMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 409, city_id: 1208, name: 'TELUK DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 410, city_id: 1208, name: 'AIR BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 411, city_id: 1208, name: 'SEI DADAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 412, city_id: 1208, name: 'BUNTU PANE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 413, city_id: 1208, name: 'TINGGI RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 414, city_id: 1208, name: 'SETIA JANJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 415, city_id: 1208, name: 'MERANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 416, city_id: 1208, name: 'PULO BANDRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 417, city_id: 1208, name: 'RAWANG PANCA ARGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 418, city_id: 1208, name: 'AIR JOMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 419, city_id: 1208, name: 'SILAU LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 420, city_id: 1208, name: 'KISARAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 421, city_id: 1208, name: 'KISARAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 422, city_id: 1209, name: 'SILIMAKUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 423, city_id: 1209, name: 'PEMATANG SILIMAHUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 424, city_id: 1209, name: 'PURBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 425, city_id: 1209, name: 'HARANGGAOL HORISON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 426, city_id: 1209, name: 'SIDAMANIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 427, city_id: 1209, name: 'PEMATANG SIDAMANIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 428, city_id: 1209, name: 'GIRSANG SIPANGAN BOLON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 429, city_id: 1209, name: 'TANAH JAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 430, city_id: 1209, name: 'HATONDUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 431, city_id: 1209, name: 'DOLOK PANRIBUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 432, city_id: 1209, name: 'JORLANG HATARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 433, city_id: 1209, name: 'PANEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 434, city_id: 1209, name: 'PANOMBEAN PANEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 435, city_id: 1209, name: 'RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 436, city_id: 1209, name: 'DOLOG MASAGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 437, city_id: 1209, name: 'DOLOK SILAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 438, city_id: 1209, name: 'SILAU KAHEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 439, city_id: 1209, name: 'RAYA KAHEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 440, city_id: 1209, name: 'TAPIAN DOLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 441, city_id: 1209, name: 'DOLOK BATU NANGGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 442, city_id: 1209, name: 'SIANTAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 443, city_id: 1209, name: 'GUNUNG MALELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 444, city_id: 1209, name: 'GUNUNG MALIGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 445, city_id: 1209, name: 'HUTABAYU RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 446, city_id: 1209, name: 'JAWA MARAJA BAH JAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 447, city_id: 1209, name: 'PEMATANG BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 448, city_id: 1209, name: 'BANDAR HULUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 449, city_id: 1209, name: 'BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 450, city_id: 1209, name: 'BANDAR MASILAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 451, city_id: 1209, name: 'BOSAR MALIGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 452, city_id: 1209, name: 'UJUNG PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 453, city_id: 1210, name: 'SIDIKALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 454, city_id: 1210, name: 'BERAMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 455, city_id: 1210, name: 'SITINJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 456, city_id: 1210, name: 'PARBULUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 457, city_id: 1210, name: 'SUMBUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 458, city_id: 1210, name: 'SILAHISABUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 459, city_id: 1210, name: 'SILIMA PUNGGA-PUNGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 460, city_id: 1210, name: 'LAE PARIRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 461, city_id: 1210, name: 'SIEMPAT NEMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 462, city_id: 1210, name: 'SIEMPAT NEMPU HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 463, city_id: 1210, name: 'SIEMPAT NEMPU HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 464, city_id: 1210, name: 'TIGA LINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 465, city_id: 1210, name: 'GUNUNG SITEMBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 466, city_id: 1210, name: 'PEGAGAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 467, city_id: 1210, name: 'TANAH PINEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 468, city_id: 1211, name: 'MARDINGDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 469, city_id: 1211, name: 'LAUBALENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 470, city_id: 1211, name: 'TIGA BINANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 471, city_id: 1211, name: 'JUHAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 472, city_id: 1211, name: 'MUNTE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 473, city_id: 1211, name: 'KUTA BULUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 474, city_id: 1211, name: 'PAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 475, city_id: 1211, name: 'TIGANDERKET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 476, city_id: 1211, name: 'SIMPANG EMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 477, city_id: 1211, name: 'NAMAN TERAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 478, city_id: 1211, name: 'MERDEKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 479, city_id: 1211, name: 'KABANJAHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 480, city_id: 1211, name: 'BERASTAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 481, city_id: 1211, name: 'TIGAPANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 482, city_id: 1211, name: 'DOLAT RAYAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 483, city_id: 1211, name: 'MEREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 484, city_id: 1211, name: 'BARUSJAHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 485, city_id: 1212, name: 'GUNUNG MERIAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 486, city_id: 1212, name: 'SINEMBAH TANJUNG MUDA HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 487, city_id: 1212, name: 'SIBOLANGIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 488, city_id: 1212, name: 'KUTALIMBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 489, city_id: 1212, name: 'PANCUR BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 490, city_id: 1212, name: 'NAMO RAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 491, city_id: 1212, name: 'BIRU-BIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 492, city_id: 1212, name: 'SINEMBAH TANJUNG MUDA HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 493, city_id: 1212, name: 'BANGUN PURBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 494, city_id: 1212, name: 'GALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 495, city_id: 1212, name: 'TANJUNG MORAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 496, city_id: 1212, name: 'PATUMBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 497, city_id: 1212, name: 'DELI TUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 498, city_id: 1212, name: 'SUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 499, city_id: 1212, name: 'HAMPARAN PERAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 500, city_id: 1212, name: 'LABUHAN DELI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 501, city_id: 1212, name: 'PERCUT SEI TUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 502, city_id: 1212, name: 'BATANG KUIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 503, city_id: 1212, name: 'PANTAI LABU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 504, city_id: 1212, name: 'BERINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 505, city_id: 1212, name: 'LUBUK PAKAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 506, city_id: 1212, name: 'PAGAR MERBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 507, city_id: 1213, name: 'BOHOROK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 508, city_id: 1213, name: 'SIRAPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 509, city_id: 1213, name: 'SALAPIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 510, city_id: 1213, name: 'KUTAMBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 511, city_id: 1213, name: 'SEI BINGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 512, city_id: 1213, name: 'KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 513, city_id: 1213, name: 'SELESAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 514, city_id: 1213, name: 'BINJAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 515, city_id: 1213, name: 'STABAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 516, city_id: 1213, name: 'WAMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 517, city_id: 1213, name: 'BATANG SERANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 518, city_id: 1213, name: 'SAWIT SEBERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 519, city_id: 1213, name: 'PADANG TUALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 520, city_id: 1213, name: 'HINAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 521, city_id: 1213, name: 'SECANGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 522, city_id: 1213, name: 'TANJUNG PURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 523, city_id: 1213, name: 'GEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 524, city_id: 1213, name: 'BABALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 525, city_id: 1213, name: 'SEI LEPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 526, city_id: 1213, name: 'BRANDAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 527, city_id: 1213, name: 'BESITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 528, city_id: 1213, name: 'PANGKALAN SUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 529, city_id: 1213, name: 'PEMATANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 530, city_id: 1214, name: 'HIBALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 531, city_id: 1214, name: 'TANAH MASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 532, city_id: 1214, name: 'PULAU-PULAU BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 533, city_id: 1214, name: 'PULAU-PULAU BATU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 534, city_id: 1214, name: 'SIMUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 535, city_id: 1214, name: 'PULAU-PULAU BATU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 536, city_id: 1214, name: 'PULAU-PULAU BATU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 537, city_id: 1214, name: 'TELUK DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 538, city_id: 1214, name: 'FANAYAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 539, city_id: 1214, name: 'TOMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 540, city_id: 1214, name: 'MANIAMOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 541, city_id: 1214, name: 'MAZINO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 542, city_id: 1214, name: 'LUAHAGUNDRE MANIAMOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 543, city_id: 1214, name: 'ONOLALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 544, city_id: 1214, name: 'AMANDRAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 545, city_id: 1214, name: 'ARAMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 546, city_id: 1214, name: 'ULUSUSUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 547, city_id: 1214, name: 'LAHUSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 548, city_id: 1214, name: 'SIDUAORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 549, city_id: 1214, name: 'SOMAMBAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 550, city_id: 1214, name: 'GOMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 551, city_id: 1214, name: 'SUSUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 552, city_id: 1214, name: 'MAZO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 553, city_id: 1214, name: 'UMBUNASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 554, city_id: 1214, name: 'IDANOTAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 555, city_id: 1214, name: 'ULUIDANOTAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 556, city_id: 1214, name: 'BORONADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 557, city_id: 1214, name: 'LOLOMATUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 558, city_id: 1214, name: 'ULUNOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 559, city_id: 1214, name: 'HURUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 560, city_id: 1214, name: 'LOLOWA U', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 561, city_id: 1214, name: 'HILIMEGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 562, city_id: 1214, name: 'OOU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 563, city_id: 1214, name: 'ONOHAZUMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 564, city_id: 1214, name: 'HILISALAWAAHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 565, city_id: 1215, name: 'PAKKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 566, city_id: 1215, name: 'ONAN GANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 567, city_id: 1215, name: 'SIJAMA POLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 568, city_id: 1215, name: 'DOLOK SANGGUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 569, city_id: 1215, name: 'LINTONG NIHUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 570, city_id: 1215, name: 'PARANGINAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 571, city_id: 1215, name: 'BAKTI RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 572, city_id: 1215, name: 'POLLUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 573, city_id: 1215, name: 'PARLILITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 574, city_id: 1215, name: 'TARA BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 575, city_id: 1216, name: 'SALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 576, city_id: 1216, name: 'SITELLU TALI URANG JEHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 577, city_id: 1216, name: 'PAGINDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 578, city_id: 1216, name: 'SITELLU TALI URANG JULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 579, city_id: 1216, name: 'PERGETTENG-GETTENG SENGKUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 580, city_id: 1216, name: 'KERAJAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 581, city_id: 1216, name: 'TINADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 582, city_id: 1216, name: 'SIEMPAT RUBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 583, city_id: 1217, name: 'SIANJUR MULA MULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 584, city_id: 1217, name: 'HARIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 585, city_id: 1217, name: 'SITIO-TIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 586, city_id: 1217, name: 'ONAN RUNGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 587, city_id: 1217, name: 'NAINGGOLAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 588, city_id: 1217, name: 'PALIPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 589, city_id: 1217, name: 'RONGGUR NIHUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 590, city_id: 1217, name: 'PANGURURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 591, city_id: 1217, name: 'SIMANINDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 592, city_id: 1218, name: 'KOTARIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 593, city_id: 1218, name: 'SILINDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 594, city_id: 1218, name: 'BINTANG BAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 595, city_id: 1218, name: 'DOLOK MASIHUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 596, city_id: 1218, name: 'SERBAJADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 597, city_id: 1218, name: 'SIPISPIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 598, city_id: 1218, name: 'DOLOK MERAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 599, city_id: 1218, name: 'TEBINGTINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 600, city_id: 1218, name: 'TEBING SYAHBANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 601, city_id: 1218, name: 'BANDAR KHALIPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 602, city_id: 1218, name: 'TANJUNG BERINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 603, city_id: 1218, name: 'SEI RAMPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 604, city_id: 1218, name: 'SEI BAMBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 605, city_id: 1218, name: 'TELUK MENGKUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 606, city_id: 1218, name: 'PERBAUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 607, city_id: 1218, name: 'PEGAJAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 608, city_id: 1218, name: 'PANTAI CERMIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 609, city_id: 1219, name: 'SEI BALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 610, city_id: 1219, name: 'TANJUNG TIRAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 611, city_id: 1219, name: 'NIBUNG HANGUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 612, city_id: 1219, name: 'TALAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 613, city_id: 1219, name: 'DATUK TANAH DATAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 614, city_id: 1219, name: 'LIMAPULUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 615, city_id: 1219, name: 'LIMA PULUH PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 616, city_id: 1219, name: 'DATUK LIMA PULUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 617, city_id: 1219, name: 'AIR PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 618, city_id: 1219, name: 'SEI SUKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 619, city_id: 1219, name: 'LAUT TADOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 620, city_id: 1219, name: 'MEDANG DERAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 621, city_id: 1220, name: 'BATANG ONANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 622, city_id: 1220, name: 'PADANG BOLAK JULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 623, city_id: 1220, name: 'PORTIBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 624, city_id: 1220, name: 'PADANG BOLAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 625, city_id: 1220, name: 'PADANG BOLAK TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 626, city_id: 1220, name: 'SIMANGAMBAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 627, city_id: 1220, name: 'UJUNG BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 628, city_id: 1220, name: 'HALONGONAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 629, city_id: 1220, name: 'HALONGONAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 630, city_id: 1220, name: 'DOLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 631, city_id: 1220, name: 'DOLOK SIGOMPULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 632, city_id: 1220, name: 'HULU SIHAPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 633, city_id: 1221, name: 'SOSOPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 634, city_id: 1221, name: 'ULU BARUMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 635, city_id: 1221, name: 'BARUMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 636, city_id: 1221, name: 'BARUMUN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 637, city_id: 1221, name: 'LUBUK BARUMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 638, city_id: 1221, name: 'SOSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 639, city_id: 1221, name: 'BATANG LUBU SUTAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 640, city_id: 1221, name: 'HUTA RAJA TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 641, city_id: 1221, name: 'HURISTAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 642, city_id: 1221, name: 'BARUMUN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 643, city_id: 1221, name: 'AEK NABARA BARUMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 644, city_id: 1221, name: 'SIHAPAS BARUMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 645, city_id: 1222, name: 'SUNGAI KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 646, city_id: 1222, name: 'TORGAMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 647, city_id: 1222, name: 'KOTA PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 648, city_id: 1222, name: 'SILANGKITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 649, city_id: 1222, name: 'KAMPUNG RAKYAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 650, city_id: 1223, name: 'NA IX-X', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 651, city_id: 1223, name: 'MARBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 652, city_id: 1223, name: 'AEK KUO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 653, city_id: 1223, name: 'AEK NATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 654, city_id: 1223, name: 'KUALUH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 655, city_id: 1223, name: 'KUALUH HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 656, city_id: 1223, name: 'KUALUH HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 657, city_id: 1223, name: 'KUALUH LEIDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 658, city_id: 1224, name: 'TUGALA OYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 659, city_id: 1224, name: 'ALASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 660, city_id: 1224, name: 'ALASA TALU MUZOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 661, city_id: 1224, name: 'NAMOHALU ESIWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 662, city_id: 1224, name: 'SITOLU ORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 663, city_id: 1224, name: 'TUHEMBERUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 664, city_id: 1224, name: 'SAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 665, city_id: 1224, name: 'LOTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 666, city_id: 1224, name: 'LAHEWA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 667, city_id: 1224, name: 'AFULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 668, city_id: 1224, name: 'LAHEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 669, city_id: 1225, name: 'SIROMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 670, city_id: 1225, name: 'LAHOMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 671, city_id: 1225, name: 'ULU MORO O', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 672, city_id: 1225, name: 'LOLOFITU MOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 673, city_id: 1225, name: 'MANDREHE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 674, city_id: 1225, name: 'MANDREHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 675, city_id: 1225, name: 'MANDREHE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 676, city_id: 1225, name: 'MORO O', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 677, city_id: 1271, name: 'SIBOLGA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 678, city_id: 1271, name: 'SIBOLGA KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 679, city_id: 1271, name: 'SIBOLGA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 680, city_id: 1271, name: 'SIBOLGA SAMBAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 681, city_id: 1272, name: 'DATUK BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 682, city_id: 1272, name: 'DATUK BANDAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 683, city_id: 1272, name: 'TANJUNG BALAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 684, city_id: 1272, name: 'TANJUNG BALAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 685, city_id: 1272, name: 'SEI TUALANG RASO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 686, city_id: 1272, name: 'TELUK NIBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 687, city_id: 1273, name: 'SIANTAR MARIHAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 688, city_id: 1273, name: 'SIANTAR MARIMBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 689, city_id: 1273, name: 'SIANTAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 690, city_id: 1273, name: 'SIANTAR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 691, city_id: 1273, name: 'SIANTAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 692, city_id: 1273, name: 'SIANTAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 693, city_id: 1273, name: 'SIANTAR MARTOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 694, city_id: 1273, name: 'SIANTAR SITALASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 695, city_id: 1274, name: 'PADANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 696, city_id: 1274, name: 'TEBING TINGGI KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 697, city_id: 1274, name: 'RAMBUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 698, city_id: 1274, name: 'BAJENIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 699, city_id: 1274, name: 'PADANG HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 700, city_id: 1275, name: 'MEDAN TUNTUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 701, city_id: 1275, name: 'MEDAN JOHOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 702, city_id: 1275, name: 'MEDAN AMPLAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 703, city_id: 1275, name: 'MEDAN DENAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 704, city_id: 1275, name: 'MEDAN AREA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 705, city_id: 1275, name: 'MEDAN KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 706, city_id: 1275, name: 'MEDAN MAIMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 707, city_id: 1275, name: 'MEDAN POLONIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 708, city_id: 1275, name: 'MEDAN BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 709, city_id: 1275, name: 'MEDAN SELAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 710, city_id: 1275, name: 'MEDAN SUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 711, city_id: 1275, name: 'MEDAN HELVETIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 712, city_id: 1275, name: 'MEDAN PETISAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 713, city_id: 1275, name: 'MEDAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 714, city_id: 1275, name: 'MEDAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 715, city_id: 1275, name: 'MEDAN PERJUANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 716, city_id: 1275, name: 'MEDAN TEMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 717, city_id: 1275, name: 'MEDAN DELI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 718, city_id: 1275, name: 'MEDAN LABUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 719, city_id: 1275, name: 'MEDAN MARELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 720, city_id: 1275, name: 'MEDAN BELAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 721, city_id: 1276, name: 'BINJAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 722, city_id: 1276, name: 'BINJAI KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 723, city_id: 1276, name: 'BINJAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 724, city_id: 1276, name: 'BINJAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 725, city_id: 1276, name: 'BINJAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 726, city_id: 1277, name: 'PADANGSIDIMPUAN TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 727, city_id: 1277, name: 'PADANGSIDIMPUAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 728, city_id: 1277, name: 'PADANGSIDIMPUAN BATUNADUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 729, city_id: 1277, name: 'PADANGSIDIMPUAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 730, city_id: 1277, name: 'PADANGSIDIMPUAN HUTAIMBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 731, city_id: 1277, name: 'PADANGSIDIMPUAN ANGKOLA JULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 732, city_id: 1278, name: 'GUNUNGSITOLI IDANOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 733, city_id: 1278, name: 'GUNUNGSITOLI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 734, city_id: 1278, name: 'GUNUNGSITOLI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 735, city_id: 1278, name: 'GUNUNG SITOLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 736, city_id: 1278, name: 'GUNUNGSITOLI ALO OA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 737, city_id: 1278, name: 'GUNUNGSITOLI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 738, city_id: 1301, name: 'PAGAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 739, city_id: 1301, name: 'SIKAKAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 740, city_id: 1301, name: 'PAGAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 741, city_id: 1301, name: 'SIPORA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 742, city_id: 1301, name: 'SIPORA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 743, city_id: 1301, name: 'SIBERUT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 744, city_id: 1301, name: 'SEBERUT BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 745, city_id: 1301, name: 'SIBERUT TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 746, city_id: 1301, name: 'SIBERUT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 747, city_id: 1301, name: 'SIBERUT BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 748, city_id: 1302, name: 'SILAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 749, city_id: 1302, name: 'LUNANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 750, city_id: 1302, name: 'BASA AMPEK BALAI TAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 751, city_id: 1302, name: 'RANAH AMPEK HULU TAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 752, city_id: 1302, name: 'PANCUNG SOAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 753, city_id: 1302, name: 'AIRPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 754, city_id: 1302, name: 'LINGGO SARI BAGANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 755, city_id: 1302, name: 'RANAH PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 756, city_id: 1302, name: 'LENGAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 757, city_id: 1302, name: 'SUTERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 758, city_id: 1302, name: 'BATANG KAPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 759, city_id: 1302, name: 'IV JURAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 760, city_id: 1302, name: 'BAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 761, city_id: 1302, name: 'IV  NAGARI BAYANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 762, city_id: 1302, name: 'KOTO XI TARUSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 763, city_id: 1303, name: 'PANTAI CERMIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 764, city_id: 1303, name: 'LEMBAH GUMANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 765, city_id: 1303, name: 'HILIRAN GUMANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 766, city_id: 1303, name: 'PAYUNG SEKAKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 767, city_id: 1303, name: 'TIGO LURAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 768, city_id: 1303, name: 'LEMBANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 769, city_id: 1303, name: 'DANAU KEMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 770, city_id: 1303, name: 'GUNUNG TALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 771, city_id: 1303, name: 'BUKIT SUNDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 772, city_id: 1303, name: 'IX KOTO SUNGAI LASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 773, city_id: 1303, name: 'KUBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 774, city_id: 1303, name: 'X KOTO DIATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 775, city_id: 1303, name: 'X KOTO SINGKARAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 776, city_id: 1303, name: 'JUNJUNG SIRIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 777, city_id: 1304, name: 'KAMANG BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 778, city_id: 1304, name: 'TANJUNG GADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 779, city_id: 1304, name: 'SIJUNJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 780, city_id: 1304, name: 'LUBUK TAROK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 781, city_id: 1304, name: 'IV NAGARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 782, city_id: 1304, name: 'KUPITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 783, city_id: 1304, name: 'KOTO TUJUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 784, city_id: 1304, name: 'SUMPUR KUDUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 785, city_id: 1305, name: 'SEPULUH KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 786, city_id: 1305, name: 'BATIPUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 787, city_id: 1305, name: 'BATIPUH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 788, city_id: 1305, name: 'PARIANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 789, city_id: 1305, name: 'RAMBATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 790, city_id: 1305, name: 'LIMA KAUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 791, city_id: 1305, name: 'TANJUNG EMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 792, city_id: 1305, name: 'PADANG GANTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 793, city_id: 1305, name: 'LINTAU BUO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 794, city_id: 1305, name: 'LINTAU BUO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 795, city_id: 1305, name: 'SUNGAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 796, city_id: 1305, name: 'SUNGAI TARAB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 797, city_id: 1305, name: 'SALIMPAUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 798, city_id: 1305, name: 'TANJUNG BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 799, city_id: 1306, name: 'BATANG ANAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 800, city_id: 1306, name: 'LUBUK ALUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 801, city_id: 1306, name: 'SINTUK TOBOH GADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 802, city_id: 1306, name: 'ULAKAN TAPAKIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 803, city_id: 1306, name: 'NAN SABARIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 804, city_id: 1306, name: '2 X 11 ENAM LINGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 805, city_id: 1306, name: 'ENAM LINGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 806, city_id: 1306, name: '2 X 11 KAYU TANAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 807, city_id: 1306, name: 'VII KOTO SUNGAI SARIAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 808, city_id: 1306, name: 'PATAMUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 809, city_id: 1306, name: 'PADANG SAGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 810, city_id: 1306, name: 'V KOTO KP DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 811, city_id: 1306, name: 'V KOTO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 812, city_id: 1306, name: 'SUNGAI LIMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 813, city_id: 1306, name: 'BATANG GASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 814, city_id: 1306, name: 'SUNGAI GERINGGING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 815, city_id: 1306, name: 'IV KOTO AUR MALINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 816, city_id: 1307, name: 'TANJUNG MUTIARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 817, city_id: 1307, name: 'LUBUK BASUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 818, city_id: 1307, name: 'AMPEK NAGARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 819, city_id: 1307, name: 'TANJUNG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 820, city_id: 1307, name: 'MATUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 821, city_id: 1307, name: 'IV KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 822, city_id: 1307, name: 'MALALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 823, city_id: 1307, name: 'BANUHAMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 824, city_id: 1307, name: 'SUNGAI PUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 825, city_id: 1307, name: 'AMPEK ANGKEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 826, city_id: 1307, name: 'CANDUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 827, city_id: 1307, name: 'BASO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 828, city_id: 1307, name: 'TILATANG KAMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 829, city_id: 1307, name: 'KAMANG MAGEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 830, city_id: 1307, name: 'PALEMBAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 831, city_id: 1307, name: 'PALUPUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 832, city_id: 1308, name: 'PAYAKUMBUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 833, city_id: 1308, name: 'AKABILURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 834, city_id: 1308, name: 'LUAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 835, city_id: 1308, name: 'LAREH SAGO HALABAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 836, city_id: 1308, name: 'SITUJUAH LIMO NAGARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 837, city_id: 1308, name: 'HARAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 838, city_id: 1308, name: 'GUGUAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 839, city_id: 1308, name: 'MUNGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 840, city_id: 1308, name: 'SULIKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 841, city_id: 1308, name: 'BUKIK BARISAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 842, city_id: 1308, name: 'GUNUANG OMEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 843, city_id: 1308, name: 'KAPUR IX', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 844, city_id: 1308, name: 'PANGKALAN KOTO BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 845, city_id: 1309, name: 'BONJOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 846, city_id: 1309, name: 'TIGO NAGARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 847, city_id: 1309, name: 'SIMPANG ALAHAN MATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 848, city_id: 1309, name: 'LUBUK SIKAPING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 849, city_id: 1309, name: 'DUA KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 850, city_id: 1309, name: 'PANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 851, city_id: 1309, name: 'PADANG GELUGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 852, city_id: 1309, name: 'RAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 853, city_id: 1309, name: 'MAPAT TUNGGUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 854, city_id: 1309, name: 'MAPAT TUNGGUL SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 855, city_id: 1309, name: 'RAO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 856, city_id: 1309, name: 'RAO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 857, city_id: 1310, name: 'SANGIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 858, city_id: 1310, name: 'SANGIR JUJUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 859, city_id: 1310, name: 'SANGIR BALAI JANGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 860, city_id: 1310, name: 'SANGIR BATANG HARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 861, city_id: 1310, name: 'SUNGAI PAGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 862, city_id: 1310, name: 'PAUAH DUO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 863, city_id: 1310, name: 'KOTO PARIK GADANG DIATEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 864, city_id: 1311, name: 'SUNGAI RUMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 865, city_id: 1311, name: 'KOTO BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 866, city_id: 1311, name: 'ASAM JUJUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 867, city_id: 1311, name: 'KOTO BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 868, city_id: 1311, name: 'KOTO SALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 869, city_id: 1311, name: 'TIUMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 870, city_id: 1311, name: 'PADANG LAWEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 871, city_id: 1311, name: 'SITIUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 872, city_id: 1311, name: 'TIMPEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 873, city_id: 1311, name: 'PULAU PUNJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 874, city_id: 1311, name: 'IX KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 875, city_id: 1312, name: 'SUNGAI BEREMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 876, city_id: 1312, name: 'RANAH BATAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 877, city_id: 1312, name: 'KOTO BALINGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 878, city_id: 1312, name: 'SUNGAI AUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 879, city_id: 1312, name: 'LEMBAH MALINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 880, city_id: 1312, name: 'GUNUNG TULEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 881, city_id: 1312, name: 'TALAMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 882, city_id: 1312, name: 'PASAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 883, city_id: 1312, name: 'LUHAK NAN DUO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 884, city_id: 1312, name: 'SASAK RANAH PASISIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 885, city_id: 1312, name: 'KINALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 886, city_id: 1371, name: 'BUNGUS TELUK KABUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 887, city_id: 1371, name: 'LUBUK KILANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 888, city_id: 1371, name: 'LUBUK BEGALUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 889, city_id: 1371, name: 'PADANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 890, city_id: 1371, name: 'PADANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 891, city_id: 1371, name: 'PADANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 892, city_id: 1371, name: 'PADANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 893, city_id: 1371, name: 'NANGGALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 894, city_id: 1371, name: 'KURANJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 895, city_id: 1371, name: 'PAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 896, city_id: 1371, name: 'KOTO TANGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 897, city_id: 1372, name: 'LUBUK SIKARAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 898, city_id: 1372, name: 'TANJUNG HARAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 899, city_id: 1373, name: 'SILUNGKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 900, city_id: 1373, name: 'LEMBAH SEGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 901, city_id: 1373, name: 'BARANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 902, city_id: 1373, name: 'TALAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 903, city_id: 1374, name: 'PADANG PANJANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 904, city_id: 1374, name: 'PADANG PANJANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 905, city_id: 1375, name: 'GUGUK PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 906, city_id: 1375, name: 'MANDIANGIN KOTO SELAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 907, city_id: 1375, name: 'AUR BIRUGO TIGO BALEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 908, city_id: 1376, name: 'PAYAKUMBUH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 909, city_id: 1376, name: 'PAYAKUMBUH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 910, city_id: 1376, name: 'PAYAKUMBUH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 911, city_id: 1376, name: 'PAYAKUMBUH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 912, city_id: 1376, name: 'LAMPOSI TIGO NAGORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 913, city_id: 1377, name: 'PARIAMAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 914, city_id: 1377, name: 'PARIAMAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 915, city_id: 1377, name: 'PARIAMAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 916, city_id: 1377, name: 'PARIAMAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 917, city_id: 1401, name: 'KUANTAN MUDIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 918, city_id: 1401, name: 'HULU KUANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 919, city_id: 1401, name: 'GUNUNG TOAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 920, city_id: 1401, name: 'PUCUK RANTAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 921, city_id: 1401, name: 'SINGINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 922, city_id: 1401, name: 'SINGINGI HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 923, city_id: 1401, name: 'KUANTAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 924, city_id: 1401, name: 'SENTAJO RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 925, city_id: 1401, name: 'BENAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 926, city_id: 1401, name: 'KUANTAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 927, city_id: 1401, name: 'PANGEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 928, city_id: 1401, name: 'LOGAS TANAH DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 929, city_id: 1401, name: 'KUANTAN HILIR SEBERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 930, city_id: 1401, name: 'CERENTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 931, city_id: 1401, name: 'INUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 932, city_id: 1402, name: 'PERANAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 933, city_id: 1402, name: 'BATANG PERANAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 934, city_id: 1402, name: 'SEBERIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 935, city_id: 1402, name: 'BATANG CENAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 936, city_id: 1402, name: 'BATANG GANSAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 937, city_id: 1402, name: 'KELAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 938, city_id: 1402, name: 'RAKIT KULIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 939, city_id: 1402, name: 'PASIR PENYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 940, city_id: 1402, name: 'LIRIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 941, city_id: 1402, name: 'SUNGAI LALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 942, city_id: 1402, name: 'LUBUK BATU JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 943, city_id: 1402, name: 'RENGAT BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 944, city_id: 1402, name: 'RENGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 945, city_id: 1402, name: 'KUALA CENAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 946, city_id: 1403, name: 'KERITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 947, city_id: 1403, name: 'KEMUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 948, city_id: 1403, name: 'RETEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 949, city_id: 1403, name: 'SUNGAI BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 950, city_id: 1403, name: 'ENOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 951, city_id: 1403, name: 'TANAH MERAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 952, city_id: 1403, name: 'KUALA INDRAGIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 953, city_id: 1403, name: 'CONCONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 954, city_id: 1403, name: 'TEMBILAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 955, city_id: 1403, name: 'TEMBILAHAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 956, city_id: 1403, name: 'TEMPULING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 957, city_id: 1403, name: 'KEMPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 958, city_id: 1403, name: 'BATANG TUAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 959, city_id: 1403, name: 'GAUNG ANAK SERKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 960, city_id: 1403, name: 'GAUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 961, city_id: 1403, name: 'MANDAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 962, city_id: 1403, name: 'KATEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 963, city_id: 1403, name: 'PELANGIRAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 964, city_id: 1403, name: 'TELUK BELENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 965, city_id: 1403, name: 'PULAU BURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 966, city_id: 1404, name: 'LANGGAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 967, city_id: 1404, name: 'PANGKALAN KERINCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 968, city_id: 1404, name: 'BANDAR SEIKIJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 969, city_id: 1404, name: 'PANGKALAN KURAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 970, city_id: 1404, name: 'UKUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 971, city_id: 1404, name: 'PANGKALAN LESUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 972, city_id: 1404, name: 'BUNUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 973, city_id: 1404, name: 'PELALAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 974, city_id: 1404, name: 'BANDAR PETALANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 975, city_id: 1404, name: 'KUALA KAMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 976, city_id: 1404, name: 'KERUMUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 977, city_id: 1404, name: 'TELUK MERANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 978, city_id: 1405, name: 'MINAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 979, city_id: 1405, name: 'SUNGAI MANDAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 980, city_id: 1405, name: 'KANDIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 981, city_id: 1405, name: 'SIAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 982, city_id: 1405, name: 'KERINCI KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 983, city_id: 1405, name: 'TUALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 984, city_id: 1405, name: 'DAYUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 985, city_id: 1405, name: 'LUBUK DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 986, city_id: 1405, name: 'KOTO GASIB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 987, city_id: 1405, name: 'MEMPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 988, city_id: 1405, name: 'SUNGAI APIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 989, city_id: 1405, name: 'BUNGA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 990, city_id: 1405, name: 'SABAK AUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 991, city_id: 1405, name: 'PUSAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 992, city_id: 1406, name: 'KAMPAR KIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 993, city_id: 1406, name: 'KAMPAR KIRI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 994, city_id: 1406, name: 'KAMPAR KIRI HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 995, city_id: 1406, name: 'GUNUNG SAHILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 996, city_id: 1406, name: 'KAMPAR KIRI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 997, city_id: 1406, name: 'XIII KOTO KAMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 998, city_id: 1406, name: 'KOTO KAMPAR HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 999, city_id: 1406, name: 'KUOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1000, city_id: 1406, name: 'SALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1001, city_id: 1406, name: 'TAPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1002, city_id: 1406, name: 'TAPUNG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1003, city_id: 1406, name: 'TAPUNG HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1004, city_id: 1406, name: 'BANGKINANG KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1005, city_id: 1406, name: 'BANGKINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1006, city_id: 1406, name: 'KAMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1007, city_id: 1406, name: 'KAMPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1008, city_id: 1406, name: 'RUMBIO JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1009, city_id: 1406, name: 'KAMPAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1010, city_id: 1406, name: 'TAMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1011, city_id: 1406, name: 'SIAK HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1012, city_id: 1406, name: 'PERHENTIAN RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1013, city_id: 1407, name: 'ROKAN IV KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1014, city_id: 1407, name: 'PENDALIAN IV KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1015, city_id: 1407, name: 'TANDUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1016, city_id: 1407, name: 'KABUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1017, city_id: 1407, name: 'UJUNG BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1018, city_id: 1407, name: 'RAMBAH SAMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1019, city_id: 1407, name: 'RAMBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1020, city_id: 1407, name: 'RAMBAH HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1021, city_id: 1407, name: 'BANGUN PURBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1022, city_id: 1407, name: 'TAMBUSAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1023, city_id: 1407, name: 'TAMBUSAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1024, city_id: 1407, name: 'KEPENUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1025, city_id: 1407, name: 'KEPENUHAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1026, city_id: 1407, name: 'KUNTO DARUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1027, city_id: 1407, name: 'PAGARAN TAPAH DARUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1028, city_id: 1407, name: 'BONAI DARUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1029, city_id: 1408, name: 'MANDAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1030, city_id: 1408, name: 'PINGGIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1031, city_id: 1408, name: 'BATHIN SOLAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1032, city_id: 1408, name: 'TALANG MUANDAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1033, city_id: 1408, name: 'BUKIT BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1034, city_id: 1408, name: 'SIAK KECIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1035, city_id: 1408, name: 'BANDAR LAKSAMANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1036, city_id: 1408, name: 'RUPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1037, city_id: 1408, name: 'RUPAT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1038, city_id: 1408, name: 'BENGKALIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1039, city_id: 1408, name: 'BANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1040, city_id: 1409, name: 'TANAH PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1041, city_id: 1409, name: 'PUJUD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1042, city_id: 1409, name: 'TANAH PUTIH TANJUNG MELAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1043, city_id: 1409, name: 'RANTAU KOPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1044, city_id: 1409, name: 'TANJUNG MEDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1045, city_id: 1409, name: 'BAGAN SINEMBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1046, city_id: 1409, name: 'SIMPANG KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1047, city_id: 1409, name: 'BAGAN SINEMBAH RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1048, city_id: 1409, name: 'BALAI JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1049, city_id: 1409, name: 'KUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1050, city_id: 1409, name: 'PASIR LIMAU KAPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1051, city_id: 1409, name: 'KUBU BABUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1052, city_id: 1409, name: 'BANGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1053, city_id: 1409, name: 'SINABOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1054, city_id: 1409, name: 'BATU HAMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1055, city_id: 1409, name: 'PEKAITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1056, city_id: 1409, name: 'RIMBA MELINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1057, city_id: 1409, name: 'BANGKO PUSAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1058, city_id: 1410, name: 'TEBING TINGGI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1059, city_id: 1410, name: 'TEBING TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1060, city_id: 1410, name: 'TEBING TINGGI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1061, city_id: 1410, name: 'RANGSANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1062, city_id: 1410, name: 'RANGSANG PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1063, city_id: 1410, name: 'RANGSANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1064, city_id: 1410, name: 'MERBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1065, city_id: 1410, name: 'PULAU MERBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1066, city_id: 1410, name: 'TASIK PUTRI PUYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1067, city_id: 1471, name: 'TAMPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1068, city_id: 1471, name: 'PAYUNG SEKAKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1069, city_id: 1471, name: 'BUKIT RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1070, city_id: 1471, name: 'MARPOYAN DAMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1071, city_id: 1471, name: 'TENAYAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1072, city_id: 1471, name: 'LIMAPULUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1073, city_id: 1471, name: 'SAIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1074, city_id: 1471, name: 'PEKANBARU KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1075, city_id: 1471, name: 'SUKAJADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1076, city_id: 1471, name: 'SENAPELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1077, city_id: 1471, name: 'RUMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1078, city_id: 1471, name: 'RUMBAI PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1079, city_id: 1473, name: 'BUKIT KAPUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1080, city_id: 1473, name: 'MEDANG KAMPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1081, city_id: 1473, name: 'SUNGAI SEMBILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1082, city_id: 1473, name: 'DUMAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1083, city_id: 1473, name: 'DUMAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1084, city_id: 1473, name: 'DUMAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1085, city_id: 1473, name: 'DUMAI KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1086, city_id: 1501, name: 'GUNUNG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1087, city_id: 1501, name: 'BUKIT KERMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1088, city_id: 1501, name: 'BATANG MERANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1089, city_id: 1501, name: 'KELILING DANAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1090, city_id: 1501, name: 'DANAU KERINCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1091, city_id: 1501, name: 'SITINJAU LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1092, city_id: 1501, name: 'AIR HANGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1093, city_id: 1501, name: 'AIR HANGAT TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1094, city_id: 1501, name: 'DEPATI VII', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1095, city_id: 1501, name: 'AIR HANGAT BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1096, city_id: 1501, name: 'GUNUNG KERINCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1097, city_id: 1501, name: 'SIULAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1098, city_id: 1501, name: 'SIULAK MUKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1099, city_id: 1501, name: 'KAYU ARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1100, city_id: 1501, name: 'GUNUNG TUJUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1101, city_id: 1501, name: 'KAYU ARO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1102, city_id: 1502, name: 'JANGKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1103, city_id: 1502, name: 'SUNGAI TENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1104, city_id: 1502, name: 'MUARA SIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1105, city_id: 1502, name: 'LEMBAH MASURAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1106, city_id: 1502, name: 'TIANG PUMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1107, city_id: 1502, name: 'PAMENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1108, city_id: 1502, name: 'PAMENANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1109, city_id: 1502, name: 'RENAH PAMENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1110, city_id: 1502, name: 'PAMENANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1111, city_id: 1502, name: 'BANGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1112, city_id: 1502, name: 'BANGKO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1113, city_id: 1502, name: 'NALO TANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1114, city_id: 1502, name: 'BATANG MASUMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1115, city_id: 1502, name: 'SUNGAI MANAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1116, city_id: 1502, name: 'RENAH PEMBARAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1117, city_id: 1502, name: 'PANGKALAN JAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1118, city_id: 1502, name: 'TABIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1119, city_id: 1502, name: 'TABIR ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1120, city_id: 1502, name: 'TABIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1121, city_id: 1502, name: 'TABIR ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1122, city_id: 1502, name: 'TABIR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1123, city_id: 1502, name: 'TABIR LINTAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1124, city_id: 1502, name: 'MARGO TABIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1125, city_id: 1502, name: 'TABIR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1126, city_id: 1503, name: 'BATANG ASAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1127, city_id: 1503, name: 'LIMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1128, city_id: 1503, name: 'CERMIN NAN GEDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1129, city_id: 1503, name: 'PELAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1130, city_id: 1503, name: 'SINGKUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1131, city_id: 1503, name: 'SAROLANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1132, city_id: 1503, name: 'BATHIN VIII', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1133, city_id: 1503, name: 'PAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1134, city_id: 1503, name: 'AIR HITAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1135, city_id: 1503, name: 'MANDIANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1136, city_id: 1504, name: 'MERSAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1137, city_id: 1504, name: 'MARO SEBO ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1138, city_id: 1504, name: 'BATIN XXIV', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1139, city_id: 1504, name: 'MUARA TEMBESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1140, city_id: 1504, name: 'MUARA BULIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1141, city_id: 1504, name: 'BAJUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1142, city_id: 1504, name: 'MARO SEBO ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1143, city_id: 1504, name: 'PEMAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1144, city_id: 1505, name: 'MESTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1145, city_id: 1505, name: 'SUNGAI BAHAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1146, city_id: 1505, name: 'BAHAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1147, city_id: 1505, name: 'BAHAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1148, city_id: 1505, name: 'KUMPEH ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1149, city_id: 1505, name: 'SUNGAI GELAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1150, city_id: 1505, name: 'KUMPEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1151, city_id: 1505, name: 'MARO SEBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1152, city_id: 1505, name: 'TAMAN RAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1153, city_id: 1505, name: 'JAMBI LUAR KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1154, city_id: 1505, name: 'SEKERNAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1155, city_id: 1506, name: 'MENDAHARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1156, city_id: 1506, name: 'MENDAHARA ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1157, city_id: 1506, name: 'GERAGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1158, city_id: 1506, name: 'DENDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1159, city_id: 1506, name: 'MUARA SABAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1160, city_id: 1506, name: 'MUARA SABAK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1161, city_id: 1506, name: 'KUALA JAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1162, city_id: 1506, name: 'RANTAU RASAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1163, city_id: 1506, name: 'BERBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1164, city_id: 1506, name: 'NIPAH PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1165, city_id: 1506, name: 'SADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1166, city_id: 1507, name: 'TUNGKAL ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1167, city_id: 1507, name: 'MERLUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1168, city_id: 1507, name: 'BATANG ASAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1169, city_id: 1507, name: 'TEBING TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1170, city_id: 1507, name: 'RENAH MENDALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1171, city_id: 1507, name: 'MUARA PAPALIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1172, city_id: 1507, name: 'PENGABUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1173, city_id: 1507, name: 'SENYERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1174, city_id: 1507, name: 'TUNGKAL ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1175, city_id: 1507, name: 'BRAM ITAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1176, city_id: 1507, name: 'SEBERANG KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1177, city_id: 1507, name: 'BETARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1178, city_id: 1507, name: 'KUALA BETARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1179, city_id: 1508, name: 'TEBO ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1180, city_id: 1508, name: 'MUARA TABIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1181, city_id: 1508, name: 'TEBO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1182, city_id: 1508, name: 'SUMAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1183, city_id: 1508, name: 'TENGAH ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1184, city_id: 1508, name: 'RIMBO BUJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1185, city_id: 1508, name: 'RIMBO ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1186, city_id: 1508, name: 'RIMBO ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1187, city_id: 1508, name: 'TEBO ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1188, city_id: 1508, name: 'VII KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1189, city_id: 1508, name: 'SERAI SERUMPUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1190, city_id: 1508, name: 'VII KOTO ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1191, city_id: 1509, name: 'PELEPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1192, city_id: 1509, name: 'PELEPAT ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1193, city_id: 1509, name: 'BATHIN II BABEKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1194, city_id: 1509, name: 'RIMBO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1195, city_id: 1509, name: 'BUNGO DANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1196, city_id: 1509, name: 'PASAR MUARA BUNGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1197, city_id: 1509, name: 'BATHIN III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1198, city_id: 1509, name: 'RANTAU PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1199, city_id: 1509, name: 'MUKO-MUKO BATHIN VII', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1200, city_id: 1509, name: 'BATHIN III ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1201, city_id: 1509, name: 'TANAH SEPENGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1202, city_id: 1509, name: 'TANAH SEPENGGAL LINTAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1203, city_id: 1509, name: 'TANAH TUMBUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1204, city_id: 1509, name: 'LIMBUR LUBUK MENGKUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1205, city_id: 1509, name: 'BATHIN II PELAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1206, city_id: 1509, name: 'JUJUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1207, city_id: 1509, name: 'JUJUHAN ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1208, city_id: 1571, name: 'KOTA BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1209, city_id: 1571, name: 'ALAM BARAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1210, city_id: 1571, name: 'JAMBI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1211, city_id: 1571, name: 'PAAL MERAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1212, city_id: 1571, name: 'JELUTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1213, city_id: 1571, name: 'PASAR JAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1214, city_id: 1571, name: 'TELANAIPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1215, city_id: 1571, name: 'DANAU SIPIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1216, city_id: 1571, name: 'DANAU TELUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1217, city_id: 1571, name: 'PELAYANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1218, city_id: 1571, name: 'JAMBI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1219, city_id: 1572, name: 'TANAH KAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1220, city_id: 1572, name: 'KUMUN DEBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1221, city_id: 1572, name: 'SUNGAI PENUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1222, city_id: 1572, name: 'PONDOK TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1223, city_id: 1572, name: 'SUNGAI BUNGKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1224, city_id: 1572, name: 'HAMPARAN RAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1225, city_id: 1572, name: 'PESISIR BUKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1226, city_id: 1572, name: 'KOTO BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1227, city_id: 1601, name: 'LENGKITI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1228, city_id: 1601, name: 'SOSOH BUAY RAYAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1229, city_id: 1601, name: 'PENGANDONAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1230, city_id: 1601, name: 'SEMIDANG AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1231, city_id: 1601, name: 'ULU OGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1232, city_id: 1601, name: 'MUARA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1233, city_id: 1601, name: 'PENINJAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1234, city_id: 1601, name: 'LUBUK BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1235, city_id: 1601, name: 'SINAR PENINJAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1236, city_id: 1601, name: 'KEDATON PENINJAUAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1237, city_id: 1601, name: 'BATU RAJA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1238, city_id: 1601, name: 'LUBUK RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1239, city_id: 1601, name: 'BATU RAJA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1240, city_id: 1602, name: 'LEMPUING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1241, city_id: 1602, name: 'LEMPUING JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1242, city_id: 1602, name: 'MESUJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1243, city_id: 1602, name: 'SUNGAI MENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1244, city_id: 1602, name: 'MESUJI MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1245, city_id: 1602, name: 'MESUJI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1246, city_id: 1602, name: 'TULUNG SELAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1247, city_id: 1602, name: 'CENGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1248, city_id: 1602, name: 'PEDAMARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1249, city_id: 1602, name: 'PEDAMARAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1250, city_id: 1602, name: 'TANJUNG LUBUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1251, city_id: 1602, name: 'TELUK GELAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1252, city_id: 1602, name: 'KOTA KAYU AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1253, city_id: 1602, name: 'SIRAH PULAU PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1254, city_id: 1602, name: 'JEJAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1255, city_id: 1602, name: 'PAMPANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1256, city_id: 1602, name: 'PANGKALAN LAPAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1257, city_id: 1602, name: 'AIR SUGIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1258, city_id: 1603, name: 'SEMENDO DARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1259, city_id: 1603, name: 'SEMENDO DARAT ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1260, city_id: 1603, name: 'SEMENDO DARAT TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1261, city_id: 1603, name: 'TANJUNG AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1262, city_id: 1603, name: 'RAMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1263, city_id: 1603, name: 'LUBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1264, city_id: 1603, name: 'LUBAI ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1265, city_id: 1603, name: 'LAWANG KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1266, city_id: 1603, name: 'MUARA ENIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1267, city_id: 1603, name: 'UJAN MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1268, city_id: 1603, name: 'GUNUNG MEGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1269, city_id: 1603, name: 'BENAKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1270, city_id: 1603, name: 'BELIMBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1271, city_id: 1603, name: 'RAMBANG DANGKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1272, city_id: 1603, name: 'GELUMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1273, city_id: 1603, name: 'LEMBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1274, city_id: 1603, name: 'SUNGAI ROTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1275, city_id: 1603, name: 'MUARA BELIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1276, city_id: 1603, name: 'KELEKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1277, city_id: 1603, name: 'BELIDA DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1278, city_id: 1604, name: 'TANJUNG SAKTI PUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1279, city_id: 1604, name: 'TANJUNG SAKTI PUMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1280, city_id: 1604, name: 'KOTA AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1281, city_id: 1604, name: 'MULAK ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1282, city_id: 1604, name: 'TANJUNG TEBAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1283, city_id: 1604, name: 'MULAK SEBINGKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1284, city_id: 1604, name: 'PULAU PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1285, city_id: 1604, name: 'PAGAR GUNUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1286, city_id: 1604, name: 'GUMAY ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1287, city_id: 1604, name: 'JARAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1288, city_id: 1604, name: 'PAJAR BULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1289, city_id: 1604, name: 'MUARA PAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1290, city_id: 1604, name: 'SUKAMERINDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1291, city_id: 1604, name: 'KIKIM BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1292, city_id: 1604, name: 'KIKIM TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1293, city_id: 1604, name: 'KIKIM SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1294, city_id: 1604, name: 'KIKIM TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1295, city_id: 1604, name: 'LAHAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1296, city_id: 1604, name: 'GUMAY TALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1297, city_id: 1604, name: 'PSEKSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1298, city_id: 1604, name: 'LAHAT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1299, city_id: 1604, name: 'MERAPI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1300, city_id: 1604, name: 'MERAPI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1301, city_id: 1604, name: 'MERAPI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1302, city_id: 1605, name: 'SUKU TENGAH LAKITAN ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1303, city_id: 1605, name: 'SELANGIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1304, city_id: 1605, name: 'SUMBER HARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1305, city_id: 1605, name: 'TUGUMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1306, city_id: 1605, name: 'PURWODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1307, city_id: 1605, name: 'MUARA BELITI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1308, city_id: 1605, name: 'TIANG PUMPUNG KEPUNGUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1309, city_id: 1605, name: 'JAYALOKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1310, city_id: 1605, name: 'SUKA KARYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1311, city_id: 1605, name: 'MUARA KELINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1312, city_id: 1605, name: 'BULANG TENGAH SUKU ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1313, city_id: 1605, name: 'TUAH NEGERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1314, city_id: 1605, name: 'MUARA LAKITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1315, city_id: 1605, name: 'MEGANG SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1316, city_id: 1606, name: 'SANGA DESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1317, city_id: 1606, name: 'BABAT TOMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1318, city_id: 1606, name: 'BATANGHARI LEKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1319, city_id: 1606, name: 'PLAKAT TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1320, city_id: 1606, name: 'LAWANG WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1321, city_id: 1606, name: 'SUNGAI KERUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1322, city_id: 1606, name: 'SEKAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1323, city_id: 1606, name: 'LAIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1324, city_id: 1606, name: 'SUNGAI LILIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1325, city_id: 1606, name: 'KELUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1326, city_id: 1606, name: 'BABAT SUPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1327, city_id: 1606, name: 'BAYUNG LENCIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1328, city_id: 1606, name: 'LALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1329, city_id: 1606, name: 'TUNGKAL JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1330, city_id: 1607, name: 'RANTAU BAYUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1331, city_id: 1607, name: 'BETUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1332, city_id: 1607, name: 'SUAK TAPEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1333, city_id: 1607, name: 'PULAU RIMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1334, city_id: 1607, name: 'TUNGKAL ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1335, city_id: 1607, name: 'BANYUASIN III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1336, city_id: 1607, name: 'SEMBAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1337, city_id: 1607, name: 'TALANG KELAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1338, city_id: 1607, name: 'TANJUNG LAGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1339, city_id: 1607, name: 'BANYUASIN I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1340, city_id: 1607, name: 'AIR KUMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1341, city_id: 1607, name: 'RAMBUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1342, city_id: 1607, name: 'MUARA PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1343, city_id: 1607, name: 'MUARA SUGIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1344, city_id: 1607, name: 'MAKARTI JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1345, city_id: 1607, name: 'AIR SALEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1346, city_id: 1607, name: 'BANYUASIN II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1347, city_id: 1607, name: 'MUARA TELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1348, city_id: 1607, name: 'SUMBER MARGA TELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1349, city_id: 1608, name: 'MEKAKAU ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1350, city_id: 1608, name: 'BANDING AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1351, city_id: 1608, name: 'WARKUK RANAU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1352, city_id: 1608, name: 'BUAY PEMATANG RIBU RANAU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1353, city_id: 1608, name: 'BUAY PEMACA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1354, city_id: 1608, name: 'SIMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1355, city_id: 1608, name: 'BUANA PEMACA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1356, city_id: 1608, name: 'MUARADUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1357, city_id: 1608, name: 'BUAY RAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1358, city_id: 1608, name: 'BUAY SANDANG AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1359, city_id: 1608, name: 'TIGA DIHAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1360, city_id: 1608, name: 'BUAY RUNJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1361, city_id: 1608, name: 'RUNJUNG AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1362, city_id: 1608, name: 'KISAM TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1363, city_id: 1608, name: 'MUARADUA KISAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1364, city_id: 1608, name: 'KISAM ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1365, city_id: 1608, name: 'PULAU BERINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1366, city_id: 1608, name: 'SINDANG DANAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1367, city_id: 1608, name: 'SUNGAI ARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1368, city_id: 1609, name: 'MARTAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1369, city_id: 1609, name: 'BUNGA MAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1370, city_id: 1609, name: 'JAYA PURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1371, city_id: 1609, name: 'BUAY PEMUKA PELIUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1372, city_id: 1609, name: 'BUAY MADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1373, city_id: 1609, name: 'BUAY MADANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1374, city_id: 1609, name: 'BUAY PEMUKA BANGSA RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1375, city_id: 1609, name: 'MADANG SUKU II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1376, city_id: 1609, name: 'MADANG SUKU III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1377, city_id: 1609, name: 'MADANG SUKU I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1378, city_id: 1609, name: 'BELITANG MADANG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1379, city_id: 1609, name: 'BELITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1380, city_id: 1609, name: 'BELITANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1381, city_id: 1609, name: 'BELITANG III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1382, city_id: 1609, name: 'BELITANG II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1383, city_id: 1609, name: 'BELITANG MULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1384, city_id: 1609, name: 'SEMENDAWAI SUKU III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1385, city_id: 1609, name: 'SEMENDAWAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1386, city_id: 1609, name: 'CEMPAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1387, city_id: 1609, name: 'SEMENDAWAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1388, city_id: 1610, name: 'MUARA KUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1389, city_id: 1610, name: 'RAMBANG KUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1390, city_id: 1610, name: 'LUBUK KELIAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1391, city_id: 1610, name: 'TANJUNG BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1392, city_id: 1610, name: 'PAYARAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1393, city_id: 1610, name: 'RANTAU ALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1394, city_id: 1610, name: 'KANDIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1395, city_id: 1610, name: 'TANJUNG RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1396, city_id: 1610, name: 'RANTAU PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1397, city_id: 1610, name: 'SUNGAI PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1398, city_id: 1610, name: 'PEMULUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1399, city_id: 1610, name: 'PEMULUTAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1400, city_id: 1610, name: 'PEMULUTAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1401, city_id: 1610, name: 'INDRALAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1402, city_id: 1610, name: 'INDRALAYA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1403, city_id: 1610, name: 'INDRALAYA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1404, city_id: 1611, name: 'MUARA PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1405, city_id: 1611, name: 'LINTANG KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1406, city_id: 1611, name: 'PENDOPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1407, city_id: 1611, name: 'PENDOPO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1408, city_id: 1611, name: 'PASEMAH AIR KERUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1409, city_id: 1611, name: 'ULU MUSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1410, city_id: 1611, name: 'SIKAP DALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1411, city_id: 1611, name: 'TALANG PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1412, city_id: 1611, name: 'TEBING TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1413, city_id: 1611, name: 'SALING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1414, city_id: 1612, name: 'TALANG UBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1415, city_id: 1612, name: 'TANAH ABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1416, city_id: 1612, name: 'ABAB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1417, city_id: 1612, name: 'PENUKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1418, city_id: 1612, name: 'PENUKAL UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1419, city_id: 1613, name: 'ULU RAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1420, city_id: 1613, name: 'KARANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1421, city_id: 1613, name: 'RAWAS ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1422, city_id: 1613, name: 'RUPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1423, city_id: 1613, name: 'KARANG DAPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1424, city_id: 1613, name: 'RAWAS ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1425, city_id: 1613, name: 'NIBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1426, city_id: 1671, name: 'ILIR BARAT II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1427, city_id: 1671, name: 'GANDUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1428, city_id: 1671, name: 'SEBERANG ULU I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1429, city_id: 1671, name: 'KERTAPATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1430, city_id: 1671, name: 'JAKABARING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1431, city_id: 1671, name: 'SEBERANG ULU II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1432, city_id: 1671, name: 'PLAJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1433, city_id: 1671, name: 'ILIR BARAT I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1434, city_id: 1671, name: 'BUKIT KECIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1435, city_id: 1671, name: 'ILIR TIMUR I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1436, city_id: 1671, name: 'KEMUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1437, city_id: 1671, name: 'ILIR TIMUR II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1438, city_id: 1671, name: 'KALIDONI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1439, city_id: 1671, name: 'ILIR TIMUR III', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1440, city_id: 1671, name: 'SAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1441, city_id: 1671, name: 'SEMATANG BORANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1442, city_id: 1671, name: 'SUKARAMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1443, city_id: 1671, name: 'ALANG ALANG LEBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1444, city_id: 1672, name: 'RAMBANG KAPAK TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1445, city_id: 1672, name: 'PRABUMULIH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1446, city_id: 1672, name: 'PRABUMULIH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1447, city_id: 1672, name: 'PRABUMULIH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1448, city_id: 1672, name: 'PRABUMULIH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1449, city_id: 1672, name: 'CAMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1450, city_id: 1673, name: 'DEMPO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1451, city_id: 1673, name: 'DEMPO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1452, city_id: 1673, name: 'DEMPO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1453, city_id: 1673, name: 'PAGAR ALAM SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1454, city_id: 1673, name: 'PAGAR ALAM UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1455, city_id: 1674, name: 'LUBUK LINGGAU BARAT I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1456, city_id: 1674, name: 'LUBUK LINGGAU BARAT II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1457, city_id: 1674, name: 'LUBUK LINGGAU SELATAN I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1458, city_id: 1674, name: 'LUBUK LINGGAU SELATAN II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1459, city_id: 1674, name: 'LUBUK LINGGAU TIMUR I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1460, city_id: 1674, name: 'LUBUK LINGGAU TIMUR II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1461, city_id: 1674, name: 'LUBUK LINGGAU UTARA I', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1462, city_id: 1674, name: 'LUBUK LINGGAU UTARA II', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1463, city_id: 1701, name: 'MANNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1464, city_id: 1701, name: 'KOTA MANNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1465, city_id: 1701, name: 'KEDURANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1466, city_id: 1701, name: 'BUNGA MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1467, city_id: 1701, name: 'PASAR MANNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1468, city_id: 1701, name: 'KEDURANG ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1469, city_id: 1701, name: 'SEGINIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1470, city_id: 1701, name: 'AIR NIPIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1471, city_id: 1701, name: 'PINO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1472, city_id: 1701, name: 'PINORAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1473, city_id: 1701, name: 'ULU MANNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1474, city_id: 1702, name: 'KOTA PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1475, city_id: 1702, name: 'SINDANG BELITI ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1476, city_id: 1702, name: 'PADANG ULAK TANDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1477, city_id: 1702, name: 'SINDANG KELINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1478, city_id: 1702, name: 'BINDU RIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1479, city_id: 1702, name: 'SINDANG BELITI ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1480, city_id: 1702, name: 'SINDANG DATARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1481, city_id: 1702, name: 'CURUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1482, city_id: 1702, name: 'BERMANI ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1483, city_id: 1702, name: 'SELUPU REJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1484, city_id: 1702, name: 'CURUP SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1485, city_id: 1702, name: 'CURUP TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1486, city_id: 1702, name: 'BERMANI ULU RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1487, city_id: 1702, name: 'CURUP UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1488, city_id: 1702, name: 'CURUP TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1489, city_id: 1703, name: 'ENGGANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1490, city_id: 1703, name: 'KERKAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1491, city_id: 1703, name: 'AIR NAPAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1492, city_id: 1703, name: 'AIR BESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1493, city_id: 1703, name: 'HULU PALIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1494, city_id: 1703, name: 'TANJUNG AGUNG PALIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1495, city_id: 1703, name: 'ARGA MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1496, city_id: 1703, name: 'ARMA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1497, city_id: 1703, name: 'LAIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1498, city_id: 1703, name: 'BATIK NAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1499, city_id: 1703, name: 'GIRI MULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1500, city_id: 1703, name: 'AIR PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1501, city_id: 1703, name: 'PADANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1502, city_id: 1703, name: 'KETAHUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1503, city_id: 1703, name: 'NAPAL PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1504, city_id: 1703, name: 'ULOK KUPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1505, city_id: 1703, name: 'PINANG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1506, city_id: 1703, name: 'PUTRI HIJAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1507, city_id: 1703, name: 'MARGA SAKTI SEBELAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1508, city_id: 1704, name: 'NASAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1509, city_id: 1704, name: 'MAJE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1510, city_id: 1704, name: 'KAUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1511, city_id: 1704, name: 'TETAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1512, city_id: 1704, name: 'KAUR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1513, city_id: 1704, name: 'LUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1514, city_id: 1704, name: 'MUARA SAHUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1515, city_id: 1704, name: 'KINAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1516, city_id: 1704, name: 'SEMIDANG GUMAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1517, city_id: 1704, name: 'TANJUNG KEMUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1518, city_id: 1704, name: 'KELAM TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1519, city_id: 1704, name: 'KAUR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1520, city_id: 1704, name: 'PADANG GUCI HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1521, city_id: 1704, name: 'LUNGKANG KULE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1522, city_id: 1704, name: 'PADANG GUCI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1523, city_id: 1705, name: 'SEMIDANG ALAS MARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1524, city_id: 1705, name: 'SEMIDANG ALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1525, city_id: 1705, name: 'TALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1526, city_id: 1705, name: 'ILIR TALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1527, city_id: 1705, name: 'TALO KECIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1528, city_id: 1705, name: 'ULU TALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1529, city_id: 1705, name: 'SELUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1530, city_id: 1705, name: 'SELUMA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1531, city_id: 1705, name: 'SELUMA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1532, city_id: 1705, name: 'SELUMA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1533, city_id: 1705, name: 'SELUMA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1534, city_id: 1705, name: 'SUKARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1535, city_id: 1705, name: 'AIR PERIUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1536, city_id: 1705, name: 'LUBUK SANDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1537, city_id: 1706, name: 'IPUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1538, city_id: 1706, name: 'AIR RAMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1539, city_id: 1706, name: 'MALIN DEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1540, city_id: 1706, name: 'PONDOK SUGUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1541, city_id: 1706, name: 'SUNGAI RUMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1542, city_id: 1706, name: 'TERAMANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1543, city_id: 1706, name: 'TERAS TERUNJAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1544, city_id: 1706, name: 'PENARIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1545, city_id: 1706, name: 'SELAGAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1546, city_id: 1706, name: 'KOTA MUKOMUKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1547, city_id: 1706, name: 'AIR DIKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1548, city_id: 1706, name: 'XIV KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1549, city_id: 1706, name: 'LUBUK PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1550, city_id: 1706, name: 'AIR MANJUNTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1551, city_id: 1706, name: 'V KOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1552, city_id: 1707, name: 'RIMBO PENGADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1553, city_id: 1707, name: 'TOPOS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1554, city_id: 1707, name: 'LEBONG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1555, city_id: 1707, name: 'BINGIN KUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1556, city_id: 1707, name: 'LEBONG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1557, city_id: 1707, name: 'LEBONG SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1558, city_id: 1707, name: 'LEBONG ATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1559, city_id: 1707, name: 'PELABAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1560, city_id: 1707, name: 'LEBONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1561, city_id: 1707, name: 'AMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1562, city_id: 1707, name: 'URAM JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1563, city_id: 1707, name: 'PINANG BELAPIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1564, city_id: 1708, name: 'MUARA KEMUMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1565, city_id: 1708, name: 'BERMANI ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1566, city_id: 1708, name: 'SEBERANG MUSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1567, city_id: 1708, name: 'TEBAT KARAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1568, city_id: 1708, name: 'KEPAHIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1569, city_id: 1708, name: 'KABA WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1570, city_id: 1708, name: 'UJAN MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1571, city_id: 1708, name: 'MERIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1572, city_id: 1709, name: 'TALANG EMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1573, city_id: 1709, name: 'KARANG TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1574, city_id: 1709, name: 'TABA PENANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1575, city_id: 1709, name: 'MERIGI KELINDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1576, city_id: 1709, name: 'PAGAR JATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1577, city_id: 1709, name: 'MERIGI SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1578, city_id: 1709, name: 'PONDOK KELAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1579, city_id: 1709, name: 'PONDOK KUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1580, city_id: 1709, name: 'PEMATANG TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1581, city_id: 1709, name: 'BANG HAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1582, city_id: 1771, name: 'SELEBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1583, city_id: 1771, name: 'KAMPUNG MELAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1584, city_id: 1771, name: 'GADING CEMPAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1585, city_id: 1771, name: 'RATU AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1586, city_id: 1771, name: 'RATU SAMBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1587, city_id: 1771, name: 'SINGARAN PATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1588, city_id: 1771, name: 'TELUK SEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1589, city_id: 1771, name: 'SUNGAI SERUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1590, city_id: 1771, name: 'MUARA BANGKA HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1591, city_id: 1801, name: 'BALIK BUKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1592, city_id: 1801, name: 'SUKAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1593, city_id: 1801, name: 'LUMBOK SEMINUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1594, city_id: 1801, name: 'BELALAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1595, city_id: 1801, name: 'SEKINCAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1596, city_id: 1801, name: 'SUOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1597, city_id: 1801, name: 'BATU BRAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1598, city_id: 1801, name: 'PAGAR DEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1599, city_id: 1801, name: 'BATU KETULIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1600, city_id: 1801, name: 'BANDAR NEGERI SUOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1601, city_id: 1801, name: 'SUMBER JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1602, city_id: 1801, name: 'WAY TENONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1603, city_id: 1801, name: 'GEDUNG SURIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1604, city_id: 1801, name: 'KEBUN TEBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1605, city_id: 1801, name: 'AIR HITAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1606, city_id: 1802, name: 'WONOSOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1607, city_id: 1802, name: 'SEMAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1608, city_id: 1802, name: 'BANDAR NEGERI SEMUONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1609, city_id: 1802, name: 'KOTA AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1610, city_id: 1802, name: 'PEMATANG SAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1611, city_id: 1802, name: 'KOTA AGUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1612, city_id: 1802, name: 'KOTA AGUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1613, city_id: 1802, name: 'PULAU PANGGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1614, city_id: 1802, name: 'ULUBELU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1615, city_id: 1802, name: 'AIR NANINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1616, city_id: 1802, name: 'TALANG PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1617, city_id: 1802, name: 'SUMBEREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1618, city_id: 1802, name: 'GISTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1619, city_id: 1802, name: 'GUNUNG ALIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1620, city_id: 1802, name: 'PUGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1621, city_id: 1802, name: 'BULOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1622, city_id: 1802, name: 'CUKUH BALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1623, city_id: 1802, name: 'KELUMBAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1624, city_id: 1802, name: 'LIMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1625, city_id: 1802, name: 'KELUMBAYAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1626, city_id: 1803, name: 'NATAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1627, city_id: 1803, name: 'JATI AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1628, city_id: 1803, name: 'TANJUNG BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1629, city_id: 1803, name: 'TANJUNG SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1630, city_id: 1803, name: 'KATIBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1631, city_id: 1803, name: 'MERBAU MATARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1632, city_id: 1803, name: 'WAY SULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1633, city_id: 1803, name: 'SIDOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1634, city_id: 1803, name: 'CANDIPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1635, city_id: 1803, name: 'WAY PANJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1636, city_id: 1803, name: 'KALIANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1637, city_id: 1803, name: 'RAJABASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1638, city_id: 1803, name: 'PALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1639, city_id: 1803, name: 'SRAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1640, city_id: 1803, name: 'PENENGAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1641, city_id: 1803, name: 'KETAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1642, city_id: 1803, name: 'BAKAUHENI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1643, city_id: 1804, name: 'METRO KIBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1644, city_id: 1804, name: 'BATANGHARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1645, city_id: 1804, name: 'SEKAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1646, city_id: 1804, name: 'MARGATIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1647, city_id: 1804, name: 'SEKAMPUNG UDIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1648, city_id: 1804, name: 'JABUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1649, city_id: 1804, name: 'PASIR SAKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1650, city_id: 1804, name: 'WAWAY KARYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1651, city_id: 1804, name: 'MARGA SEKAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1652, city_id: 1804, name: 'LABUHAN MARINGGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1653, city_id: 1804, name: 'MATARAM BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1654, city_id: 1804, name: 'BANDAR SRIBAWONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1655, city_id: 1804, name: 'MELINTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1656, city_id: 1804, name: 'GUNUNG PELINDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1657, city_id: 1804, name: 'WAY JEPARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1658, city_id: 1804, name: 'BRAJA SLEBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1659, city_id: 1804, name: 'LABUHAN RATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1660, city_id: 1804, name: 'SUKADANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1661, city_id: 1804, name: 'BUMI AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1662, city_id: 1804, name: 'BATANGHARI NUBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1663, city_id: 1804, name: 'PEKALONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1664, city_id: 1804, name: 'RAMAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1665, city_id: 1804, name: 'PURBOLINGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1666, city_id: 1804, name: 'WAY BUNGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1667, city_id: 1805, name: 'PADANG RATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1668, city_id: 1805, name: 'SELAGAI LINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1669, city_id: 1805, name: 'PUBIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1670, city_id: 1805, name: 'ANAK TUHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1671, city_id: 1805, name: 'ANAK RATU AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1672, city_id: 1805, name: 'KALIREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1673, city_id: 1805, name: 'SENDANG AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1674, city_id: 1805, name: 'BANGUNREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1675, city_id: 1805, name: 'GUNUNG SUGIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1676, city_id: 1805, name: 'BEKRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1677, city_id: 1805, name: 'BUMI RATU NUBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1678, city_id: 1805, name: 'TRIMURJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1679, city_id: 1805, name: 'PUNGGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1680, city_id: 1805, name: 'KOTA GAJAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1681, city_id: 1805, name: 'SEPUTIH RAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1682, city_id: 1805, name: 'TERBANGGI BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1683, city_id: 1805, name: 'SEPUTIH AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1684, city_id: 1805, name: 'WAY PENGUBUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1685, city_id: 1805, name: 'TERUSAN NUNYAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1686, city_id: 1805, name: 'SEPUTIH MATARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1687, city_id: 1805, name: 'BANDAR MATARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1688, city_id: 1805, name: 'SEPUTIH BANYAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1689, city_id: 1805, name: 'WAY SEPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1690, city_id: 1805, name: 'RUMBIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1691, city_id: 1805, name: 'BUMI NABUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1692, city_id: 1805, name: 'PUTRA RUMBIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1693, city_id: 1805, name: 'SEPUTIH SURABAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1694, city_id: 1805, name: 'BANDAR SURABAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1695, city_id: 1806, name: 'BUKIT KEMUNING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1696, city_id: 1806, name: 'ABUNG TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1697, city_id: 1806, name: 'TANJUNG RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1698, city_id: 1806, name: 'ABUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1699, city_id: 1806, name: 'ABUNG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1700, city_id: 1806, name: 'ABUNG  KUNANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1701, city_id: 1806, name: 'ABUNG PEKURUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1702, city_id: 1806, name: 'KOTABUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1703, city_id: 1806, name: 'KOTABUMI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1704, city_id: 1806, name: 'KOTABUMI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1705, city_id: 1806, name: 'ABUNG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1706, city_id: 1806, name: 'ABUNG SEMULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1707, city_id: 1806, name: 'BLAMBANGAN PAGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1708, city_id: 1806, name: 'ABUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1709, city_id: 1806, name: 'ABUNG SURAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1710, city_id: 1806, name: 'SUNGKAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1711, city_id: 1806, name: 'MUARA SUNGKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1712, city_id: 1806, name: 'BUNGA MAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1713, city_id: 1806, name: 'SUNGKAI  BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1714, city_id: 1806, name: 'SUNGKAI JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1715, city_id: 1806, name: 'SUNGKAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1716, city_id: 1806, name: 'HULUSUNGKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1717, city_id: 1806, name: 'SUNGKAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1718, city_id: 1807, name: 'BANJIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1719, city_id: 1807, name: 'BARADATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1720, city_id: 1807, name: 'GUNUNG LABUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1721, city_id: 1807, name: 'KASUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1722, city_id: 1807, name: 'REBANG TANGKAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1723, city_id: 1807, name: 'BLAMBANGAN UMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1724, city_id: 1807, name: 'WAY TUBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1725, city_id: 1807, name: 'NEGERI AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1726, city_id: 1807, name: 'BAHUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1727, city_id: 1807, name: 'BUAY  BAHUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1728, city_id: 1807, name: 'BUMI AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1729, city_id: 1807, name: 'PAKUAN RATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1730, city_id: 1807, name: 'NEGARA BATIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1731, city_id: 1807, name: 'NEGERI BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1732, city_id: 1808, name: 'BANJAR AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1733, city_id: 1808, name: 'BANJAR MARGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1734, city_id: 1808, name: 'BANJAR BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1735, city_id: 1808, name: 'GEDUNG AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1736, city_id: 1808, name: 'PENAWAR AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1737, city_id: 1808, name: 'MERAKSA AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1738, city_id: 1808, name: 'MENGGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1739, city_id: 1808, name: 'PENAWAR TAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1740, city_id: 1808, name: 'RAWAJITU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1741, city_id: 1808, name: 'GEDUNG MENENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1742, city_id: 1808, name: 'RAWAJITU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1743, city_id: 1808, name: 'RAWA PITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1744, city_id: 1808, name: 'GEDUNG AJI BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1745, city_id: 1808, name: 'DENTE TELADAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1746, city_id: 1808, name: 'MENGGALA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1747, city_id: 1809, name: 'PUNDUH PIDADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1748, city_id: 1809, name: 'MARGA PUNDUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1749, city_id: 1809, name: 'PADANG CERMIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1750, city_id: 1809, name: 'TELUK PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1751, city_id: 1809, name: 'WAY RATAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1752, city_id: 1809, name: 'KEDONDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1753, city_id: 1809, name: 'WAY KHILAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1754, city_id: 1809, name: 'WAY LIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1755, city_id: 1809, name: 'GEDUNG TATAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1756, city_id: 1809, name: 'NEGERI KATON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1757, city_id: 1809, name: 'TEGINENENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1758, city_id: 1810, name: 'PARDASUKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1759, city_id: 1810, name: 'AMBARAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1760, city_id: 1810, name: 'PAGELARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1761, city_id: 1810, name: 'PAGELARAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1762, city_id: 1810, name: 'PRINGSEWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1763, city_id: 1810, name: 'GADING REJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1764, city_id: 1810, name: 'SUKOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1765, city_id: 1810, name: 'BANYUMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1766, city_id: 1810, name: 'ADI LUWIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1767, city_id: 1811, name: 'WAY SERDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1768, city_id: 1811, name: 'SIMPANG PEMATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1769, city_id: 1811, name: 'PANCA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1770, city_id: 1811, name: 'TANJUNG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1771, city_id: 1811, name: 'MESUJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1772, city_id: 1811, name: 'MESUJI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1773, city_id: 1811, name: 'RAWAJITU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1774, city_id: 1812, name: 'TULANG BAWANG UDIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1775, city_id: 1812, name: 'TUMI JAJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1776, city_id: 1812, name: 'TULANG BAWANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1777, city_id: 1812, name: 'PAGAR DEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1778, city_id: 1812, name: 'LAMBU KIBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1779, city_id: 1812, name: 'GUNUNG TERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1780, city_id: 1812, name: 'BATU PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1781, city_id: 1812, name: 'GUNUNG AGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1782, city_id: 1812, name: 'WAY KENANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1783, city_id: 1813, name: 'LEMONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1784, city_id: 1813, name: 'PESISIR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1785, city_id: 1813, name: 'PULAU PISANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1786, city_id: 1813, name: 'KARYA PENGGAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1787, city_id: 1813, name: 'WAY KRUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1788, city_id: 1813, name: 'PESISIR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1789, city_id: 1813, name: 'KRUI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1790, city_id: 1813, name: 'PESISIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1791, city_id: 1813, name: 'NGAMBUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1792, city_id: 1813, name: 'BENGKUNAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1793, city_id: 1813, name: 'BENGKUNAT BELIMBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1794, city_id: 1871, name: 'TELUK BETUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1795, city_id: 1871, name: 'TELUKBETUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1796, city_id: 1871, name: 'TELUK BETUNG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1797, city_id: 1871, name: 'BUMI WARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1798, city_id: 1871, name: 'PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1799, city_id: 1871, name: 'TANJUNG KARANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1800, city_id: 1871, name: 'KEDAMAIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1801, city_id: 1871, name: 'TELUK BETUNG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1802, city_id: 1871, name: 'TANJUNG KARANG PUSAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1803, city_id: 1871, name: 'ENGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1804, city_id: 1871, name: 'TANJUNG KARANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1805, city_id: 1871, name: 'KEMILING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1806, city_id: 1871, name: 'LANGKAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1807, city_id: 1871, name: 'KEDATON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1808, city_id: 1871, name: 'RAJABASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1809, city_id: 1871, name: 'TANJUNG SENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1810, city_id: 1871, name: 'LABUHAN RATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1811, city_id: 1871, name: 'SUKARAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1812, city_id: 1871, name: 'SUKABUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1813, city_id: 1871, name: 'WAY HALIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1814, city_id: 1872, name: 'METRO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1815, city_id: 1872, name: 'METRO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1816, city_id: 1872, name: 'METRO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1817, city_id: 1872, name: 'METRO PUSAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1818, city_id: 1872, name: 'METRO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1819, city_id: 1901, name: 'MENDO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1820, city_id: 1901, name: 'MERAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1821, city_id: 1901, name: 'PUDING BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1822, city_id: 1901, name: 'SUNGAI LIAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1823, city_id: 1901, name: 'PEMALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1824, city_id: 1901, name: 'BAKAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1825, city_id: 1901, name: 'BELINYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1826, city_id: 1901, name: 'RIAU SILIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1827, city_id: 1902, name: 'MEMBALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1828, city_id: 1902, name: 'TANJUNG PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1829, city_id: 1902, name: 'BADAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1830, city_id: 1902, name: 'SIJUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1831, city_id: 1902, name: 'SELAT NASIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1832, city_id: 1903, name: 'KELAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1833, city_id: 1903, name: 'TEMPILANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1834, city_id: 1903, name: 'MENTOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1835, city_id: 1903, name: 'SIMPANG TERITIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1836, city_id: 1903, name: 'JEBUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1837, city_id: 1903, name: 'PARITTIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1838, city_id: 1904, name: 'KOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1839, city_id: 1904, name: 'LUBUK BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1840, city_id: 1904, name: 'PANGKALAN BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1841, city_id: 1904, name: 'NAMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1842, city_id: 1904, name: 'SUNGAI SELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1843, city_id: 1904, name: 'SIMPANG KATIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1844, city_id: 1905, name: 'PAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1845, city_id: 1905, name: 'PULAU BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1846, city_id: 1905, name: 'SIMPANG RIMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1847, city_id: 1905, name: 'TOBOALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1848, city_id: 1905, name: 'TUKAK SADAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1849, city_id: 1905, name: 'AIR GEGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1850, city_id: 1905, name: 'LEPAR PONGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1851, city_id: 1905, name: 'KEPULAUAN PONGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1852, city_id: 1906, name: 'DENDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1853, city_id: 1906, name: 'SIMPANG PESAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1854, city_id: 1906, name: 'GANTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1855, city_id: 1906, name: 'SIMPANG RENGGIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1856, city_id: 1906, name: 'MANGGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1857, city_id: 1906, name: 'DAMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1858, city_id: 1906, name: 'KELAPA KAMPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1859, city_id: 1971, name: 'RANGKUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1860, city_id: 1971, name: 'BUKIT INTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1861, city_id: 1971, name: 'GIRIMAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1862, city_id: 1971, name: 'PANGKAL BALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1863, city_id: 1971, name: 'GABEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1864, city_id: 1971, name: 'TAMAN SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1865, city_id: 1971, name: 'GERUNGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1866, city_id: 2101, name: 'MORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1867, city_id: 2101, name: 'DURAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1868, city_id: 2101, name: 'KUNDUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1869, city_id: 2101, name: 'KUNDUR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1870, city_id: 2101, name: 'KUNDUR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1871, city_id: 2101, name: 'UNGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1872, city_id: 2101, name: 'BELAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1873, city_id: 2101, name: 'KARIMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1874, city_id: 2101, name: 'BURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1875, city_id: 2101, name: 'MERAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1876, city_id: 2101, name: 'TEBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1877, city_id: 2101, name: 'MERAL BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1878, city_id: 2102, name: 'TELUK BINTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1879, city_id: 2102, name: 'BINTAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1880, city_id: 2102, name: 'TELUK SEBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1881, city_id: 2102, name: 'SERI KUALA LOBAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1882, city_id: 2102, name: 'BINTAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1883, city_id: 2102, name: 'GUNUNG KIJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1884, city_id: 2102, name: 'MANTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1885, city_id: 2102, name: 'BINTAN PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1886, city_id: 2102, name: 'TOAPAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1887, city_id: 2102, name: 'TAMBELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1888, city_id: 2103, name: 'MIDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1889, city_id: 2103, name: 'SUAK MIDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1890, city_id: 2103, name: 'BUNGURAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1891, city_id: 2103, name: 'BUNGURAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1892, city_id: 2103, name: 'PULAU LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1893, city_id: 2103, name: 'PULAU TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1894, city_id: 2103, name: 'BUNGURAN BATUBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1895, city_id: 2103, name: 'PULAU TIGA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1896, city_id: 2103, name: 'BUNGURAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1897, city_id: 2103, name: 'BUNGURAN TIMUR LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1898, city_id: 2103, name: 'BUNGURAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1899, city_id: 2103, name: 'BUNGURAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1900, city_id: 2103, name: 'SERASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1901, city_id: 2103, name: 'SUBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1902, city_id: 2103, name: 'SERASAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1903, city_id: 2104, name: 'SINGKEP BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1904, city_id: 2104, name: 'KEPULAUAN POSEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1905, city_id: 2104, name: 'SINGKEP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1906, city_id: 2104, name: 'SINGKEP SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1907, city_id: 2104, name: 'SINGKEP PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1908, city_id: 2104, name: 'LINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1909, city_id: 2104, name: 'SELAYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1910, city_id: 2104, name: 'LINGGA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1911, city_id: 2104, name: 'LINGGA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1912, city_id: 2104, name: 'SENAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1913, city_id: 2105, name: 'JEMAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1914, city_id: 2105, name: 'JEMAJA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1915, city_id: 2105, name: 'SIANTAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1916, city_id: 2105, name: 'SIANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1917, city_id: 2105, name: 'SIANTAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1918, city_id: 2105, name: 'SIANTAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1919, city_id: 2105, name: 'PALMATAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1920, city_id: 2171, name: 'BELAKANG PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1921, city_id: 2171, name: 'BULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1922, city_id: 2171, name: 'GALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1923, city_id: 2171, name: 'SEI BEDUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1924, city_id: 2171, name: 'SAGULUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1925, city_id: 2171, name: 'NONGSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1926, city_id: 2171, name: 'BATAM KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1927, city_id: 2171, name: 'SEKUPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1928, city_id: 2171, name: 'BATU AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1929, city_id: 2171, name: 'LUBUK BAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1930, city_id: 2171, name: 'BATU AMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1931, city_id: 2171, name: 'BENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1932, city_id: 2172, name: 'BUKIT BESTARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1933, city_id: 2172, name: 'TANJUNGPINANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1934, city_id: 2172, name: 'TANJUNGPINANG KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1935, city_id: 2172, name: 'TANJUNGPINANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1936, city_id: 3101, name: 'KEPULAUAN SERIBU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1937, city_id: 3101, name: 'KEPULAUAN SERIBU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1938, city_id: 3171, name: 'JAGAKARSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1939, city_id: 3171, name: 'PASAR MINGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1940, city_id: 3171, name: 'CILANDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1941, city_id: 3171, name: 'PESANGGRAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1942, city_id: 3171, name: 'KEBAYORAN LAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1943, city_id: 3171, name: 'KEBAYORAN BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1944, city_id: 3171, name: 'MAMPANG PRAPATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1945, city_id: 3171, name: 'PANCORAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1946, city_id: 3171, name: 'TEBET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1947, city_id: 3171, name: 'SETIA BUDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1948, city_id: 3172, name: 'PASAR REBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1949, city_id: 3172, name: 'CIRACAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1950, city_id: 3172, name: 'CIPAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1951, city_id: 3172, name: 'MAKASAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1952, city_id: 3172, name: 'KRAMAT JATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1953, city_id: 3172, name: 'JATINEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1954, city_id: 3172, name: 'DUREN SAWIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1955, city_id: 3172, name: 'CAKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1956, city_id: 3172, name: 'PULO GADUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1957, city_id: 3172, name: 'MATRAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1958, city_id: 3173, name: 'TANAH ABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1959, city_id: 3173, name: 'MENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1960, city_id: 3173, name: 'SENEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1961, city_id: 3173, name: 'JOHAR BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1962, city_id: 3173, name: 'CEMPAKA PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1963, city_id: 3173, name: 'KEMAYORAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1964, city_id: 3173, name: 'SAWAH BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1965, city_id: 3173, name: 'GAMBIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1966, city_id: 3174, name: 'KEMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1967, city_id: 3174, name: 'KEBON JERUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1968, city_id: 3174, name: 'PALMERAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1969, city_id: 3174, name: 'GROGOL PETAMBURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1970, city_id: 3174, name: 'TAMBORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1971, city_id: 3174, name: 'TAMAN SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1972, city_id: 3174, name: 'CENGKARENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1973, city_id: 3174, name: 'KALI DERES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1974, city_id: 3175, name: 'PENJARINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1975, city_id: 3175, name: 'PADEMANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1976, city_id: 3175, name: 'TANJUNG PRIOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1977, city_id: 3175, name: 'KOJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1978, city_id: 3175, name: 'KELAPA GADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1979, city_id: 3175, name: 'CILINCING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1980, city_id: 3201, name: 'NANGGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1981, city_id: 3201, name: 'LEUWILIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1982, city_id: 3201, name: 'LEUWISADENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1983, city_id: 3201, name: 'PAMIJAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1984, city_id: 3201, name: 'CIBUNGBULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1985, city_id: 3201, name: 'CIAMPEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1986, city_id: 3201, name: 'TENJOLAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1987, city_id: 3201, name: 'DRAMAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1988, city_id: 3201, name: 'CIOMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1989, city_id: 3201, name: 'TAMANSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1990, city_id: 3201, name: 'CIJERUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1991, city_id: 3201, name: 'CIGOMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1992, city_id: 3201, name: 'CARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1993, city_id: 3201, name: 'CIAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1994, city_id: 3201, name: 'CISARUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1995, city_id: 3201, name: 'MEGAMENDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1996, city_id: 3201, name: 'SUKARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1997, city_id: 3201, name: 'BABAKAN MADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1998, city_id: 3201, name: 'SUKAMAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1999, city_id: 3201, name: 'CARIU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2000, city_id: 3201, name: 'TANJUNGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2001, city_id: 3201, name: 'JONGGOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2002, city_id: 3201, name: 'CILEUNGSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2003, city_id: 3201, name: 'KELAPA NUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2004, city_id: 3201, name: 'GUNUNG PUTRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2005, city_id: 3201, name: 'CITEUREUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2006, city_id: 3201, name: 'CIBINONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2007, city_id: 3201, name: 'BOJONG GEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2008, city_id: 3201, name: 'TAJUR HALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2009, city_id: 3201, name: 'KEMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2010, city_id: 3201, name: 'RANCA BUNGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2011, city_id: 3201, name: 'PARUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2012, city_id: 3201, name: 'CISEENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2013, city_id: 3201, name: 'GUNUNG SINDUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2014, city_id: 3201, name: 'RUMPIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2015, city_id: 3201, name: 'CIGUDEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2016, city_id: 3201, name: 'SUKAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2017, city_id: 3201, name: 'JASINGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2018, city_id: 3201, name: 'TENJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2019, city_id: 3201, name: 'PARUNG PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2020, city_id: 3202, name: 'CIEMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2021, city_id: 3202, name: 'CIRACAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2022, city_id: 3202, name: 'WALURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2023, city_id: 3202, name: 'SURADE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2024, city_id: 3202, name: 'CIBITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2025, city_id: 3202, name: 'JAMPANG KULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2026, city_id: 3202, name: 'CIMANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2027, city_id: 3202, name: 'KALI BUNDER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2028, city_id: 3202, name: 'TEGAL BULEUD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2029, city_id: 3202, name: 'CIDOLOG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2030, city_id: 3202, name: 'SAGARANTEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2031, city_id: 3202, name: 'CIDADAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2032, city_id: 3202, name: 'CURUGKEMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2033, city_id: 3202, name: 'PABUARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2034, city_id: 3202, name: 'LENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2035, city_id: 3202, name: 'PALABUHANRATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2036, city_id: 3202, name: 'SIMPENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2037, city_id: 3202, name: 'WARUNG KIARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2038, city_id: 3202, name: 'BANTARGADUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2039, city_id: 3202, name: 'JAMPANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2040, city_id: 3202, name: 'PURABAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2041, city_id: 3202, name: 'CIKEMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2042, city_id: 3202, name: 'NYALINDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2043, city_id: 3202, name: 'GEGER BITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2044, city_id: 3202, name: 'SUKARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2045, city_id: 3202, name: 'KEBONPEDES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2046, city_id: 3202, name: 'CIREUNGHAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2047, city_id: 3202, name: 'SUKALARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2048, city_id: 3202, name: 'SUKABUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2049, city_id: 3202, name: 'KADUDAMPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2050, city_id: 3202, name: 'CISAAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2051, city_id: 3202, name: 'GUNUNGGURUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2052, city_id: 3202, name: 'CIBADAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2053, city_id: 3202, name: 'CICANTAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2054, city_id: 3202, name: 'CARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2055, city_id: 3202, name: 'NAGRAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2056, city_id: 3202, name: 'CIAMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2057, city_id: 3202, name: 'CICURUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2058, city_id: 3202, name: 'CIDAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2059, city_id: 3202, name: 'PARAKAN SALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2060, city_id: 3202, name: 'PARUNG KUDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2061, city_id: 3202, name: 'BOJONG GENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2062, city_id: 3202, name: 'KALAPA NUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2063, city_id: 3202, name: 'CIKIDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2064, city_id: 3202, name: 'CISOLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2065, city_id: 3202, name: 'CIKAKAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2066, city_id: 3202, name: 'KABANDUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2067, city_id: 3203, name: 'AGRABINTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2068, city_id: 3203, name: 'LELES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2069, city_id: 3203, name: 'SINDANGBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2070, city_id: 3203, name: 'CIDAUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2071, city_id: 3203, name: 'NARINGGUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2072, city_id: 3203, name: 'CIBINONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2073, city_id: 3203, name: 'CIKADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2074, city_id: 3203, name: 'TANGGEUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2075, city_id: 3203, name: 'PASIRKUDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2076, city_id: 3203, name: 'KADUPANDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2077, city_id: 3203, name: 'CIJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2078, city_id: 3203, name: 'TAKOKAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2079, city_id: 3203, name: 'SUKANAGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2080, city_id: 3203, name: 'PAGELARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2081, city_id: 3203, name: 'CAMPAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2082, city_id: 3203, name: 'CAMPAKA MULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2083, city_id: 3203, name: 'CIBEBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2084, city_id: 3203, name: 'WARUNGKONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2085, city_id: 3203, name: 'GEKBRONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2086, city_id: 3203, name: 'CILAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2087, city_id: 3203, name: 'SUKALUYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2088, city_id: 3203, name: 'BOJONGPICUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2089, city_id: 3203, name: 'HAURWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2090, city_id: 3203, name: 'CIRANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2091, city_id: 3203, name: 'MANDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2092, city_id: 3203, name: 'KARANGTENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2093, city_id: 3203, name: 'CIANJUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2094, city_id: 3203, name: 'CUGENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2095, city_id: 3203, name: 'PACET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2096, city_id: 3203, name: 'CIPANAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2097, city_id: 3203, name: 'SUKARESMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2098, city_id: 3203, name: 'CIKALONGKULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2099, city_id: 3204, name: 'CIWIDEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2100, city_id: 3204, name: 'RANCABALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2101, city_id: 3204, name: 'PASIRJAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2102, city_id: 3204, name: 'CIMAUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2103, city_id: 3204, name: 'PANGALENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2104, city_id: 3204, name: 'KERTASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2105, city_id: 3204, name: 'PACET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2106, city_id: 3204, name: 'IBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2107, city_id: 3204, name: 'PASEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2108, city_id: 3204, name: 'CIKANCUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2109, city_id: 3204, name: 'CICALENGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2110, city_id: 3204, name: 'NAGREG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2111, city_id: 3204, name: 'RANCAEKEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2112, city_id: 3204, name: 'MAJALAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2113, city_id: 3204, name: 'SOLOKAN JERUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2114, city_id: 3204, name: 'CIPARAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2115, city_id: 3204, name: 'BALEENDAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2116, city_id: 3204, name: 'ARJASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2117, city_id: 3204, name: 'BANJARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2118, city_id: 3204, name: 'CANGKUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2119, city_id: 3204, name: 'PAMEUNGPEUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2120, city_id: 3204, name: 'KATAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2121, city_id: 3204, name: 'SOREANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2122, city_id: 3204, name: 'KUTAWARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2123, city_id: 3204, name: 'MARGAASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2124, city_id: 3204, name: 'MARGAHAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2125, city_id: 3204, name: 'DAYEUHKOLOT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2126, city_id: 3204, name: 'BOJONGSOANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2127, city_id: 3204, name: 'CILEUNYI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2128, city_id: 3204, name: 'CILENGKRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2129, city_id: 3204, name: 'CIMENYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2130, city_id: 3205, name: 'CISEWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2131, city_id: 3205, name: 'CARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2132, city_id: 3205, name: 'TALEGONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2133, city_id: 3205, name: 'BUNGBULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2134, city_id: 3205, name: 'MEKARMUKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2135, city_id: 3205, name: 'PAMULIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2136, city_id: 3205, name: 'PAKENJENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2137, city_id: 3205, name: 'CIKELET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2138, city_id: 3205, name: 'PAMEUNGPEUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2139, city_id: 3205, name: 'CIBALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2140, city_id: 3205, name: 'CISOMPET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2141, city_id: 3205, name: 'PEUNDEUY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2142, city_id: 3205, name: 'SINGAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2143, city_id: 3205, name: 'CIHURIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2144, city_id: 3205, name: 'CIKAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2145, city_id: 3205, name: 'BANJARWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2146, city_id: 3205, name: 'CILAWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2147, city_id: 3205, name: 'BAYONGBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2148, city_id: 3205, name: 'CIGEDUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2149, city_id: 3205, name: 'CISURUPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2150, city_id: 3205, name: 'SUKARESMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2151, city_id: 3205, name: 'SAMARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2152, city_id: 3205, name: 'PASIRWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2153, city_id: 3205, name: 'TAROGONG KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2154, city_id: 3205, name: 'TAROGONG KALER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2155, city_id: 3205, name: 'GARUT KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2156, city_id: 3205, name: 'KARANGPAWITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2157, city_id: 3205, name: 'WANARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2158, city_id: 3205, name: 'SUCINARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2159, city_id: 3205, name: 'PANGATIKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2160, city_id: 3205, name: 'SUKAWENING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2161, city_id: 3205, name: 'KARANGTENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2162, city_id: 3205, name: 'BANYURESMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2163, city_id: 3205, name: 'LELES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2164, city_id: 3205, name: 'LEUWIGOONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2165, city_id: 3205, name: 'CIBATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2166, city_id: 3205, name: 'KERSAMANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2167, city_id: 3205, name: 'CIBIUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2168, city_id: 3205, name: 'KADUNGORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2169, city_id: 3205, name: 'BLUBUR LIMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2170, city_id: 3205, name: 'SELAAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2171, city_id: 3205, name: 'MALANGBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2172, city_id: 3206, name: 'CIPATUJAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2173, city_id: 3206, name: 'KARANGNUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2174, city_id: 3206, name: 'CIKALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2175, city_id: 3206, name: 'PANCATENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2176, city_id: 3206, name: 'CIKATOMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2177, city_id: 3206, name: 'CIBALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2178, city_id: 3206, name: 'PARUNGPONTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2179, city_id: 3206, name: 'BANTARKALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2180, city_id: 3206, name: 'BOJONGASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2181, city_id: 3206, name: 'CULAMEGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2182, city_id: 3206, name: 'BOJONGGAMBIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2183, city_id: 3206, name: 'SODONGHILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2184, city_id: 3206, name: 'TARAJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2185, city_id: 3206, name: 'SALAWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2186, city_id: 3206, name: 'PUSPAHIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2187, city_id: 3206, name: 'TANJUNGJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2188, city_id: 3206, name: 'SUKARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2189, city_id: 3206, name: 'SALOPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2190, city_id: 3206, name: 'JATIWARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2191, city_id: 3206, name: 'CINEAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2192, city_id: 3206, name: 'KARANGJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2193, city_id: 3206, name: 'MANONJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2194, city_id: 3206, name: 'GUNUNGTANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2195, city_id: 3206, name: 'SINGAPARNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2196, city_id: 3206, name: 'SUKARAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2197, city_id: 3206, name: 'MANGUNREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2198, city_id: 3206, name: 'CIGALONTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2199, city_id: 3206, name: 'LEUWISARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2200, city_id: 3206, name: 'SARIWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2201, city_id: 3206, name: 'PADAKEMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2202, city_id: 3206, name: 'SUKARATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2203, city_id: 3206, name: 'CISAYONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2204, city_id: 3206, name: 'SUKAHENING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2205, city_id: 3206, name: 'RAJAPOLAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2206, city_id: 3206, name: 'JAMANIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2207, city_id: 3206, name: 'CIAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2208, city_id: 3206, name: 'KADIPATEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2209, city_id: 3206, name: 'PAGERAGEUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2210, city_id: 3206, name: 'SUKARESIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2211, city_id: 3207, name: 'BANJARSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2212, city_id: 3207, name: 'BANJARANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2213, city_id: 3207, name: 'LAKBOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2214, city_id: 3207, name: 'PURWADADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2215, city_id: 3207, name: 'PAMARICAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2216, city_id: 3207, name: 'CIDOLOG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2217, city_id: 3207, name: 'CIMARAGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2218, city_id: 3207, name: 'CIJEUNGJING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2219, city_id: 3207, name: 'CISAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2220, city_id: 3207, name: 'TAMBAKSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2221, city_id: 3207, name: 'RANCAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2222, city_id: 3207, name: 'RAJADESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2223, city_id: 3207, name: 'SUKADANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2224, city_id: 3207, name: 'CIAMIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2225, city_id: 3207, name: 'BAREGBEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2226, city_id: 3207, name: 'CIKONENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2227, city_id: 3207, name: 'SINDANGKASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2228, city_id: 3207, name: 'CIHAURBEUTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2229, city_id: 3207, name: 'SADANANYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2230, city_id: 3207, name: 'CIPAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2231, city_id: 3207, name: 'JATINAGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2232, city_id: 3207, name: 'PANAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2233, city_id: 3207, name: 'KAWALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2234, city_id: 3207, name: 'LUMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2235, city_id: 3207, name: 'PANJALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2236, city_id: 3207, name: 'SUKAMANTRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2237, city_id: 3207, name: 'PANUMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2238, city_id: 3208, name: 'DARMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2239, city_id: 3208, name: 'KADUGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2240, city_id: 3208, name: 'NUSAHERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2241, city_id: 3208, name: 'CINIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2242, city_id: 3208, name: 'HANTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2243, city_id: 3208, name: 'SELAJAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2244, city_id: 3208, name: 'SUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2245, city_id: 3208, name: 'CILEBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2246, city_id: 3208, name: 'CIWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2247, city_id: 3208, name: 'KARANGKANCANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2248, city_id: 3208, name: 'CIBINGBIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2249, city_id: 3208, name: 'CIBEUREUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2250, city_id: 3208, name: 'LURAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2251, city_id: 3208, name: 'CIMAHI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2252, city_id: 3208, name: 'CIDAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2253, city_id: 3208, name: 'KALIMANGGIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2254, city_id: 3208, name: 'CIAWIGEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2255, city_id: 3208, name: 'CIPICUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2256, city_id: 3208, name: 'LEBAKWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2257, city_id: 3208, name: 'MALEBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2258, city_id: 3208, name: 'GARAWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2259, city_id: 3208, name: 'SINDANGAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2260, city_id: 3208, name: 'KUNINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2261, city_id: 3208, name: 'CIGUGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2262, city_id: 3208, name: 'KRAMATMULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2263, city_id: 3208, name: 'JALAKSANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2264, city_id: 3208, name: 'JAPARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2265, city_id: 3208, name: 'CILIMUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2266, city_id: 3208, name: 'CIGANDAMEKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2267, city_id: 3208, name: 'MANDIRANCAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2268, city_id: 3208, name: 'PANCALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2269, city_id: 3208, name: 'PASAWAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2270, city_id: 3209, name: 'WALED', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2271, city_id: 3209, name: 'PASALEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2272, city_id: 3209, name: 'CILEDUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2273, city_id: 3209, name: 'PABUARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2274, city_id: 3209, name: 'LOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2275, city_id: 3209, name: 'PABEDILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2276, city_id: 3209, name: 'BABAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2277, city_id: 3209, name: 'GEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2278, city_id: 3209, name: 'KARANGSEMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2279, city_id: 3209, name: 'KARANGWARENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2280, city_id: 3209, name: 'LEMAHABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2281, city_id: 3209, name: 'SUSUKANLEBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2282, city_id: 3209, name: 'SEDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2283, city_id: 3209, name: 'ASTANAJAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2284, city_id: 3209, name: 'PANGENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2285, city_id: 3209, name: 'MUNDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2286, city_id: 3209, name: 'BEBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2287, city_id: 3209, name: 'GREGED', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2288, city_id: 3209, name: 'TALUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2289, city_id: 3209, name: 'SUMBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2290, city_id: 3209, name: 'DUKUPUNTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2291, city_id: 3209, name: 'PALIMANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2292, city_id: 3209, name: 'PLUMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2293, city_id: 3209, name: 'DEPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2294, city_id: 3209, name: 'WERU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2295, city_id: 3209, name: 'PLERED', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2296, city_id: 3209, name: 'TENGAH TANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2297, city_id: 3209, name: 'KEDAWUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2298, city_id: 3209, name: 'GUNUNGJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2299, city_id: 3209, name: 'KAPETAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2300, city_id: 3209, name: 'SURANENGGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2301, city_id: 3209, name: 'KLANGENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2302, city_id: 3209, name: 'JAMBLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2303, city_id: 3209, name: 'ARJAWINANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2304, city_id: 3209, name: 'PANGURAGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2305, city_id: 3209, name: 'CIWARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2306, city_id: 3209, name: 'GEMPOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2307, city_id: 3209, name: 'SUSUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2308, city_id: 3209, name: 'GEGESIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2309, city_id: 3209, name: 'KALIWEDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2310, city_id: 3210, name: 'LEMAHSUGIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2311, city_id: 3210, name: 'BANTARUJEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2312, city_id: 3210, name: 'MALAUSMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2313, city_id: 3210, name: 'CIKIJING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2314, city_id: 3210, name: 'CINGAMBUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2315, city_id: 3210, name: 'TALAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2316, city_id: 3210, name: 'BANJARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2317, city_id: 3210, name: 'ARGAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2318, city_id: 3210, name: 'MAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2319, city_id: 3210, name: 'MAJALENGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2320, city_id: 3210, name: 'CIGASONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2321, city_id: 3210, name: 'SUKAHAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2322, city_id: 3210, name: 'SINDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2323, city_id: 3210, name: 'RAJAGALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2324, city_id: 3210, name: 'SINDANGWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2325, city_id: 3210, name: 'LEUWIMUNDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2326, city_id: 3210, name: 'PALASAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2327, city_id: 3210, name: 'JATIWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2328, city_id: 3210, name: 'DAWUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2329, city_id: 3210, name: 'KASOKANDEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2330, city_id: 3210, name: 'PANYINGKIRAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2331, city_id: 3210, name: 'KADIPATEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2332, city_id: 3210, name: 'KERTAJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2333, city_id: 3210, name: 'JATITUJUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2334, city_id: 3210, name: 'LIGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2335, city_id: 3210, name: 'SUMBERJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2336, city_id: 3211, name: 'JATINANGOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2337, city_id: 3211, name: 'CIMANGGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2338, city_id: 3211, name: 'TANJUNGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2339, city_id: 3211, name: 'SUKASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2340, city_id: 3211, name: 'PAMULIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2341, city_id: 3211, name: 'RANCAKALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2342, city_id: 3211, name: 'SUMEDANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2343, city_id: 3211, name: 'SUMEDANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2344, city_id: 3211, name: 'GANEAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2345, city_id: 3211, name: 'SITURAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2346, city_id: 3211, name: 'CISITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2347, city_id: 3211, name: 'DARMARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2348, city_id: 3211, name: 'CIBUGEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2349, city_id: 3211, name: 'WADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2350, city_id: 3211, name: 'JATINUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2351, city_id: 3211, name: 'JATIGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2352, city_id: 3211, name: 'TOMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2353, city_id: 3211, name: 'UJUNG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2354, city_id: 3211, name: 'CONGGEANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2355, city_id: 3211, name: 'PASEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2356, city_id: 3211, name: 'CIMALAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2357, city_id: 3211, name: 'CISARUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2358, city_id: 3211, name: 'TANJUNGKERTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2359, city_id: 3211, name: 'TANJUNGMEDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2360, city_id: 3211, name: 'BUAHDUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2361, city_id: 3211, name: 'SURIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2362, city_id: 3212, name: 'HAURGEULIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2363, city_id: 3212, name: 'GANTAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2364, city_id: 3212, name: 'KROYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2365, city_id: 3212, name: 'GABUSWETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2366, city_id: 3212, name: 'CIKEDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2367, city_id: 3212, name: 'TERISI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2368, city_id: 3212, name: 'LELEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2369, city_id: 3212, name: 'BANGODUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2370, city_id: 3212, name: 'TUKDANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2371, city_id: 3212, name: 'WIDASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2372, city_id: 3212, name: 'KERTASEMAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2373, city_id: 3212, name: 'SUKAGUMIWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2374, city_id: 3212, name: 'KRANGKENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2375, city_id: 3212, name: 'KARANGAMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2376, city_id: 3212, name: 'KEDOKAN BUNDER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2377, city_id: 3212, name: 'JUNTINYUAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2378, city_id: 3212, name: 'SLIYEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2379, city_id: 3212, name: 'JATIBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2380, city_id: 3212, name: 'BALONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2381, city_id: 3212, name: 'INDRAMAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2382, city_id: 3212, name: 'SINDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2383, city_id: 3212, name: 'CANTIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2384, city_id: 3212, name: 'PASEKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2385, city_id: 3212, name: 'LOHBENER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2386, city_id: 3212, name: 'ARAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2387, city_id: 3212, name: 'LOSARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2388, city_id: 3212, name: 'KANDANGHAUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2389, city_id: 3212, name: 'BONGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2390, city_id: 3212, name: 'ANJATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2391, city_id: 3212, name: 'SUKRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2392, city_id: 3212, name: 'PATROL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2393, city_id: 3213, name: 'SAGALAHERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2394, city_id: 3213, name: 'SERANGPANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2395, city_id: 3213, name: 'JALANCAGAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2396, city_id: 3213, name: 'CIATER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2397, city_id: 3213, name: 'CISALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2398, city_id: 3213, name: 'KASOMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2399, city_id: 3213, name: 'TANJUNGSIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2400, city_id: 3213, name: 'CIJAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2401, city_id: 3213, name: 'CIBOGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2402, city_id: 3213, name: 'SUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2403, city_id: 3213, name: 'KALIJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2404, city_id: 3213, name: 'DAWUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2405, city_id: 3213, name: 'CIPEUNDEUY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2406, city_id: 3213, name: 'PABUARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2407, city_id: 3213, name: 'PATOKBEUSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2408, city_id: 3213, name: 'PURWADADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2409, city_id: 3213, name: 'CIKAUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2410, city_id: 3213, name: 'PAGADEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2411, city_id: 3213, name: 'PAGADEN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2412, city_id: 3213, name: 'CIPUNAGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2413, city_id: 3213, name: 'COMPRENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2414, city_id: 3213, name: 'BINONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2415, city_id: 3213, name: 'TAMBAKDAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2416, city_id: 3213, name: 'CIASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2417, city_id: 3213, name: 'PAMANUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2418, city_id: 3213, name: 'SUKASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2419, city_id: 3213, name: 'PUSAKANAGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2420, city_id: 3213, name: 'PUSAKAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2421, city_id: 3213, name: 'LEGONKULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2422, city_id: 3213, name: 'BLANAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2423, city_id: 3214, name: 'JATILUHUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2424, city_id: 3214, name: 'SUKASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2425, city_id: 3214, name: 'MANIIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2426, city_id: 3214, name: 'TEGAL WARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2427, city_id: 3214, name: 'PLERED', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2428, city_id: 3214, name: 'SUKATANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2429, city_id: 3214, name: 'DARANGDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2430, city_id: 3214, name: 'BOJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2431, city_id: 3214, name: 'WANAYASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2432, city_id: 3214, name: 'KIARAPEDES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2433, city_id: 3214, name: 'PASAWAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2434, city_id: 3214, name: 'PONDOK SALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2435, city_id: 3214, name: 'PURWAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2436, city_id: 3214, name: 'BABAKANCIKAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2437, city_id: 3214, name: 'CAMPAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2438, city_id: 3214, name: 'CIBATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2439, city_id: 3214, name: 'BUNGURSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2440, city_id: 3215, name: 'PANGKALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2441, city_id: 3215, name: 'TEGALWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2442, city_id: 3215, name: 'CIAMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2443, city_id: 3215, name: 'TELUKJAMBE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2444, city_id: 3215, name: 'TELUKJAMBE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2445, city_id: 3215, name: 'KLARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2446, city_id: 3215, name: 'CIKAMPEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2447, city_id: 3215, name: 'PURWASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2448, city_id: 3215, name: 'TIRTAMULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2449, city_id: 3215, name: 'JATISARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2450, city_id: 3215, name: 'BANYUSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2451, city_id: 3215, name: 'KOTABARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2452, city_id: 3215, name: 'CILAMAYA WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2453, city_id: 3215, name: 'CILAMAYA KULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2454, city_id: 3215, name: 'LEMAHABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2455, city_id: 3215, name: 'TALAGASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2456, city_id: 3215, name: 'MAJALAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2457, city_id: 3215, name: 'KARAWANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2458, city_id: 3215, name: 'KARAWANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2459, city_id: 3215, name: 'RAWAMERTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2460, city_id: 3215, name: 'TEMPURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2461, city_id: 3215, name: 'KUTAWALUYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2462, city_id: 3215, name: 'RENGASDENGKLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2463, city_id: 3215, name: 'JAYAKERTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2464, city_id: 3215, name: 'PEDES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2465, city_id: 3215, name: 'CILEBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2466, city_id: 3215, name: 'CIBUAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2467, city_id: 3215, name: 'TIRTAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2468, city_id: 3215, name: 'BATUJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2469, city_id: 3215, name: 'PAKISJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2470, city_id: 3216, name: 'SETU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2471, city_id: 3216, name: 'SERANG BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2472, city_id: 3216, name: 'CIKARANG PUSAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2473, city_id: 3216, name: 'CIKARANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2474, city_id: 3216, name: 'CIBARUSAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2475, city_id: 3216, name: 'BOJONGMANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2476, city_id: 3216, name: 'CIKARANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2477, city_id: 3216, name: 'KEDUNGWARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2478, city_id: 3216, name: 'CIKARANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2479, city_id: 3216, name: 'KARANGBAHAGIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2480, city_id: 3216, name: 'CIBITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2481, city_id: 3216, name: 'CIKARANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2482, city_id: 3216, name: 'TAMBUN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2483, city_id: 3216, name: 'TAMBUN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2484, city_id: 3216, name: 'BABELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2485, city_id: 3216, name: 'TARUMAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2486, city_id: 3216, name: 'TAMBELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2487, city_id: 3216, name: 'SUKAWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2488, city_id: 3216, name: 'SUKATANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2489, city_id: 3216, name: 'SUKAKARYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2490, city_id: 3216, name: 'PEBAYURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2491, city_id: 3216, name: 'CABANGBUNGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2492, city_id: 3216, name: 'MUARA GEMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2493, city_id: 3217, name: 'RONGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2494, city_id: 3217, name: 'GUNUNGHALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2495, city_id: 3217, name: 'SINDANGKERTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2496, city_id: 3217, name: 'CILILIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2497, city_id: 3217, name: 'CIHAMPELAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2498, city_id: 3217, name: 'CIPONGKOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2499, city_id: 3217, name: 'BATUJAJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2500, city_id: 3217, name: 'SAGULING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2501, city_id: 3217, name: 'CIPATAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2502, city_id: 3217, name: 'PADALARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2503, city_id: 3217, name: 'NGAMPRAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2504, city_id: 3217, name: 'PARONGPONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2505, city_id: 3217, name: 'LEMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2506, city_id: 3217, name: 'CISARUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2507, city_id: 3217, name: 'CIKALONG WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2508, city_id: 3217, name: 'CIPEUNDEUY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2509, city_id: 3218, name: 'CIMERAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2510, city_id: 3218, name: 'CIJULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2511, city_id: 3218, name: 'CIGUGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2512, city_id: 3218, name: 'LANGKAPLANCAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2513, city_id: 3218, name: 'PARIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2514, city_id: 3218, name: 'SIDAMULIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2515, city_id: 3218, name: 'PANGANDARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2516, city_id: 3218, name: 'KALIPUCANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2517, city_id: 3218, name: 'PADAHERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2518, city_id: 3218, name: 'MANGUNJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2519, city_id: 3271, name: 'BOGOR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2520, city_id: 3271, name: 'BOGOR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2521, city_id: 3271, name: 'BOGOR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2522, city_id: 3271, name: 'BOGOR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2523, city_id: 3271, name: 'BOGOR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2524, city_id: 3271, name: 'TANAH SEREAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2525, city_id: 3272, name: 'BAROS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2526, city_id: 3272, name: 'LEMBURSITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2527, city_id: 3272, name: 'CIBEUREUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2528, city_id: 3272, name: 'CITAMIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2529, city_id: 3272, name: 'WARUDOYONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2530, city_id: 3272, name: 'GUNUNG PUYUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2531, city_id: 3272, name: 'CIKOLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2532, city_id: 3273, name: 'BANDUNG KULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2533, city_id: 3273, name: 'BABAKAN CIPARAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2534, city_id: 3273, name: 'BOJONGLOA KALER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2535, city_id: 3273, name: 'BOJONGLOA KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2536, city_id: 3273, name: 'ASTANAANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2537, city_id: 3273, name: 'REGOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2538, city_id: 3273, name: 'LENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2539, city_id: 3273, name: 'BANDUNG KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2540, city_id: 3273, name: 'BUAHBATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2541, city_id: 3273, name: 'RANCASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2542, city_id: 3273, name: 'GEDEBAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2543, city_id: 3273, name: 'CIBIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2544, city_id: 3273, name: 'PANYILEUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2545, city_id: 3273, name: 'UJUNG BERUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2546, city_id: 3273, name: 'CINAMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2547, city_id: 3273, name: 'ARCAMANIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2548, city_id: 3273, name: 'ANTAPANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2549, city_id: 3273, name: 'MANDALAJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2550, city_id: 3273, name: 'KIARACONDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2551, city_id: 3273, name: 'BATUNUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2552, city_id: 3273, name: 'SUMUR BANDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2553, city_id: 3273, name: 'ANDIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2554, city_id: 3273, name: 'CICENDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2555, city_id: 3273, name: 'BANDUNG WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2556, city_id: 3273, name: 'CIBEUNYING KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2557, city_id: 3273, name: 'CIBEUNYING KALER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2558, city_id: 3273, name: 'COBLONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2559, city_id: 3273, name: 'SUKAJADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2560, city_id: 3273, name: 'SUKASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2561, city_id: 3273, name: 'CIDADAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2562, city_id: 3274, name: 'HARJAMUKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2563, city_id: 3274, name: 'LEMAHWUNGKUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2564, city_id: 3274, name: 'PEKALIPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2565, city_id: 3274, name: 'KESAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2566, city_id: 3274, name: 'KEJAKSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2567, city_id: 3275, name: 'PONDOKGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2568, city_id: 3275, name: 'JATISAMPURNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2569, city_id: 3275, name: 'PONDOKMELATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2570, city_id: 3275, name: 'JATIASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2571, city_id: 3275, name: 'BANTARGEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2572, city_id: 3275, name: 'MUSTIKAJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2573, city_id: 3275, name: 'BEKASI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2574, city_id: 3275, name: 'RAWALUMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2575, city_id: 3275, name: 'BEKASI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2576, city_id: 3275, name: 'BEKASI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2577, city_id: 3275, name: 'MEDAN SATRIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2578, city_id: 3275, name: 'BEKASI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2579, city_id: 3276, name: 'SAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2580, city_id: 3276, name: 'BOJONGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2581, city_id: 3276, name: 'PANCORAN MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2582, city_id: 3276, name: 'CIPAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2583, city_id: 3276, name: 'SUKMA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2584, city_id: 3276, name: 'CILODONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2585, city_id: 3276, name: 'CIMANGGIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2586, city_id: 3276, name: 'TAPOS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2587, city_id: 3276, name: 'BEJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2588, city_id: 3276, name: 'LIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2589, city_id: 3276, name: 'CINERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2590, city_id: 3277, name: 'CIMAHI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2591, city_id: 3277, name: 'CIMAHI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2592, city_id: 3277, name: 'CIMAHI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2593, city_id: 3278, name: 'KAWALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2594, city_id: 3278, name: 'TAMANSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2595, city_id: 3278, name: 'CIBEUREUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2596, city_id: 3278, name: 'PURBARATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2597, city_id: 3278, name: 'TAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2598, city_id: 3278, name: 'CIHIDEUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2599, city_id: 3278, name: 'MANGKUBUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2600, city_id: 3278, name: 'INDIHIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2601, city_id: 3278, name: 'BUNGURSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2602, city_id: 3278, name: 'CIPEDES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2603, city_id: 3279, name: 'BANJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2604, city_id: 3279, name: 'PURWAHARJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2605, city_id: 3279, name: 'PATARUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2606, city_id: 3279, name: 'LANGENSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2607, city_id: 3301, name: 'DAYEUHLUHUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2608, city_id: 3301, name: 'WANAREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2609, city_id: 3301, name: 'MAJENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2610, city_id: 3301, name: 'CIMANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2611, city_id: 3301, name: 'KARANGPUCUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2612, city_id: 3301, name: 'CIPARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2613, city_id: 3301, name: 'SIDAREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2614, city_id: 3301, name: 'KEDUNGREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2615, city_id: 3301, name: 'PATIMUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2616, city_id: 3301, name: 'GANDRUNGMANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2617, city_id: 3301, name: 'BANTARSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2618, city_id: 3301, name: 'KAWUNGANTEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2619, city_id: 3301, name: 'KAMPUNG LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2620, city_id: 3301, name: 'JERUKLEGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2621, city_id: 3301, name: 'KESUGIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2622, city_id: 3301, name: 'ADIPALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2623, city_id: 3301, name: 'MAOS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2624, city_id: 3301, name: 'SAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2625, city_id: 3301, name: 'KROYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2626, city_id: 3301, name: 'BINANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2627, city_id: 3301, name: 'NUSAWUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2628, city_id: 3301, name: 'CILACAP SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2629, city_id: 3301, name: 'CILACAP TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2630, city_id: 3301, name: 'CILACAP UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2631, city_id: 3302, name: 'LUMBIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2632, city_id: 3302, name: 'WANGON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2633, city_id: 3302, name: 'JATILAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2634, city_id: 3302, name: 'RAWALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2635, city_id: 3302, name: 'KEBASEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2636, city_id: 3302, name: 'KEMRANJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2637, city_id: 3302, name: 'SUMPIUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2638, city_id: 3302, name: 'TAMBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2639, city_id: 3302, name: 'SOMAGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2640, city_id: 3302, name: 'KALIBAGOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2641, city_id: 3302, name: 'BANYUMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2642, city_id: 3302, name: 'PATIKRAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2643, city_id: 3302, name: 'PURWOJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2644, city_id: 3302, name: 'AJIBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2645, city_id: 3302, name: 'GUMELAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2646, city_id: 3302, name: 'PEKUNCEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2647, city_id: 3302, name: 'CILONGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2648, city_id: 3302, name: 'KARANGLEWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2649, city_id: 3302, name: 'KEDUNG BANTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2650, city_id: 3302, name: 'BATURRADEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2651, city_id: 3302, name: 'SUMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2652, city_id: 3302, name: 'KEMBARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2653, city_id: 3302, name: 'SOKARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2654, city_id: 3302, name: 'PURWOKERTO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2655, city_id: 3302, name: 'PURWOKERTO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2656, city_id: 3302, name: 'PURWOKERTO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2657, city_id: 3302, name: 'PURWOKERTO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2658, city_id: 3303, name: 'KEMANGKON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2659, city_id: 3303, name: 'BUKATEJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2660, city_id: 3303, name: 'KEJOBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2661, city_id: 3303, name: 'PENGADEGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2662, city_id: 3303, name: 'KALIGONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2663, city_id: 3303, name: 'PURBALINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2664, city_id: 3303, name: 'KALIMANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2665, city_id: 3303, name: 'PADAMARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2666, city_id: 3303, name: 'KUTASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2667, city_id: 3303, name: 'BOJONGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2668, city_id: 3303, name: 'MREBET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2669, city_id: 3303, name: 'BOBOTSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2670, city_id: 3303, name: 'KARANGREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2671, city_id: 3303, name: 'KARANGJAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2672, city_id: 3303, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2673, city_id: 3303, name: 'KERTANEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2674, city_id: 3303, name: 'KARANGMONCOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2675, city_id: 3303, name: 'REMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2676, city_id: 3304, name: 'SUSUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2677, city_id: 3304, name: 'PURWAREJA KLAMPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2678, city_id: 3304, name: 'MANDIRAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2679, city_id: 3304, name: 'PURWANEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2680, city_id: 3304, name: 'BAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2681, city_id: 3304, name: 'BANJARNEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2682, city_id: 3304, name: 'PAGEDONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2683, city_id: 3304, name: 'SIGALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2684, city_id: 3304, name: 'MADUKARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2685, city_id: 3304, name: 'BANJARMANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2686, city_id: 3304, name: 'WANADADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2687, city_id: 3304, name: 'RAKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2688, city_id: 3304, name: 'PUNGGELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2689, city_id: 3304, name: 'KARANGKOBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2690, city_id: 3304, name: 'PAGENTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2691, city_id: 3304, name: 'PEJAWARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2692, city_id: 3304, name: 'BATUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2693, city_id: 3304, name: 'WANAYASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2694, city_id: 3304, name: 'KALIBENING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2695, city_id: 3304, name: 'PANDANARUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2696, city_id: 3305, name: 'AYAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2697, city_id: 3305, name: 'BUAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2698, city_id: 3305, name: 'PURING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2699, city_id: 3305, name: 'PETANAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2700, city_id: 3305, name: 'KLIRONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2701, city_id: 3305, name: 'BULUSPESANTREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2702, city_id: 3305, name: 'AMBAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2703, city_id: 3305, name: 'MIRIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2704, city_id: 3305, name: 'BONOROWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2705, city_id: 3305, name: 'PREMBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2706, city_id: 3305, name: 'PADURESO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2707, city_id: 3305, name: 'KUTOWINANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2708, city_id: 3305, name: 'ALIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2709, city_id: 3305, name: 'PONCOWARNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2710, city_id: 3305, name: 'KEBUMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2711, city_id: 3305, name: 'PEJAGOAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2712, city_id: 3305, name: 'SRUWENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2713, city_id: 3305, name: 'ADIMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2714, city_id: 3305, name: 'KUWARASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2715, city_id: 3305, name: 'ROWOKELE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2716, city_id: 3305, name: 'SEMPOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2717, city_id: 3305, name: 'GOMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2718, city_id: 3305, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2719, city_id: 3305, name: 'KARANGGAYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2720, city_id: 3305, name: 'SADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2721, city_id: 3305, name: 'KARANGSAMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2722, city_id: 3306, name: 'GRABAG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2723, city_id: 3306, name: 'NGOMBOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2724, city_id: 3306, name: 'PURWODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2725, city_id: 3306, name: 'BAGELEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2726, city_id: 3306, name: 'KALIGESING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2727, city_id: 3306, name: 'PURWOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2728, city_id: 3306, name: 'BANYU URIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2729, city_id: 3306, name: 'BAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2730, city_id: 3306, name: 'KUTOARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2731, city_id: 3306, name: 'BUTUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2732, city_id: 3306, name: 'PITURUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2733, city_id: 3306, name: 'KEMIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2734, city_id: 3306, name: 'BRUNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2735, city_id: 3306, name: 'GEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2736, city_id: 3306, name: 'LOANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2737, city_id: 3306, name: 'BENER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2738, city_id: 3307, name: 'WADASLINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2739, city_id: 3307, name: 'KEPIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2740, city_id: 3307, name: 'SAPURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2741, city_id: 3307, name: 'KALIBAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2742, city_id: 3307, name: 'KALIWIRO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2743, city_id: 3307, name: 'LEKSONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2744, city_id: 3307, name: 'SUKOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2745, city_id: 3307, name: 'SELOMERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2746, city_id: 3307, name: 'KALIKAJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2747, city_id: 3307, name: 'KERTEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2748, city_id: 3307, name: 'WONOSOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2749, city_id: 3307, name: 'WATUMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2750, city_id: 3307, name: 'MOJOTENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2751, city_id: 3307, name: 'GARUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2752, city_id: 3307, name: 'KEJAJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2753, city_id: 3308, name: 'SALAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2754, city_id: 3308, name: 'BOROBUDUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2755, city_id: 3308, name: 'NGLUWAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2756, city_id: 3308, name: 'SALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2757, city_id: 3308, name: 'SRUMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2758, city_id: 3308, name: 'DUKUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2759, city_id: 3308, name: 'MUNTILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2760, city_id: 3308, name: 'MUNGKID', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2761, city_id: 3308, name: 'SAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2762, city_id: 3308, name: 'CANDIMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2763, city_id: 3308, name: 'MERTOYUDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2764, city_id: 3308, name: 'TEMPURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2765, city_id: 3308, name: 'KAJORAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2766, city_id: 3308, name: 'KALIANGKRIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2767, city_id: 3308, name: 'BANDONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2768, city_id: 3308, name: 'WINDUSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2769, city_id: 3308, name: 'SECANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2770, city_id: 3308, name: 'TEGALREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2771, city_id: 3308, name: 'PAKIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2772, city_id: 3308, name: 'GRABAG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2773, city_id: 3308, name: 'NGABLAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2774, city_id: 3309, name: 'SELO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2775, city_id: 3309, name: 'AMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2776, city_id: 3309, name: 'CEPOGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2777, city_id: 3309, name: 'MUSUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2778, city_id: 3309, name: 'BOYOLALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2779, city_id: 3309, name: 'MOJOSONGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2780, city_id: 3309, name: 'TERAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2781, city_id: 3309, name: 'SAWIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2782, city_id: 3309, name: 'BANYUDONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2783, city_id: 3309, name: 'SAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2784, city_id: 3309, name: 'NGEMPLAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2785, city_id: 3309, name: 'NOGOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2786, city_id: 3309, name: 'SIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2787, city_id: 3309, name: 'KARANGGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2788, city_id: 3309, name: 'KLEGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2789, city_id: 3309, name: 'ANDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2790, city_id: 3309, name: 'KEMUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2791, city_id: 3309, name: 'WONOSEGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2792, city_id: 3309, name: 'JUWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2793, city_id: 3310, name: 'PRAMBANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2794, city_id: 3310, name: 'GANTIWARNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2795, city_id: 3310, name: 'WEDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2796, city_id: 3310, name: 'BAYAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2797, city_id: 3310, name: 'CAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2798, city_id: 3310, name: 'TRUCUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2799, city_id: 3310, name: 'KALIKOTES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2800, city_id: 3310, name: 'KEBONARUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2801, city_id: 3310, name: 'JOGONALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2802, city_id: 3310, name: 'MANISRENGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2803, city_id: 3310, name: 'KARANGNONGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2804, city_id: 3310, name: 'NGAWEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2805, city_id: 3310, name: 'CEPER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2806, city_id: 3310, name: 'PEDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2807, city_id: 3310, name: 'KARANGDOWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2808, city_id: 3310, name: 'JUWIRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2809, city_id: 3310, name: 'WONOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2810, city_id: 3310, name: 'DELANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2811, city_id: 3310, name: 'POLANHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2812, city_id: 3310, name: 'KARANGANOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2813, city_id: 3310, name: 'TULUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2814, city_id: 3310, name: 'JATINOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2815, city_id: 3310, name: 'KEMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2816, city_id: 3310, name: 'KLATEN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2817, city_id: 3310, name: 'KLATEN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2818, city_id: 3310, name: 'KLATEN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2819, city_id: 3311, name: 'WERU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2820, city_id: 3311, name: 'BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2821, city_id: 3311, name: 'TAWANGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2822, city_id: 3311, name: 'SUKOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2823, city_id: 3311, name: 'NGUTER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2824, city_id: 3311, name: 'BENDOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2825, city_id: 3311, name: 'POLOKARTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2826, city_id: 3311, name: 'MOJOLABAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2827, city_id: 3311, name: 'GROGOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2828, city_id: 3311, name: 'BAKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2829, city_id: 3311, name: 'GATAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2830, city_id: 3311, name: 'KARTASURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2831, city_id: 3312, name: 'PRACIMANTORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2832, city_id: 3312, name: 'PARANGGUPITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2833, city_id: 3312, name: 'GIRITONTRO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2834, city_id: 3312, name: 'GIRIWOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2835, city_id: 3312, name: 'BATUWARNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2836, city_id: 3312, name: 'KARANGTENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2837, city_id: 3312, name: 'TIRTOMOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2838, city_id: 3312, name: 'NGUNTORONADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2839, city_id: 3312, name: 'BATURETNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2840, city_id: 3312, name: 'EROMOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2841, city_id: 3312, name: 'WURYANTORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2842, city_id: 3312, name: 'MANYARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2843, city_id: 3312, name: 'SELOGIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2844, city_id: 3312, name: 'WONOGIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2845, city_id: 3312, name: 'NGADIROJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2846, city_id: 3312, name: 'SIDOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2847, city_id: 3312, name: 'JATIROTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2848, city_id: 3312, name: 'KISMANTORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2849, city_id: 3312, name: 'PURWANTORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2850, city_id: 3312, name: 'BULUKERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2851, city_id: 3312, name: 'PUHPELEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2852, city_id: 3312, name: 'SLOGOHIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2853, city_id: 3312, name: 'JATISRONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2854, city_id: 3312, name: 'JATIPURNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2855, city_id: 3312, name: 'GIRIMARTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2856, city_id: 3313, name: 'JATIPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2857, city_id: 3313, name: 'JATIYOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2858, city_id: 3313, name: 'JUMAPOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2859, city_id: 3313, name: 'JUMANTONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2860, city_id: 3313, name: 'MATESIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2861, city_id: 3313, name: 'TAWANGMANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2862, city_id: 3313, name: 'NGARGOYOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2863, city_id: 3313, name: 'KARANGPANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2864, city_id: 3313, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2865, city_id: 3313, name: 'TASIKMADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2866, city_id: 3313, name: 'JATEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2867, city_id: 3313, name: 'COLOMADU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2868, city_id: 3313, name: 'GONDANGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2869, city_id: 3313, name: 'KEBAKKRAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2870, city_id: 3313, name: 'MOJOGEDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2871, city_id: 3313, name: 'KERJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2872, city_id: 3313, name: 'JENAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2873, city_id: 3314, name: 'KALIJAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2874, city_id: 3314, name: 'PLUPUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2875, city_id: 3314, name: 'MASARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2876, city_id: 3314, name: 'KEDAWUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2877, city_id: 3314, name: 'SAMBIREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2878, city_id: 3314, name: 'GONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2879, city_id: 3314, name: 'SAMBUNG MACAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2880, city_id: 3314, name: 'NGRAMPAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2881, city_id: 3314, name: 'KARANGMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2882, city_id: 3314, name: 'SRAGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2883, city_id: 3314, name: 'SIDOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2884, city_id: 3314, name: 'TANON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2885, city_id: 3314, name: 'GEMOLONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2886, city_id: 3314, name: 'MIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2887, city_id: 3314, name: 'SUMBERLAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2888, city_id: 3314, name: 'MONDOKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2889, city_id: 3314, name: 'SUKODONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2890, city_id: 3314, name: 'GESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2891, city_id: 3314, name: 'TANGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2892, city_id: 3314, name: 'JENAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2893, city_id: 3315, name: 'KEDUNGJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2894, city_id: 3315, name: 'KARANGRAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2895, city_id: 3315, name: 'PENAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2896, city_id: 3315, name: 'TOROH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2897, city_id: 3315, name: 'GEYER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2898, city_id: 3315, name: 'PULOKULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2899, city_id: 3315, name: 'KRADENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2900, city_id: 3315, name: 'GABUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2901, city_id: 3315, name: 'NGARINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2902, city_id: 3315, name: 'WIROSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2903, city_id: 3315, name: 'TAWANGHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2904, city_id: 3315, name: 'GROBOGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2905, city_id: 3315, name: 'PURWODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2906, city_id: 3315, name: 'BRATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2907, city_id: 3315, name: 'KLAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2908, city_id: 3315, name: 'GODONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2909, city_id: 3315, name: 'GUBUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2910, city_id: 3315, name: 'TEGOWANU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2911, city_id: 3315, name: 'TANGGUNGHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2912, city_id: 3316, name: 'JATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2913, city_id: 3316, name: 'RANDUBLATUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2914, city_id: 3316, name: 'KRADENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2915, city_id: 3316, name: 'KEDUNGTUBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2916, city_id: 3316, name: 'CEPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2917, city_id: 3316, name: 'SAMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2918, city_id: 3316, name: 'JIKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2919, city_id: 3316, name: 'BOGOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2920, city_id: 3316, name: 'JEPON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2921, city_id: 3316, name: 'KOTA BLORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2922, city_id: 3316, name: 'BANJAREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2923, city_id: 3316, name: 'TUNJUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2924, city_id: 3316, name: 'JAPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2925, city_id: 3316, name: 'NGAWEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2926, city_id: 3316, name: 'KUNDURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2927, city_id: 3316, name: 'TODANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2928, city_id: 3317, name: 'SUMBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2929, city_id: 3317, name: 'BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2930, city_id: 3317, name: 'GUNEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2931, city_id: 3317, name: 'SALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2932, city_id: 3317, name: 'SARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2933, city_id: 3317, name: 'SEDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2934, city_id: 3317, name: 'PAMOTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2935, city_id: 3317, name: 'SULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2936, city_id: 3317, name: 'KALIORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2937, city_id: 3317, name: 'REMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2938, city_id: 3317, name: 'PANCUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2939, city_id: 3317, name: 'KRAGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2940, city_id: 3317, name: 'SLUKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2941, city_id: 3317, name: 'LASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2942, city_id: 3318, name: 'SUKOLILO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2943, city_id: 3318, name: 'KAYEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2944, city_id: 3318, name: 'TAMBAKROMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2945, city_id: 3318, name: 'WINONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2946, city_id: 3318, name: 'PUCAKWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2947, city_id: 3318, name: 'JAKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2948, city_id: 3318, name: 'BATANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2949, city_id: 3318, name: 'JUWANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2950, city_id: 3318, name: 'JAKENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2951, city_id: 3318, name: 'PATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2952, city_id: 3318, name: 'GABUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2953, city_id: 3318, name: 'MARGOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2954, city_id: 3318, name: 'GEMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2955, city_id: 3318, name: 'TLOGOWUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2956, city_id: 3318, name: 'WEDARIJAKSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2957, city_id: 3318, name: 'TRANGKIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2958, city_id: 3318, name: 'MARGOYOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2959, city_id: 3318, name: 'GUNUNG WUNGKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2960, city_id: 3318, name: 'CLUWAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2961, city_id: 3318, name: 'TAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2962, city_id: 3318, name: 'DUKUHSETI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2963, city_id: 3319, name: 'KALIWUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2964, city_id: 3319, name: 'KOTA KUDUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2965, city_id: 3319, name: 'JATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2966, city_id: 3319, name: 'UNDAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2967, city_id: 3319, name: 'MEJOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2968, city_id: 3319, name: 'JEKULO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2969, city_id: 3319, name: 'BAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2970, city_id: 3319, name: 'GEBOG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2971, city_id: 3319, name: 'DAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2972, city_id: 3320, name: 'KEDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2973, city_id: 3320, name: 'PECANGAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2974, city_id: 3320, name: 'KALINYAMATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2975, city_id: 3320, name: 'WELAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2976, city_id: 3320, name: 'MAYONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2977, city_id: 3320, name: 'NALUMSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2978, city_id: 3320, name: 'BATEALIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2979, city_id: 3320, name: 'TAHUNAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2980, city_id: 3320, name: 'JEPARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2981, city_id: 3320, name: 'MLONGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2982, city_id: 3320, name: 'PAKIS AJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2983, city_id: 3320, name: 'BANGSRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2984, city_id: 3320, name: 'KEMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2985, city_id: 3320, name: 'KELING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2986, city_id: 3320, name: 'DONOROJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2987, city_id: 3320, name: 'KARIMUNJAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2988, city_id: 3321, name: 'MRANGGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2989, city_id: 3321, name: 'KARANGAWEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2990, city_id: 3321, name: 'GUNTUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2991, city_id: 3321, name: 'SAYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2992, city_id: 3321, name: 'KARANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2993, city_id: 3321, name: 'BONANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2994, city_id: 3321, name: 'DEMAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2995, city_id: 3321, name: 'WONOSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2996, city_id: 3321, name: 'DEMPET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2997, city_id: 3321, name: 'KEBONAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2998, city_id: 3321, name: 'GAJAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2999, city_id: 3321, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3000, city_id: 3321, name: 'MIJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3001, city_id: 3321, name: 'WEDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3002, city_id: 3322, name: 'GETASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3003, city_id: 3322, name: 'TENGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3004, city_id: 3322, name: 'SUSUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3005, city_id: 3322, name: 'KALIWUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3006, city_id: 3322, name: 'SURUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3007, city_id: 3322, name: 'PABELAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3008, city_id: 3322, name: 'TUNTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3009, city_id: 3322, name: 'BANYUBIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3010, city_id: 3322, name: 'JAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3011, city_id: 3322, name: 'SUMOWONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3012, city_id: 3322, name: 'AMBARAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3013, city_id: 3322, name: 'BANDUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3014, city_id: 3322, name: 'BAWEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3015, city_id: 3322, name: 'BRINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3016, city_id: 3322, name: 'BANCAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3017, city_id: 3322, name: 'PRINGAPUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3018, city_id: 3322, name: 'BERGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3019, city_id: 3322, name: 'UNGARAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3020, city_id: 3322, name: 'UNGARAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3021, city_id: 3323, name: 'PARAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3022, city_id: 3323, name: 'KLEDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3023, city_id: 3323, name: 'BANSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3024, city_id: 3323, name: 'BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3025, city_id: 3323, name: 'TEMANGGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3026, city_id: 3323, name: 'TLOGOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3027, city_id: 3323, name: 'TEMBARAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3028, city_id: 3323, name: 'SELOPAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3029, city_id: 3323, name: 'KRANGGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3030, city_id: 3323, name: 'PRINGSURAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3031, city_id: 3323, name: 'KALORAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3032, city_id: 3323, name: 'KANDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3033, city_id: 3323, name: 'KEDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3034, city_id: 3323, name: 'NGADIREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3035, city_id: 3323, name: 'JUMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3036, city_id: 3323, name: 'GEMAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3037, city_id: 3323, name: 'CANDIROTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3038, city_id: 3323, name: 'BEJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3039, city_id: 3323, name: 'TRETEP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3040, city_id: 3323, name: 'WONOBOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3041, city_id: 3324, name: 'PLANTUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3042, city_id: 3324, name: 'SUKOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3043, city_id: 3324, name: 'PAGERRUYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3044, city_id: 3324, name: 'PATEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3045, city_id: 3324, name: 'SINGOROJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3046, city_id: 3324, name: 'LIMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3047, city_id: 3324, name: 'BOJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3048, city_id: 3324, name: 'KALIWUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3049, city_id: 3324, name: 'KALIWUNGU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3050, city_id: 3324, name: 'BRANGSONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3051, city_id: 3324, name: 'PEGANDON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3052, city_id: 3324, name: 'NGAMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3053, city_id: 3324, name: 'GEMUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3054, city_id: 3324, name: 'RINGINARUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3055, city_id: 3324, name: 'WELERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3056, city_id: 3324, name: 'ROWOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3057, city_id: 3324, name: 'KANGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3058, city_id: 3324, name: 'CEPIRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3059, city_id: 3324, name: 'PATEBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3060, city_id: 3324, name: 'KOTA KENDAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3061, city_id: 3325, name: 'WONOTUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3062, city_id: 3325, name: 'BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3063, city_id: 3325, name: 'BLADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3064, city_id: 3325, name: 'REBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3065, city_id: 3325, name: 'BAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3066, city_id: 3325, name: 'TERSONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3067, city_id: 3325, name: 'GRINGSING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3068, city_id: 3325, name: 'LIMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3069, city_id: 3325, name: 'BANYUPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3070, city_id: 3325, name: 'SUBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3071, city_id: 3325, name: 'PECALUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3072, city_id: 3325, name: 'TULIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3073, city_id: 3325, name: 'KANDEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3074, city_id: 3325, name: 'BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3075, city_id: 3325, name: 'WARUNG ASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3076, city_id: 3326, name: 'KANDANGSERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3077, city_id: 3326, name: 'PANINGGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3078, city_id: 3326, name: 'LEBAKBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3079, city_id: 3326, name: 'PETUNGKRIONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3080, city_id: 3326, name: 'TALUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3081, city_id: 3326, name: 'DORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3082, city_id: 3326, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3083, city_id: 3326, name: 'KAJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3084, city_id: 3326, name: 'KESESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3085, city_id: 3326, name: 'SRAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3086, city_id: 3326, name: 'SIWALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3087, city_id: 3326, name: 'BOJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3088, city_id: 3326, name: 'WONOPRINGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3089, city_id: 3326, name: 'KEDUNGWUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3090, city_id: 3326, name: 'KARANGDADAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3091, city_id: 3326, name: 'BUARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3092, city_id: 3326, name: 'TIRTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3093, city_id: 3326, name: 'WIRADESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3094, city_id: 3326, name: 'WONOKERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3095, city_id: 3327, name: 'MOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3096, city_id: 3327, name: 'WARUNGPRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3097, city_id: 3327, name: 'PULOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3098, city_id: 3327, name: 'BELIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3099, city_id: 3327, name: 'WATUKUMPUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3100, city_id: 3327, name: 'BODEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3101, city_id: 3327, name: 'BANTARBOLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3102, city_id: 3327, name: 'RANDUDONGKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3103, city_id: 3327, name: 'PEMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3104, city_id: 3327, name: 'TAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3105, city_id: 3327, name: 'PETARUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3106, city_id: 3327, name: 'AMPELGADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3107, city_id: 3327, name: 'COMAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3108, city_id: 3327, name: 'ULUJAMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3109, city_id: 3328, name: 'MARGASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3110, city_id: 3328, name: 'BUMIJAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3111, city_id: 3328, name: 'BOJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3112, city_id: 3328, name: 'BALAPULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3113, city_id: 3328, name: 'PAGERBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3114, city_id: 3328, name: 'LEBAKSIU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3115, city_id: 3328, name: 'JATINEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3116, city_id: 3328, name: 'KEDUNG BANTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3117, city_id: 3328, name: 'PANGKAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3118, city_id: 3328, name: 'SLAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3119, city_id: 3328, name: 'DUKUHWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3120, city_id: 3328, name: 'ADIWERNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3121, city_id: 3328, name: 'DUKUHTURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3122, city_id: 3328, name: 'TALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3123, city_id: 3328, name: 'TARUB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3124, city_id: 3328, name: 'KRAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3125, city_id: 3328, name: 'SURADADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3126, city_id: 3328, name: 'WARUREJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3127, city_id: 3329, name: 'SALEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3128, city_id: 3329, name: 'BANTARKAWUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3129, city_id: 3329, name: 'BUMIAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3130, city_id: 3329, name: 'PAGUYANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3131, city_id: 3329, name: 'SIRAMPOG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3132, city_id: 3329, name: 'TONJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3133, city_id: 3329, name: 'LARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3134, city_id: 3329, name: 'KETANGGUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3135, city_id: 3329, name: 'BANJARHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3136, city_id: 3329, name: 'LOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3137, city_id: 3329, name: 'TANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3138, city_id: 3329, name: 'KERSANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3139, city_id: 3329, name: 'BULAKAMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3140, city_id: 3329, name: 'WANASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3141, city_id: 3329, name: 'SONGGOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3142, city_id: 3329, name: 'JATIBARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3143, city_id: 3329, name: 'BREBES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3144, city_id: 3371, name: 'MAGELANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3145, city_id: 3371, name: 'MAGELANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3146, city_id: 3371, name: 'MAGELANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3147, city_id: 3372, name: 'LAWEYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3148, city_id: 3372, name: 'SERENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3149, city_id: 3372, name: 'PASAR KLIWON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3150, city_id: 3372, name: 'JEBRES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3151, city_id: 3372, name: 'BANJARSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3152, city_id: 3373, name: 'ARGOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3153, city_id: 3373, name: 'TINGKIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3154, city_id: 3373, name: 'SIDOMUKTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3155, city_id: 3373, name: 'SIDOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3156, city_id: 3374, name: 'MIJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3157, city_id: 3374, name: 'GUNUNG PATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3158, city_id: 3374, name: 'BANYUMANIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3159, city_id: 3374, name: 'GAJAH MUNGKUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3160, city_id: 3374, name: 'SEMARANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3161, city_id: 3374, name: 'CANDISARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3162, city_id: 3374, name: 'TEMBALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3163, city_id: 3374, name: 'PEDURUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3164, city_id: 3374, name: 'GENUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3165, city_id: 3374, name: 'GAYAMSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3166, city_id: 3374, name: 'SEMARANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3167, city_id: 3374, name: 'SEMARANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3168, city_id: 3374, name: 'SEMARANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3169, city_id: 3374, name: 'SEMARANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3170, city_id: 3374, name: 'TUGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3171, city_id: 3374, name: 'NGALIYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3172, city_id: 3375, name: 'PEKALONGAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3173, city_id: 3375, name: 'PEKALONGAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3174, city_id: 3375, name: 'PEKALONGAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3175, city_id: 3375, name: 'PEKALONGAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3176, city_id: 3376, name: 'TEGAL SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3177, city_id: 3376, name: 'TEGAL TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3178, city_id: 3376, name: 'TEGAL BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3179, city_id: 3376, name: 'MARGADANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3180, city_id: 3401, name: 'TEMON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3181, city_id: 3401, name: 'WATES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3182, city_id: 3401, name: 'PANJATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3183, city_id: 3401, name: 'GALUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3184, city_id: 3401, name: 'LENDAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3185, city_id: 3401, name: 'SENTOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3186, city_id: 3401, name: 'PENGASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3187, city_id: 3401, name: 'KOKAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3188, city_id: 3401, name: 'GIRIMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3189, city_id: 3401, name: 'NANGGULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3190, city_id: 3401, name: 'KALIBAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3191, city_id: 3401, name: 'SAMIGALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3192, city_id: 3402, name: 'SRANDAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3193, city_id: 3402, name: 'SANDEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3194, city_id: 3402, name: 'KRETEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3195, city_id: 3402, name: 'PUNDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3196, city_id: 3402, name: 'BAMBANG LIPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3197, city_id: 3402, name: 'PANDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3198, city_id: 3402, name: 'BANTUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3199, city_id: 3402, name: 'JETIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3200, city_id: 3402, name: 'IMOGIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3201, city_id: 3402, name: 'DLINGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3202, city_id: 3402, name: 'PLERET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3203, city_id: 3402, name: 'PIYUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3204, city_id: 3402, name: 'BANGUNTAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3205, city_id: 3402, name: 'SEWON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3206, city_id: 3402, name: 'KASIHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3207, city_id: 3402, name: 'PAJANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3208, city_id: 3402, name: 'SEDAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3209, city_id: 3403, name: 'PANGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3210, city_id: 3403, name: 'PURWOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3211, city_id: 3403, name: 'PALIYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3212, city_id: 3403, name: 'SAPTO SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3213, city_id: 3403, name: 'TEPUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3214, city_id: 3403, name: 'TANJUNGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3215, city_id: 3403, name: 'RONGKOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3216, city_id: 3403, name: 'GIRISUBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3217, city_id: 3403, name: 'SEMANU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3218, city_id: 3403, name: 'PONJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3219, city_id: 3403, name: 'KARANGMOJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3220, city_id: 3403, name: 'WONOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3221, city_id: 3403, name: 'PLAYEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3222, city_id: 3403, name: 'PATUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3223, city_id: 3403, name: 'GEDANG SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3224, city_id: 3403, name: 'NGLIPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3225, city_id: 3403, name: 'NGAWEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3226, city_id: 3403, name: 'SEMIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3227, city_id: 3404, name: 'MOYUDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3228, city_id: 3404, name: 'MINGGIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3229, city_id: 3404, name: 'SEYEGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3230, city_id: 3404, name: 'GODEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3231, city_id: 3404, name: 'GAMPING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3232, city_id: 3404, name: 'MLATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3233, city_id: 3404, name: 'DEPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3234, city_id: 3404, name: 'BERBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3235, city_id: 3404, name: 'PRAMBANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3236, city_id: 3404, name: 'KALASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3237, city_id: 3404, name: 'NGEMPLAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3238, city_id: 3404, name: 'NGAGLIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3239, city_id: 3404, name: 'SLEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3240, city_id: 3404, name: 'TEMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3241, city_id: 3404, name: 'TURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3242, city_id: 3404, name: 'PAKEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3243, city_id: 3404, name: 'CANGKRINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3244, city_id: 3471, name: 'MANTRIJERON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3245, city_id: 3471, name: 'KRATON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3246, city_id: 3471, name: 'MERGANGSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3247, city_id: 3471, name: 'UMBULHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3248, city_id: 3471, name: 'KOTAGEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3249, city_id: 3471, name: 'GONDOKUSUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3250, city_id: 3471, name: 'DANUREJAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3251, city_id: 3471, name: 'PAKUALAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3252, city_id: 3471, name: 'GONDOMANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3253, city_id: 3471, name: 'NGAMPILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3254, city_id: 3471, name: 'WIROBRAJAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3255, city_id: 3471, name: 'GEDONG TENGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3256, city_id: 3471, name: 'JETIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3257, city_id: 3471, name: 'TEGALREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3258, city_id: 3501, name: 'DONOROJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3259, city_id: 3501, name: 'PUNUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3260, city_id: 3501, name: 'PRINGKUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3261, city_id: 3501, name: 'PACITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3262, city_id: 3501, name: 'KEBONAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3263, city_id: 3501, name: 'ARJOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3264, city_id: 3501, name: 'NAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3265, city_id: 3501, name: 'BANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3266, city_id: 3501, name: 'TEGALOMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3267, city_id: 3501, name: 'TULAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3268, city_id: 3501, name: 'NGADIROJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3269, city_id: 3501, name: 'SUDIMORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3270, city_id: 3502, name: 'NGRAYUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3271, city_id: 3502, name: 'SLAHUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3272, city_id: 3502, name: 'BUNGKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3273, city_id: 3502, name: 'SAMBIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3274, city_id: 3502, name: 'SAWOO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3275, city_id: 3502, name: 'SOOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3276, city_id: 3502, name: 'PUDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3277, city_id: 3502, name: 'PULUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3278, city_id: 3502, name: 'MLARAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3279, city_id: 3502, name: 'SIMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3280, city_id: 3502, name: 'JETIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3281, city_id: 3502, name: 'BALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3282, city_id: 3502, name: 'KAUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3283, city_id: 3502, name: 'JAMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3284, city_id: 3502, name: 'BADEGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3285, city_id: 3502, name: 'SAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3286, city_id: 3502, name: 'SUKOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3287, city_id: 3502, name: 'PONOROGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3288, city_id: 3502, name: 'BABADAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3289, city_id: 3502, name: 'JENANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3290, city_id: 3502, name: 'NGEBEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3291, city_id: 3503, name: 'PANGGUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3292, city_id: 3503, name: 'MUNJUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3293, city_id: 3503, name: 'WATULIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3294, city_id: 3503, name: 'KAMPAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3295, city_id: 3503, name: 'DONGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3296, city_id: 3503, name: 'PULE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3297, city_id: 3503, name: 'KARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3298, city_id: 3503, name: 'SURUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3299, city_id: 3503, name: 'GANDUSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3300, city_id: 3503, name: 'DURENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3301, city_id: 3503, name: 'POGALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3302, city_id: 3503, name: 'TRENGGALEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3303, city_id: 3503, name: 'TUGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3304, city_id: 3503, name: 'BENDUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3305, city_id: 3504, name: 'BESUKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3306, city_id: 3504, name: 'BANDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3307, city_id: 3504, name: 'PAKEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3308, city_id: 3504, name: 'CAMPUR DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3309, city_id: 3504, name: 'TANGGUNG GUNUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3310, city_id: 3504, name: 'KALIDAWIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3311, city_id: 3504, name: 'PUCANG LABAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3312, city_id: 3504, name: 'REJOTANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3313, city_id: 3504, name: 'NGUNUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3314, city_id: 3504, name: 'SUMBERGEMPOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3315, city_id: 3504, name: 'BOYOLANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3316, city_id: 3504, name: 'TULUNGAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3317, city_id: 3504, name: 'KEDUNGWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3318, city_id: 3504, name: 'NGANTRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3319, city_id: 3504, name: 'KARANGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3320, city_id: 3504, name: 'KAUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3321, city_id: 3504, name: 'GONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3322, city_id: 3504, name: 'PAGER WOJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3323, city_id: 3504, name: 'SENDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3324, city_id: 3505, name: 'BAKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3325, city_id: 3505, name: 'WONOTIRTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3326, city_id: 3505, name: 'PANGGUNGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3327, city_id: 3505, name: 'WATES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3328, city_id: 3505, name: 'BINANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3329, city_id: 3505, name: 'SUTOJAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3330, city_id: 3505, name: 'KADEMANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3331, city_id: 3505, name: 'KANIGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3332, city_id: 3505, name: 'TALUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3333, city_id: 3505, name: 'SELOPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3334, city_id: 3505, name: 'KESAMBEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3335, city_id: 3505, name: 'SELOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3336, city_id: 3505, name: 'DOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3337, city_id: 3505, name: 'WLINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3338, city_id: 3505, name: 'GANDUSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3339, city_id: 3505, name: 'GARUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3340, city_id: 3505, name: 'NGLEGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3341, city_id: 3505, name: 'SANANKULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3342, city_id: 3505, name: 'PONGGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3343, city_id: 3505, name: 'SRENGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3344, city_id: 3505, name: 'WONODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3345, city_id: 3505, name: 'UDANAWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3346, city_id: 3506, name: 'MOJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3347, city_id: 3506, name: 'SEMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3348, city_id: 3506, name: 'NGADILUWIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3349, city_id: 3506, name: 'KRAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3350, city_id: 3506, name: 'RINGINREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3351, city_id: 3506, name: 'KANDAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3352, city_id: 3506, name: 'WATES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3353, city_id: 3506, name: 'NGANCAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3354, city_id: 3506, name: 'PLOSOKLATEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3355, city_id: 3506, name: 'GURAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3356, city_id: 3506, name: 'PUNCU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3357, city_id: 3506, name: 'KEPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3358, city_id: 3506, name: 'KANDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3359, city_id: 3506, name: 'PARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3360, city_id: 3506, name: 'BADAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3361, city_id: 3506, name: 'KUNJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3362, city_id: 3506, name: 'PLEMAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3363, city_id: 3506, name: 'PURWOASRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3364, city_id: 3506, name: 'PAPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3365, city_id: 3506, name: 'PAGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3366, city_id: 3506, name: 'KAYEN KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3367, city_id: 3506, name: 'GAMPENGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3368, city_id: 3506, name: 'NGASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3369, city_id: 3506, name: 'BANYAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3370, city_id: 3506, name: 'GROGOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3371, city_id: 3506, name: 'TAROKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3372, city_id: 3507, name: 'DONOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3373, city_id: 3507, name: 'KALIPARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3374, city_id: 3507, name: 'PAGAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3375, city_id: 3507, name: 'BANTUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3376, city_id: 3507, name: 'GEDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3377, city_id: 3507, name: 'SUMBERMANJING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3378, city_id: 3507, name: 'DAMPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3379, city_id: 3507, name: 'TIRTO YUDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3380, city_id: 3507, name: 'AMPELGADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3381, city_id: 3507, name: 'PONCOKUSUMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3382, city_id: 3507, name: 'WAJAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3383, city_id: 3507, name: 'TUREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3384, city_id: 3507, name: 'BULULAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3385, city_id: 3507, name: 'GONDANGLEGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3386, city_id: 3507, name: 'PAGELARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3387, city_id: 3507, name: 'KEPANJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3388, city_id: 3507, name: 'SUMBER PUCUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3389, city_id: 3507, name: 'KROMENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3390, city_id: 3507, name: 'NGAJUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3391, city_id: 3507, name: 'WONOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3392, city_id: 3507, name: 'WAGIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3393, city_id: 3507, name: 'PAKISAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3394, city_id: 3507, name: 'TAJINAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3395, city_id: 3507, name: 'TUMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3396, city_id: 3507, name: 'PAKIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3397, city_id: 3507, name: 'JABUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3398, city_id: 3507, name: 'LAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3399, city_id: 3507, name: 'SINGOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3400, city_id: 3507, name: 'KARANGPLOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3401, city_id: 3507, name: 'DAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3402, city_id: 3507, name: 'PUJON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3403, city_id: 3507, name: 'NGANTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3404, city_id: 3507, name: 'KASEMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3405, city_id: 3508, name: 'TEMPURSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3406, city_id: 3508, name: 'PRONOJIWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3407, city_id: 3508, name: 'CANDIPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3408, city_id: 3508, name: 'PASIRIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3409, city_id: 3508, name: 'TEMPEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3410, city_id: 3508, name: 'LUMAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3411, city_id: 3508, name: 'SUMBERSUKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3412, city_id: 3508, name: 'TEKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3413, city_id: 3508, name: 'KUNIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3414, city_id: 3508, name: 'YOSOWILANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3415, city_id: 3508, name: 'ROWOKANGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3416, city_id: 3508, name: 'JATIROTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3417, city_id: 3508, name: 'RANDUAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3418, city_id: 3508, name: 'SUKODONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3419, city_id: 3508, name: 'PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3420, city_id: 3508, name: 'PASRUJAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3421, city_id: 3508, name: 'SENDURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3422, city_id: 3508, name: 'GUCIALIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3423, city_id: 3508, name: 'KEDUNGJAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3424, city_id: 3508, name: 'KLAKAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3425, city_id: 3508, name: 'RANUYOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3426, city_id: 3509, name: 'KENCONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3427, city_id: 3509, name: 'GUMUK MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3428, city_id: 3509, name: 'PUGER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3429, city_id: 3509, name: 'WULUHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3430, city_id: 3509, name: 'AMBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3431, city_id: 3509, name: 'TEMPUREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3432, city_id: 3509, name: 'SILO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3433, city_id: 3509, name: 'MAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3434, city_id: 3509, name: 'MUMBULSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3435, city_id: 3509, name: 'JENGGAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3436, city_id: 3509, name: 'AJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3437, city_id: 3509, name: 'RAMBIPUJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3438, city_id: 3509, name: 'BALUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3439, city_id: 3509, name: 'UMBULSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3440, city_id: 3509, name: 'SEMBORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3441, city_id: 3509, name: 'JOMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3442, city_id: 3509, name: 'SUMBER BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3443, city_id: 3509, name: 'TANGGUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3444, city_id: 3509, name: 'BANGSALSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3445, city_id: 3509, name: 'PANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3446, city_id: 3509, name: 'SUKORAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3447, city_id: 3509, name: 'ARJASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3448, city_id: 3509, name: 'PAKUSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3449, city_id: 3509, name: 'KALISAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3450, city_id: 3509, name: 'LEDOKOMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3451, city_id: 3509, name: 'SUMBERJAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3452, city_id: 3509, name: 'SUKOWONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3453, city_id: 3509, name: 'JELBUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3454, city_id: 3509, name: 'KALIWATES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3455, city_id: 3509, name: 'SUMBERSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3456, city_id: 3509, name: 'PATRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3457, city_id: 3510, name: 'PESANGGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3458, city_id: 3510, name: 'SILIRAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3459, city_id: 3510, name: 'BANGOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3460, city_id: 3510, name: 'PURWOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3461, city_id: 3510, name: 'TEGALDLIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3462, city_id: 3510, name: 'MUNCAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3463, city_id: 3510, name: 'CLURING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3464, city_id: 3510, name: 'GAMBIRAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3465, city_id: 3510, name: 'TEGALSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3466, city_id: 3510, name: 'GLENMORE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3467, city_id: 3510, name: 'KALIBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3468, city_id: 3510, name: 'GENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3469, city_id: 3510, name: 'SRONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3470, city_id: 3510, name: 'ROGOJAMPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3471, city_id: 3510, name: 'BLIMBINGSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3472, city_id: 3510, name: 'KABAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3473, city_id: 3510, name: 'SINGOJURUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3474, city_id: 3510, name: 'SEMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3475, city_id: 3510, name: 'SONGGON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3476, city_id: 3510, name: 'GLAGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3477, city_id: 3510, name: 'LICIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3478, city_id: 3510, name: 'BANYUWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3479, city_id: 3510, name: 'GIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3480, city_id: 3510, name: 'KALIPURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3481, city_id: 3510, name: 'WONGSOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3482, city_id: 3511, name: 'MAESAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3483, city_id: 3511, name: 'GRUJUGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3484, city_id: 3511, name: 'TAMANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3485, city_id: 3511, name: 'JAMBESARI DARUS SHOLAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3486, city_id: 3511, name: 'PUJER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3487, city_id: 3511, name: 'TLOGOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3488, city_id: 3511, name: 'SUKOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3489, city_id: 3511, name: 'SUMBER WRINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3490, city_id: 3511, name: 'TAPEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3491, city_id: 3511, name: 'WONOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3492, city_id: 3511, name: 'TENGGARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3493, city_id: 3511, name: 'BONDOWOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3494, city_id: 3511, name: 'CURAH DAMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3495, city_id: 3511, name: 'BINAKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3496, city_id: 3511, name: 'PAKEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3497, city_id: 3511, name: 'WRINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3498, city_id: 3511, name: 'TEGALAMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3499, city_id: 3511, name: 'TAMAN KROCOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3500, city_id: 3511, name: 'KLABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3501, city_id: 3511, name: 'IJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3502, city_id: 3511, name: 'BOTOLINGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3503, city_id: 3511, name: 'PRAJEKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3504, city_id: 3511, name: 'CERMEE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3505, city_id: 3512, name: 'SUMBERMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3506, city_id: 3512, name: 'JATIBANTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3507, city_id: 3512, name: 'BANYUGLUGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3508, city_id: 3512, name: 'BESUKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3509, city_id: 3512, name: 'SUBOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3510, city_id: 3512, name: 'MLANDINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3511, city_id: 3512, name: 'BUNGATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3512, city_id: 3512, name: 'KENDIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3513, city_id: 3512, name: 'PANARUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3514, city_id: 3512, name: 'SITUBONDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3515, city_id: 3512, name: 'MANGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3516, city_id: 3512, name: 'PANJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3517, city_id: 3512, name: 'KAPONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3518, city_id: 3512, name: 'ARJASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3519, city_id: 3512, name: 'JANGKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3520, city_id: 3512, name: 'ASEMBAGUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3521, city_id: 3512, name: 'BANYUPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3522, city_id: 3513, name: 'SUKAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3523, city_id: 3513, name: 'SUMBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3524, city_id: 3513, name: 'KURIPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3525, city_id: 3513, name: 'BANTARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3526, city_id: 3513, name: 'LECES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3527, city_id: 3513, name: 'TEGALSIWALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3528, city_id: 3513, name: 'BANYUANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3529, city_id: 3513, name: 'TIRIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3530, city_id: 3513, name: 'KRUCIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3531, city_id: 3513, name: 'GADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3532, city_id: 3513, name: 'PAKUNIRAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3533, city_id: 3513, name: 'KOTAANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3534, city_id: 3513, name: 'PAITON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3535, city_id: 3513, name: 'BESUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3536, city_id: 3513, name: 'KRAKSAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3537, city_id: 3513, name: 'KREJENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3538, city_id: 3513, name: 'PAJARAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3539, city_id: 3513, name: 'MARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3540, city_id: 3513, name: 'GENDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3541, city_id: 3513, name: 'DRINGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3542, city_id: 3513, name: 'WONOMERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3543, city_id: 3513, name: 'LUMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3544, city_id: 3513, name: 'TONGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3545, city_id: 3513, name: 'SUMBERASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3546, city_id: 3514, name: 'PURWODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3547, city_id: 3514, name: 'TUTUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3548, city_id: 3514, name: 'PUSPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3549, city_id: 3514, name: 'TOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3550, city_id: 3514, name: 'LUMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3551, city_id: 3514, name: 'PASREPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3552, city_id: 3514, name: 'KEJAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3553, city_id: 3514, name: 'WONOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3554, city_id: 3514, name: 'PURWOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3555, city_id: 3514, name: 'PRIGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3556, city_id: 3514, name: 'SUKOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3557, city_id: 3514, name: 'PANDAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3558, city_id: 3514, name: 'GEMPOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3559, city_id: 3514, name: 'BEJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3560, city_id: 3514, name: 'BANGIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3561, city_id: 3514, name: 'REMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3562, city_id: 3514, name: 'KRATON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3563, city_id: 3514, name: 'POHJENTREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3564, city_id: 3514, name: 'GONDANG WETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3565, city_id: 3514, name: 'REJOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3566, city_id: 3514, name: 'WINONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3567, city_id: 3514, name: 'GRATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3568, city_id: 3514, name: 'LEKOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3569, city_id: 3514, name: 'NGULING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3570, city_id: 3515, name: 'TARIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3571, city_id: 3515, name: 'PRAMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3572, city_id: 3515, name: 'KREMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3573, city_id: 3515, name: 'PORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3574, city_id: 3515, name: 'JABON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3575, city_id: 3515, name: 'TANGGULANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3576, city_id: 3515, name: 'CANDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3577, city_id: 3515, name: 'TULANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3578, city_id: 3515, name: 'WONOAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3579, city_id: 3515, name: 'SUKODONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3580, city_id: 3515, name: 'SIDOARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3581, city_id: 3515, name: 'BUDURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3582, city_id: 3515, name: 'SEDATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3583, city_id: 3515, name: 'WARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3584, city_id: 3515, name: 'GEDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3585, city_id: 3515, name: 'TAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3586, city_id: 3515, name: 'KRIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3587, city_id: 3515, name: 'BALONG BENDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3588, city_id: 3516, name: 'JATIREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3589, city_id: 3516, name: 'GONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3590, city_id: 3516, name: 'PACET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3591, city_id: 3516, name: 'TRAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3592, city_id: 3516, name: 'NGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3593, city_id: 3516, name: 'PUNGGING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3594, city_id: 3516, name: 'KUTOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3595, city_id: 3516, name: 'MOJOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3596, city_id: 3516, name: 'BANGSAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3597, city_id: 3516, name: 'MOJOANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3598, city_id: 3516, name: 'DLANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3599, city_id: 3516, name: 'PURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3600, city_id: 3516, name: 'TROWULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3601, city_id: 3516, name: 'SOOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3602, city_id: 3516, name: 'GEDEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3603, city_id: 3516, name: 'KEMLAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3604, city_id: 3516, name: 'JETIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3605, city_id: 3516, name: 'DAWAR BLANDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3606, city_id: 3517, name: 'BANDAR KEDUNG MULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3607, city_id: 3517, name: 'PERAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3608, city_id: 3517, name: 'GUDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3609, city_id: 3517, name: 'DIWEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3610, city_id: 3517, name: 'NGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3611, city_id: 3517, name: 'MOJOWARNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3612, city_id: 3517, name: 'BARENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3613, city_id: 3517, name: 'WONOSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3614, city_id: 3517, name: 'MOJOAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3615, city_id: 3517, name: 'SUMOBITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3616, city_id: 3517, name: 'JOGO ROTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3617, city_id: 3517, name: 'PETERONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3618, city_id: 3517, name: 'JOMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3619, city_id: 3517, name: 'MEGALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3620, city_id: 3517, name: 'TEMBELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3621, city_id: 3517, name: 'KESAMBEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3622, city_id: 3517, name: 'KUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3623, city_id: 3517, name: 'NGUSIKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3624, city_id: 3517, name: 'PLOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3625, city_id: 3517, name: 'KABUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3626, city_id: 3517, name: 'PLANDAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3627, city_id: 3518, name: 'SAWAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3628, city_id: 3518, name: 'NGETOS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3629, city_id: 3518, name: 'BERBEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3630, city_id: 3518, name: 'LOCERET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3631, city_id: 3518, name: 'PACE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3632, city_id: 3518, name: 'TANJUNGANOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3633, city_id: 3518, name: 'PRAMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3634, city_id: 3518, name: 'NGRONGGOT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3635, city_id: 3518, name: 'KERTOSONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3636, city_id: 3518, name: 'PATIANROWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3637, city_id: 3518, name: 'BARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3638, city_id: 3518, name: 'GONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3639, city_id: 3518, name: 'SUKOMORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3640, city_id: 3518, name: 'NGANJUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3641, city_id: 3518, name: 'BAGOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3642, city_id: 3518, name: 'WILANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3643, city_id: 3518, name: 'REJOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3644, city_id: 3518, name: 'NGLUYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3645, city_id: 3518, name: 'LENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3646, city_id: 3518, name: 'JATIKALEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3647, city_id: 3519, name: 'KEBONSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3648, city_id: 3519, name: 'GEGER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3649, city_id: 3519, name: 'DOLOPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3650, city_id: 3519, name: 'DAGANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3651, city_id: 3519, name: 'WUNGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3652, city_id: 3519, name: 'KARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3653, city_id: 3519, name: 'GEMARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3654, city_id: 3519, name: 'SARADAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3655, city_id: 3519, name: 'PILANGKENCENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3656, city_id: 3519, name: 'MEJAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3657, city_id: 3519, name: 'WONOASRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3658, city_id: 3519, name: 'BALEREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3659, city_id: 3519, name: 'MADIUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3660, city_id: 3519, name: 'SAWAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3661, city_id: 3519, name: 'JIWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3662, city_id: 3520, name: 'PONCOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3663, city_id: 3520, name: 'PARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3664, city_id: 3520, name: 'LEMBEYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3665, city_id: 3520, name: 'TAKERAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3666, city_id: 3520, name: 'NGUNTORONADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3667, city_id: 3520, name: 'KAWEDANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3668, city_id: 3520, name: 'MAGETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3669, city_id: 3520, name: 'NGARIBOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3670, city_id: 3520, name: 'PLAOSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3671, city_id: 3520, name: 'SIDOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3672, city_id: 3520, name: 'PANEKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3673, city_id: 3520, name: 'SUKOMORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3674, city_id: 3520, name: 'BENDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3675, city_id: 3520, name: 'MAOSPATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3676, city_id: 3520, name: 'KARANGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3677, city_id: 3520, name: 'KARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3678, city_id: 3520, name: 'BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3679, city_id: 3520, name: 'KARTOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3680, city_id: 3521, name: 'SINE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3681, city_id: 3521, name: 'NGRAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3682, city_id: 3521, name: 'JOGOROGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3683, city_id: 3521, name: 'KENDAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3684, city_id: 3521, name: 'GENENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3685, city_id: 3521, name: 'GERIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3686, city_id: 3521, name: 'KWADUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3687, city_id: 3521, name: 'PANGKUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3688, city_id: 3521, name: 'KARANGJATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3689, city_id: 3521, name: 'BRINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3690, city_id: 3521, name: 'PADAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3691, city_id: 3521, name: 'KASREMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3692, city_id: 3521, name: 'NGAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3693, city_id: 3521, name: 'PARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3694, city_id: 3521, name: 'KEDUNGGALAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3695, city_id: 3521, name: 'PITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3696, city_id: 3521, name: 'WIDODAREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3697, city_id: 3521, name: 'MANTINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3698, city_id: 3521, name: 'KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3699, city_id: 3522, name: 'MARGOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3700, city_id: 3522, name: 'NGRAHO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3701, city_id: 3522, name: 'TAMBAKREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3702, city_id: 3522, name: 'NGAMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3703, city_id: 3522, name: 'SEKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3704, city_id: 3522, name: 'BUBULAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3705, city_id: 3522, name: 'GONDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3706, city_id: 3522, name: 'TEMAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3707, city_id: 3522, name: 'SUGIHWARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3708, city_id: 3522, name: 'KEDUNGADEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3709, city_id: 3522, name: 'KEPOH BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3710, city_id: 3522, name: 'BAURENO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3711, city_id: 3522, name: 'KANOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3712, city_id: 3522, name: 'SUMBEREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3713, city_id: 3522, name: 'BALEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3714, city_id: 3522, name: 'SUKOSEWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3715, city_id: 3522, name: 'KAPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3716, city_id: 3522, name: 'BOJONEGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3717, city_id: 3522, name: 'TRUCUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3718, city_id: 3522, name: 'DANDER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3719, city_id: 3522, name: 'NGASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3720, city_id: 3522, name: 'GAYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3721, city_id: 3522, name: 'KALITIDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3722, city_id: 3522, name: 'MALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3723, city_id: 3522, name: 'PURWOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3724, city_id: 3522, name: 'PADANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3725, city_id: 3522, name: 'KASIMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3726, city_id: 3522, name: 'KEDEWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3727, city_id: 3523, name: 'KENDURUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3728, city_id: 3523, name: 'BANGILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3729, city_id: 3523, name: 'SENORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3730, city_id: 3523, name: 'SINGGAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3731, city_id: 3523, name: 'MONTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3732, city_id: 3523, name: 'PARENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3733, city_id: 3523, name: 'SOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3734, city_id: 3523, name: 'RENGEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3735, city_id: 3523, name: 'GRABAGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3736, city_id: 3523, name: 'PLUMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3737, city_id: 3523, name: 'WIDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3738, city_id: 3523, name: 'PALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3739, city_id: 3523, name: 'SEMANDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3740, city_id: 3523, name: 'TUBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3741, city_id: 3523, name: 'JENU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3742, city_id: 3523, name: 'MERAKURAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3743, city_id: 3523, name: 'KEREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3744, city_id: 3523, name: 'TAMBAKBOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3745, city_id: 3523, name: 'JATIROGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3746, city_id: 3523, name: 'BANCAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3747, city_id: 3524, name: 'SUKORAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3748, city_id: 3524, name: 'BLULUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3749, city_id: 3524, name: 'NGIMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3750, city_id: 3524, name: 'SAMBENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3751, city_id: 3524, name: 'MANTUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3752, city_id: 3524, name: 'KEMBANGBAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3753, city_id: 3524, name: 'SUGIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3754, city_id: 3524, name: 'KEDUNGPRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3755, city_id: 3524, name: 'MODO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3756, city_id: 3524, name: 'BABAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3757, city_id: 3524, name: 'PUCUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3758, city_id: 3524, name: 'SUKODADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3759, city_id: 3524, name: 'LAMONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3760, city_id: 3524, name: 'TIKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3761, city_id: 3524, name: 'SARIREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3762, city_id: 3524, name: 'DEKET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3763, city_id: 3524, name: 'GLAGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3764, city_id: 3524, name: 'KARANGBINANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3765, city_id: 3524, name: 'TURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3766, city_id: 3524, name: 'KALITENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3767, city_id: 3524, name: 'KARANG GENENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3768, city_id: 3524, name: 'SEKARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3769, city_id: 3524, name: 'MADURAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3770, city_id: 3524, name: 'LAREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3771, city_id: 3524, name: 'SOLOKURO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3772, city_id: 3524, name: 'PACIRAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3773, city_id: 3524, name: 'BRONDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3774, city_id: 3525, name: 'WRINGINANOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3775, city_id: 3525, name: 'DRIYOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3776, city_id: 3525, name: 'KEDAMEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3777, city_id: 3525, name: 'MENGANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3778, city_id: 3525, name: 'CERME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3779, city_id: 3525, name: 'BENJENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3780, city_id: 3525, name: 'BALONGPANGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3781, city_id: 3525, name: 'DUDUKSAMPEYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3782, city_id: 3525, name: 'KEBOMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3783, city_id: 3525, name: 'GRESIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3784, city_id: 3525, name: 'MANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3785, city_id: 3525, name: 'BUNGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3786, city_id: 3525, name: 'SIDAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3787, city_id: 3525, name: 'DUKUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3788, city_id: 3525, name: 'PANCENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3789, city_id: 3525, name: 'UJUNGPANGKAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3790, city_id: 3525, name: 'SANGKAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3791, city_id: 3525, name: 'TAMBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3792, city_id: 3526, name: 'KAMAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3793, city_id: 3526, name: 'LABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3794, city_id: 3526, name: 'KWANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3795, city_id: 3526, name: 'MODUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3796, city_id: 3526, name: 'BLEGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3797, city_id: 3526, name: 'KONANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3798, city_id: 3526, name: 'GALIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3799, city_id: 3526, name: 'TANAH MERAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3800, city_id: 3526, name: 'TRAGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3801, city_id: 3526, name: 'SOCAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3802, city_id: 3526, name: 'BANGKALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3803, city_id: 3526, name: 'BURNEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3804, city_id: 3526, name: 'AROSBAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3805, city_id: 3526, name: 'GEGER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3806, city_id: 3526, name: 'KOKOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3807, city_id: 3526, name: 'TANJUNGBUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3808, city_id: 3526, name: 'SEPULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3809, city_id: 3526, name: 'KLAMPIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3810, city_id: 3527, name: 'SRESEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3811, city_id: 3527, name: 'TORJUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3812, city_id: 3527, name: 'PANGARENGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3813, city_id: 3527, name: 'SAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3814, city_id: 3527, name: 'CAMPLONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3815, city_id: 3527, name: 'OMBEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3816, city_id: 3527, name: 'KEDUNGDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3817, city_id: 3527, name: 'JRENGIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3818, city_id: 3527, name: 'TAMBELANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3819, city_id: 3527, name: 'BANYUATES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3820, city_id: 3527, name: 'ROBATAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3821, city_id: 3527, name: 'KARANG PENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3822, city_id: 3527, name: 'KETAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3823, city_id: 3527, name: 'SOKOBANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3824, city_id: 3528, name: 'TLANAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3825, city_id: 3528, name: 'PADEMAWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3826, city_id: 3528, name: 'GALIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3827, city_id: 3528, name: 'LARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3828, city_id: 3528, name: 'PAMEKASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3829, city_id: 3528, name: 'PROPPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3830, city_id: 3528, name: 'PALENGAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3831, city_id: 3528, name: 'PEGANTENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3832, city_id: 3528, name: 'KADUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3833, city_id: 3528, name: 'PAKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3834, city_id: 3528, name: 'WARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3835, city_id: 3528, name: 'BATU MARMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3836, city_id: 3528, name: 'PASEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3837, city_id: 3529, name: 'PRAGAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3838, city_id: 3529, name: 'BLUTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3839, city_id: 3529, name: 'SARONGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3840, city_id: 3529, name: 'GILIGENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3841, city_id: 3529, name: 'TALANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3842, city_id: 3529, name: 'KALIANGET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3843, city_id: 3529, name: 'KOTA SUMENEP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3844, city_id: 3529, name: 'BATUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3845, city_id: 3529, name: 'LENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3846, city_id: 3529, name: 'GANDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3847, city_id: 3529, name: 'GULUK GULUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3848, city_id: 3529, name: 'PASONGSONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3849, city_id: 3529, name: 'AMBUNTEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3850, city_id: 3529, name: 'RUBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3851, city_id: 3529, name: 'DASUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3852, city_id: 3529, name: 'MANDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3853, city_id: 3529, name: 'BATUPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3854, city_id: 3529, name: 'GAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3855, city_id: 3529, name: 'BATANG BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3856, city_id: 3529, name: 'DUNGKEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3857, city_id: 3529, name: 'NONGGUNONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3858, city_id: 3529, name: 'GAYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3859, city_id: 3529, name: 'RAAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3860, city_id: 3529, name: 'SAPEKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3861, city_id: 3529, name: 'ARJASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3862, city_id: 3529, name: 'KANGAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3863, city_id: 3529, name: 'MASALEMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3864, city_id: 3571, name: 'MOJOROTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3865, city_id: 3571, name: 'KOTA KEDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3866, city_id: 3571, name: 'PESANTREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3867, city_id: 3572, name: 'SUKOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3868, city_id: 3572, name: 'KEPANJENKIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3869, city_id: 3572, name: 'SANANWETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3870, city_id: 3573, name: 'KEDUNGKANDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3871, city_id: 3573, name: 'SUKUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3872, city_id: 3573, name: 'KLOJEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3873, city_id: 3573, name: 'BLIMBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3874, city_id: 3573, name: 'LOWOKWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3875, city_id: 3574, name: 'KADEMANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3876, city_id: 3574, name: 'KEDOPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3877, city_id: 3574, name: 'WONOASIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3878, city_id: 3574, name: 'MAYANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3879, city_id: 3574, name: 'KANIGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3880, city_id: 3575, name: 'GADINGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3881, city_id: 3575, name: 'PURWOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3882, city_id: 3575, name: 'BUGULKIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3883, city_id: 3575, name: 'PANGGUNGREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3884, city_id: 3576, name: 'PRAJURIT KULON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3885, city_id: 3576, name: 'MAGERSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3886, city_id: 3576, name: 'KRANGGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3887, city_id: 3577, name: 'MANGU HARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3888, city_id: 3577, name: 'TAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3889, city_id: 3577, name: 'KARTOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3890, city_id: 3578, name: 'KARANG PILANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3891, city_id: 3578, name: 'JAMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3892, city_id: 3578, name: 'GAYUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3893, city_id: 3578, name: 'WONOCOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3894, city_id: 3578, name: 'TENGGILIS MEJOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3895, city_id: 3578, name: 'GUNUNG ANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3896, city_id: 3578, name: 'RUNGKUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3897, city_id: 3578, name: 'SUKOLILO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3898, city_id: 3578, name: 'MULYOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3899, city_id: 3578, name: 'GUBENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3900, city_id: 3578, name: 'WONOKROMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3901, city_id: 3578, name: 'DUKUH PAKIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3902, city_id: 3578, name: 'WIYUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3903, city_id: 3578, name: 'LAKARSANTRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3904, city_id: 3578, name: 'SAMBIKEREP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3905, city_id: 3578, name: 'TANDES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3906, city_id: 3578, name: 'SUKO MANUNGGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3907, city_id: 3578, name: 'SAWAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3908, city_id: 3578, name: 'TEGALSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3909, city_id: 3578, name: 'GENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3910, city_id: 3578, name: 'TAMBAKSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3911, city_id: 3578, name: 'KENJERAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3912, city_id: 3578, name: 'BULAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3913, city_id: 3578, name: 'SIMOKERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3914, city_id: 3578, name: 'SEMAMPIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3915, city_id: 3578, name: 'PABEAN CANTIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3916, city_id: 3578, name: 'BUBUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3917, city_id: 3578, name: 'KREMBANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3918, city_id: 3578, name: 'ASEMROWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3919, city_id: 3578, name: 'BENOWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3920, city_id: 3578, name: 'PAKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3921, city_id: 3579, name: 'BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3922, city_id: 3579, name: 'JUNREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3923, city_id: 3579, name: 'BUMIAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3924, city_id: 3601, name: 'SUMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3925, city_id: 3601, name: 'CIMANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3926, city_id: 3601, name: 'CIBALIUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3927, city_id: 3601, name: 'CIBITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3928, city_id: 3601, name: 'CIKEUSIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3929, city_id: 3601, name: 'CIGEULIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3930, city_id: 3601, name: 'PANIMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3931, city_id: 3601, name: 'SOBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3932, city_id: 3601, name: 'MUNJUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3933, city_id: 3601, name: 'ANGSANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3934, city_id: 3601, name: 'SINDANGRESMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3935, city_id: 3601, name: 'PICUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3936, city_id: 3601, name: 'BOJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3937, city_id: 3601, name: 'SAKETI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3938, city_id: 3601, name: 'CISATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3939, city_id: 3601, name: 'PAGELARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3940, city_id: 3601, name: 'PATIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3941, city_id: 3601, name: 'SUKARESMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3942, city_id: 3601, name: 'LABUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3943, city_id: 3601, name: 'CARITA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3944, city_id: 3601, name: 'JIPUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3945, city_id: 3601, name: 'CIKEDAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3946, city_id: 3601, name: 'MENES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3947, city_id: 3601, name: 'PULOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3948, city_id: 3601, name: 'MANDALAWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3949, city_id: 3601, name: 'CIMANUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3950, city_id: 3601, name: 'CIPEUCANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3951, city_id: 3601, name: 'BANJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3952, city_id: 3601, name: 'KADUHEJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3953, city_id: 3601, name: 'MEKARJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3954, city_id: 3601, name: 'PANDEGLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3955, city_id: 3601, name: 'MAJASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3956, city_id: 3601, name: 'CADASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3957, city_id: 3601, name: 'KARANGTANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3958, city_id: 3601, name: 'KORONCONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3959, city_id: 3602, name: 'MALINGPING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3960, city_id: 3602, name: 'WANASALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3961, city_id: 3602, name: 'PANGGARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3962, city_id: 3602, name: 'CIHARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3963, city_id: 3602, name: 'BAYAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3964, city_id: 3602, name: 'CILOGRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3965, city_id: 3602, name: 'CIBEBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3966, city_id: 3602, name: 'CIJAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3967, city_id: 3602, name: 'CIGEMBLONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3968, city_id: 3602, name: 'BANJARSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3969, city_id: 3602, name: 'CILELES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3970, city_id: 3602, name: 'GUNUNG KENCANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3971, city_id: 3602, name: 'BOJONGMANIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3972, city_id: 3602, name: 'CIRINTEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3973, city_id: 3602, name: 'LEUWIDAMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3974, city_id: 3602, name: 'MUNCANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3975, city_id: 3602, name: 'SOBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3976, city_id: 3602, name: 'CIPANAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3977, city_id: 3602, name: 'LEBAKGEDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3978, city_id: 3602, name: 'SAJIRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3979, city_id: 3602, name: 'CIMARGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3980, city_id: 3602, name: 'CIKULUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3981, city_id: 3602, name: 'WARUNGGUNUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3982, city_id: 3602, name: 'CIBADAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3983, city_id: 3602, name: 'RANGKASBITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3984, city_id: 3602, name: 'KALANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3985, city_id: 3602, name: 'MAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3986, city_id: 3602, name: 'CURUGBITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3987, city_id: 3603, name: 'CISOKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3988, city_id: 3603, name: 'SOLEAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3989, city_id: 3603, name: 'TIGARAKSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3990, city_id: 3603, name: 'JAMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3991, city_id: 3603, name: 'CIKUPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3992, city_id: 3603, name: 'PANONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3993, city_id: 3603, name: 'CURUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3994, city_id: 3603, name: 'KELAPA DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3995, city_id: 3603, name: 'LEGOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3996, city_id: 3603, name: 'PAGEDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3997, city_id: 3603, name: 'CISAUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3998, city_id: 3603, name: 'PASARKEMIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3999, city_id: 3603, name: 'SINDANG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4000, city_id: 3603, name: 'BALARAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4001, city_id: 3603, name: 'JAYANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4002, city_id: 3603, name: 'SUKAMULYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4003, city_id: 3603, name: 'KRESEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4004, city_id: 3603, name: 'GUNUNG KALER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4005, city_id: 3603, name: 'KRONJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4006, city_id: 3603, name: 'MEKAR BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4007, city_id: 3603, name: 'MAUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4008, city_id: 3603, name: 'KEMIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4009, city_id: 3603, name: 'SUKADIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4010, city_id: 3603, name: 'RAJEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4011, city_id: 3603, name: 'SEPATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4012, city_id: 3603, name: 'SEPATAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4013, city_id: 3603, name: 'PAKUHAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4014, city_id: 3603, name: 'TELUKNAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4015, city_id: 3603, name: 'KOSAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4016, city_id: 3604, name: 'CINANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4017, city_id: 3604, name: 'PADARINCANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4018, city_id: 3604, name: 'CIOMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4019, city_id: 3604, name: 'PABUARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4020, city_id: 3604, name: 'GUNUNG SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4021, city_id: 3604, name: 'BAROS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4022, city_id: 3604, name: 'PETIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4023, city_id: 3604, name: 'TUNJUNG TEJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4024, city_id: 3604, name: 'CIKEUSAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4025, city_id: 3604, name: 'PAMARAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4026, city_id: 3604, name: 'BANDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4027, city_id: 3604, name: 'JAWILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4028, city_id: 3604, name: 'KOPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4029, city_id: 3604, name: 'CIKANDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4030, city_id: 3604, name: 'KIBIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4031, city_id: 3604, name: 'KRAGILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4032, city_id: 3604, name: 'WARINGINKURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4033, city_id: 3604, name: 'MANCAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4034, city_id: 3604, name: 'ANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4035, city_id: 3604, name: 'BOJONEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4036, city_id: 3604, name: 'PULO AMPEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4037, city_id: 3604, name: 'KRAMATWATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4038, city_id: 3604, name: 'CIRUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4039, city_id: 3604, name: 'PONTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4040, city_id: 3604, name: 'LEBAK WANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4041, city_id: 3604, name: 'CARENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4042, city_id: 3604, name: 'BINUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4043, city_id: 3604, name: 'TIRTAYASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4044, city_id: 3604, name: 'TANARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4045, city_id: 3671, name: 'CILEDUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4046, city_id: 3671, name: 'LARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4047, city_id: 3671, name: 'KARANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4048, city_id: 3671, name: 'CIPONDOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4049, city_id: 3671, name: 'PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4050, city_id: 3671, name: 'TANGERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4051, city_id: 3671, name: 'KARAWACI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4052, city_id: 3671, name: 'JATI UWUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4053, city_id: 3671, name: 'CIBODAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4054, city_id: 3671, name: 'PERIUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4055, city_id: 3671, name: 'BATUCEPER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4056, city_id: 3671, name: 'NEGLASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4057, city_id: 3671, name: 'BENDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4058, city_id: 3672, name: 'CIWANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4059, city_id: 3672, name: 'CITANGKIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4060, city_id: 3672, name: 'PULOMERAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4061, city_id: 3672, name: 'PURWAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4062, city_id: 3672, name: 'GROGOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4063, city_id: 3672, name: 'CILEGON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4064, city_id: 3672, name: 'JOMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4065, city_id: 3672, name: 'CIBEBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4066, city_id: 3673, name: 'CURUG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4067, city_id: 3673, name: 'WALANTAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4068, city_id: 3673, name: 'CIPOCOK JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4069, city_id: 3673, name: 'SERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4070, city_id: 3673, name: 'TAKTAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4071, city_id: 3673, name: 'KASEMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4072, city_id: 3674, name: 'SETU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4073, city_id: 3674, name: 'SERPONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4074, city_id: 3674, name: 'PAMULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4075, city_id: 3674, name: 'CIPUTAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4076, city_id: 3674, name: 'CIPUTAT TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4077, city_id: 3674, name: 'PONDOK AREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4078, city_id: 3674, name: 'SERPONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4079, city_id: 5101, name: 'MELAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4080, city_id: 5101, name: 'NEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4081, city_id: 5101, name: 'JEMBRANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4082, city_id: 5101, name: 'MENDOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4083, city_id: 5101, name: 'PEKUTATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4084, city_id: 5102, name: 'SELEMADEG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4085, city_id: 5102, name: 'SELEMADEG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4086, city_id: 5102, name: 'SELEMADEG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4087, city_id: 5102, name: 'KERAMBITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4088, city_id: 5102, name: 'TABANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4089, city_id: 5102, name: 'KEDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4090, city_id: 5102, name: 'MARGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4091, city_id: 5102, name: 'BATURITI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4092, city_id: 5102, name: 'PENEBEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4093, city_id: 5102, name: 'PUPUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4094, city_id: 5103, name: 'KUTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4095, city_id: 5103, name: 'KUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4096, city_id: 5103, name: 'KUTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4097, city_id: 5103, name: 'MENGWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4098, city_id: 5103, name: 'ABIANSEMAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4099, city_id: 5103, name: 'PETANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4100, city_id: 5104, name: 'SUKAWATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4101, city_id: 5104, name: 'BLAHBATUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4102, city_id: 5104, name: 'GIANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4103, city_id: 5104, name: 'TAMPAKSIRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4104, city_id: 5104, name: 'UBUD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4105, city_id: 5104, name: 'TEGALLALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4106, city_id: 5104, name: 'PAYANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4107, city_id: 5105, name: 'NUSAPENIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4108, city_id: 5105, name: 'BANJARANGKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4109, city_id: 5105, name: 'KLUNGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4110, city_id: 5105, name: 'DAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4111, city_id: 5106, name: 'SUSUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4112, city_id: 5106, name: 'BANGLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4113, city_id: 5106, name: 'TEMBUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4114, city_id: 5106, name: 'KINTAMANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4115, city_id: 5107, name: 'RENDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4116, city_id: 5107, name: 'SIDEMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4117, city_id: 5107, name: 'MANGGIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4118, city_id: 5107, name: 'KARANGASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4119, city_id: 5107, name: 'ABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4120, city_id: 5107, name: 'BEBANDEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4121, city_id: 5107, name: 'SELAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4122, city_id: 5107, name: 'KUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4123, city_id: 5108, name: 'GEROKGAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4124, city_id: 5108, name: 'SERIRIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4125, city_id: 5108, name: 'BUSUNGBIU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4126, city_id: 5108, name: 'BANJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4127, city_id: 5108, name: 'SUKASADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4128, city_id: 5108, name: 'BULELENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4129, city_id: 5108, name: 'SAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4130, city_id: 5108, name: 'KUBUTAMBAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4131, city_id: 5108, name: 'TEJAKULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4132, city_id: 5171, name: 'DENPASAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4133, city_id: 5171, name: 'DENPASAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4134, city_id: 5171, name: 'DENPASAR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4135, city_id: 5171, name: 'DENPASAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4136, city_id: 5201, name: 'SEKOTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4137, city_id: 5201, name: 'LEMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4138, city_id: 5201, name: 'GERUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4139, city_id: 5201, name: 'LABU API', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4140, city_id: 5201, name: 'KEDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4141, city_id: 5201, name: 'KURIPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4142, city_id: 5201, name: 'NARMADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4143, city_id: 5201, name: 'LINGSAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4144, city_id: 5201, name: 'GUNUNG SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4145, city_id: 5201, name: 'BATU LAYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4146, city_id: 5202, name: 'PRAYA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4147, city_id: 5202, name: 'PRAYA BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4148, city_id: 5202, name: 'PUJUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4149, city_id: 5202, name: 'PRAYA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4150, city_id: 5202, name: 'JANAPRIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4151, city_id: 5202, name: 'KOPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4152, city_id: 5202, name: 'PRAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4153, city_id: 5202, name: 'PRAYA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4154, city_id: 5202, name: 'JONGGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4155, city_id: 5202, name: 'PRINGGARATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4156, city_id: 5202, name: 'BATUKLIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4157, city_id: 5202, name: 'BATUKLIANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4158, city_id: 5203, name: 'KERUAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4159, city_id: 5203, name: 'JEROWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4160, city_id: 5203, name: 'SAKRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4161, city_id: 5203, name: 'SAKRA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4162, city_id: 5203, name: 'SAKRA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4163, city_id: 5203, name: 'TERARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4164, city_id: 5203, name: 'MONTONG GADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4165, city_id: 5203, name: 'SIKUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4166, city_id: 5203, name: 'MASBAGIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4167, city_id: 5203, name: 'PRINGGASELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4168, city_id: 5203, name: 'SUKAMULIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4169, city_id: 5203, name: 'SURALAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4170, city_id: 5203, name: 'SELONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4171, city_id: 5203, name: 'LABUHAN HAJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4172, city_id: 5203, name: 'PRINGGABAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4173, city_id: 5203, name: 'SUELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4174, city_id: 5203, name: 'AIKMEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4175, city_id: 5203, name: 'WANASABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4176, city_id: 5203, name: 'SEMBALUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4177, city_id: 5203, name: 'SAMBELIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4178, city_id: 5204, name: 'LUNYUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4179, city_id: 5204, name: 'ORONG TELU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4180, city_id: 5204, name: 'ALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4181, city_id: 5204, name: 'ALAS BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4182, city_id: 5204, name: 'BUER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4183, city_id: 5204, name: 'UTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4184, city_id: 5204, name: 'RHEE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4185, city_id: 5204, name: 'BATULANTEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4186, city_id: 5204, name: 'SUMBAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4187, city_id: 5204, name: 'LABUHAN BADAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4188, city_id: 5204, name: 'UNTER IWES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4189, city_id: 5204, name: 'MOYOHILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4190, city_id: 5204, name: 'MOYO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4191, city_id: 5204, name: 'MOYOHULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4192, city_id: 5204, name: 'ROPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4193, city_id: 5204, name: 'LENANGGUAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4194, city_id: 5204, name: 'LANTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4195, city_id: 5204, name: 'LAPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4196, city_id: 5204, name: 'LOPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4197, city_id: 5204, name: 'PLAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4198, city_id: 5204, name: 'LABANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4199, city_id: 5204, name: 'MARONGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4200, city_id: 5204, name: 'EMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4201, city_id: 5204, name: 'TARANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4202, city_id: 5205, name: 'HU U', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4203, city_id: 5205, name: 'PAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4204, city_id: 5205, name: 'DOMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4205, city_id: 5205, name: 'WOJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4206, city_id: 5205, name: 'KILO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4207, city_id: 5205, name: 'KEMPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4208, city_id: 5205, name: 'MANGGALEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4209, city_id: 5205, name: 'PEKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4210, city_id: 5206, name: 'MONTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4211, city_id: 5206, name: 'PARADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4212, city_id: 5206, name: 'BOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4213, city_id: 5206, name: 'MADA PANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4214, city_id: 5206, name: 'WOHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4215, city_id: 5206, name: 'BELO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4216, city_id: 5206, name: 'PALIBELO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4217, city_id: 5206, name: 'WAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4218, city_id: 5206, name: 'LANGGUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4219, city_id: 5206, name: 'LAMBITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4220, city_id: 5206, name: 'SAPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4221, city_id: 5206, name: 'LAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4222, city_id: 5206, name: 'WERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4223, city_id: 5206, name: 'AMBALAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4224, city_id: 5206, name: 'DONGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4225, city_id: 5206, name: 'SOROMANDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4226, city_id: 5206, name: 'SANGGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4227, city_id: 5206, name: 'TAMBORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4228, city_id: 5207, name: 'SEKONGKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4229, city_id: 5207, name: 'JEREWEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4230, city_id: 5207, name: 'MALUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4231, city_id: 5207, name: 'TALIWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4232, city_id: 5207, name: 'BRANG ENE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4233, city_id: 5207, name: 'BRANG REA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4234, city_id: 5207, name: 'SETELUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4235, city_id: 5207, name: 'POTO TANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4236, city_id: 5208, name: 'PEMENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4237, city_id: 5208, name: 'TANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4238, city_id: 5208, name: 'GANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4239, city_id: 5208, name: 'KAYANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4240, city_id: 5208, name: 'BAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4241, city_id: 5271, name: 'AMPENAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4242, city_id: 5271, name: 'SEKARBELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4243, city_id: 5271, name: 'MATARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4244, city_id: 5271, name: 'SELAPARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4245, city_id: 5271, name: 'CAKRANEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4246, city_id: 5271, name: 'SANDUBAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4247, city_id: 5272, name: 'RASANAE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4248, city_id: 5272, name: 'MPUNDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4249, city_id: 5272, name: 'RASANAE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4250, city_id: 5272, name: 'RABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4251, city_id: 5272, name: 'ASAKOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4252, city_id: 5301, name: 'LAMBOYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4253, city_id: 5301, name: 'WANOKAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4254, city_id: 5301, name: 'LABOYA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4255, city_id: 5301, name: 'LOLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4256, city_id: 5301, name: 'KOTA WAIKABUBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4257, city_id: 5301, name: 'TANA RIGHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4258, city_id: 5302, name: 'LEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4259, city_id: 5302, name: 'NGGAHA ORIANGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4260, city_id: 5302, name: 'LEWA TIDAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4261, city_id: 5302, name: 'KATALA HAMU LINGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4262, city_id: 5302, name: 'TABUNDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4263, city_id: 5302, name: 'PINUPAHAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4264, city_id: 5302, name: 'PABERIWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4265, city_id: 5302, name: 'KARERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4266, city_id: 5302, name: 'MATAWAI LA PAWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4267, city_id: 5302, name: 'KAHAUNGU ETI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4268, city_id: 5302, name: 'MAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4269, city_id: 5302, name: 'NGADU NGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4270, city_id: 5302, name: 'PAHUNGA LODU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4271, city_id: 5302, name: 'WULA WAIJELU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4272, city_id: 5302, name: 'RINDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4273, city_id: 5302, name: 'UMALULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4274, city_id: 5302, name: 'PANDAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4275, city_id: 5302, name: 'KAMBATA MAPAMBUHANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4276, city_id: 5302, name: 'KOTA WAINGAPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4277, city_id: 5302, name: 'KAMBERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4278, city_id: 5302, name: 'HAHARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4279, city_id: 5302, name: 'KANATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4280, city_id: 5303, name: 'SEMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4281, city_id: 5303, name: 'SEMAU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4282, city_id: 5303, name: 'KUPANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4283, city_id: 5303, name: 'NEKAMESE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4284, city_id: 5303, name: 'KUPANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4285, city_id: 5303, name: 'TAEBENU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4286, city_id: 5303, name: 'AMARASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4287, city_id: 5303, name: 'AMARASI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4288, city_id: 5303, name: 'AMARASI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4289, city_id: 5303, name: 'AMARASI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4290, city_id: 5303, name: 'KUPANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4291, city_id: 5303, name: 'AMABI OEFETO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4292, city_id: 5303, name: 'AMABI OEFETO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4293, city_id: 5303, name: 'SULAMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4294, city_id: 5303, name: 'FATULEU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4295, city_id: 5303, name: 'FATULEU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4296, city_id: 5303, name: 'FATULEU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4297, city_id: 5303, name: 'TAKARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4298, city_id: 5303, name: 'AMFOANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4299, city_id: 5303, name: 'AMFOANG BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4300, city_id: 5303, name: 'AMFOANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4301, city_id: 5303, name: 'AMFOANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4302, city_id: 5303, name: 'AMFOANG BARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4303, city_id: 5303, name: 'AMFOANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4304, city_id: 5304, name: 'MOLLO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4305, city_id: 5304, name: 'FATUMNASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4306, city_id: 5304, name: 'TOBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4307, city_id: 5304, name: 'NUNBENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4308, city_id: 5304, name: 'MOLLO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4309, city_id: 5304, name: 'POLEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4310, city_id: 5304, name: 'MOLLO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4311, city_id: 5304, name: 'MOLLO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4312, city_id: 5304, name: 'KOTA SOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4313, city_id: 5304, name: 'AMANUBAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4314, city_id: 5304, name: 'BATU PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4315, city_id: 5304, name: 'KUATNANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4316, city_id: 5304, name: 'AMANUBAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4317, city_id: 5304, name: 'NOEBEBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4318, city_id: 5304, name: 'KUAN FATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4319, city_id: 5304, name: 'KUALIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4320, city_id: 5304, name: 'AMANUBAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4321, city_id: 5304, name: 'KOLBANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4322, city_id: 5304, name: 'OENINO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4323, city_id: 5304, name: 'AMANUBAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4324, city_id: 5304, name: 'FAUTMOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4325, city_id: 5304, name: 'FATUKOPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4326, city_id: 5304, name: 'KIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4327, city_id: 5304, name: 'KOT OLIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4328, city_id: 5304, name: 'AMANATUN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4329, city_id: 5304, name: 'BOKING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4330, city_id: 5304, name: 'NUNKOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4331, city_id: 5304, name: 'NOEBANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4332, city_id: 5304, name: 'SANTIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4333, city_id: 5304, name: 'AMANATUN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4334, city_id: 5304, name: 'TOIANAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4335, city_id: 5304, name: 'KOKBAUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4336, city_id: 5305, name: 'MIOMAFFO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4337, city_id: 5305, name: 'MIOMAFFO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4338, city_id: 5305, name: 'MUSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4339, city_id: 5305, name: 'MUTIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4340, city_id: 5305, name: 'MIOMAFFO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4341, city_id: 5305, name: 'NOEMUTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4342, city_id: 5305, name: 'BIKOMI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4343, city_id: 5305, name: 'BIKOMI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4344, city_id: 5305, name: 'BIKOMI NILULAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4345, city_id: 5305, name: 'BIKOMI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4346, city_id: 5305, name: 'NAIBENU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4347, city_id: 5305, name: 'NOEMUTI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4348, city_id: 5305, name: 'KOTA KEFAMENANU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4349, city_id: 5305, name: 'INSANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4350, city_id: 5305, name: 'INSANA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4351, city_id: 5305, name: 'INSANA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4352, city_id: 5305, name: 'INSANA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4353, city_id: 5305, name: 'INSANA FAFINESU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4354, city_id: 5305, name: 'BIBOKI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4355, city_id: 5305, name: 'BIBOKI TANPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4356, city_id: 5305, name: 'BIBOKI MOENLEU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4357, city_id: 5305, name: 'BIBOKI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4358, city_id: 5305, name: 'BIBOKI ANLEU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4359, city_id: 5305, name: 'BIBOKI FEOTLEU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4360, city_id: 5306, name: 'RAI MANUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4361, city_id: 5306, name: 'TASIFETO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4362, city_id: 5306, name: 'KAKULUK MESAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4363, city_id: 5306, name: 'NANAET DUBESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4364, city_id: 5306, name: 'ATAMBUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4365, city_id: 5306, name: 'ATAMBUA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4366, city_id: 5306, name: 'ATAMBUA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4367, city_id: 5306, name: 'TASIFETO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4368, city_id: 5306, name: 'RAIHAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4369, city_id: 5306, name: 'LASIOLAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4370, city_id: 5306, name: 'LAMAKNEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4371, city_id: 5306, name: 'LAMAKNEN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4372, city_id: 5307, name: 'PANTAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4373, city_id: 5307, name: 'PANTAR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4374, city_id: 5307, name: 'PANTAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4375, city_id: 5307, name: 'PANTAR BARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4376, city_id: 5307, name: 'PANTAR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4377, city_id: 5307, name: 'ALOR BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4378, city_id: 5307, name: 'MATARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4379, city_id: 5307, name: 'ALOR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4380, city_id: 5307, name: 'ALOR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4381, city_id: 5307, name: 'ALOR TIMUR LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4382, city_id: 5307, name: 'PUREMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4383, city_id: 5307, name: 'TELUK MUTIARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4384, city_id: 5307, name: 'KABOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4385, city_id: 5307, name: 'ALOR BARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4386, city_id: 5307, name: 'ALOR TENGAH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4387, city_id: 5307, name: 'PULAU PURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4388, city_id: 5307, name: 'LEMBUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4389, city_id: 5308, name: 'NAGAWUTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4390, city_id: 5308, name: 'WULANDONI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4391, city_id: 5308, name: 'ATADEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4392, city_id: 5308, name: 'ILE APE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4393, city_id: 5308, name: 'ILE APE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4394, city_id: 5308, name: 'LEBATUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4395, city_id: 5308, name: 'NUBATUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4396, city_id: 5308, name: 'OMESURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4397, city_id: 5308, name: 'BUYASARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4398, city_id: 5309, name: 'WULANGGITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4399, city_id: 5309, name: 'TITEHENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4400, city_id: 5309, name: 'ILEBURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4401, city_id: 5309, name: 'TANJUNG BUNGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4402, city_id: 5309, name: 'LEWO LEMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4403, city_id: 5309, name: 'LARANTUKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4404, city_id: 5309, name: 'ILE MANDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4405, city_id: 5309, name: 'DEMON PAGONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4406, city_id: 5309, name: 'SOLOR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4407, city_id: 5309, name: 'SOLOR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4408, city_id: 5309, name: 'SOLOR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4409, city_id: 5309, name: 'ADONARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4410, city_id: 5309, name: 'WOTAN ULU MADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4411, city_id: 5309, name: 'ADONARA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4412, city_id: 5309, name: 'ADONARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4413, city_id: 5309, name: 'ILE BOLENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4414, city_id: 5309, name: 'WITIHAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4415, city_id: 5309, name: 'KELUBAGOLIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4416, city_id: 5309, name: 'ADONARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4417, city_id: 5310, name: 'PAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4418, city_id: 5310, name: 'MEGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4419, city_id: 5310, name: 'TANA WAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4420, city_id: 5310, name: 'LELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4421, city_id: 5310, name: 'BOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4422, city_id: 5310, name: 'DORENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4423, city_id: 5310, name: 'MAPITARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4424, city_id: 5310, name: 'TALIBURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4425, city_id: 5310, name: 'WAIGETE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4426, city_id: 5310, name: 'WAIBLAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4427, city_id: 5310, name: 'KEWAPANTE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4428, city_id: 5310, name: 'HEWOKLOANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4429, city_id: 5310, name: 'KANGAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4430, city_id: 5310, name: 'PALUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4431, city_id: 5310, name: 'KOTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4432, city_id: 5310, name: 'NELLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4433, city_id: 5310, name: 'NITA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4434, city_id: 5310, name: 'MAGEPANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4435, city_id: 5310, name: 'ALOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4436, city_id: 5310, name: 'ALOK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4437, city_id: 5310, name: 'ALOK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4438, city_id: 5311, name: 'NANGAPANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4439, city_id: 5311, name: 'PULAU ENDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4440, city_id: 5311, name: 'MAUKARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4441, city_id: 5311, name: 'ENDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4442, city_id: 5311, name: 'ENDE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4443, city_id: 5311, name: 'ENDE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4444, city_id: 5311, name: 'ENDE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4445, city_id: 5311, name: 'ENDE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4446, city_id: 5311, name: 'NDONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4447, city_id: 5311, name: 'NDONA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4448, city_id: 5311, name: 'WOLOWARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4449, city_id: 5311, name: 'WOLOJITA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4450, city_id: 5311, name: 'LIO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4451, city_id: 5311, name: 'KELIMUTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4452, city_id: 5311, name: 'NDORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4453, city_id: 5311, name: 'MAUROLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4454, city_id: 5311, name: 'KOTABARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4455, city_id: 5311, name: 'DETUKELI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4456, city_id: 5311, name: 'LEPEMBUSU KELISOKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4457, city_id: 5311, name: 'DETUSOKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4458, city_id: 5311, name: 'WEWARIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4459, city_id: 5312, name: 'AIMERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4460, city_id: 5312, name: 'JEREBUU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4461, city_id: 5312, name: 'INERIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4462, city_id: 5312, name: 'BAJAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4463, city_id: 5312, name: 'GOLEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4464, city_id: 5312, name: 'GOLEWA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4465, city_id: 5312, name: 'GOLEWA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4466, city_id: 5312, name: 'BAJAWA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4467, city_id: 5312, name: 'SOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4468, city_id: 5312, name: 'RIUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4469, city_id: 5312, name: 'RIUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4470, city_id: 5312, name: 'WOLOMEZE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4471, city_id: 5313, name: 'SATAR MESE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4472, city_id: 5313, name: 'SATAR MESE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4473, city_id: 5313, name: 'SATAR MESE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4474, city_id: 5313, name: 'LANGKE REMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4475, city_id: 5313, name: 'RUTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4476, city_id: 5313, name: 'WAE RII', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4477, city_id: 5313, name: 'LELAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4478, city_id: 5313, name: 'RAHONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4479, city_id: 5313, name: 'CIBAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4480, city_id: 5313, name: 'CIBAL BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4481, city_id: 5313, name: 'REOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4482, city_id: 5313, name: 'REOK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4483, city_id: 5314, name: 'ROTE BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4484, city_id: 5314, name: 'ROTE BARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4485, city_id: 5314, name: 'LOBALAIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4486, city_id: 5314, name: 'ROTE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4487, city_id: 5314, name: 'ROTE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4488, city_id: 5314, name: 'PANTAI BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4489, city_id: 5314, name: 'ROTE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4490, city_id: 5314, name: 'LANDU LEKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4491, city_id: 5314, name: 'ROTE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4492, city_id: 5314, name: 'NDAO NUSE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4493, city_id: 5315, name: 'KOMODO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4494, city_id: 5315, name: 'BOLENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4495, city_id: 5315, name: 'SANO NGGOANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4496, city_id: 5315, name: 'MBELILING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4497, city_id: 5315, name: 'LEMBOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4498, city_id: 5315, name: 'WELAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4499, city_id: 5315, name: 'LEMBOR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4500, city_id: 5315, name: 'KUWUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4501, city_id: 5315, name: 'NDOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4502, city_id: 5315, name: 'MACANG PACAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4503, city_id: 5316, name: 'KATIKUTANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4504, city_id: 5316, name: 'KATIKUTANA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4505, city_id: 5316, name: 'UMBU RATU NGGAY BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4506, city_id: 5316, name: 'UMBU RATU NGGAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4507, city_id: 5316, name: 'MAMBORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4508, city_id: 5317, name: 'KODI BANGEDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4509, city_id: 5317, name: 'KODI BALAGHAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4510, city_id: 5317, name: 'KODI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4511, city_id: 5317, name: 'KODI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4512, city_id: 5317, name: 'WEWEWA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4513, city_id: 5317, name: 'WEWEWA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4514, city_id: 5317, name: 'WEWEWA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4515, city_id: 5317, name: 'WEWEWA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4516, city_id: 5317, name: 'WEWEWA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4517, city_id: 5317, name: 'LOURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4518, city_id: 5317, name: 'KOTA TAMBOLAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4519, city_id: 5318, name: 'MAUPONGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4520, city_id: 5318, name: 'KEO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4521, city_id: 5318, name: 'NANGARORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4522, city_id: 5318, name: 'BOAWAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4523, city_id: 5318, name: 'AESESA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4524, city_id: 5318, name: 'AESESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4525, city_id: 5318, name: 'WOLOWAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4526, city_id: 5319, name: 'BORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4527, city_id: 5319, name: 'RANA MESE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4528, city_id: 5319, name: 'KOTA KOMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4529, city_id: 5319, name: 'ELAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4530, city_id: 5319, name: 'ELAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4531, city_id: 5319, name: 'SAMBI RAMPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4532, city_id: 5319, name: 'POCO RANAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4533, city_id: 5319, name: 'POCO RANAKA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4534, city_id: 5319, name: 'LAMBA LEDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4535, city_id: 5320, name: 'RAIJUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4536, city_id: 5320, name: 'HAWU MEHARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4537, city_id: 5320, name: 'SABU LIAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4538, city_id: 5320, name: 'SABU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4539, city_id: 5320, name: 'SABU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4540, city_id: 5320, name: 'SABU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4541, city_id: 5321, name: 'WEWIKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4542, city_id: 5321, name: 'MALAKA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4543, city_id: 5321, name: 'WELIMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4544, city_id: 5321, name: 'RINHAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4545, city_id: 5321, name: 'IO KUFEU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4546, city_id: 5321, name: 'SASITA MEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4547, city_id: 5321, name: 'MALAKA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4548, city_id: 5321, name: 'BOTIN LEOBELE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4549, city_id: 5321, name: 'LAEN MANEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4550, city_id: 5321, name: 'MALAKA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4551, city_id: 5321, name: 'KOBALIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4552, city_id: 5321, name: 'KOBALIMA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4553, city_id: 5371, name: 'ALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4554, city_id: 5371, name: 'MAULAFA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4555, city_id: 5371, name: 'OEBOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4556, city_id: 5371, name: 'KOTA RAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4557, city_id: 5371, name: 'KELAPA LIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4558, city_id: 5371, name: 'KOTA LAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4559, city_id: 6101, name: 'SELAKAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4560, city_id: 6101, name: 'SELAKAU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4561, city_id: 6101, name: 'PEMANGKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4562, city_id: 6101, name: 'SEMPARUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4563, city_id: 6101, name: 'SALATIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4564, city_id: 6101, name: 'TEBAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4565, city_id: 6101, name: 'TEKARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4566, city_id: 6101, name: 'SAMBAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4567, city_id: 6101, name: 'SUBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4568, city_id: 6101, name: 'SEBAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4569, city_id: 6101, name: 'SAJAD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4570, city_id: 6101, name: 'JAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4571, city_id: 6101, name: 'JAWAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4572, city_id: 6101, name: 'TELUK KERAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4573, city_id: 6101, name: 'GALING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4574, city_id: 6101, name: 'TANGARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4575, city_id: 6101, name: 'SEJANGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4576, city_id: 6101, name: 'SAJINGAN BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4577, city_id: 6101, name: 'PALOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4578, city_id: 6102, name: 'SUNGAI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4579, city_id: 6102, name: 'CAPKALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4580, city_id: 6102, name: 'SUNGAI RAYA KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4581, city_id: 6102, name: 'SAMALANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4582, city_id: 6102, name: 'MONTERADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4583, city_id: 6102, name: 'LEMBAH BAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4584, city_id: 6102, name: 'BENGKAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4585, city_id: 6102, name: 'TERIAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4586, city_id: 6102, name: 'SUNGAI BETUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4587, city_id: 6102, name: 'LEDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4588, city_id: 6102, name: 'SUTI SEMARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4589, city_id: 6102, name: 'LUMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4590, city_id: 6102, name: 'SANGGAU LEDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4591, city_id: 6102, name: 'TUJUHBELAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4592, city_id: 6102, name: 'SELUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4593, city_id: 6102, name: 'JAGOI BABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4594, city_id: 6102, name: 'SIDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4595, city_id: 6103, name: 'SEBANGKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4596, city_id: 6103, name: 'NGABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4597, city_id: 6103, name: 'JELIMPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4598, city_id: 6103, name: 'SENGAH TEMILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4599, city_id: 6103, name: 'MANDOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4600, city_id: 6103, name: 'MENJALIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4601, city_id: 6103, name: 'MEMPAWAH HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4602, city_id: 6103, name: 'SOMPAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4603, city_id: 6103, name: 'MENYUKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4604, city_id: 6103, name: 'BANYUKE HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4605, city_id: 6103, name: 'MERANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4606, city_id: 6103, name: 'KUALA BEHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4607, city_id: 6103, name: 'AIR BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4608, city_id: 6104, name: 'SIANTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4609, city_id: 6104, name: 'SEGEDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4610, city_id: 6104, name: 'SUNGAI PINYUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4611, city_id: 6104, name: 'ANJONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4612, city_id: 6104, name: 'MEMPAWAH HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4613, city_id: 6104, name: 'MEMPAWAH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4614, city_id: 6104, name: 'SUNGAI KUNYIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4615, city_id: 6104, name: 'TOHO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4616, city_id: 6104, name: 'SADANIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4617, city_id: 6105, name: 'TOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4618, city_id: 6105, name: 'MELIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4619, city_id: 6105, name: 'KAPUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4620, city_id: 6105, name: 'MUKOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4621, city_id: 6105, name: 'JANGKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4622, city_id: 6105, name: 'BONTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4623, city_id: 6105, name: 'PARINDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4624, city_id: 6105, name: 'TAYAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4625, city_id: 6105, name: 'BALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4626, city_id: 6105, name: 'TAYAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4627, city_id: 6105, name: 'KEMBAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4628, city_id: 6105, name: 'BEDUWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4629, city_id: 6105, name: 'NOYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4630, city_id: 6105, name: 'SEKAYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4631, city_id: 6105, name: 'ENTIKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4632, city_id: 6106, name: 'KENDAWANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4633, city_id: 6106, name: 'MANIS MATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4634, city_id: 6106, name: 'MARAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4635, city_id: 6106, name: 'SINGKUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4636, city_id: 6106, name: 'AIR UPAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4637, city_id: 6106, name: 'JELAI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4638, city_id: 6106, name: 'TUMBANG TITI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4639, city_id: 6106, name: 'PEMAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4640, city_id: 6106, name: 'SUNGAI MELAYU RAYAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4641, city_id: 6106, name: 'MATAN HILIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4642, city_id: 6106, name: 'BENUA KAYONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4643, city_id: 6106, name: 'MATAN HILIR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4644, city_id: 6106, name: 'DELTA PAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4645, city_id: 6106, name: 'MUARA PAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4646, city_id: 6106, name: 'NANGA TAYAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4647, city_id: 6106, name: 'SANDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4648, city_id: 6106, name: 'HULU SUNGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4649, city_id: 6106, name: 'SUNGAI LAUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4650, city_id: 6106, name: 'SIMPANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4651, city_id: 6106, name: 'SIMPANG DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4652, city_id: 6107, name: 'SERAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4653, city_id: 6107, name: 'AMBALAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4654, city_id: 6107, name: 'KAYAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4655, city_id: 6107, name: 'SEPAUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4656, city_id: 6107, name: 'TEMPUNAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4657, city_id: 6107, name: 'SUNGAI TEBELIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4658, city_id: 6107, name: 'SINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4659, city_id: 6107, name: 'DEDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4660, city_id: 6107, name: 'KAYAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4661, city_id: 6107, name: 'KELAM PERMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4662, city_id: 6107, name: 'BINJAI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4663, city_id: 6107, name: 'KETUNGAU HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4664, city_id: 6107, name: 'KETUNGAU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4665, city_id: 6107, name: 'KETUNGAU HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4666, city_id: 6108, name: 'SILAT HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4667, city_id: 6108, name: 'SILAT HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4668, city_id: 6108, name: 'HULU GURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4669, city_id: 6108, name: 'BUNUT HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4670, city_id: 6108, name: 'MENTEBAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4671, city_id: 6108, name: 'BIKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4672, city_id: 6108, name: 'KALIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4673, city_id: 6108, name: 'PUTUSSIBAU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4674, city_id: 6108, name: 'EMBALOH HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4675, city_id: 6108, name: 'BUNUT HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4676, city_id: 6108, name: 'BOYAN TANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4677, city_id: 6108, name: 'PENGKADAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4678, city_id: 6108, name: 'JONGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4679, city_id: 6108, name: 'SELIMBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4680, city_id: 6108, name: 'SUHAID', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4681, city_id: 6108, name: 'SEBERUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4682, city_id: 6108, name: 'SEMITAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4683, city_id: 6108, name: 'EMPANANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4684, city_id: 6108, name: 'PURING KENCANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4685, city_id: 6108, name: 'BADAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4686, city_id: 6108, name: 'BATANG LUPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4687, city_id: 6108, name: 'EMBALOH HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4688, city_id: 6108, name: 'PUTUSSIBAU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4689, city_id: 6109, name: 'NANGA MAHAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4690, city_id: 6109, name: 'NANGA TAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4691, city_id: 6109, name: 'SEKADAU HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4692, city_id: 6109, name: 'SEKADAU HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4693, city_id: 6109, name: 'BELITANG HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4694, city_id: 6109, name: 'BELITANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4695, city_id: 6109, name: 'BELITANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4696, city_id: 6110, name: 'SOKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4697, city_id: 6110, name: 'TANAH PINOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4698, city_id: 6110, name: 'TANAH PINOH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4699, city_id: 6110, name: 'SAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4700, city_id: 6110, name: 'BELIMBING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4701, city_id: 6110, name: 'BELIMBING HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4702, city_id: 6110, name: 'NANGA PINOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4703, city_id: 6110, name: 'PINOH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4704, city_id: 6110, name: 'PINOH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4705, city_id: 6110, name: 'ELLA HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4706, city_id: 6110, name: 'MENUKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4707, city_id: 6111, name: 'PULAU MAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4708, city_id: 6111, name: 'KEPULAUAN KARIMATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4709, city_id: 6111, name: 'SUKADANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4710, city_id: 6111, name: 'SIMPANG HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4711, city_id: 6111, name: 'TELUK BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4712, city_id: 6111, name: 'SEPONTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4713, city_id: 6112, name: 'BATU AMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4714, city_id: 6112, name: 'TERENTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4715, city_id: 6112, name: 'KUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4716, city_id: 6112, name: 'TELOK PA KEDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4717, city_id: 6112, name: 'SUNGAI KAKAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4718, city_id: 6112, name: 'RASAU JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4719, city_id: 6112, name: 'SUNGAI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4720, city_id: 6112, name: 'SUNGAI AMBAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4721, city_id: 6112, name: 'KUALA MANDOR-B', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4722, city_id: 6171, name: 'PONTIANAK SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4723, city_id: 6171, name: 'PONTIANAK TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4724, city_id: 6171, name: 'PONTIANAK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4725, city_id: 6171, name: 'PONTIANAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4726, city_id: 6171, name: 'PONTIANAK KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4727, city_id: 6171, name: 'PONTIANAK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4728, city_id: 6172, name: 'SINGKAWANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4729, city_id: 6172, name: 'SINGKAWANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4730, city_id: 6172, name: 'SINGKAWANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4731, city_id: 6172, name: 'SINGKAWANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4732, city_id: 6172, name: 'SINGKAWANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4733, city_id: 6201, name: 'KOTAWARINGIN LAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4734, city_id: 6201, name: 'ARUT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4735, city_id: 6201, name: 'KUMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4736, city_id: 6201, name: 'PANGKALAN BANTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4737, city_id: 6201, name: 'PANGKALAN LADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4738, city_id: 6201, name: 'ARUT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4739, city_id: 6202, name: 'MENTAYA HILIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4740, city_id: 6202, name: 'TELUK SAMPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4741, city_id: 6202, name: 'PULAU HANAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4742, city_id: 6202, name: 'MENTAWA BARU/KETAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4743, city_id: 6202, name: 'SERANAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4744, city_id: 6202, name: 'MENTAYA HILIR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4745, city_id: 6202, name: 'KOTA BESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4746, city_id: 6202, name: 'TELAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4747, city_id: 6202, name: 'BAAMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4748, city_id: 6202, name: 'CEMPAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4749, city_id: 6202, name: 'CEMPAGA HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4750, city_id: 6202, name: 'PARENGGEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4751, city_id: 6202, name: 'TUALAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4752, city_id: 6202, name: 'MENTAYA HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4753, city_id: 6202, name: 'BUKIT SANTUAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4754, city_id: 6202, name: 'ANTANG KALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4755, city_id: 6202, name: 'TELAGA ANTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4756, city_id: 6203, name: 'KAPUAS KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4757, city_id: 6203, name: 'TAMBAN CATUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4758, city_id: 6203, name: 'KAPUAS TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4759, city_id: 6203, name: 'SELAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4760, city_id: 6203, name: 'BATAGUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4761, city_id: 6203, name: 'BASARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4762, city_id: 6203, name: 'KAPUAS HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4763, city_id: 6203, name: 'PULAU PETAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4764, city_id: 6203, name: 'KAPUAS MURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4765, city_id: 6203, name: 'DADAHUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4766, city_id: 6203, name: 'KAPUAS BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4767, city_id: 6203, name: 'MANTANGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4768, city_id: 6203, name: 'TIMPAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4769, city_id: 6203, name: 'KAPUAS TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4770, city_id: 6203, name: 'PASAK TALAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4771, city_id: 6203, name: 'KAPUAS HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4772, city_id: 6203, name: 'MANDAU TALAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4773, city_id: 6204, name: 'JENAMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4774, city_id: 6204, name: 'DUSUN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4775, city_id: 6204, name: 'KARAU KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4776, city_id: 6204, name: 'DUSUN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4777, city_id: 6204, name: 'DUSUN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4778, city_id: 6204, name: 'GUNUNG BINTANG AWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4779, city_id: 6205, name: 'MONTALLAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4780, city_id: 6205, name: 'GUNUNG TIMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4781, city_id: 6205, name: 'GUNUNG PUREI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4782, city_id: 6205, name: 'TEWEH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4783, city_id: 6205, name: 'TEWEH TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4784, city_id: 6205, name: 'TEWEH  BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4785, city_id: 6205, name: 'TEWEH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4786, city_id: 6205, name: 'LAHEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4787, city_id: 6205, name: 'LAHEI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4788, city_id: 6206, name: 'JELAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4789, city_id: 6206, name: 'PANTAI LUNCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4790, city_id: 6206, name: 'SUKAMARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4791, city_id: 6206, name: 'BALAI RIAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4792, city_id: 6206, name: 'PERMATA KECUBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4793, city_id: 6207, name: 'BULIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4794, city_id: 6207, name: 'SEMATU JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4795, city_id: 6207, name: 'MENTHOBI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4796, city_id: 6207, name: 'BULIK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4797, city_id: 6207, name: 'LAMANDAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4798, city_id: 6207, name: 'BELANTIKAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4799, city_id: 6207, name: 'DELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4800, city_id: 6207, name: 'BATANGKAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4801, city_id: 6208, name: 'SERUYAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4802, city_id: 6208, name: 'SERUYAN HILIR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4803, city_id: 6208, name: 'DANAU SEMBULUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4804, city_id: 6208, name: 'SERUYAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4805, city_id: 6208, name: 'HANAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4806, city_id: 6208, name: 'DANAU SELULUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4807, city_id: 6208, name: 'SERUYAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4808, city_id: 6208, name: 'BATU AMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4809, city_id: 6208, name: 'SERUYAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4810, city_id: 6208, name: 'SULING TAMBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4811, city_id: 6209, name: 'KATINGAN KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4812, city_id: 6209, name: 'MENDAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4813, city_id: 6209, name: 'KAMIPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4814, city_id: 6209, name: 'TASIK PAYAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4815, city_id: 6209, name: 'KATINGAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4816, city_id: 6209, name: 'TEWANG SANGALANG GARING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4817, city_id: 6209, name: 'PULAU MALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4818, city_id: 6209, name: 'KATINGAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4819, city_id: 6209, name: 'SANAMAN MANTIKEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4820, city_id: 6209, name: 'PETAK MALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4821, city_id: 6209, name: 'MARIKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4822, city_id: 6209, name: 'KATINGAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4823, city_id: 6209, name: 'BUKIT RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4824, city_id: 6210, name: 'KAHAYAN KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4825, city_id: 6210, name: 'SEBANGAU KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4826, city_id: 6210, name: 'PANDIH BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4827, city_id: 6210, name: 'MALIKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4828, city_id: 6210, name: 'KAHAYAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4829, city_id: 6210, name: 'JABIREN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4830, city_id: 6210, name: 'KAHAYAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4831, city_id: 6210, name: 'BANAMA TINGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4832, city_id: 6211, name: 'MANUHING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4833, city_id: 6211, name: 'MANUHING RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4834, city_id: 6211, name: 'RUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4835, city_id: 6211, name: 'RUNGAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4836, city_id: 6211, name: 'RUNGAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4837, city_id: 6211, name: 'SEPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4838, city_id: 6211, name: 'MIHING RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4839, city_id: 6211, name: 'KURUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4840, city_id: 6211, name: 'TEWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4841, city_id: 6211, name: 'KAHAYAN HULU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4842, city_id: 6211, name: 'DAMANG BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4843, city_id: 6211, name: 'MIRI MANASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4844, city_id: 6212, name: 'BENUA LIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4845, city_id: 6212, name: 'DUSUN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4846, city_id: 6212, name: 'PAJU EPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4847, city_id: 6212, name: 'AWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4848, city_id: 6212, name: 'PATANGKEP TUTUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4849, city_id: 6212, name: 'DUSUN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4850, city_id: 6212, name: 'RAREN BATUAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4851, city_id: 6212, name: 'PAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4852, city_id: 6212, name: 'KARUSEN JANANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4853, city_id: 6212, name: 'PEMATANG KARAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4854, city_id: 6213, name: 'PERMATA INTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4855, city_id: 6213, name: 'SUNGAI BABUAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4856, city_id: 6213, name: 'MURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4857, city_id: 6213, name: 'LAUNG TUHUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4858, city_id: 6213, name: 'BARITO TUHUP RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4859, city_id: 6213, name: 'TANAH SIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4860, city_id: 6213, name: 'TANAH SIANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4861, city_id: 6213, name: 'SUMBER BARITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4862, city_id: 6213, name: 'SERIBU RIAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4863, city_id: 6213, name: 'UUT MURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4864, city_id: 6271, name: 'PAHANDUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4865, city_id: 6271, name: 'SABANGAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4866, city_id: 6271, name: 'JEKAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4867, city_id: 6271, name: 'BUKIT BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4868, city_id: 6271, name: 'RAKUMPIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4869, city_id: 6301, name: 'PANYIPATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4870, city_id: 6301, name: 'TAKISUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4871, city_id: 6301, name: 'KURAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4872, city_id: 6301, name: 'BUMI MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4873, city_id: 6301, name: 'BATI - BATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4874, city_id: 6301, name: 'TAMBANG ULANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4875, city_id: 6301, name: 'PELAIHARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4876, city_id: 6301, name: 'BAJUIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4877, city_id: 6301, name: 'BATU AMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4878, city_id: 6301, name: 'JORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4879, city_id: 6301, name: 'KINTAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4880, city_id: 6302, name: 'PULAU SEMBILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4881, city_id: 6302, name: 'PULAU LAUT BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4882, city_id: 6302, name: 'PULAU LAUT TANJUNG SELAYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4883, city_id: 6302, name: 'PULAU LAUT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4884, city_id: 6302, name: 'PULAU LAUT KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4885, city_id: 6302, name: 'PULAU LAUT TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4886, city_id: 6302, name: 'PULAU SEBUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4887, city_id: 6302, name: 'PULAU LAUT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4888, city_id: 6302, name: 'PULAU LAUT TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4889, city_id: 6302, name: 'KELUMPANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4890, city_id: 6302, name: 'KELUMPANG HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4891, city_id: 6302, name: 'KELUMPANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4892, city_id: 6302, name: 'HAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4893, city_id: 6302, name: 'SUNGAI DURIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4894, city_id: 6302, name: 'KELUMPANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4895, city_id: 6302, name: 'KELUMPANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4896, city_id: 6302, name: 'KELUMPANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4897, city_id: 6302, name: 'PAMUKAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4898, city_id: 6302, name: 'SAMPANAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4899, city_id: 6302, name: 'PAMUKAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4900, city_id: 6302, name: 'PAMUKAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4901, city_id: 6303, name: 'ALUH - ALUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4902, city_id: 6303, name: 'BERUNTUNG BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4903, city_id: 6303, name: 'GAMBUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4904, city_id: 6303, name: 'KERTAK HANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4905, city_id: 6303, name: 'TATAH MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4906, city_id: 6303, name: 'SUNGAI TABUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4907, city_id: 6303, name: 'MARTAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4908, city_id: 6303, name: 'MARTAPURA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4909, city_id: 6303, name: 'MARTAPURA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4910, city_id: 6303, name: 'ASTAMBUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4911, city_id: 6303, name: 'KARANG INTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4912, city_id: 6303, name: 'ARANIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4913, city_id: 6303, name: 'SUNGAI PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4914, city_id: 6303, name: 'PARAMASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4915, city_id: 6303, name: 'PENGARON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4916, city_id: 6303, name: 'SAMBUNG MAKMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4917, city_id: 6303, name: 'MATARAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4918, city_id: 6303, name: 'SIMPANG EMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4919, city_id: 6303, name: 'TELAGA BAUNTUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4920, city_id: 6304, name: 'TABUNGANEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4921, city_id: 6304, name: 'TAMBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4922, city_id: 6304, name: 'MEKAR SARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4923, city_id: 6304, name: 'ANJIR PASAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4924, city_id: 6304, name: 'ANJIR MUARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4925, city_id: 6304, name: 'ALALAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4926, city_id: 6304, name: 'MANDASTANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4927, city_id: 6304, name: 'JEJANGKIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4928, city_id: 6304, name: 'BELAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4929, city_id: 6304, name: 'WANARAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4930, city_id: 6304, name: 'BARAMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4931, city_id: 6304, name: 'RANTAU BADAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4932, city_id: 6304, name: 'CERBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4933, city_id: 6304, name: 'BAKUMPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4934, city_id: 6304, name: 'MARABAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4935, city_id: 6304, name: 'TABUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4936, city_id: 6304, name: 'KURIPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4937, city_id: 6305, name: 'BINUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4938, city_id: 6305, name: 'HATUNGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4939, city_id: 6305, name: 'TAPIN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4940, city_id: 6305, name: 'SALAM BABARIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4941, city_id: 6305, name: 'TAPIN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4942, city_id: 6305, name: 'BUNGUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4943, city_id: 6305, name: 'PIANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4944, city_id: 6305, name: 'LOKPAIKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4945, city_id: 6305, name: 'TAPIN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4946, city_id: 6305, name: 'BAKARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4947, city_id: 6305, name: 'CANDI LARAS SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4948, city_id: 6305, name: 'CANDI LARAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4949, city_id: 6306, name: 'PADANG BATUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4950, city_id: 6306, name: 'LOKSADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4951, city_id: 6306, name: 'TELAGA LANGSAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4952, city_id: 6306, name: 'ANGKINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4953, city_id: 6306, name: 'KANDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4954, city_id: 6306, name: 'SUNGAI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4955, city_id: 6306, name: 'SIMPUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4956, city_id: 6306, name: 'KALUMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4957, city_id: 6306, name: 'DAHA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4958, city_id: 6306, name: 'DAHA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4959, city_id: 6306, name: 'DAHA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4960, city_id: 6307, name: 'HARUYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4961, city_id: 6307, name: 'BATU BENAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4962, city_id: 6307, name: 'HANTAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4963, city_id: 6307, name: 'BATANG ALAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4964, city_id: 6307, name: 'BATANG ALAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4965, city_id: 6307, name: 'BARABAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4966, city_id: 6307, name: 'LABUAN AMAS SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4967, city_id: 6307, name: 'LABUAN AMAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4968, city_id: 6307, name: 'PANDAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4969, city_id: 6307, name: 'BATANG ALAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4970, city_id: 6307, name: 'LIMPASU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4971, city_id: 6308, name: 'DANAU PANGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4972, city_id: 6308, name: 'PAMINGGIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4973, city_id: 6308, name: 'BABIRIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4974, city_id: 6308, name: 'SUNGAI PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4975, city_id: 6308, name: 'SUNGAI TABUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4976, city_id: 6308, name: 'AMUNTAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4977, city_id: 6308, name: 'AMUNTAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4978, city_id: 6308, name: 'BANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4979, city_id: 6308, name: 'AMUNTAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4980, city_id: 6308, name: 'HAUR GADING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4981, city_id: 6309, name: 'BANUA LAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4982, city_id: 6309, name: 'PUGAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4983, city_id: 6309, name: 'KELUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4984, city_id: 6309, name: 'MUARA HARUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4985, city_id: 6309, name: 'TANTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4986, city_id: 6309, name: 'TANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4987, city_id: 6309, name: 'MURUNG PUDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4988, city_id: 6309, name: 'HARUAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4989, city_id: 6309, name: 'BINTANG ARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4990, city_id: 6309, name: 'UPAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4991, city_id: 6309, name: 'MUARA UYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4992, city_id: 6309, name: 'JARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4993, city_id: 6310, name: 'KUSAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4994, city_id: 6310, name: 'SUNGAI LOBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4995, city_id: 6310, name: 'SATUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4996, city_id: 6310, name: 'ANGSANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4997, city_id: 6310, name: 'KUSAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4998, city_id: 6310, name: 'KURANJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4999, city_id: 6310, name: 'BATU LICIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5000, city_id: 6310, name: 'KARANG BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5001, city_id: 6310, name: 'SIMPANG EMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5002, city_id: 6310, name: 'MANTEWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5003, city_id: 6311, name: 'LAMPIHONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5004, city_id: 6311, name: 'BATU MANDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5005, city_id: 6311, name: 'AWAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5006, city_id: 6311, name: 'TEBING TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5007, city_id: 6311, name: 'PARINGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5008, city_id: 6311, name: 'PARINGIN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5009, city_id: 6311, name: 'JUAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5010, city_id: 6311, name: 'HALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5011, city_id: 6371, name: 'BANJARMASIN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5012, city_id: 6371, name: 'BANJARMASIN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5013, city_id: 6371, name: 'BANJARMASIN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5014, city_id: 6371, name: 'BANJARMASIN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5015, city_id: 6371, name: 'BANJARMASIN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5016, city_id: 6372, name: 'LANDASAN ULIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5017, city_id: 6372, name: 'LIANG ANGGANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5018, city_id: 6372, name: 'CEMPAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5019, city_id: 6372, name: 'BANJAR BARU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5020, city_id: 6372, name: 'BANJAR BARU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5021, city_id: 6401, name: 'BATU SOPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5022, city_id: 6401, name: 'MUARA SAMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5023, city_id: 6401, name: 'BATU ENGAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5024, city_id: 6401, name: 'TANJUNG HARAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5025, city_id: 6401, name: 'PASIR BELENGKONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5026, city_id: 6401, name: 'TANAH GROGOT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5027, city_id: 6401, name: 'KUARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5028, city_id: 6401, name: 'LONG IKIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5029, city_id: 6401, name: 'MUARA KOMAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5030, city_id: 6401, name: 'LONG KALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5031, city_id: 6402, name: 'BONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5032, city_id: 6402, name: 'JEMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5033, city_id: 6402, name: 'PENYINGGAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5034, city_id: 6402, name: 'MUARA PAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5035, city_id: 6402, name: 'SILUQ NGURAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5036, city_id: 6402, name: 'MUARA LAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5037, city_id: 6402, name: 'BENTIAN BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5038, city_id: 6402, name: 'DAMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5039, city_id: 6402, name: 'NYUATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5040, city_id: 6402, name: 'BARONG TONGKOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5041, city_id: 6402, name: 'LINGGANG BIGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5042, city_id: 6402, name: 'MELAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5043, city_id: 6402, name: 'SEKOLAQ DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5044, city_id: 6402, name: 'MANOR BULATN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5045, city_id: 6402, name: 'LONG IRAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5046, city_id: 6402, name: 'TERING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5047, city_id: 6403, name: 'SEMBOJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5048, city_id: 6403, name: 'MUARA JAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5049, city_id: 6403, name: 'SANGA-SANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5050, city_id: 6403, name: 'LOA JANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5051, city_id: 6403, name: 'LOA KULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5052, city_id: 6403, name: 'MUARA MUNTAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5053, city_id: 6403, name: 'MUARA WIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5054, city_id: 6403, name: 'KOTABANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5055, city_id: 6403, name: 'TENGGARONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5056, city_id: 6403, name: 'SEBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5057, city_id: 6403, name: 'TENGGARONG SEBERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5058, city_id: 6403, name: 'ANGGANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5059, city_id: 6403, name: 'MUARA BADAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5060, city_id: 6403, name: 'MARANG KAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5061, city_id: 6403, name: 'MUARA KAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5062, city_id: 6403, name: 'KENOHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5063, city_id: 6403, name: 'KEMBANG JANGGUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5064, city_id: 6403, name: 'TABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5065, city_id: 6404, name: 'MUARA ANCALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5066, city_id: 6404, name: 'BUSANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5067, city_id: 6404, name: 'LONG MESANGAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5068, city_id: 6404, name: 'MUARA WAHAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5069, city_id: 6404, name: 'TELEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5070, city_id: 6404, name: 'KONGBENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5071, city_id: 6404, name: 'MUARA BENGKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5072, city_id: 6404, name: 'BATU AMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5073, city_id: 6404, name: 'SANGATTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5074, city_id: 6404, name: 'BENGALON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5075, city_id: 6404, name: 'TELUK PANDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5076, city_id: 6404, name: 'SANGATTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5077, city_id: 6404, name: 'RANTAU PULUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5078, city_id: 6404, name: 'SANGKULIRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5079, city_id: 6404, name: 'KALIORANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5080, city_id: 6404, name: 'SANDARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5081, city_id: 6404, name: 'KAUBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5082, city_id: 6404, name: 'KARANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5083, city_id: 6405, name: 'KELAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5084, city_id: 6405, name: 'TALISAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5085, city_id: 6405, name: 'TABALAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5086, city_id: 6405, name: 'BIDUK BIDUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5087, city_id: 6405, name: 'PULAU DERAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5088, city_id: 6405, name: 'MARATUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5089, city_id: 6405, name: 'SAMBALIUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5090, city_id: 6405, name: 'TANJUNG REDEB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5091, city_id: 6405, name: 'GUNUNG TABUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5092, city_id: 6405, name: 'SEGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5093, city_id: 6405, name: 'TELUK BAYUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5094, city_id: 6405, name: 'BATU PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5095, city_id: 6405, name: 'BIATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5096, city_id: 6409, name: 'BABULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5097, city_id: 6409, name: 'WARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5098, city_id: 6409, name: 'PENAJAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5099, city_id: 6409, name: 'SEPAKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5100, city_id: 6411, name: 'LAHAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5101, city_id: 6411, name: 'LONG HUBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5102, city_id: 6411, name: 'LONG BAGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5103, city_id: 6411, name: 'LONG PAHANGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5104, city_id: 6411, name: 'LONG APARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5105, city_id: 6471, name: 'BALIKPAPAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5106, city_id: 6471, name: 'BALIKPAPAN KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5107, city_id: 6471, name: 'BALIKPAPAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5108, city_id: 6471, name: 'BALIKPAPAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5109, city_id: 6471, name: 'BALIKPAPAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5110, city_id: 6471, name: 'BALIKPAPAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5111, city_id: 6472, name: 'PALARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5112, city_id: 6472, name: 'SAMARINDA ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5113, city_id: 6472, name: 'SAMARINDA KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5114, city_id: 6472, name: 'SAMBUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5115, city_id: 6472, name: 'SAMARINDA SEBERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5116, city_id: 6472, name: 'LOA JANAN ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5117, city_id: 6472, name: 'SUNGAI KUNJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5118, city_id: 6472, name: 'SAMARINDA ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5119, city_id: 6472, name: 'SAMARINDA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5120, city_id: 6472, name: 'SUNGAI PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5121, city_id: 6474, name: 'BONTANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5122, city_id: 6474, name: 'BONTANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5123, city_id: 6474, name: 'BONTANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5124, city_id: 6501, name: 'SUNGAI BOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5125, city_id: 6501, name: 'KAYAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5126, city_id: 6501, name: 'KAYAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5127, city_id: 6501, name: 'KAYAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5128, city_id: 6501, name: 'PUJUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5129, city_id: 6501, name: 'BAHAU HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5130, city_id: 6501, name: 'SUNGAI TUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5131, city_id: 6501, name: 'MALINAU SELATAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5132, city_id: 6501, name: 'MALINAU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5133, city_id: 6501, name: 'MALINAU SELATAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5134, city_id: 6501, name: 'MENTARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5135, city_id: 6501, name: 'MENTARANG HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5136, city_id: 6501, name: 'MALINAU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5137, city_id: 6501, name: 'MALINAU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5138, city_id: 6501, name: 'MALINAU KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5139, city_id: 6502, name: 'PESO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5140, city_id: 6502, name: 'PESO HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5141, city_id: 6502, name: 'TANJUNG PALAS BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5142, city_id: 6502, name: 'TANJUNG PALAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5143, city_id: 6502, name: 'TANJUNG SELOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5144, city_id: 6502, name: 'TANJUNG PALAS TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5145, city_id: 6502, name: 'TANJUNG PALAS TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5146, city_id: 6502, name: 'TANJUNG PALAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5147, city_id: 6502, name: 'SEKATAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5148, city_id: 6502, name: 'BUNYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5149, city_id: 6503, name: 'MURUK RIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5150, city_id: 6503, name: 'SESAYAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5151, city_id: 6503, name: 'BETAYAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5152, city_id: 6503, name: 'SESAYAP HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5153, city_id: 6503, name: 'TANA LIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5154, city_id: 6504, name: 'KRAYAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5155, city_id: 6504, name: 'KRAYAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5156, city_id: 6504, name: 'KRAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5157, city_id: 6504, name: 'KRAYAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5158, city_id: 6504, name: 'KRAYAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5159, city_id: 6504, name: 'LUMBIS OGONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5160, city_id: 6504, name: 'LUMBIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5161, city_id: 6504, name: 'SEMBAKUNG ATULAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5162, city_id: 6504, name: 'SEMBAKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5163, city_id: 6504, name: 'SEBUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5164, city_id: 6504, name: 'TULIN ONSOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5165, city_id: 6504, name: 'SEI MENGGARIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5166, city_id: 6504, name: 'NUNUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5167, city_id: 6504, name: 'NUNUKAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5168, city_id: 6504, name: 'SEBATIK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5169, city_id: 6504, name: 'SEBATIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5170, city_id: 6504, name: 'SEBATIK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5171, city_id: 6504, name: 'SEBATIK TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5172, city_id: 6504, name: 'SEBATIK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5173, city_id: 6571, name: 'TARAKAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5174, city_id: 6571, name: 'TARAKAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5175, city_id: 6571, name: 'TARAKAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5176, city_id: 6571, name: 'TARAKAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5177, city_id: 7101, name: 'DUMOGA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5178, city_id: 7101, name: 'DUMOGA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5179, city_id: 7101, name: 'DUMOGA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5180, city_id: 7101, name: 'DUMOGA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5181, city_id: 7101, name: 'DUMOGA TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5182, city_id: 7101, name: 'DUMOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5183, city_id: 7101, name: 'LOLAYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5184, city_id: 7101, name: 'PASSI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5185, city_id: 7101, name: 'PASSI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5186, city_id: 7101, name: 'BILALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5187, city_id: 7101, name: 'POIGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5188, city_id: 7101, name: 'BOLAANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5189, city_id: 7101, name: 'BOLAANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5190, city_id: 7101, name: 'LOLAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5191, city_id: 7101, name: 'SANGTOMBOLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5192, city_id: 7102, name: 'LANGOWAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5193, city_id: 7102, name: 'LANGOWAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5194, city_id: 7102, name: 'LANGOWAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5195, city_id: 7102, name: 'LANGOWAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5196, city_id: 7102, name: 'TOMPASO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5197, city_id: 7102, name: 'TOMPASO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5198, city_id: 7102, name: 'KAWANGKOAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5199, city_id: 7102, name: 'KAWANGKOAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5200, city_id: 7102, name: 'KAWANGKOAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5201, city_id: 7102, name: 'SONDER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5202, city_id: 7102, name: 'TOMBARIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5203, city_id: 7102, name: 'TOMBARIRI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5204, city_id: 7102, name: 'PINELENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5205, city_id: 7102, name: 'TOMBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5206, city_id: 7102, name: 'MANDOLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5207, city_id: 7102, name: 'TONDANO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5208, city_id: 7102, name: 'TONDANO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5209, city_id: 7102, name: 'REMBOKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5210, city_id: 7102, name: 'KAKAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5211, city_id: 7102, name: 'KAKAS BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5212, city_id: 7102, name: 'LEMBEAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5213, city_id: 7102, name: 'ERIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5214, city_id: 7102, name: 'KOMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5215, city_id: 7102, name: 'TONDANO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5216, city_id: 7102, name: 'TONDANO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5217, city_id: 7103, name: 'MANGANITU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5218, city_id: 7103, name: 'TATOARENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5219, city_id: 7103, name: 'TAMAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5220, city_id: 7103, name: 'TABUKAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5221, city_id: 7103, name: 'TABUKAN SELATAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5222, city_id: 7103, name: 'TABUKAN SELATAN TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5223, city_id: 7103, name: 'TABUKAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5224, city_id: 7103, name: 'MANGANITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5225, city_id: 7103, name: 'TAHUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5226, city_id: 7103, name: 'TAHUNA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5227, city_id: 7103, name: 'TAHUNA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5228, city_id: 7103, name: 'TABUKAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5229, city_id: 7103, name: 'NUSA TABUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5230, city_id: 7103, name: 'KEPULAUAN MARORE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5231, city_id: 7103, name: 'KENDAHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5232, city_id: 7104, name: 'KABARUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5233, city_id: 7104, name: 'DAMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5234, city_id: 7104, name: 'LIRUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5235, city_id: 7104, name: 'SALIBABU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5236, city_id: 7104, name: 'KALONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5237, city_id: 7104, name: 'MORONGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5238, city_id: 7104, name: 'MELONGUANE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5239, city_id: 7104, name: 'MELONGUANE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5240, city_id: 7104, name: 'BEO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5241, city_id: 7104, name: 'BEO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5242, city_id: 7104, name: 'BEO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5243, city_id: 7104, name: 'RAINIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5244, city_id: 7104, name: 'TAMPA NA MMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5245, city_id: 7104, name: 'PULUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5246, city_id: 7104, name: 'ESSANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5247, city_id: 7104, name: 'ESSANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5248, city_id: 7104, name: 'GEMEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5249, city_id: 7104, name: 'NANUSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5250, city_id: 7104, name: 'MIANGAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5251, city_id: 7105, name: 'MODOINDING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5252, city_id: 7105, name: 'TOMPASO BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5253, city_id: 7105, name: 'MAESAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5254, city_id: 7105, name: 'RANOYAPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5255, city_id: 7105, name: 'MOTOLING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5256, city_id: 7105, name: 'KUMELEMBUAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5257, city_id: 7105, name: 'MOTOLING BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5258, city_id: 7105, name: 'MOTOLING TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5259, city_id: 7105, name: 'SINONSAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5260, city_id: 7105, name: 'TENGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5261, city_id: 7105, name: 'AMURANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5262, city_id: 7105, name: 'AMURANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5263, city_id: 7105, name: 'AMURANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5264, city_id: 7105, name: 'TARERAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5265, city_id: 7105, name: 'SULTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5266, city_id: 7105, name: 'TUMPAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5267, city_id: 7105, name: 'TATAPAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5268, city_id: 7106, name: 'KEMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5269, city_id: 7106, name: 'KAUDITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5270, city_id: 7106, name: 'AIRMADIDI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5271, city_id: 7106, name: 'KALAWAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5272, city_id: 7106, name: 'DIMEMBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5273, city_id: 7106, name: 'TALAWAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5274, city_id: 7106, name: 'WORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5275, city_id: 7106, name: 'LIKUPANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5276, city_id: 7106, name: 'LIKUPANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5277, city_id: 7106, name: 'LIKUPANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5278, city_id: 7107, name: 'SANGKUB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5279, city_id: 7107, name: 'BINTAUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5280, city_id: 7107, name: 'BOLANG ITANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5281, city_id: 7107, name: 'BOLANG ITANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5282, city_id: 7107, name: 'KAIDIPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5283, city_id: 7107, name: 'PINOGALUMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5284, city_id: 7108, name: 'BIARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5285, city_id: 7108, name: 'TAGULANDANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5286, city_id: 7108, name: 'TAGULANDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5287, city_id: 7108, name: 'TAGULANDANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5288, city_id: 7108, name: 'SIAU BARAT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5289, city_id: 7108, name: 'SIAU TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5290, city_id: 7108, name: 'SIAU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5291, city_id: 7108, name: 'SIAU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5292, city_id: 7108, name: 'SIAU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5293, city_id: 7108, name: 'SIAU BARAT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5294, city_id: 7109, name: 'RATATOTOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5295, city_id: 7109, name: 'PUSOMAEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5296, city_id: 7109, name: 'BELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5297, city_id: 7109, name: 'RATAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5298, city_id: 7109, name: 'PASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5299, city_id: 7109, name: 'RATAHAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5300, city_id: 7109, name: 'TOMBATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5301, city_id: 7109, name: 'TOMBATU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5302, city_id: 7109, name: 'TOMBATU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5303, city_id: 7109, name: 'TOULUAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5304, city_id: 7109, name: 'TOULUAAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5305, city_id: 7109, name: 'SILIAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5306, city_id: 7110, name: 'POSIGADAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5307, city_id: 7110, name: 'TOMINI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5308, city_id: 7110, name: 'BOLANG UKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5309, city_id: 7110, name: 'HELUMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5310, city_id: 7110, name: 'PINOLOSIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5311, city_id: 7110, name: 'PINOLOSIAN TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5312, city_id: 7110, name: 'PINOLOSIAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5313, city_id: 7111, name: 'NUANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5314, city_id: 7111, name: 'MOTONGKAD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5315, city_id: 7111, name: 'TUTUYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5316, city_id: 7111, name: 'KOTABUNAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5317, city_id: 7111, name: 'MODAYAG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5318, city_id: 7111, name: 'MOOAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5319, city_id: 7111, name: 'MODAYAG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5320, city_id: 7171, name: 'MALALAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5321, city_id: 7171, name: 'SARIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5322, city_id: 7171, name: 'WANEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5323, city_id: 7171, name: 'WENANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5324, city_id: 7171, name: 'TIKALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5325, city_id: 7171, name: 'PAAL DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5326, city_id: 7171, name: 'MAPANGET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5327, city_id: 7171, name: 'SINGKIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5328, city_id: 7171, name: 'TUMINTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5329, city_id: 7171, name: 'BUNAKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5330, city_id: 7171, name: 'BUNAKEN KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5331, city_id: 7172, name: 'MADIDIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5332, city_id: 7172, name: 'MATUARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5333, city_id: 7172, name: 'GIRIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5334, city_id: 7172, name: 'LEMBEH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5335, city_id: 7172, name: 'LEMBEH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5336, city_id: 7172, name: 'AERTEMBAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5337, city_id: 7172, name: 'MAESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5338, city_id: 7172, name: 'RANOWULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5339, city_id: 7173, name: 'TOMOHON SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5340, city_id: 7173, name: 'TOMOHON TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5341, city_id: 7173, name: 'TOMOHON TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5342, city_id: 7173, name: 'TOMOHON BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5343, city_id: 7173, name: 'TOMOHON UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5344, city_id: 7174, name: 'KOTAMOBAGU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5345, city_id: 7174, name: 'KOTAMOBAGU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5346, city_id: 7174, name: 'KOTAMOBAGU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5347, city_id: 7174, name: 'KOTAMOBAGU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5348, city_id: 7201, name: 'TOTIKUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5349, city_id: 7201, name: 'TOTIKUM SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5350, city_id: 7201, name: 'TINANGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5351, city_id: 7201, name: 'TINANGKUNG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5352, city_id: 7201, name: 'TINANGKUNG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5353, city_id: 7201, name: 'LIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5354, city_id: 7201, name: 'PELING TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5355, city_id: 7201, name: 'BULAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5356, city_id: 7201, name: 'BULAGI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5357, city_id: 7201, name: 'BULAGI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5358, city_id: 7201, name: 'BUKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5359, city_id: 7201, name: 'BUKO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5360, city_id: 7202, name: 'TOILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5361, city_id: 7202, name: 'TOILI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5362, city_id: 7202, name: 'MOILONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5363, city_id: 7202, name: 'BATUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5364, city_id: 7202, name: 'BATUI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5365, city_id: 7202, name: 'BUNTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5366, city_id: 7202, name: 'NUHON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5367, city_id: 7202, name: 'SIMPANG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5368, city_id: 7202, name: 'KINTOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5369, city_id: 7202, name: 'LUWUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5370, city_id: 7202, name: 'LUWUK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5371, city_id: 7202, name: 'LUWUK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5372, city_id: 7202, name: 'LUWUK SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5373, city_id: 7202, name: 'NAMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5374, city_id: 7202, name: 'PAGIMANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5375, city_id: 7202, name: 'BUALEMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5376, city_id: 7202, name: 'LOBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5377, city_id: 7202, name: 'LAMALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5378, city_id: 7202, name: 'MASAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5379, city_id: 7202, name: 'MANTOH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5380, city_id: 7202, name: 'BALANTAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5381, city_id: 7202, name: 'BALANTAK SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5382, city_id: 7202, name: 'BALANTAK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5383, city_id: 7203, name: 'MENUI KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5384, city_id: 7203, name: 'BUNGKU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5385, city_id: 7203, name: 'BAHODOPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5386, city_id: 7203, name: 'BUNGKU PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5387, city_id: 7203, name: 'BUNGKU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5388, city_id: 7203, name: 'BUNGKU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5389, city_id: 7203, name: 'BUNGKU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5390, city_id: 7203, name: 'BUMI RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5391, city_id: 7203, name: 'WITA PONDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5392, city_id: 7204, name: 'PAMONA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5393, city_id: 7204, name: 'PAMONA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5394, city_id: 7204, name: 'PAMONA TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5395, city_id: 7204, name: 'LORE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5396, city_id: 7204, name: 'LORE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5397, city_id: 7204, name: 'PAMONA PUSALEMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5398, city_id: 7204, name: 'PAMONA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5399, city_id: 7204, name: 'PAMONA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5400, city_id: 7204, name: 'LORE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5401, city_id: 7204, name: 'LORE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5402, city_id: 7204, name: 'LORE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5403, city_id: 7204, name: 'LORE PEORE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5404, city_id: 7204, name: 'POSO PESISIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5405, city_id: 7204, name: 'POSO PESISIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5406, city_id: 7204, name: 'POSO PESISIR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5407, city_id: 7204, name: 'LAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5408, city_id: 7204, name: 'POSO KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5409, city_id: 7204, name: 'POSO KOTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5410, city_id: 7204, name: 'POSO KOTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5411, city_id: 7205, name: 'RIO PAKAVA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5412, city_id: 7205, name: 'PINEMBANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5413, city_id: 7205, name: 'BANAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5414, city_id: 7205, name: 'BANAWA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5415, city_id: 7205, name: 'BANAWA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5416, city_id: 7205, name: 'LABUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5417, city_id: 7205, name: 'TANANTOVEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5418, city_id: 7205, name: 'SINDUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5419, city_id: 7205, name: 'SINDUE TOMBUSABORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5420, city_id: 7205, name: 'SINDUE TOBATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5421, city_id: 7205, name: 'SIRENJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5422, city_id: 7205, name: 'BALAESANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5423, city_id: 7205, name: 'BALAESANG TANJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5424, city_id: 7205, name: 'DAMPELAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5425, city_id: 7205, name: 'SOJOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5426, city_id: 7205, name: 'SOJOL UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5427, city_id: 7206, name: 'DAMPAL SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5428, city_id: 7206, name: 'DAMPAL UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5429, city_id: 7206, name: 'DONDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5430, city_id: 7206, name: 'OGODEIDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5431, city_id: 7206, name: 'BASIDONDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5432, city_id: 7206, name: 'BAOLAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5433, city_id: 7206, name: 'LAMPASIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5434, city_id: 7206, name: 'GALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5435, city_id: 7206, name: 'TOLITOLI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5436, city_id: 7206, name: 'DAKO PAMEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5437, city_id: 7207, name: 'LAKEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5438, city_id: 7207, name: 'BIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5439, city_id: 7207, name: 'KARAMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5440, city_id: 7207, name: 'MOMUNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5441, city_id: 7207, name: 'TILOAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5442, city_id: 7207, name: 'BOKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5443, city_id: 7207, name: 'BUKAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5444, city_id: 7207, name: 'BUNOBOGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5445, city_id: 7207, name: 'GADUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5446, city_id: 7207, name: 'PALELEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5447, city_id: 7207, name: 'PALELEH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5448, city_id: 7208, name: 'SAUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5449, city_id: 7208, name: 'TORUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5450, city_id: 7208, name: 'BALINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5451, city_id: 7208, name: 'PARIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5452, city_id: 7208, name: 'PARIGI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5453, city_id: 7208, name: 'PARIGI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5454, city_id: 7208, name: 'PARIGI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5455, city_id: 7208, name: 'PARIGI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5456, city_id: 7208, name: 'AMPIBABO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5457, city_id: 7208, name: 'KASIMBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5458, city_id: 7208, name: 'TORIBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5459, city_id: 7208, name: 'SINIU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5460, city_id: 7208, name: 'TINOMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5461, city_id: 7208, name: 'TINOMBO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5462, city_id: 7208, name: 'SIDOAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5463, city_id: 7208, name: 'TOMINI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5464, city_id: 7208, name: 'MEPANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5465, city_id: 7208, name: 'PALASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5466, city_id: 7208, name: 'MOUTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5467, city_id: 7208, name: 'BOLANO LAMBUNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5468, city_id: 7208, name: 'TAOPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5469, city_id: 7208, name: 'BOLANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5470, city_id: 7208, name: 'ONGKA MALINO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5471, city_id: 7209, name: 'TOJO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5472, city_id: 7209, name: 'TOJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5473, city_id: 7209, name: 'ULUBONGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5474, city_id: 7209, name: 'AMPANA TETE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5475, city_id: 7209, name: 'AMPANA KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5476, city_id: 7209, name: 'RATOLINDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5477, city_id: 7209, name: 'UNA - UNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5478, city_id: 7209, name: 'BATUDAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5479, city_id: 7209, name: 'TOGEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5480, city_id: 7209, name: 'WALEA KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5481, city_id: 7209, name: 'WALEA BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5482, city_id: 7209, name: 'TALATAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5483, city_id: 7210, name: 'PIPIKORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5484, city_id: 7210, name: 'KULAWI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5485, city_id: 7210, name: 'KULAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5486, city_id: 7210, name: 'LINDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5487, city_id: 7210, name: 'NOKILALAKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5488, city_id: 7210, name: 'PALOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5489, city_id: 7210, name: 'GUMBASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5490, city_id: 7210, name: 'DOLO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5491, city_id: 7210, name: 'DOLO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5492, city_id: 7210, name: 'TANAMBULAVA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5493, city_id: 7210, name: 'DOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5494, city_id: 7210, name: 'SIGI BIROMARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5495, city_id: 7210, name: 'MARAWOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5496, city_id: 7210, name: 'MARAWOLA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5497, city_id: 7210, name: 'KINOVARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5498, city_id: 7211, name: 'BANGKURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5499, city_id: 7211, name: 'LABOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5500, city_id: 7211, name: 'BANGGAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5501, city_id: 7211, name: 'BANGGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5502, city_id: 7211, name: 'BANGGAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5503, city_id: 7211, name: 'BANGGAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5504, city_id: 7211, name: 'BOKAN KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5505, city_id: 7212, name: 'MORI ATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5506, city_id: 7212, name: 'LEMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5507, city_id: 7212, name: 'LEMBO RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5508, city_id: 7212, name: 'PETASIA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5509, city_id: 7212, name: 'PETASIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5510, city_id: 7212, name: 'PETASIA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5511, city_id: 7212, name: 'MORI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5512, city_id: 7212, name: 'SOYO JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5513, city_id: 7212, name: 'BUNGKU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5514, city_id: 7212, name: 'MAMOSALATO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5515, city_id: 7271, name: 'PALU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5516, city_id: 7271, name: 'TATANGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5517, city_id: 7271, name: 'ULUJADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5518, city_id: 7271, name: 'PALU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5519, city_id: 7271, name: 'PALU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5520, city_id: 7271, name: 'MANTIKULORE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5521, city_id: 7271, name: 'PALU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5522, city_id: 7271, name: 'TAWAELI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5523, city_id: 7301, name: 'PASIMARANNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5524, city_id: 7301, name: 'PASILAMBENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5525, city_id: 7301, name: 'PASIMASSUNGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5526, city_id: 7301, name: 'TAKABONERATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5527, city_id: 7301, name: 'PASIMASSUNGGU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5528, city_id: 7301, name: 'BONTOSIKUYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5529, city_id: 7301, name: 'BONTOHARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5530, city_id: 7301, name: 'BENTENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5531, city_id: 7301, name: 'BONTOMANAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5532, city_id: 7301, name: 'BONTOMATENE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5533, city_id: 7301, name: 'BUKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5534, city_id: 7302, name: 'GANTARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5535, city_id: 7302, name: 'UJUNG BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5536, city_id: 7302, name: 'UJUNG LOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5537, city_id: 7302, name: 'BONTO BAHARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5538, city_id: 7302, name: 'BONTOTIRO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5539, city_id: 7302, name: 'HERO LANGE-LANGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5540, city_id: 7302, name: 'KAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5541, city_id: 7302, name: 'BULUKUMPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5542, city_id: 7302, name: 'RILAU ALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5543, city_id: 7302, name: 'KINDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5544, city_id: 7303, name: 'BISSAPPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5545, city_id: 7303, name: 'ULUERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5546, city_id: 7303, name: 'SINOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5547, city_id: 7303, name: 'BANTAENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5548, city_id: 7303, name: 'EREMERASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5549, city_id: 7303, name: 'TOMPOBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5550, city_id: 7303, name: 'PA JUKUKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5551, city_id: 7303, name: 'GANTARANGKEKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5552, city_id: 7304, name: 'BANGKALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5553, city_id: 7304, name: 'BANGKALA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5554, city_id: 7304, name: 'TAMALATEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5555, city_id: 7304, name: 'BONTORAMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5556, city_id: 7304, name: 'BINAMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5557, city_id: 7304, name: 'TURATEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5558, city_id: 7304, name: 'BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5559, city_id: 7304, name: 'ARUNGKEKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5560, city_id: 7304, name: 'TAROWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5561, city_id: 7304, name: 'KELARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5562, city_id: 7304, name: 'RUMBIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5563, city_id: 7305, name: 'MANGARA BOMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5564, city_id: 7305, name: 'MAPPAKASUNGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5565, city_id: 7305, name: 'SANROBONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5566, city_id: 7305, name: 'POLOMBANGKENG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5567, city_id: 7305, name: 'PATTALLASSANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5568, city_id: 7305, name: 'POLOMBANGKENG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5569, city_id: 7305, name: 'GALESONG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5570, city_id: 7305, name: 'GALESONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5571, city_id: 7305, name: 'GALESONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5572, city_id: 7306, name: 'BONTONOMPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5573, city_id: 7306, name: 'BONTONOMPO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5574, city_id: 7306, name: 'BAJENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5575, city_id: 7306, name: 'BAJENG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5576, city_id: 7306, name: 'PALLANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5577, city_id: 7306, name: 'BAROMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5578, city_id: 7306, name: 'SOMBA OPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5579, city_id: 7306, name: 'BONTOMARANNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5580, city_id: 7306, name: 'PATTALLASSANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5581, city_id: 7306, name: 'PARANGLOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5582, city_id: 7306, name: 'MANUJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5583, city_id: 7306, name: 'TINGGIMONCONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5584, city_id: 7306, name: 'TOMBOLO PAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5585, city_id: 7306, name: 'PARIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5586, city_id: 7306, name: 'BUNGAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5587, city_id: 7306, name: 'BONTOLEMPANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5588, city_id: 7306, name: 'TOMPOBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5589, city_id: 7306, name: 'BIRINGBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5590, city_id: 7307, name: 'SINJAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5591, city_id: 7307, name: 'SINJAI BORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5592, city_id: 7307, name: 'SINJAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5593, city_id: 7307, name: 'TELLU LIMPOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5594, city_id: 7307, name: 'SINJAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5595, city_id: 7307, name: 'SINJAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5596, city_id: 7307, name: 'SINJAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5597, city_id: 7307, name: 'BULUPODDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5598, city_id: 7307, name: 'PULAU SEMBILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5599, city_id: 7308, name: 'MANDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5600, city_id: 7308, name: 'MONCONGLOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5601, city_id: 7308, name: 'MAROS BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5602, city_id: 7308, name: 'MARUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5603, city_id: 7308, name: 'TURIKALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5604, city_id: 7308, name: 'LAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5605, city_id: 7308, name: 'BONTOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5606, city_id: 7308, name: 'BANTIMURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5607, city_id: 7308, name: 'SIMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5608, city_id: 7308, name: 'TANRALILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5609, city_id: 7308, name: 'TOMPU BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5610, city_id: 7308, name: 'CAMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5611, city_id: 7308, name: 'CENRANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5612, city_id: 7308, name: 'MALLAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5613, city_id: 7309, name: 'LIUKANG TANGAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5614, city_id: 7309, name: 'LIUKANG KALMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5615, city_id: 7309, name: 'LIUKANG TUPABBIRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5616, city_id: 7309, name: 'LIUKANG TUPABBIRING UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5617, city_id: 7309, name: 'PANGKAJENE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5618, city_id: 7309, name: 'MINASATENE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5619, city_id: 7309, name: 'BALOCCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5620, city_id: 7309, name: 'TONDONG TALLASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5621, city_id: 7309, name: 'BUNGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5622, city_id: 7309, name: 'LABAKKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5623, city_id: 7309, name: 'MA RANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5624, city_id: 7309, name: 'SEGERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5625, city_id: 7309, name: 'MANDALLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5626, city_id: 7310, name: 'TANETE RIAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5627, city_id: 7310, name: 'PUJANANTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5628, city_id: 7310, name: 'TANETE RILAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5629, city_id: 7310, name: 'BARRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5630, city_id: 7310, name: 'SOPPENG RIAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5631, city_id: 7310, name: 'BALUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5632, city_id: 7310, name: 'MALLUSETASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5633, city_id: 7311, name: 'BONTOCANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5634, city_id: 7311, name: 'KAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5635, city_id: 7311, name: 'KAJUARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5636, city_id: 7311, name: 'SALOMEKKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5637, city_id: 7311, name: 'TONRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5638, city_id: 7311, name: 'PATIMPENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5639, city_id: 7311, name: 'LIBURENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5640, city_id: 7311, name: 'MARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5641, city_id: 7311, name: 'SIBULUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5642, city_id: 7311, name: 'CINA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5643, city_id: 7311, name: 'BAREBBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5644, city_id: 7311, name: 'PONRE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5645, city_id: 7311, name: 'LAPPARIAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5646, city_id: 7311, name: 'LAMURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5647, city_id: 7311, name: 'TELLU LIMPOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5648, city_id: 7311, name: 'BENGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5649, city_id: 7311, name: 'ULAWENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5650, city_id: 7311, name: 'PALAKKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5651, city_id: 7311, name: 'AWANGPONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5652, city_id: 7311, name: 'TELLU SIATTINGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5653, city_id: 7311, name: 'AMALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5654, city_id: 7311, name: 'AJANGALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5655, city_id: 7311, name: 'DUA BOCCOE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5656, city_id: 7311, name: 'CENRANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5657, city_id: 7311, name: 'TANETE RIATTANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5658, city_id: 7311, name: 'TANETE RIATTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5659, city_id: 7311, name: 'TANETE RIATTANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5660, city_id: 7312, name: 'MARIO RIWAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5661, city_id: 7312, name: 'LALABATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5662, city_id: 7312, name: 'LILI RIAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5663, city_id: 7312, name: 'GANRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5664, city_id: 7312, name: 'CITTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5665, city_id: 7312, name: 'LILI RILAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5666, city_id: 7312, name: 'DONRI DONRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5667, city_id: 7312, name: 'MARIO RIAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5668, city_id: 7313, name: 'SABBANG PARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5669, city_id: 7313, name: 'TEMPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5670, city_id: 7313, name: 'PAMMANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5671, city_id: 7313, name: 'BOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5672, city_id: 7313, name: 'TAKKALALLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5673, city_id: 7313, name: 'SAJOANGING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5674, city_id: 7313, name: 'PENRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5675, city_id: 7313, name: 'MAJAULENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5676, city_id: 7313, name: 'TANA SITOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5677, city_id: 7313, name: 'BELAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5678, city_id: 7313, name: 'MANIANG PAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5679, city_id: 7313, name: 'GILIRENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5680, city_id: 7313, name: 'KEERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5681, city_id: 7313, name: 'PITUMPANUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5682, city_id: 7314, name: 'PANCA LAUTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5683, city_id: 7314, name: 'TELLULIMPO E', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5684, city_id: 7314, name: 'WATANG PULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5685, city_id: 7314, name: 'BARANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5686, city_id: 7314, name: 'PANCA RIJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5687, city_id: 7314, name: 'KULO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5688, city_id: 7314, name: 'MARITENGNGAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5689, city_id: 7314, name: 'WATANG SIDENRENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5690, city_id: 7314, name: 'PITU RIAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5691, city_id: 7314, name: 'DUAPITUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5692, city_id: 7314, name: 'PITU RIASE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5693, city_id: 7315, name: 'SUPPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5694, city_id: 7315, name: 'MATTIROSOMPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5695, city_id: 7315, name: 'LANRISANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5696, city_id: 7315, name: 'MATTIRO BULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5697, city_id: 7315, name: 'WATANG SAWITTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5698, city_id: 7315, name: 'PALETEANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5699, city_id: 7315, name: 'TIROANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5700, city_id: 7315, name: 'PATAMPANUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5701, city_id: 7315, name: 'CEMPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5702, city_id: 7315, name: 'DUAMPANUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5703, city_id: 7315, name: 'BATULAPPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5704, city_id: 7315, name: 'LEMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5705, city_id: 7316, name: 'MAIWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5706, city_id: 7316, name: 'BUNGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5707, city_id: 7316, name: 'ENREKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5708, city_id: 7316, name: 'CENDANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5709, city_id: 7316, name: 'BARAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5710, city_id: 7316, name: 'BUNTU BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5711, city_id: 7316, name: 'ANGGERAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5712, city_id: 7316, name: 'MALUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5713, city_id: 7316, name: 'ALLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5714, city_id: 7316, name: 'CURIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5715, city_id: 7316, name: 'MASALLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5716, city_id: 7316, name: 'BAROKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5717, city_id: 7317, name: 'LAROMPONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5718, city_id: 7317, name: 'LAROMPONG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5719, city_id: 7317, name: 'SULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5720, city_id: 7317, name: 'SULI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5721, city_id: 7317, name: 'BELOPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5722, city_id: 7317, name: 'KAMANRE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5723, city_id: 7317, name: 'BELOPA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5724, city_id: 7317, name: 'BAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5725, city_id: 7317, name: 'BAJO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5726, city_id: 7317, name: 'BASSESANGTEMPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5727, city_id: 7317, name: 'LATIMOJONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5728, city_id: 7317, name: 'BASSESANGTEMPE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5729, city_id: 7317, name: 'BUPON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5730, city_id: 7317, name: 'PONRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5731, city_id: 7317, name: 'PONRANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5732, city_id: 7317, name: 'BUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5733, city_id: 7317, name: 'WALENRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5734, city_id: 7317, name: 'WALENRANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5735, city_id: 7317, name: 'LAMASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5736, city_id: 7317, name: 'WALENRANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5737, city_id: 7317, name: 'WALENRANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5738, city_id: 7317, name: 'LAMASI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5739, city_id: 7318, name: 'BONGGAKARADENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5740, city_id: 7318, name: 'SIMBUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5741, city_id: 7318, name: 'RANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5742, city_id: 7318, name: 'MAPPAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5743, city_id: 7318, name: 'MENGKENDEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5744, city_id: 7318, name: 'GANDANG BATU SILANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5745, city_id: 7318, name: 'SANGALLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5746, city_id: 7318, name: 'SANGALA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5747, city_id: 7318, name: 'SANGALLA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5748, city_id: 7318, name: 'MAKALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5749, city_id: 7318, name: 'MAKALE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5750, city_id: 7318, name: 'MAKALE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5751, city_id: 7318, name: 'SALUPUTTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5752, city_id: 7318, name: 'BITTUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5753, city_id: 7318, name: 'REMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5754, city_id: 7318, name: 'MASANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5755, city_id: 7318, name: 'MALIMBONG BALEPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5756, city_id: 7318, name: 'RANTETAYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5757, city_id: 7318, name: 'KURRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5758, city_id: 7322, name: 'SABBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5759, city_id: 7322, name: 'BAEBUNTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5760, city_id: 7322, name: 'MALANGKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5761, city_id: 7322, name: 'MALANGKE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5762, city_id: 7322, name: 'SUKAMAJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5763, city_id: 7322, name: 'BONE-BONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5764, city_id: 7322, name: 'TANA LILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5765, city_id: 7322, name: 'MASAMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5766, city_id: 7322, name: 'MAPPEDECENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5767, city_id: 7322, name: 'RAMPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5768, city_id: 7322, name: 'LIMBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5769, city_id: 7322, name: 'SEKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5770, city_id: 7325, name: 'BURAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5771, city_id: 7325, name: 'WOTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5772, city_id: 7325, name: 'TOMONI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5773, city_id: 7325, name: 'TOMONI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5774, city_id: 7325, name: 'ANGKONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5775, city_id: 7325, name: 'MALILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5776, city_id: 7325, name: 'TOWUTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5777, city_id: 7325, name: 'NUHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5778, city_id: 7325, name: 'WASUPONDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5779, city_id: 7325, name: 'MANGKUTANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5780, city_id: 7325, name: 'KALAENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5781, city_id: 7326, name: 'SOPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5782, city_id: 7326, name: 'KESU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5783, city_id: 7326, name: 'SANGGALANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5784, city_id: 7326, name: 'BUNTAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5785, city_id: 7326, name: 'RANTEBUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5786, city_id: 7326, name: 'NANGGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5787, city_id: 7326, name: 'TONDON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5788, city_id: 7326, name: 'TALLUNGLIPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5789, city_id: 7326, name: 'RANTEPAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5790, city_id: 7326, name: 'TIKALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5791, city_id: 7326, name: 'SESEAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5792, city_id: 7326, name: 'BALUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5793, city_id: 7326, name: 'SA DAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5794, city_id: 7326, name: 'BENGKELEKILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5795, city_id: 7326, name: 'SESEAN SULOARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5796, city_id: 7326, name: 'KAPALA PITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5797, city_id: 7326, name: 'DENDE PIONGAN NAPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5798, city_id: 7326, name: 'AWAN RANTE KARUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5799, city_id: 7326, name: 'RINDINGALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5800, city_id: 7326, name: 'BUNTU PEPASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5801, city_id: 7326, name: 'BARUPPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5802, city_id: 7371, name: 'MARISO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5803, city_id: 7371, name: 'MAMAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5804, city_id: 7371, name: 'TAMALATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5805, city_id: 7371, name: 'RAPPOCINI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5806, city_id: 7371, name: 'MAKASSAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5807, city_id: 7371, name: 'UJUNG PANDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5808, city_id: 7371, name: 'WAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5809, city_id: 7371, name: 'BONTOALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5810, city_id: 7371, name: 'UJUNG TANAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5811, city_id: 7371, name: 'KEPULAUAN SANGKARRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5812, city_id: 7371, name: 'TALLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5813, city_id: 7371, name: 'PANAKKUKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5814, city_id: 7371, name: 'MANGGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5815, city_id: 7371, name: 'BIRING KANAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5816, city_id: 7371, name: 'TAMALANREA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5817, city_id: 7372, name: 'BACUKIKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5818, city_id: 7372, name: 'BACUKIKI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5819, city_id: 7372, name: 'UJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5820, city_id: 7372, name: 'SOREANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5821, city_id: 7373, name: 'WARA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5822, city_id: 7373, name: 'SENDANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5823, city_id: 7373, name: 'WARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5824, city_id: 7373, name: 'WARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5825, city_id: 7373, name: 'MUNGKAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5826, city_id: 7373, name: 'WARA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5827, city_id: 7373, name: 'BARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5828, city_id: 7373, name: 'TELLUWANUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5829, city_id: 7373, name: 'WARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5830, city_id: 7401, name: 'LASALIMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5831, city_id: 7401, name: 'LASALIMU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5832, city_id: 7401, name: 'SIONTAPINA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5833, city_id: 7401, name: 'PASAR WAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5834, city_id: 7401, name: 'WOLOWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5835, city_id: 7401, name: 'WABULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5836, city_id: 7401, name: 'KAPONTORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5837, city_id: 7402, name: 'TONGKUNO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5838, city_id: 7402, name: 'TONGKUNO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5839, city_id: 7402, name: 'PARIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5840, city_id: 7402, name: 'BONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5841, city_id: 7402, name: 'MAROBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5842, city_id: 7402, name: 'KABAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5843, city_id: 7402, name: 'KABANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5844, city_id: 7402, name: 'KONTUKOWUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5845, city_id: 7402, name: 'KONTUNAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5846, city_id: 7402, name: 'WATOPUTE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5847, city_id: 7402, name: 'KATOBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5848, city_id: 7402, name: 'LOHIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5849, city_id: 7402, name: 'DURUKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5850, city_id: 7402, name: 'BATALAIWORU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5851, city_id: 7402, name: 'NAPABALANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5852, city_id: 7402, name: 'LASALEPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5853, city_id: 7402, name: 'TOWEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5854, city_id: 7402, name: 'WAKORUMBA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5855, city_id: 7402, name: 'PASIR PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5856, city_id: 7402, name: 'PASI KOLAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5857, city_id: 7402, name: 'MALIGANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5858, city_id: 7402, name: 'BATUKARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5859, city_id: 7403, name: 'SOROPIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5860, city_id: 7403, name: 'LALONGGASUMEETO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5861, city_id: 7403, name: 'SAMPARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5862, city_id: 7403, name: 'BONDOALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5863, city_id: 7403, name: 'BESULUTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5864, city_id: 7403, name: 'KAPOIALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5865, city_id: 7403, name: 'ANGGALOMOARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5866, city_id: 7403, name: 'MOROSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5867, city_id: 7403, name: 'LAMBUYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5868, city_id: 7403, name: 'UEPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5869, city_id: 7403, name: 'PURIALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5870, city_id: 7403, name: 'ONEMBUTE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5871, city_id: 7403, name: 'PONDIDAHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5872, city_id: 7403, name: 'WONGGEDUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5873, city_id: 7403, name: 'AMONGGEDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5874, city_id: 7403, name: 'WONGGEDUKU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5875, city_id: 7403, name: 'WAWOTOBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5876, city_id: 7403, name: 'MELUHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5877, city_id: 7403, name: 'KONAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5878, city_id: 7403, name: 'ANGGOTOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5879, city_id: 7403, name: 'UNAAHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5880, city_id: 7403, name: 'ANGGABERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5881, city_id: 7403, name: 'ABUKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5882, city_id: 7403, name: 'LATOMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5883, city_id: 7403, name: 'TONGAUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5884, city_id: 7403, name: 'ASINUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5885, city_id: 7403, name: 'PADANGGUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5886, city_id: 7403, name: 'TONGAUNA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5887, city_id: 7403, name: 'ROUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5888, city_id: 7404, name: 'WATUBANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5889, city_id: 7404, name: 'TANGGETADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5890, city_id: 7404, name: 'TOARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5891, city_id: 7404, name: 'POLINGGONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5892, city_id: 7404, name: 'POMALAA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5893, city_id: 7404, name: 'WUNDULAKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5894, city_id: 7404, name: 'BAULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5895, city_id: 7404, name: 'KOLAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5896, city_id: 7404, name: 'LATAMBAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5897, city_id: 7404, name: 'WOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5898, city_id: 7404, name: 'SAMATURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5899, city_id: 7404, name: 'IWOIMENDAA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5900, city_id: 7405, name: 'TINANGGEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5901, city_id: 7405, name: 'LALEMBUU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5902, city_id: 7405, name: 'ANDOOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5903, city_id: 7405, name: 'BUKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5904, city_id: 7405, name: 'ANDOOLO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5905, city_id: 7405, name: 'PALANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5906, city_id: 7405, name: 'PALANGGA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5907, city_id: 7405, name: 'BAITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5908, city_id: 7405, name: 'LAINEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5909, city_id: 7405, name: 'LAEYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5910, city_id: 7405, name: 'KOLONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5911, city_id: 7405, name: 'KOLONO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5912, city_id: 7405, name: 'LAONTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5913, city_id: 7405, name: 'MORAMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5914, city_id: 7405, name: 'MORAMO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5915, city_id: 7405, name: 'KONDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5916, city_id: 7405, name: 'WOLASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5917, city_id: 7405, name: 'RANOMEETO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5918, city_id: 7405, name: 'RANOMEETO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5919, city_id: 7405, name: 'LANDONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5920, city_id: 7405, name: 'MOWILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5921, city_id: 7405, name: 'SABULAKOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5922, city_id: 7405, name: 'ANGATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5923, city_id: 7405, name: 'BENUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5924, city_id: 7405, name: 'BASALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5925, city_id: 7406, name: 'KABAENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5926, city_id: 7406, name: 'KABAENA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5927, city_id: 7406, name: 'KABAENA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5928, city_id: 7406, name: 'KABAENA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5929, city_id: 7406, name: 'KABAENA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5930, city_id: 7406, name: 'KABAENA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5931, city_id: 7406, name: 'RUMBIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5932, city_id: 7406, name: 'MATA OLEO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5933, city_id: 7406, name: 'KEP. MASALOKA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5934, city_id: 7406, name: 'RUMBIA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5935, city_id: 7406, name: 'RAROWATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5936, city_id: 7406, name: 'RAROWATU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5937, city_id: 7406, name: 'MATA USU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5938, city_id: 7406, name: 'LANTARI JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5939, city_id: 7406, name: 'POLEANG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5940, city_id: 7406, name: 'POLEANG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5941, city_id: 7406, name: 'POLEANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5942, city_id: 7406, name: 'POLEANG TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5943, city_id: 7406, name: 'POLEANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5944, city_id: 7406, name: 'POLEANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5945, city_id: 7406, name: 'TONTONUNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5946, city_id: 7406, name: 'POLEANG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5947, city_id: 7407, name: 'BINONGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5948, city_id: 7407, name: 'TOGO BINONGKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5949, city_id: 7407, name: 'TOMIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5950, city_id: 7407, name: 'TOMIA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5951, city_id: 7407, name: 'KALEDUPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5952, city_id: 7407, name: 'KALEDUPA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5953, city_id: 7407, name: 'WANGI-WANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5954, city_id: 7407, name: 'WANGI-WANGI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5955, city_id: 7408, name: 'RANTEANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5956, city_id: 7408, name: 'LAMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5957, city_id: 7408, name: 'WAWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5958, city_id: 7408, name: 'LASUSUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5959, city_id: 7408, name: 'KATOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5960, city_id: 7408, name: 'KODEOHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5961, city_id: 7408, name: 'TIWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5962, city_id: 7408, name: 'NGAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5963, city_id: 7408, name: 'WATUNOHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5964, city_id: 7408, name: 'PAKUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5965, city_id: 7408, name: 'PAKUE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5966, city_id: 7408, name: 'PAKUE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5967, city_id: 7408, name: 'BATU PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5968, city_id: 7408, name: 'POREHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5969, city_id: 7408, name: 'TOLALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5970, city_id: 7409, name: 'BONEGUNU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5971, city_id: 7409, name: 'KAMBOWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5972, city_id: 7409, name: 'WAKORUMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5973, city_id: 7409, name: 'KULISUSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5974, city_id: 7409, name: 'KULISUSU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5975, city_id: 7409, name: 'KULISUSU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5976, city_id: 7410, name: 'SAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5977, city_id: 7410, name: 'MOTUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5978, city_id: 7410, name: 'LEMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5979, city_id: 7410, name: 'LASOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5980, city_id: 7410, name: 'WAWOLESEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5981, city_id: 7410, name: 'LASOLO KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5982, city_id: 7410, name: 'MOLAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5983, city_id: 7410, name: 'ASERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5984, city_id: 7410, name: 'ANDOWIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5985, city_id: 7410, name: 'OHEO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5986, city_id: 7410, name: 'LANGGIKIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5987, city_id: 7410, name: 'WIWIRANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5988, city_id: 7410, name: 'LANDAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5989, city_id: 7411, name: 'AERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5990, city_id: 7411, name: 'LAMBANDIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5991, city_id: 7411, name: 'POLI-POLIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5992, city_id: 7411, name: 'DANGIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5993, city_id: 7411, name: 'LADONGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5994, city_id: 7411, name: 'LOEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5995, city_id: 7411, name: 'TIRAWUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5996, city_id: 7411, name: 'LALOLAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5997, city_id: 7411, name: 'MOWEWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5998, city_id: 7411, name: 'TINONDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5999, city_id: 7411, name: 'ULUIWOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6000, city_id: 7411, name: 'UEESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6001, city_id: 7412, name: 'WAWONII TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6002, city_id: 7412, name: 'WAWONII TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6003, city_id: 7412, name: 'WAWONII TIMUR LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6004, city_id: 7412, name: 'WAWONII UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6005, city_id: 7412, name: 'WAWONII SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6006, city_id: 7412, name: 'WAWONII TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6007, city_id: 7412, name: 'WAWONII BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6008, city_id: 7413, name: 'TIWORO KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6009, city_id: 7413, name: 'MAGINTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6010, city_id: 7413, name: 'TIWORO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6011, city_id: 7413, name: 'TIWORO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6012, city_id: 7413, name: 'TIWORO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6013, city_id: 7413, name: 'LAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6014, city_id: 7413, name: 'SAWERIGADI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6015, city_id: 7413, name: 'BARANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6016, city_id: 7413, name: 'WA DAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6017, city_id: 7413, name: 'KUSAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6018, city_id: 7413, name: 'NAPANO KUSAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6019, city_id: 7414, name: 'TALAGA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6020, city_id: 7414, name: 'MAWASANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6021, city_id: 7414, name: 'MAWASANGKA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6022, city_id: 7414, name: 'MAWASANGKA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6023, city_id: 7414, name: 'LAKUDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6024, city_id: 7414, name: 'GU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6025, city_id: 7414, name: 'SANGIA WAMBULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6026, city_id: 7415, name: 'BATU ATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6027, city_id: 7415, name: 'LAPANDEWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6028, city_id: 7415, name: 'SAMPOLAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6029, city_id: 7415, name: 'BATAUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6030, city_id: 7415, name: 'SIOMPU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6031, city_id: 7415, name: 'SIOMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6032, city_id: 7415, name: 'KADATUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6033, city_id: 7471, name: 'MANDONGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6034, city_id: 7471, name: 'BARUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6035, city_id: 7471, name: 'PUUWATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6036, city_id: 7471, name: 'KADIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6037, city_id: 7471, name: 'WUA-WUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6038, city_id: 7471, name: 'POASIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6039, city_id: 7471, name: 'ABELI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6040, city_id: 7471, name: 'KAMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6041, city_id: 7471, name: 'NAMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6042, city_id: 7471, name: 'KENDARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6043, city_id: 7471, name: 'KENDARI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6044, city_id: 7472, name: 'BETOAMBARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6045, city_id: 7472, name: 'MURHUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6046, city_id: 7472, name: 'BATUPOARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6047, city_id: 7472, name: 'WOLIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6048, city_id: 7472, name: 'KOKALUKUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6049, city_id: 7472, name: 'SORAWOLIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6050, city_id: 7472, name: 'BUNGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6051, city_id: 7472, name: 'LEA-LEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6052, city_id: 7501, name: 'MANANGGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6053, city_id: 7501, name: 'TILAMUTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6054, city_id: 7501, name: 'DULUPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6055, city_id: 7501, name: 'BOTUMOITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6056, city_id: 7501, name: 'PAGUYAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6057, city_id: 7501, name: 'WONOSARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6058, city_id: 7501, name: 'PAGUYAMAN PANTAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6059, city_id: 7502, name: 'BATUDAA PANTAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6060, city_id: 7502, name: 'BILUHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6061, city_id: 7502, name: 'BATUDAA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6062, city_id: 7502, name: 'BONGOMEME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6063, city_id: 7502, name: 'TABONGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6064, city_id: 7502, name: 'DUNGALIYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6065, city_id: 7502, name: 'TIBAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6066, city_id: 7502, name: 'PULUBALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6067, city_id: 7502, name: 'BOLIYOHUTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6068, city_id: 7502, name: 'MOOTILANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6069, city_id: 7502, name: 'TOLANGOHULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6070, city_id: 7502, name: 'ASPARAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6071, city_id: 7502, name: 'BILATO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6072, city_id: 7502, name: 'LIMBOTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6073, city_id: 7502, name: 'LIMBOTO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6074, city_id: 7502, name: 'TELAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6075, city_id: 7502, name: 'TELAGA BIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6076, city_id: 7502, name: 'TILANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6077, city_id: 7502, name: 'TELAGA JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6078, city_id: 7503, name: 'POPAYATO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6079, city_id: 7503, name: 'POPAYATO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6080, city_id: 7503, name: 'POPAYATO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6081, city_id: 7503, name: 'LEMITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6082, city_id: 7503, name: 'WANGGARASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6083, city_id: 7503, name: 'MARISA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6084, city_id: 7503, name: 'PATILANGGIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6085, city_id: 7503, name: 'BUNTULIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6086, city_id: 7503, name: 'DUHIADAA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6087, city_id: 7503, name: 'RANDANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6088, city_id: 7503, name: 'TALUDITI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6089, city_id: 7503, name: 'PAGUAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6090, city_id: 7503, name: 'DENGILO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6091, city_id: 7504, name: 'TAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6092, city_id: 7504, name: 'BULANGO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6093, city_id: 7504, name: 'BULANGO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6094, city_id: 7504, name: 'BULANGO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6095, city_id: 7504, name: 'BULANGO ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6096, city_id: 7504, name: 'KABILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6097, city_id: 7504, name: 'BOTU PINGGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6098, city_id: 7504, name: 'TILONGKABILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6099, city_id: 7504, name: 'SUWAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6100, city_id: 7504, name: 'SUWAWA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6101, city_id: 7504, name: 'SUWAWA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6102, city_id: 7504, name: 'SUWAWA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6103, city_id: 7504, name: 'PINOGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6104, city_id: 7504, name: 'BONEPANTAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6105, city_id: 7504, name: 'KABILA BONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6106, city_id: 7504, name: 'BONE RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6107, city_id: 7504, name: 'BONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6108, city_id: 7504, name: 'BULAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6109, city_id: 7505, name: 'ATINGGOLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6110, city_id: 7505, name: 'GENTUMA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6111, city_id: 7505, name: 'KWANDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6112, city_id: 7505, name: 'TOMILITO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6113, city_id: 7505, name: 'PONELO KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6114, city_id: 7505, name: 'ANGGREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6115, city_id: 7505, name: 'MONANO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6116, city_id: 7505, name: 'SUMALATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6117, city_id: 7505, name: 'SUMALATA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6118, city_id: 7505, name: 'TOLINGGULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6119, city_id: 7505, name: 'BIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6120, city_id: 7571, name: 'KOTA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6121, city_id: 7571, name: 'DUNGINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6122, city_id: 7571, name: 'KOTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6123, city_id: 7571, name: 'KOTA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6124, city_id: 7571, name: 'HULONTHALANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6125, city_id: 7571, name: 'DUMBO RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6126, city_id: 7571, name: 'KOTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6127, city_id: 7571, name: 'KOTA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6128, city_id: 7571, name: 'SIPATANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6129, city_id: 7601, name: 'BANGGAE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6130, city_id: 7601, name: 'BANGGAE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6131, city_id: 7601, name: 'PAMBOANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6132, city_id: 7601, name: 'SENDANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6133, city_id: 7601, name: 'TAMMERODO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6134, city_id: 7601, name: 'TUBO SENDANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6135, city_id: 7601, name: 'MALUNDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6136, city_id: 7601, name: 'ULUMANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6137, city_id: 7602, name: 'TINAMBUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6138, city_id: 7602, name: 'BALANIPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6139, city_id: 7602, name: 'LIMBORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6140, city_id: 7602, name: 'TUBBI TARAMANU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6141, city_id: 7602, name: 'ALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6142, city_id: 7602, name: 'CAMPALAGIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6143, city_id: 7602, name: 'LUYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6144, city_id: 7602, name: 'WONOMULYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6145, city_id: 7602, name: 'MAPILLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6146, city_id: 7602, name: 'TAPANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6147, city_id: 7602, name: 'MATAKALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6148, city_id: 7602, name: 'B U L O', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6149, city_id: 7602, name: 'POLEWALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6150, city_id: 7602, name: 'BINUANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6151, city_id: 7602, name: 'ANREAPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6152, city_id: 7602, name: 'MATANGNGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6153, city_id: 7603, name: 'SUMARORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6154, city_id: 7603, name: 'MESSAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6155, city_id: 7603, name: 'PANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6156, city_id: 7603, name: 'NOSU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6157, city_id: 7603, name: 'TABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6158, city_id: 7603, name: 'MAMASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6159, city_id: 7603, name: 'TANDUK KALUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6160, city_id: 7603, name: 'BALLA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6161, city_id: 7603, name: 'SESENAPADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6162, city_id: 7603, name: 'TAWALIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6163, city_id: 7603, name: 'MAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6164, city_id: 7603, name: 'BAMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6165, city_id: 7603, name: 'RANTEBULAHAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6166, city_id: 7603, name: 'MEHALAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6167, city_id: 7603, name: 'ARALLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6168, city_id: 7603, name: 'BUNTU MALANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6169, city_id: 7603, name: 'TABULAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6170, city_id: 7604, name: 'TAPALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6171, city_id: 7604, name: 'TAPALANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6172, city_id: 7604, name: 'MAMUJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6173, city_id: 7604, name: 'SIMBORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6174, city_id: 7604, name: 'BALABALAKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6175, city_id: 7604, name: 'KALUKKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6176, city_id: 7604, name: 'PAPALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6177, city_id: 7604, name: 'SAMPAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6178, city_id: 7604, name: 'TOMMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6179, city_id: 7604, name: 'KALUMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6180, city_id: 7604, name: 'BONEHAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6181, city_id: 7605, name: 'SARUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6182, city_id: 7605, name: 'DAPURANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6183, city_id: 7605, name: 'DURIPOKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6184, city_id: 7605, name: 'BARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6185, city_id: 7605, name: 'BULU TABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6186, city_id: 7605, name: 'LARIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6187, city_id: 7605, name: 'PASANGKAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6188, city_id: 7605, name: 'TIKKE RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6189, city_id: 7605, name: 'PEDONGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6190, city_id: 7605, name: 'BAMBALAMOTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6191, city_id: 7605, name: 'BAMBAIRA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6192, city_id: 7605, name: 'SARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6193, city_id: 7606, name: 'PANGALE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6194, city_id: 7606, name: 'BUDONG-BUDONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6195, city_id: 7606, name: 'TOBADAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6196, city_id: 7606, name: 'TOPOYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6197, city_id: 7606, name: 'KAROSSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6198, city_id: 8101, name: 'TANIMBAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6199, city_id: 8101, name: 'WER TAMRIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6200, city_id: 8101, name: 'WER MAKTIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6201, city_id: 8101, name: 'SELARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6202, city_id: 8101, name: 'TANIMBAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6203, city_id: 8101, name: 'YARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6204, city_id: 8101, name: 'WUAR LABOBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6205, city_id: 8101, name: 'NIRUNMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6206, city_id: 8101, name: 'KORMOMOLIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6207, city_id: 8101, name: 'MOLU MARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6208, city_id: 8102, name: 'KEI KECIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6209, city_id: 8102, name: 'KEI KECIL BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6210, city_id: 8102, name: 'KEI KECIL TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6211, city_id: 8102, name: 'HOAT SORBAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6212, city_id: 8102, name: 'MANYEUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6213, city_id: 8102, name: 'KEI KECIL TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6214, city_id: 8102, name: 'KEI BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6215, city_id: 8102, name: 'KEI BESAR UTARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6216, city_id: 8102, name: 'KEI BESAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6217, city_id: 8102, name: 'KEI BESAR UTARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6218, city_id: 8102, name: 'KEI BESAR SELATAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6219, city_id: 8103, name: 'BANDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6220, city_id: 8103, name: 'TEHORU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6221, city_id: 8103, name: 'TELUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6222, city_id: 8103, name: 'AMAHAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6223, city_id: 8103, name: 'KOTA MASOHI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6224, city_id: 8103, name: 'TELUK ELPAPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6225, city_id: 8103, name: 'TEON NILA SERUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6226, city_id: 8103, name: 'SAPARUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6227, city_id: 8103, name: 'NUSALAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6228, city_id: 8103, name: 'SAPARUA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6229, city_id: 8103, name: 'P. HARUKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6230, city_id: 8103, name: 'SALAHUTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6231, city_id: 8103, name: 'LEIHITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6232, city_id: 8103, name: 'LEIHITU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6233, city_id: 8103, name: 'SERAM UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6234, city_id: 8103, name: 'SERAM UTARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6235, city_id: 8103, name: 'SERAM UTARA TIMUR KOBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6236, city_id: 8103, name: 'SERAM UTARA TIMUR SETI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6237, city_id: 8104, name: 'NAMLEA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6238, city_id: 8104, name: 'WAEAPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6239, city_id: 8104, name: 'WAPLAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6240, city_id: 8104, name: 'BATA BUAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6241, city_id: 8104, name: 'TELUK KAIELY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6242, city_id: 8104, name: 'WAELATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6243, city_id: 8104, name: 'LOLONG GUBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6244, city_id: 8104, name: 'LILIALY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6245, city_id: 8104, name: 'AIR BUAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6246, city_id: 8104, name: 'FENA LEISELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6247, city_id: 8105, name: 'ARU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6248, city_id: 8105, name: 'ARU SELATAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6249, city_id: 8105, name: 'ARU SELATAN UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6250, city_id: 8105, name: 'ARU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6251, city_id: 8105, name: 'ARU TENGAH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6252, city_id: 8105, name: 'ARU TENGAH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6253, city_id: 8105, name: 'PULAU-PULAU ARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6254, city_id: 8105, name: 'ARU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6255, city_id: 8105, name: 'ARU UTARA TIMUR BATULEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6256, city_id: 8105, name: 'SIR-SIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6257, city_id: 8106, name: 'HUAMUAL BELAKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6258, city_id: 8106, name: 'KEPULAUAN MANIPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6259, city_id: 8106, name: 'SERAM BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6260, city_id: 8106, name: 'HUAMUAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6261, city_id: 8106, name: 'KAIRATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6262, city_id: 8106, name: 'KAIRATU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6263, city_id: 8106, name: 'INAMOSOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6264, city_id: 8106, name: 'AMALATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6265, city_id: 8106, name: 'ELPAPUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6266, city_id: 8106, name: 'TANIWEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6267, city_id: 8106, name: 'TANIWEL TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6268, city_id: 8107, name: 'PULAU GOROM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6269, city_id: 8107, name: 'WAKATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6270, city_id: 8107, name: 'TEOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6271, city_id: 8107, name: 'GOROM TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6272, city_id: 8107, name: 'PULAU PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6273, city_id: 8107, name: 'SERAM TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6274, city_id: 8107, name: 'TUTUK TOLU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6275, city_id: 8107, name: 'KILMURY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6276, city_id: 8107, name: 'LIAN VITU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6277, city_id: 8107, name: 'KIAN DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6278, city_id: 8107, name: 'WERINAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6279, city_id: 8107, name: 'SIWALALAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6280, city_id: 8107, name: 'BULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6281, city_id: 8107, name: 'BULA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6282, city_id: 8107, name: 'TELUK WARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6283, city_id: 8108, name: 'WETAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6284, city_id: 8108, name: 'WETAR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6285, city_id: 8108, name: 'WETAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6286, city_id: 8108, name: 'WETAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6287, city_id: 8108, name: 'PP. TERSELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6288, city_id: 8108, name: 'KISAR UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6289, city_id: 8108, name: 'KEPULAUAN ROMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6290, city_id: 8108, name: 'LETTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6291, city_id: 8108, name: 'MOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6292, city_id: 8108, name: 'LAKOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6293, city_id: 8108, name: 'DAMER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6294, city_id: 8108, name: 'MDONA HIERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6295, city_id: 8108, name: 'PP. BABAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6296, city_id: 8108, name: 'PULAU WETANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6297, city_id: 8108, name: 'BABAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6298, city_id: 8108, name: 'PULAU MASELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6299, city_id: 8108, name: 'DAWELOR DAWERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6300, city_id: 8109, name: 'KEPALA MADAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6301, city_id: 8109, name: 'LEKSULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6302, city_id: 8109, name: 'FENA FAFAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6303, city_id: 8109, name: 'NAMROLE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6304, city_id: 8109, name: 'WAISAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6305, city_id: 8109, name: 'AMBALAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6306, city_id: 8171, name: 'NUSANIWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6307, city_id: 8171, name: 'SIRIMAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6308, city_id: 8171, name: 'LEITIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6309, city_id: 8171, name: 'TELUK AMBON BAGUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6310, city_id: 8171, name: 'TELUK AMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6311, city_id: 8172, name: 'PP. KUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6312, city_id: 8172, name: 'KUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6313, city_id: 8172, name: 'TAYANDO TAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6314, city_id: 8172, name: 'PULAU DULLAH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6315, city_id: 8172, name: 'PULAU DULLAH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6316, city_id: 8201, name: 'JAILOLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6317, city_id: 8201, name: 'JAILOLO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6318, city_id: 8201, name: 'SAHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6319, city_id: 8201, name: 'SAHU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6320, city_id: 8201, name: 'IBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6321, city_id: 8201, name: 'IBU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6322, city_id: 8201, name: 'TABARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6323, city_id: 8201, name: 'LOLODA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6324, city_id: 8202, name: 'WEDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6325, city_id: 8202, name: 'WEDA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6326, city_id: 8202, name: 'WEDA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6327, city_id: 8202, name: 'WEDA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6328, city_id: 8202, name: 'WEDA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6329, city_id: 8202, name: 'PULAU GEBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6330, city_id: 8202, name: 'PATANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6331, city_id: 8202, name: 'PATANI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6332, city_id: 8202, name: 'PATANI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6333, city_id: 8202, name: 'PATANI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6334, city_id: 8203, name: 'SULA BESI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6335, city_id: 8203, name: 'SULABESI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6336, city_id: 8203, name: 'SANANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6337, city_id: 8203, name: 'SULA BESI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6338, city_id: 8203, name: 'SULABESI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6339, city_id: 8203, name: 'SANANA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6340, city_id: 8203, name: 'MANGOLI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6341, city_id: 8203, name: 'MANGOLI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6342, city_id: 8203, name: 'MANGOLI UTARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6343, city_id: 8203, name: 'MANGOLI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6344, city_id: 8203, name: 'MANGOLI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6345, city_id: 8203, name: 'MANGOLI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6346, city_id: 8204, name: 'OBI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6347, city_id: 8204, name: 'OBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6348, city_id: 8204, name: 'OBI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6349, city_id: 8204, name: 'OBI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6350, city_id: 8204, name: 'OBI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6351, city_id: 8204, name: 'BACAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6352, city_id: 8204, name: 'MANDIOLI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6353, city_id: 8204, name: 'MANDIOLI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6354, city_id: 8204, name: 'BACAN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6355, city_id: 8204, name: 'BATANG LOMANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6356, city_id: 8204, name: 'BACAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6357, city_id: 8204, name: 'BACAN TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6358, city_id: 8204, name: 'BACAN TIMUR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6359, city_id: 8204, name: 'BACAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6360, city_id: 8204, name: 'KASIRUTA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6361, city_id: 8204, name: 'KASIRUTA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6362, city_id: 8204, name: 'BACAN BARAT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6363, city_id: 8204, name: 'KAYOA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6364, city_id: 8204, name: 'KAYOA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6365, city_id: 8204, name: 'KAYOA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6366, city_id: 8204, name: 'KAYOA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6367, city_id: 8204, name: 'PULAU MAKIAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6368, city_id: 8204, name: 'MAKIAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6369, city_id: 8204, name: 'GANE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6370, city_id: 8204, name: 'GANE BARAT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6371, city_id: 8204, name: 'GANE BARAT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6372, city_id: 8204, name: 'KEPULAUAN JORONGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6373, city_id: 8204, name: 'GANE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6374, city_id: 8204, name: 'GANE TIMUR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6375, city_id: 8204, name: 'GANE TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6376, city_id: 8205, name: 'MALIFUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6377, city_id: 8205, name: 'KAO TELUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6378, city_id: 8205, name: 'KAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6379, city_id: 8205, name: 'KAO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6380, city_id: 8205, name: 'KAO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6381, city_id: 8205, name: 'TOBELO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6382, city_id: 8205, name: 'TOBELO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6383, city_id: 8205, name: 'TOBELO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6384, city_id: 8205, name: 'TOBELO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6385, city_id: 8205, name: 'TOBELO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6386, city_id: 8205, name: 'TOBELO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6387, city_id: 8205, name: 'GALELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6388, city_id: 8205, name: 'GALELA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6389, city_id: 8205, name: 'GALELA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6390, city_id: 8205, name: 'GALELA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6391, city_id: 8205, name: 'LOLODA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6392, city_id: 8205, name: 'LOLODA KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6393, city_id: 8206, name: 'MABA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6394, city_id: 8206, name: 'KOTA MABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6395, city_id: 8206, name: 'WASILE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6396, city_id: 8206, name: 'WASILE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6397, city_id: 8206, name: 'WASILE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6398, city_id: 8206, name: 'WASILE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6399, city_id: 8206, name: 'WASILE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6400, city_id: 8206, name: 'MABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6401, city_id: 8206, name: 'MABA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6402, city_id: 8206, name: 'MABA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6403, city_id: 8207, name: 'MOROTAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6404, city_id: 8207, name: 'MOROTAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6405, city_id: 8207, name: 'MOROTAI SELATAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6406, city_id: 8207, name: 'MOROTAI JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6407, city_id: 8207, name: 'MOROTAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6408, city_id: 8208, name: 'TALIABU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6409, city_id: 8208, name: 'TALIABU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6410, city_id: 8208, name: 'TABONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6411, city_id: 8208, name: 'TALIABU TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6412, city_id: 8208, name: 'TALIABU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6413, city_id: 8208, name: 'TALIABU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6414, city_id: 8208, name: 'LEDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6415, city_id: 8208, name: 'TALIABU BARAT LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6416, city_id: 8271, name: 'PULAU TERNATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6417, city_id: 8271, name: 'MOTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6418, city_id: 8271, name: 'PULAU BATANG DUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6419, city_id: 8271, name: 'PULAU HIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6420, city_id: 8271, name: 'TERNATE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6421, city_id: 8271, name: 'TERNATE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6422, city_id: 8271, name: 'TERNATE TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6423, city_id: 8271, name: 'TERNATE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6424, city_id: 8272, name: 'TIDORE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6425, city_id: 8272, name: 'TIDORE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6426, city_id: 8272, name: 'TIDORE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6427, city_id: 8272, name: 'TIDORE TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6428, city_id: 8272, name: 'OBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6429, city_id: 8272, name: 'OBA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6430, city_id: 8272, name: 'OBA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6431, city_id: 8272, name: 'OBA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6432, city_id: 9101, name: 'FAKFAK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6433, city_id: 9101, name: 'KARAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6434, city_id: 9101, name: 'FAKFAK TIMUR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6435, city_id: 9101, name: 'FAKFAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6436, city_id: 9101, name: 'FAKFAK TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6437, city_id: 9101, name: 'PARIWARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6438, city_id: 9101, name: 'FAKFAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6439, city_id: 9101, name: 'WARTUTIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6440, city_id: 9101, name: 'KOKAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6441, city_id: 9101, name: 'TELUK PATIPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6442, city_id: 9101, name: 'KRAMONGMONGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6443, city_id: 9101, name: 'BOMBERAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6444, city_id: 9101, name: 'ARGUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6445, city_id: 9101, name: 'MBAHAMDANDARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6446, city_id: 9101, name: 'FURWAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6447, city_id: 9101, name: 'KAYAUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6448, city_id: 9101, name: 'TOMAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6449, city_id: 9102, name: 'BURUWAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6450, city_id: 9102, name: 'TELUK ARGUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6451, city_id: 9102, name: 'TELUK ARGUNI BAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6452, city_id: 9102, name: 'KAIMANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6453, city_id: 9102, name: 'KAMBRAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6454, city_id: 9102, name: 'TELUK ETNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6455, city_id: 9102, name: 'YAMOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6456, city_id: 9103, name: 'NAIKERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6457, city_id: 9103, name: 'WONDIBOY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6458, city_id: 9103, name: 'RASIEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6459, city_id: 9103, name: 'KURI WAMESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6460, city_id: 9103, name: 'WASIOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6461, city_id: 9103, name: 'DUAIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6462, city_id: 9103, name: 'ROON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6463, city_id: 9103, name: 'WINDESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6464, city_id: 9103, name: 'NIKIWAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6465, city_id: 9103, name: 'WAMESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6466, city_id: 9103, name: 'ROSWAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6467, city_id: 9103, name: 'RUMBERPON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6468, city_id: 9103, name: 'SOUG JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6469, city_id: 9104, name: 'FAFURWAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6470, city_id: 9104, name: 'BABO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6471, city_id: 9104, name: 'SUMURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6472, city_id: 9104, name: 'AROBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6473, city_id: 9104, name: 'KAITARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6474, city_id: 9104, name: 'KURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6475, city_id: 9104, name: 'WAMESA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6476, city_id: 9104, name: 'BINTUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6477, city_id: 9104, name: 'MANIMERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6478, city_id: 9104, name: 'TUHIBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6479, city_id: 9104, name: 'DATARAN BEIMES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6480, city_id: 9104, name: 'TEMBUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6481, city_id: 9104, name: 'ARANDAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6482, city_id: 9104, name: 'KAMUNDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6483, city_id: 9104, name: 'TOMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6484, city_id: 9104, name: 'WERIAGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6485, city_id: 9104, name: 'MOSKONA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6486, city_id: 9104, name: 'MEYADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6487, city_id: 9104, name: 'MOSKONA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6488, city_id: 9104, name: 'MERDEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6489, city_id: 9104, name: 'BISCOOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6490, city_id: 9104, name: 'MASYETA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6491, city_id: 9104, name: 'MOSKONA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6492, city_id: 9104, name: 'MOSKONA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6493, city_id: 9105, name: 'WARMARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6494, city_id: 9105, name: 'PRAFI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6495, city_id: 9105, name: 'MANOKWARI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6496, city_id: 9105, name: 'MANOKWARI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6497, city_id: 9105, name: 'MANOKWARI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6498, city_id: 9105, name: 'MANOKWARI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6499, city_id: 9105, name: 'TANAH RUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6500, city_id: 9105, name: 'MASNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6501, city_id: 9105, name: 'SIDEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6502, city_id: 9106, name: 'INANWATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6503, city_id: 9106, name: 'METEMANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6504, city_id: 9106, name: 'KOKODA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6505, city_id: 9106, name: 'KAIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6506, city_id: 9106, name: 'KOKODA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6507, city_id: 9106, name: 'KAIS DARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6508, city_id: 9106, name: 'MOSWAREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6509, city_id: 9106, name: 'TEMINABUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6510, city_id: 9106, name: 'SEREMUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6511, city_id: 9106, name: 'WAYER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6512, city_id: 9106, name: 'KONDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6513, city_id: 9106, name: 'SAIFI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6514, city_id: 9106, name: 'SAWIAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6515, city_id: 9106, name: 'FOKOUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6516, city_id: 9106, name: 'SALKMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6517, city_id: 9107, name: 'KLASO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6518, city_id: 9107, name: 'SAENGKEDUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6519, city_id: 9107, name: 'MAKBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6520, city_id: 9107, name: 'KLAYILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6521, city_id: 9107, name: 'BERAUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6522, city_id: 9107, name: 'KLAMONO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6523, city_id: 9107, name: 'KLABOT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6524, city_id: 9107, name: 'KLAWAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6525, city_id: 9107, name: 'BAGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6526, city_id: 9107, name: 'KLASAFET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6527, city_id: 9107, name: 'MALABOTOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6528, city_id: 9107, name: 'BOTAIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6529, city_id: 9107, name: 'KONHIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6530, city_id: 9107, name: 'SALAWATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6531, city_id: 9107, name: 'MAYAMUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6532, city_id: 9107, name: 'SALAWATI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6533, city_id: 9107, name: 'HOBARD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6534, city_id: 9107, name: 'BUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6535, city_id: 9107, name: 'SEGET', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6536, city_id: 9107, name: 'SEGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6537, city_id: 9107, name: 'SALAWATI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6538, city_id: 9107, name: 'SALAWATI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6539, city_id: 9107, name: 'AIMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6540, city_id: 9107, name: 'MARIAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6541, city_id: 9107, name: 'SORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6542, city_id: 9107, name: 'SAYOSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6543, city_id: 9107, name: 'MAUDUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6544, city_id: 9107, name: 'WEMAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6545, city_id: 9107, name: 'SAYOSA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6546, city_id: 9107, name: 'SUNOOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6547, city_id: 9108, name: 'MISOOL SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6548, city_id: 9108, name: 'MISOOL BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6549, city_id: 9108, name: 'MISOOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6550, city_id: 9108, name: 'KOFIAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6551, city_id: 9108, name: 'MISOOL TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6552, city_id: 9108, name: 'KEPULAUAN SEMBILAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6553, city_id: 9108, name: 'SALAWATI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6554, city_id: 9108, name: 'SALAWATI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6555, city_id: 9108, name: 'SALAWATI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6556, city_id: 9108, name: 'BATANTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6557, city_id: 9108, name: 'BATANTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6558, city_id: 9108, name: 'WAIGEO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6559, city_id: 9108, name: 'TELUK MAYALIBIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6560, city_id: 9108, name: 'MEOS MANSAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6561, city_id: 9108, name: 'KOTA WAISAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6562, city_id: 9108, name: 'TIPLOL MAYALIBIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6563, city_id: 9108, name: 'WAIGEO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6564, city_id: 9108, name: 'WAIGEO BARAT KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6565, city_id: 9108, name: 'WAIGEO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6566, city_id: 9108, name: 'WARWARBOMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6567, city_id: 9108, name: 'SUPNIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6568, city_id: 9108, name: 'KEPULAUAN AYAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6569, city_id: 9108, name: 'AYAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6570, city_id: 9108, name: 'WAIGEO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6571, city_id: 9109, name: 'FEF', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6572, city_id: 9109, name: 'SYUJAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6573, city_id: 9109, name: 'ASES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6574, city_id: 9109, name: 'TINGGOUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6575, city_id: 9109, name: 'MIYAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6576, city_id: 9109, name: 'MIYAH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6577, city_id: 9109, name: 'IRERES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6578, city_id: 9109, name: 'WILHEM ROUMBOUTS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6579, city_id: 9109, name: 'ABUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6580, city_id: 9109, name: 'KWOOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6581, city_id: 9109, name: 'TOBOUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6582, city_id: 9109, name: 'KWESEFO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6583, city_id: 9109, name: 'SAUSAPOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6584, city_id: 9109, name: 'BIKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6585, city_id: 9109, name: 'YEMBUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6586, city_id: 9109, name: 'BAMUSBAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6587, city_id: 9109, name: 'KEBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6588, city_id: 9109, name: 'KEBAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6589, city_id: 9109, name: 'KEBAR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6590, city_id: 9109, name: 'MANEKAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6591, city_id: 9109, name: 'SENOPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6592, city_id: 9109, name: 'MAWABUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6593, city_id: 9109, name: 'AMBERBAKEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6594, city_id: 9109, name: 'MPUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6595, city_id: 9109, name: 'AMBERBAKEN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6596, city_id: 9109, name: 'MUBARNI / ARFU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6597, city_id: 9109, name: 'MORAID', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6598, city_id: 9109, name: 'SELEMKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6599, city_id: 9110, name: 'AITINYO BARAT/ATHABU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6600, city_id: 9110, name: 'AYAMARU SELATAN JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6601, city_id: 9110, name: 'AITINYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6602, city_id: 9110, name: 'AITINYO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6603, city_id: 9110, name: 'AIFAT SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6604, city_id: 9110, name: 'AIFAT TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6605, city_id: 9110, name: 'AIFAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6606, city_id: 9110, name: 'AITINYO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6607, city_id: 9110, name: 'AITINYO RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6608, city_id: 9110, name: 'AYAMARU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6609, city_id: 9110, name: 'AYAMARU TIMUR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6610, city_id: 9110, name: 'AYAMARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6611, city_id: 9110, name: 'AYAMARU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6612, city_id: 9110, name: 'AYAMARU JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6613, city_id: 9110, name: 'AYAMARU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6614, city_id: 9110, name: 'AYAMARU BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6615, city_id: 9110, name: 'AYAMARU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6616, city_id: 9110, name: 'AYAMARU UTARA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6617, city_id: 9110, name: 'MARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6618, city_id: 9110, name: 'MARE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6619, city_id: 9110, name: 'AIFAT UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6620, city_id: 9110, name: 'AIFAT TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6621, city_id: 9110, name: 'AIFAT TIMUR TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6622, city_id: 9110, name: 'AIFAT TIMUR JAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6623, city_id: 9111, name: 'TAHOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6624, city_id: 9111, name: 'DATARAN ISIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6625, city_id: 9111, name: 'NENEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6626, city_id: 9111, name: 'MOMI WAREN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6627, city_id: 9111, name: 'RANSIKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6628, city_id: 9111, name: 'ORANSBARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6629, city_id: 9112, name: 'DIDOHU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6630, city_id: 9112, name: 'SURUREY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6631, city_id: 9112, name: 'ANGGI GIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6632, city_id: 9112, name: 'MEMBEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6633, city_id: 9112, name: 'ANGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6634, city_id: 9112, name: 'TAIGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6635, city_id: 9112, name: 'HINGK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6636, city_id: 9112, name: 'MENYAMBOUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6637, city_id: 9112, name: 'CATUBOUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6638, city_id: 9112, name: 'TESTEGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6639, city_id: 9171, name: 'SORONG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6640, city_id: 9171, name: 'SORONG KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6641, city_id: 9171, name: 'MALADUM MES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6642, city_id: 9171, name: 'SORONG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6643, city_id: 9171, name: 'SORONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6644, city_id: 9171, name: 'SORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6645, city_id: 9171, name: 'SORONG MANOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6646, city_id: 9171, name: 'KLAURUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6647, city_id: 9171, name: 'MALAIMSIMSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6648, city_id: 9171, name: 'SORONG KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6649, city_id: 9401, name: 'KIMAAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6650, city_id: 9401, name: 'WAAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6651, city_id: 9401, name: 'TABONJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6652, city_id: 9401, name: 'ILWAYAB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6653, city_id: 9401, name: 'OKABA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6654, city_id: 9401, name: 'TUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6655, city_id: 9401, name: 'NGGUTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6656, city_id: 9401, name: 'KAPTEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6657, city_id: 9401, name: 'KURIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6658, city_id: 9401, name: 'MALIND', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6659, city_id: 9401, name: 'ANIMHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6660, city_id: 9401, name: 'MERAUKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6661, city_id: 9401, name: 'SEMANGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6662, city_id: 9401, name: 'TANAH MIRING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6663, city_id: 9401, name: 'JAGEBOB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6664, city_id: 9401, name: 'SOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6665, city_id: 9401, name: 'NAUKENJERAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6666, city_id: 9401, name: 'MUTING', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6667, city_id: 9401, name: 'ELIGOBEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6668, city_id: 9401, name: 'ULILIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6669, city_id: 9402, name: 'WAMENA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6670, city_id: 9402, name: 'ASOLOKOBAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6671, city_id: 9402, name: 'WALELAGAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6672, city_id: 9402, name: 'TRIKORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6673, city_id: 9402, name: 'NAPUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6674, city_id: 9402, name: 'WALAIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6675, city_id: 9402, name: 'WOUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6676, city_id: 9402, name: 'WALESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6677, city_id: 9402, name: 'ASOTIPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6678, city_id: 9402, name: 'MAIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6679, city_id: 9402, name: 'HUBIKOSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6680, city_id: 9402, name: 'PELEBAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6681, city_id: 9402, name: 'IBELE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6682, city_id: 9402, name: 'TAILAREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6683, city_id: 9402, name: 'HUBIKIAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6684, city_id: 9402, name: 'ASOLOGAIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6685, city_id: 9402, name: 'MUSATFAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6686, city_id: 9402, name: 'SILO KARNO DOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6687, city_id: 9402, name: 'PYRAMID', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6688, city_id: 9402, name: 'MULIAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6689, city_id: 9402, name: 'WAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6690, city_id: 9402, name: 'KURULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6691, city_id: 9402, name: 'USILIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6692, city_id: 9402, name: 'WITA WAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6693, city_id: 9402, name: 'LIBAREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6694, city_id: 9402, name: 'WADANGKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6695, city_id: 9402, name: 'PISUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6696, city_id: 9402, name: 'BOLAKME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6697, city_id: 9402, name: 'WOLLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6698, city_id: 9402, name: 'YALENGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6699, city_id: 9402, name: 'TAGIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6700, city_id: 9402, name: 'MOLAGALOME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6701, city_id: 9402, name: 'TAGINERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6702, city_id: 9402, name: 'BUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6703, city_id: 9402, name: 'BPIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6704, city_id: 9402, name: 'KORAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6705, city_id: 9402, name: 'ITLAY HASIGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6706, city_id: 9402, name: 'SIEPKOSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6707, city_id: 9402, name: 'POPUGOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6708, city_id: 9403, name: 'KAUREH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6709, city_id: 9403, name: 'AIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6710, city_id: 9403, name: 'YAPSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6711, city_id: 9403, name: 'KEMTUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6712, city_id: 9403, name: 'KEMTUK GRESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6713, city_id: 9403, name: 'GRESI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6714, city_id: 9403, name: 'NIMBORAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6715, city_id: 9403, name: 'NIMBORAN TIMUR / NAMBLONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6716, city_id: 9403, name: 'NIMBOKRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6717, city_id: 9403, name: 'UNURUM GUAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6718, city_id: 9403, name: 'DEMTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6719, city_id: 9403, name: 'YOKARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6720, city_id: 9403, name: 'DEPAPRE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6721, city_id: 9403, name: 'RAVENIRARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6722, city_id: 9403, name: 'SENTANI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6723, city_id: 9403, name: 'WAIBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6724, city_id: 9403, name: 'SENTANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6725, city_id: 9403, name: 'EBUNGFAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6726, city_id: 9403, name: 'SENTANI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6727, city_id: 9404, name: 'UWAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6728, city_id: 9404, name: 'MENOU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6729, city_id: 9404, name: 'DIPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6730, city_id: 9404, name: 'YAUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6731, city_id: 9404, name: 'TELUK UMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6732, city_id: 9404, name: 'WANGGAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6733, city_id: 9404, name: 'NABIRE BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6734, city_id: 9404, name: 'NABIRE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6735, city_id: 9404, name: 'TELUK KIMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6736, city_id: 9404, name: 'NAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6737, city_id: 9404, name: 'MAKIMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6738, city_id: 9404, name: 'WAPOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6739, city_id: 9404, name: 'KEPULAUAN MOORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6740, city_id: 9404, name: 'SIRIWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6741, city_id: 9404, name: 'YARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6742, city_id: 9408, name: 'YAPEN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6743, city_id: 9408, name: 'PANTURA YAPEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6744, city_id: 9408, name: 'TELUK AMPIMOI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6745, city_id: 9408, name: 'RAIMBAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6746, city_id: 9408, name: 'PULAU KURUDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6747, city_id: 9408, name: 'ANGKAISERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6748, city_id: 9408, name: 'KEP. AMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6749, city_id: 9408, name: 'YAWAKUKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6750, city_id: 9408, name: 'YAPEN SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6751, city_id: 9408, name: 'KOSIWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6752, city_id: 9408, name: 'ANATAUREI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6753, city_id: 9408, name: 'YAPEN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6754, city_id: 9408, name: 'WONAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6755, city_id: 9408, name: 'PULAU YERUI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6756, city_id: 9408, name: 'POOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6757, city_id: 9408, name: 'WINDESI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6758, city_id: 9409, name: 'NUMFOR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6759, city_id: 9409, name: 'ORKERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6760, city_id: 9409, name: 'NUMFOR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6761, city_id: 9409, name: 'BRUYADORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6762, city_id: 9409, name: 'POIRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6763, city_id: 9409, name: 'PADAIDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6764, city_id: 9409, name: 'AIMANDO PADAIDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6765, city_id: 9409, name: 'BIAK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6766, city_id: 9409, name: 'ORIDEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6767, city_id: 9409, name: 'BIAK KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6768, city_id: 9409, name: 'SAMOFA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6769, city_id: 9409, name: 'YENDIDORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6770, city_id: 9409, name: 'BIAK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6771, city_id: 9409, name: 'ANDEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6772, city_id: 9409, name: 'WARSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6773, city_id: 9409, name: 'YAWOSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6774, city_id: 9409, name: 'BONDIFUAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6775, city_id: 9409, name: 'BIAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6776, city_id: 9409, name: 'SWANDIWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6777, city_id: 9410, name: 'PANIAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6778, city_id: 9410, name: 'YATAMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6779, city_id: 9410, name: 'KEBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6780, city_id: 9410, name: 'PUGO DAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6781, city_id: 9410, name: 'WEGE MUKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6782, city_id: 9410, name: 'WEGEE BINO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6783, city_id: 9410, name: 'YAGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6784, city_id: 9410, name: 'BIBIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6785, city_id: 9410, name: 'DUMADAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6786, city_id: 9410, name: 'ARADIDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6787, city_id: 9410, name: 'EKADIDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6788, city_id: 9410, name: 'AWEIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6789, city_id: 9410, name: 'FAJAR TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6790, city_id: 9410, name: 'TOPIYAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6791, city_id: 9410, name: 'PANIAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6792, city_id: 9410, name: 'SIRIWO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6793, city_id: 9410, name: 'MUYE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6794, city_id: 9410, name: 'NAKAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6795, city_id: 9410, name: 'TELUK DEYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6796, city_id: 9410, name: 'BOGOBAIDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6797, city_id: 9411, name: 'FAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6798, city_id: 9411, name: 'DAGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6799, city_id: 9411, name: 'KIYAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6800, city_id: 9411, name: 'MULIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6801, city_id: 9411, name: 'YAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6802, city_id: 9411, name: 'ILAMBURAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6803, city_id: 9411, name: 'MUARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6804, city_id: 9411, name: 'PAGALEME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6805, city_id: 9411, name: 'GURAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6806, city_id: 9411, name: 'IRIMULI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6807, city_id: 9411, name: 'ILU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6808, city_id: 9411, name: 'TORERE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6809, city_id: 9411, name: 'YAMONERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6810, city_id: 9411, name: 'WAEGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6811, city_id: 9411, name: 'NUME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6812, city_id: 9411, name: 'NIOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6813, city_id: 9411, name: 'GUBUME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6814, city_id: 9411, name: 'TAGANOMBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6815, city_id: 9411, name: 'TINGGINAMBUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6816, city_id: 9411, name: 'KALOME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6817, city_id: 9411, name: 'WANWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6818, city_id: 9411, name: 'MEWOLUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6819, city_id: 9411, name: 'LUMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6820, city_id: 9411, name: 'MOLANIKIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6821, city_id: 9411, name: 'YAMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6822, city_id: 9411, name: 'DOKOME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6823, city_id: 9412, name: 'MIMIKA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6824, city_id: 9412, name: 'MIMIKA BARAT JAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6825, city_id: 9412, name: 'MIMIKA BARAT TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6826, city_id: 9412, name: 'AMAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6827, city_id: 9412, name: 'MIMIKA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6828, city_id: 9412, name: 'MIMIKA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6829, city_id: 9412, name: 'MIMIKA TIMUR JAUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6830, city_id: 9412, name: 'MIMIKA BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6831, city_id: 9412, name: 'KUALA KENCANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6832, city_id: 9412, name: 'TEMBAGAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6833, city_id: 9412, name: 'WANIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6834, city_id: 9412, name: 'IWAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6835, city_id: 9412, name: 'KWAMKI NARAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6836, city_id: 9412, name: 'AGIMUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6837, city_id: 9412, name: 'JILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6838, city_id: 9412, name: 'JITA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6839, city_id: 9412, name: 'ALAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6840, city_id: 9412, name: 'HOYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6841, city_id: 9413, name: 'JAIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6842, city_id: 9413, name: 'SUBUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6843, city_id: 9413, name: 'KIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6844, city_id: 9413, name: 'MINDIPTANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6845, city_id: 9413, name: 'INIYANDIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6846, city_id: 9413, name: 'KOMBUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6847, city_id: 9413, name: 'SESNUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6848, city_id: 9413, name: 'MANDOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6849, city_id: 9413, name: 'FOFI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6850, city_id: 9413, name: 'ARIMOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6851, city_id: 9413, name: 'KOUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6852, city_id: 9413, name: 'BOMAKIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6853, city_id: 9413, name: 'FIRIWAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6854, city_id: 9413, name: 'MANGGELUM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6855, city_id: 9413, name: 'YANIRUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6856, city_id: 9413, name: 'KAWAGIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6857, city_id: 9413, name: 'KOMBAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6858, city_id: 9413, name: 'WAROPKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6859, city_id: 9413, name: 'AMBATKWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6860, city_id: 9413, name: 'NINATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6861, city_id: 9414, name: 'NAMBIOMAN BAPAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6862, city_id: 9414, name: 'MINYAMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6863, city_id: 9414, name: 'EDERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6864, city_id: 9414, name: 'VENAHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6865, city_id: 9414, name: 'SYAHCAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6866, city_id: 9414, name: 'BAMGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6867, city_id: 9414, name: 'YAKOMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6868, city_id: 9414, name: 'OBAA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6869, city_id: 9414, name: 'PASSUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6870, city_id: 9414, name: 'HAJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6871, city_id: 9414, name: 'ASSUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6872, city_id: 9414, name: 'CITAKMITAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6873, city_id: 9414, name: 'KAIBAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6874, city_id: 9414, name: 'PASSUE BAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6875, city_id: 9414, name: 'TI-ZAIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6876, city_id: 9415, name: 'PANTAI KASUARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6877, city_id: 9415, name: 'KOPAY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6878, city_id: 9415, name: 'DER KOUMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6879, city_id: 9415, name: 'SAFAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6880, city_id: 9415, name: 'AWYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6881, city_id: 9415, name: 'FAYIT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6882, city_id: 9415, name: 'ASWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6883, city_id: 9415, name: 'ATSY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6884, city_id: 9415, name: 'SIRETS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6885, city_id: 9415, name: 'AYIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6886, city_id: 9415, name: 'BECTBAMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6887, city_id: 9415, name: 'SUATOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6888, city_id: 9415, name: 'KOLF BRAZA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6889, city_id: 9415, name: 'JOUTU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6890, city_id: 9415, name: 'KOROWAY BULUANOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6891, city_id: 9415, name: 'AKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6892, city_id: 9415, name: 'JETSY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6893, city_id: 9415, name: 'AGATS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6894, city_id: 9415, name: 'SAWA ERMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6895, city_id: 9415, name: 'SURU-SURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6896, city_id: 9415, name: 'UNIR SIRAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6897, city_id: 9415, name: 'JOERAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6898, city_id: 9415, name: 'PULAU TIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6899, city_id: 9416, name: 'KURIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6900, city_id: 9416, name: 'MUSAIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6901, city_id: 9416, name: 'DEKAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6902, city_id: 9416, name: 'OBIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6903, city_id: 9416, name: 'PASEMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6904, city_id: 9416, name: 'AMUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6905, city_id: 9416, name: 'SURU-SURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6906, city_id: 9416, name: 'WUSAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6907, city_id: 9416, name: 'SILIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6908, city_id: 9416, name: 'NINIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6909, city_id: 9416, name: 'HOLUWON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6910, city_id: 9416, name: 'LOLAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6911, city_id: 9416, name: 'LANGDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6912, city_id: 9416, name: 'BOMELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6913, city_id: 9416, name: 'SUNTAMON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6914, city_id: 9416, name: 'SOBAHAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6915, city_id: 9416, name: 'KORUPUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6916, city_id: 9416, name: 'SELA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6917, city_id: 9416, name: 'KWELAMDUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6918, city_id: 9416, name: 'ANGGRUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6919, city_id: 9416, name: 'PANGGEMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6920, city_id: 9416, name: 'WALMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6921, city_id: 9416, name: 'KOSAREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6922, city_id: 9416, name: 'UBAHAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6923, city_id: 9416, name: 'NALCA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6924, city_id: 9416, name: 'PULDAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6925, city_id: 9416, name: 'NIPSAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6926, city_id: 9416, name: 'SAMENAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6927, city_id: 9416, name: 'TANGMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6928, city_id: 9416, name: 'SOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6929, city_id: 9416, name: 'MUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6930, city_id: 9416, name: 'YOGOSEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6931, city_id: 9416, name: 'KAYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6932, city_id: 9416, name: 'SUMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6933, city_id: 9416, name: 'HOGIO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6934, city_id: 9416, name: 'UKHA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6935, city_id: 9416, name: 'WERIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6936, city_id: 9416, name: 'SOLOIKMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6937, city_id: 9416, name: 'SERADALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6938, city_id: 9416, name: 'KABIANGGAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6939, city_id: 9416, name: 'KWIKMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6940, city_id: 9416, name: 'HILIPUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6941, city_id: 9416, name: 'YAHULIAMBUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6942, city_id: 9416, name: 'HEREAPINI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6943, city_id: 9416, name: 'UBALIHI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6944, city_id: 9416, name: 'TALAMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6945, city_id: 9416, name: 'PRONGGOLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6946, city_id: 9416, name: 'ENDOMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6947, city_id: 9416, name: 'KONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6948, city_id: 9416, name: 'DURAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6949, city_id: 9416, name: 'DIRWEMNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6950, city_id: 9417, name: 'IWUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6951, city_id: 9417, name: 'KAWOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6952, city_id: 9417, name: 'TARUP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6953, city_id: 9417, name: 'AWINBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6954, city_id: 9417, name: 'OKSIBIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6955, city_id: 9417, name: 'PEPERA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6956, city_id: 9417, name: 'ALEMSOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6957, city_id: 9417, name: 'SERAMBAKON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6958, city_id: 9417, name: 'KOLOMDOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6959, city_id: 9417, name: 'OKSOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6960, city_id: 9417, name: 'OK BAPE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6961, city_id: 9417, name: 'OK AON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6962, city_id: 9417, name: 'BORME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6963, city_id: 9417, name: 'BIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6964, city_id: 9417, name: 'EPUMEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6965, city_id: 9417, name: 'WEIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6966, city_id: 9417, name: 'PAMEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6967, city_id: 9417, name: 'NONGME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6968, city_id: 9417, name: 'BATANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6969, city_id: 9417, name: 'OKBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6970, city_id: 9417, name: 'ABOY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6971, city_id: 9417, name: 'OKBAB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6972, city_id: 9417, name: 'TEIRAPLU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6973, city_id: 9417, name: 'YEFTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6974, city_id: 9417, name: 'KIWIROK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6975, city_id: 9417, name: 'KIWIROK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6976, city_id: 9417, name: 'OKSEBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6977, city_id: 9417, name: 'OKHIKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6978, city_id: 9417, name: 'OKLIP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6979, city_id: 9417, name: 'OKSAMOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6980, city_id: 9417, name: 'OKBEMTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6981, city_id: 9417, name: 'BATOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6982, city_id: 9417, name: 'MURKIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6983, city_id: 9417, name: 'MOFINOP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6984, city_id: 9418, name: 'KANGGIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6985, city_id: 9418, name: 'WONIKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6986, city_id: 9418, name: 'NABUNAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6987, city_id: 9418, name: 'GILUBANDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6988, city_id: 9418, name: 'WAKUO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6989, city_id: 9418, name: 'AWEKU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6990, city_id: 9418, name: 'BOGONUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6991, city_id: 9418, name: 'KARUBAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6992, city_id: 9418, name: 'GOYAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6993, city_id: 9418, name: 'WUNIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6994, city_id: 9418, name: 'KONDAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6995, city_id: 9418, name: 'NELAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6996, city_id: 9418, name: 'KUARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6997, city_id: 9418, name: 'LIANOGOMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6998, city_id: 9418, name: 'BIUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6999, city_id: 9418, name: 'BOKONDINI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7000, city_id: 9418, name: 'BOKONERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7001, city_id: 9418, name: 'BEWANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7002, city_id: 9418, name: 'KEMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7003, city_id: 9418, name: 'WINA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7004, city_id: 9418, name: 'UMAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7005, city_id: 9418, name: 'PANAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7006, city_id: 9418, name: 'POGANERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7007, city_id: 9418, name: 'KAMBONERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7008, city_id: 9418, name: 'AIR GARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7009, city_id: 9418, name: 'DOW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7010, city_id: 9418, name: 'WARI / TAIYEVE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7011, city_id: 9418, name: 'EGIAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7012, city_id: 9418, name: 'NUNGGAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7013, city_id: 9418, name: 'KUBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7014, city_id: 9418, name: 'ANAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7015, city_id: 9418, name: 'WUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7016, city_id: 9418, name: 'GEYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7017, city_id: 9418, name: 'WENAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7018, city_id: 9418, name: 'NUMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7019, city_id: 9418, name: 'KAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7020, city_id: 9418, name: 'DUNDU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7021, city_id: 9418, name: 'GUNDAGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7022, city_id: 9418, name: 'TIMORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7023, city_id: 9418, name: 'YUNERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7024, city_id: 9418, name: 'TAGIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7025, city_id: 9418, name: 'DANIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7026, city_id: 9418, name: 'YUKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7027, city_id: 9418, name: 'TELENGGEME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7028, city_id: 9418, name: 'GIKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7029, city_id: 9418, name: 'TAGINERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7030, city_id: 9419, name: 'PANTAI TIMUR BAGIAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7031, city_id: 9419, name: 'PANTAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7032, city_id: 9419, name: 'SUNGAI BIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7033, city_id: 9419, name: 'VEEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7034, city_id: 9419, name: 'BONGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7035, city_id: 9419, name: 'BONGGO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7036, city_id: 9419, name: 'BONGGO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7037, city_id: 9419, name: 'TOR ATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7038, city_id: 9419, name: 'ISMARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7039, city_id: 9419, name: 'SARMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7040, city_id: 9419, name: 'SARMI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7041, city_id: 9419, name: 'SARMI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7042, city_id: 9419, name: 'SOBEY', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7043, city_id: 9419, name: 'MUARA TOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7044, city_id: 9419, name: 'VERKAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7045, city_id: 9419, name: 'PANTAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7046, city_id: 9419, name: 'APAWER HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7047, city_id: 9419, name: 'APAWER HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7048, city_id: 9419, name: 'APAWER TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7049, city_id: 9420, name: 'WEB', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7050, city_id: 9420, name: 'TOWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7051, city_id: 9420, name: 'YAFFI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7052, city_id: 9420, name: 'SENGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7053, city_id: 9420, name: 'KAISENAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7054, city_id: 9420, name: 'WARIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7055, city_id: 9420, name: 'ARSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7056, city_id: 9420, name: 'ARSO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7057, city_id: 9420, name: 'ARSO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7058, city_id: 9420, name: 'MANNEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7059, city_id: 9420, name: 'SKANTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7060, city_id: 9426, name: 'WAROPEN BAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7061, city_id: 9426, name: 'INGGERUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7062, city_id: 9426, name: 'UREI FAISEI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7063, city_id: 9426, name: 'OUDATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7064, city_id: 9426, name: 'WAPOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7065, city_id: 9426, name: 'MASIREI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7066, city_id: 9426, name: 'RISEI SAYATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7067, city_id: 9426, name: 'DEMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7068, city_id: 9426, name: 'SOYOI MAMBAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7069, city_id: 9426, name: 'WONTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7070, city_id: 9426, name: 'WALANI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7071, city_id: 9426, name: 'KIRIHI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7072, city_id: 9427, name: 'SUPIORI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7073, city_id: 9427, name: 'KEPULAUAN ARURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7074, city_id: 9427, name: 'SUPIORI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7075, city_id: 9427, name: 'SUPIORI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7076, city_id: 9427, name: 'SUPIORI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7077, city_id: 9428, name: 'WAROPEN ATAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7078, city_id: 9428, name: 'BENUKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7079, city_id: 9428, name: 'SAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7080, city_id: 9428, name: 'MAMBERAMO ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7081, city_id: 9428, name: 'MAMBERAMO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7082, city_id: 9428, name: 'IWASO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7083, city_id: 9428, name: 'MAMBERAMO TENGAH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7084, city_id: 9428, name: 'ROFAER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7085, city_id: 9428, name: 'MAMBERAMO ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7086, city_id: 9429, name: 'WOSAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7087, city_id: 9429, name: 'MOBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7088, city_id: 9429, name: 'PIJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7089, city_id: 9429, name: 'KORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7090, city_id: 9429, name: 'KENYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7091, city_id: 9429, name: 'MBUWA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7092, city_id: 9429, name: 'KREPKURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7093, city_id: 9429, name: 'EMBETPEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7094, city_id: 9429, name: 'GESELMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7095, city_id: 9429, name: 'KILMID', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7096, city_id: 9429, name: 'YENGGELO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7097, city_id: 9429, name: 'ALAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7098, city_id: 9429, name: 'MEBOROK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7099, city_id: 9429, name: 'MAPENDUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7100, city_id: 9429, name: 'KROPTAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7101, city_id: 9429, name: 'PARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7102, city_id: 9429, name: 'KEGAYEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7103, city_id: 9429, name: 'MUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7104, city_id: 9429, name: 'YAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7105, city_id: 9429, name: 'MAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7106, city_id: 9429, name: 'YIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7107, city_id: 9429, name: 'DAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7108, city_id: 9429, name: 'NIRKURI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7109, city_id: 9429, name: 'INIKGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7110, city_id: 9429, name: 'MBUWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7111, city_id: 9429, name: 'INIYE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7112, city_id: 9429, name: 'WUTPAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7113, city_id: 9429, name: 'NENGGEANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7114, city_id: 9429, name: 'MBULMU YALMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7115, city_id: 9429, name: 'GEAREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7116, city_id: 9429, name: 'PASIR PUTIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7117, city_id: 9429, name: 'WUSI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7118, city_id: 9430, name: 'MAKKI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7119, city_id: 9430, name: 'GUPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7120, city_id: 9430, name: 'KOLAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7121, city_id: 9430, name: 'GELOK BEAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7122, city_id: 9430, name: 'AWINA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7123, city_id: 9430, name: 'PIRIME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7124, city_id: 9430, name: 'BUGUK GONA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7125, city_id: 9430, name: 'MILIMBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7126, city_id: 9430, name: 'GOLLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7127, city_id: 9430, name: 'WIRINGGABUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7128, city_id: 9430, name: 'TIOM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7129, city_id: 9430, name: 'NOGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7130, city_id: 9430, name: 'MOKONI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7131, city_id: 9430, name: 'NINAME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7132, city_id: 9430, name: 'YIGINUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7133, city_id: 9430, name: 'TIOM OLLO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7134, city_id: 9430, name: 'YUGUNWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7135, city_id: 9430, name: 'LANNYNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7136, city_id: 9430, name: 'BALINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7137, city_id: 9430, name: 'BALINGGA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7138, city_id: 9430, name: 'BRUWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7139, city_id: 9430, name: 'AYUMNATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7140, city_id: 9430, name: 'KUYAWAGE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7141, city_id: 9430, name: 'WANO BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7142, city_id: 9430, name: 'MALAGAINERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7143, city_id: 9430, name: 'MELAGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7144, city_id: 9430, name: 'TIOMNERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7145, city_id: 9430, name: 'WEREKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7146, city_id: 9430, name: 'DIMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7147, city_id: 9430, name: 'KELULOME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7148, city_id: 9430, name: 'NIKOGWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7149, city_id: 9430, name: 'GAMELIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7150, city_id: 9430, name: 'KARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7151, city_id: 9430, name: 'YILUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7152, city_id: 9430, name: 'GUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7153, city_id: 9430, name: 'POGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7154, city_id: 9430, name: 'MUARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7155, city_id: 9431, name: 'KOBAKMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7156, city_id: 9431, name: 'ILUGWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7157, city_id: 9431, name: 'KELILA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7158, city_id: 9431, name: 'ERAGAYAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7159, city_id: 9431, name: 'MEGAMBILIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7160, city_id: 9432, name: 'WELAREK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7161, city_id: 9432, name: 'APALAPSILI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7162, city_id: 9432, name: 'ABENAHO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7163, city_id: 9432, name: 'ELELIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7164, city_id: 9432, name: 'BENAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7165, city_id: 9433, name: 'AGADUGUME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7166, city_id: 9433, name: 'LAMBEWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7167, city_id: 9433, name: 'ONERI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7168, city_id: 9433, name: 'GOME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7169, city_id: 9433, name: 'AMUNGKALPIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7170, city_id: 9433, name: 'GOME UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7171, city_id: 9433, name: 'ERELMAKAWIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7172, city_id: 9433, name: 'ILAGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7173, city_id: 9433, name: 'ILAGA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7174, city_id: 9433, name: 'MABUGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7175, city_id: 9433, name: 'OMUKIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7176, city_id: 9433, name: 'SINAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7177, city_id: 9433, name: 'SINAK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7178, city_id: 9433, name: 'MAGEÃBUME', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7179, city_id: 9433, name: 'YUGUMUAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7180, city_id: 9433, name: 'POGOMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7181, city_id: 9433, name: 'KEMBRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7182, city_id: 9433, name: 'BINA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7183, city_id: 9433, name: 'WANGBE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7184, city_id: 9433, name: 'OGAMANIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7185, city_id: 9433, name: 'BEOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7186, city_id: 9433, name: 'BEOGA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7187, city_id: 9433, name: 'BEOGA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7188, city_id: 9433, name: 'DOUFO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7189, city_id: 9433, name: 'DERVOS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7190, city_id: 9434, name: 'SUKIKAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7191, city_id: 9434, name: 'PIYAIYE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7192, city_id: 9434, name: 'MAPIA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7193, city_id: 9434, name: 'MAPIA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7194, city_id: 9434, name: 'MAPIA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7195, city_id: 9434, name: 'DOGIYAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7196, city_id: 9434, name: 'KAMU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7197, city_id: 9434, name: 'KAMU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7198, city_id: 9434, name: 'KAMU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7199, city_id: 9434, name: 'KAMU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7200, city_id: 9435, name: 'HOMEYO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7201, city_id: 9435, name: 'SUGAPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7202, city_id: 9435, name: 'HITADIPA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7203, city_id: 9435, name: 'AGISIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7204, city_id: 9435, name: 'BIANDOGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7205, city_id: 9435, name: 'WANDAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7206, city_id: 9436, name: 'KAPIRAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7207, city_id: 9436, name: 'TIGI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7208, city_id: 9436, name: 'TIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7209, city_id: 9436, name: 'TIGI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7210, city_id: 9436, name: 'BOWOBADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7211, city_id: 9471, name: 'MUARA TAMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7212, city_id: 9471, name: 'ABEPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7213, city_id: 9471, name: 'HERAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7214, city_id: 9471, name: 'JAYAPURA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7215, city_id: 9471, name: 'JAYAPURA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7216, city_id: 3176, name: 'Jakarta', created_at: new Date(), updated_at: new Date(),
      },

    ];
    await queryInterface.bulkInsert('districts', arrDistrict, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('districts', null, {});
  },
};
