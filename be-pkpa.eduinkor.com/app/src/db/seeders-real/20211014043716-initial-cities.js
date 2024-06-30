/* eslint-disable no-unused-vars */
let arrCity = [];
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
    arrCity = [
      {
        id: 1101, state_id: 11, name: 'KABUPATEN SIMEULUE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1102, state_id: 11, name: 'KABUPATEN ACEH SINGKIL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1103, state_id: 11, name: 'KABUPATEN ACEH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1104, state_id: 11, name: 'KABUPATEN ACEH TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1105, state_id: 11, name: 'KABUPATEN ACEH TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1106, state_id: 11, name: 'KABUPATEN ACEH TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1107, state_id: 11, name: 'KABUPATEN ACEH BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1108, state_id: 11, name: 'KABUPATEN ACEH BESAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1109, state_id: 11, name: 'KABUPATEN PIDIE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1110, state_id: 11, name: 'KABUPATEN BIREUEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1111, state_id: 11, name: 'KABUPATEN ACEH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1112, state_id: 11, name: 'KABUPATEN ACEH BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1113, state_id: 11, name: 'KABUPATEN GAYO LUES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1114, state_id: 11, name: 'KABUPATEN ACEH TAMIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1115, state_id: 11, name: 'KABUPATEN NAGAN RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1116, state_id: 11, name: 'KABUPATEN ACEH JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1117, state_id: 11, name: 'KABUPATEN BENER MERIAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1118, state_id: 11, name: 'KABUPATEN PIDIE JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1171, state_id: 11, name: 'KOTA BANDA ACEH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1172, state_id: 11, name: 'KOTA SABANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1173, state_id: 11, name: 'KOTA LANGSA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1174, state_id: 11, name: 'KOTA LHOKSEUMAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1175, state_id: 11, name: 'KOTA SUBULUSSALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1201, state_id: 12, name: 'KABUPATEN NIAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1202, state_id: 12, name: 'KABUPATEN MANDAILING NATAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1203, state_id: 12, name: 'KABUPATEN TAPANULI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1204, state_id: 12, name: 'KABUPATEN TAPANULI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1205, state_id: 12, name: 'KABUPATEN TAPANULI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1206, state_id: 12, name: 'KABUPATEN TOBA SAMOSIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1207, state_id: 12, name: 'KABUPATEN LABUHAN BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1208, state_id: 12, name: 'KABUPATEN ASAHAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1209, state_id: 12, name: 'KABUPATEN SIMALUNGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1210, state_id: 12, name: 'KABUPATEN DAIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1211, state_id: 12, name: 'KABUPATEN KARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1212, state_id: 12, name: 'KABUPATEN DELI SERDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1213, state_id: 12, name: 'KABUPATEN LANGKAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1214, state_id: 12, name: 'KABUPATEN NIAS SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1215, state_id: 12, name: 'KABUPATEN HUMBANG HASUNDUTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1216, state_id: 12, name: 'KABUPATEN PAKPAK BHARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1217, state_id: 12, name: 'KABUPATEN SAMOSIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1218, state_id: 12, name: 'KABUPATEN SERDANG BEDAGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1219, state_id: 12, name: 'KABUPATEN BATU BARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1220, state_id: 12, name: 'KABUPATEN PADANG LAWAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1221, state_id: 12, name: 'KABUPATEN PADANG LAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1222, state_id: 12, name: 'KABUPATEN LABUHAN BATU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1223, state_id: 12, name: 'KABUPATEN LABUHAN BATU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1224, state_id: 12, name: 'KABUPATEN NIAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1225, state_id: 12, name: 'KABUPATEN NIAS BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1271, state_id: 12, name: 'KOTA SIBOLGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1272, state_id: 12, name: 'KOTA TANJUNG BALAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1273, state_id: 12, name: 'KOTA PEMATANG SIANTAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1274, state_id: 12, name: 'KOTA TEBING TINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1275, state_id: 12, name: 'MEDAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1276, state_id: 12, name: 'KOTA BINJAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1277, state_id: 12, name: 'KOTA PADANGSIDIMPUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1278, state_id: 12, name: 'KOTA GUNUNGSITOLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1301, state_id: 13, name: 'KABUPATEN KEPULAUAN MENTAWAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1302, state_id: 13, name: 'KABUPATEN PESISIR SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1303, state_id: 13, name: 'KABUPATEN SOLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1304, state_id: 13, name: 'KABUPATEN SIJUNJUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1305, state_id: 13, name: 'KABUPATEN TANAH DATAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1306, state_id: 13, name: 'KABUPATEN PADANG PARIAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1307, state_id: 13, name: 'KABUPATEN AGAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1308, state_id: 13, name: 'KABUPATEN LIMA PULUH KOTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1309, state_id: 13, name: 'KABUPATEN PASAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1310, state_id: 13, name: 'KABUPATEN SOLOK SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1311, state_id: 13, name: 'KABUPATEN DHARMASRAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1312, state_id: 13, name: 'KABUPATEN PASAMAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1371, state_id: 13, name: 'PADANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1372, state_id: 13, name: 'KOTA SOLOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1373, state_id: 13, name: 'KOTA SAWAH LUNTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1374, state_id: 13, name: 'KOTA PADANG PANJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1375, state_id: 13, name: 'KOTA BUKITTINGGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1376, state_id: 13, name: 'KOTA PAYAKUMBUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1377, state_id: 13, name: 'KOTA PARIAMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1401, state_id: 14, name: 'KABUPATEN KUANTAN SINGINGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1402, state_id: 14, name: 'KABUPATEN INDRAGIRI HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1403, state_id: 14, name: 'KABUPATEN INDRAGIRI HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1404, state_id: 14, name: 'KABUPATEN PELALAWAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1405, state_id: 14, name: 'KABUPATEN SIAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1406, state_id: 14, name: 'KABUPATEN KAMPAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1407, state_id: 14, name: 'KABUPATEN ROKAN HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1408, state_id: 14, name: 'KABUPATEN BENGKALIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1409, state_id: 14, name: 'KABUPATEN ROKAN HILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1410, state_id: 14, name: 'KABUPATEN KEPULAUAN MERANTI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1471, state_id: 14, name: 'PEKANBARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1473, state_id: 14, name: 'KOTA DUMAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1501, state_id: 15, name: 'KABUPATEN KERINCI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1502, state_id: 15, name: 'KABUPATEN MERANGIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1503, state_id: 15, name: 'KABUPATEN SAROLANGUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1504, state_id: 15, name: 'KABUPATEN BATANG HARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1505, state_id: 15, name: 'KABUPATEN MUARO JAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1506, state_id: 15, name: 'KABUPATEN TANJUNG JABUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1507, state_id: 15, name: 'KABUPATEN TANJUNG JABUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1508, state_id: 15, name: 'KABUPATEN TEBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1509, state_id: 15, name: 'KABUPATEN BUNGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1571, state_id: 15, name: 'KOTA JAMBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1572, state_id: 15, name: 'KOTA SUNGAI PENUH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1601, state_id: 16, name: 'KABUPATEN OGAN KOMERING ULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1602, state_id: 16, name: 'KABUPATEN OGAN KOMERING ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1603, state_id: 16, name: 'KABUPATEN MUARA ENIM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1604, state_id: 16, name: 'KABUPATEN LAHAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1605, state_id: 16, name: 'KABUPATEN MUSI RAWAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1606, state_id: 16, name: 'KABUPATEN MUSI BANYUASIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1607, state_id: 16, name: 'KABUPATEN BANYU ASIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1608, state_id: 16, name: 'KABUPATEN OGAN KOMERING ULU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1609, state_id: 16, name: 'KABUPATEN OGAN KOMERING ULU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1610, state_id: 16, name: 'KABUPATEN OGAN ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1611, state_id: 16, name: 'KABUPATEN EMPAT LAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1612, state_id: 16, name: 'KABUPATEN PENUKAL ABAB LEMATANG ILIR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1613, state_id: 16, name: 'KABUPATEN MUSI RAWAS UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1671, state_id: 16, name: 'KOTA PALEMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1672, state_id: 16, name: 'KOTA PRABUMULIH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1673, state_id: 16, name: 'KOTA PAGAR ALAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1674, state_id: 16, name: 'KOTA LUBUKLINGGAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1701, state_id: 17, name: 'KABUPATEN BENGKULU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1702, state_id: 17, name: 'KABUPATEN REJANG LEBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1703, state_id: 17, name: 'KABUPATEN BENGKULU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1704, state_id: 17, name: 'KABUPATEN KAUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1705, state_id: 17, name: 'KABUPATEN SELUMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1706, state_id: 17, name: 'KABUPATEN MUKOMUKO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1707, state_id: 17, name: 'KABUPATEN LEBONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1708, state_id: 17, name: 'KABUPATEN KEPAHIANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1709, state_id: 17, name: 'KABUPATEN BENGKULU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1771, state_id: 17, name: 'KOTA BENGKULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1801, state_id: 18, name: 'KABUPATEN LAMPUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1802, state_id: 18, name: 'KABUPATEN TANGGAMUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1803, state_id: 18, name: 'KABUPATEN LAMPUNG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1804, state_id: 18, name: 'KABUPATEN LAMPUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1805, state_id: 18, name: 'KABUPATEN LAMPUNG TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1806, state_id: 18, name: 'KABUPATEN LAMPUNG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1807, state_id: 18, name: 'KABUPATEN WAY KANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1808, state_id: 18, name: 'KABUPATEN TULANGBAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1809, state_id: 18, name: 'KABUPATEN PESAWARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1810, state_id: 18, name: 'KABUPATEN PRINGSEWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1811, state_id: 18, name: 'KABUPATEN MESUJI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1812, state_id: 18, name: 'KABUPATEN TULANG BAWANG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1813, state_id: 18, name: 'KABUPATEN PESISIR BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1871, state_id: 18, name: 'KOTA BANDAR LAMPUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1872, state_id: 18, name: 'KOTA METRO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1901, state_id: 19, name: 'KABUPATEN BANGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1902, state_id: 19, name: 'KABUPATEN BELITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1903, state_id: 19, name: 'KABUPATEN BANGKA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1904, state_id: 19, name: 'KABUPATEN BANGKA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1905, state_id: 19, name: 'KABUPATEN BANGKA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1906, state_id: 19, name: 'KABUPATEN BELITUNG TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 1971, state_id: 19, name: 'KOTA PANGKAL PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2101, state_id: 21, name: 'KABUPATEN KARIMUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2102, state_id: 21, name: 'KABUPATEN BINTAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2103, state_id: 21, name: 'KABUPATEN NATUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2104, state_id: 21, name: 'KABUPATEN LINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2105, state_id: 21, name: 'KABUPATEN KEPULAUAN ANAMBAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2171, state_id: 21, name: 'KOTA BATAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2172, state_id: 21, name: 'KOTA TANJUNG PINANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3101, state_id: 31, name: 'KABUPATEN KEPULAUAN SERIBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3171, state_id: 31, name: 'JAKARTA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3172, state_id: 31, name: 'JAKARTA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3173, state_id: 31, name: 'JAKARTA PUSAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3174, state_id: 31, name: 'JAKARTA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3175, state_id: 31, name: 'JAKARTA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3176, state_id: 31, name: 'JAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3201, state_id: 32, name: 'KABUPATEN BOGOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3202, state_id: 32, name: 'KABUPATEN SUKABUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3203, state_id: 32, name: 'KABUPATEN CIANJUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3204, state_id: 32, name: 'KABUPATEN BANDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3205, state_id: 32, name: 'KABUPATEN GARUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3206, state_id: 32, name: 'KABUPATEN TASIKMALAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3207, state_id: 32, name: 'KABUPATEN CIAMIS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3208, state_id: 32, name: 'KABUPATEN KUNINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3209, state_id: 32, name: 'KABUPATEN CIREBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3210, state_id: 32, name: 'KABUPATEN MAJALENGKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3211, state_id: 32, name: 'KABUPATEN SUMEDANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3212, state_id: 32, name: 'KABUPATEN INDRAMAYU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3213, state_id: 32, name: 'KABUPATEN SUBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3214, state_id: 32, name: 'KABUPATEN PURWAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3215, state_id: 32, name: 'KABUPATEN KARAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3216, state_id: 32, name: 'KABUPATEN BEKASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3217, state_id: 32, name: 'KABUPATEN BANDUNG BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3218, state_id: 32, name: 'KABUPATEN PANGANDARAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3271, state_id: 32, name: 'KOTA BOGOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3272, state_id: 32, name: 'KOTA SUKABUMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3273, state_id: 32, name: 'BANDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3274, state_id: 32, name: 'KOTA CIREBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3275, state_id: 32, name: 'KOTA BEKASI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3276, state_id: 32, name: 'KOTA DEPOK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3277, state_id: 32, name: 'KOTA CIMAHI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3278, state_id: 32, name: 'KOTA TASIKMALAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3279, state_id: 32, name: 'KOTA BANJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3301, state_id: 33, name: 'KABUPATEN CILACAP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3302, state_id: 33, name: 'KABUPATEN BANYUMAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3303, state_id: 33, name: 'KABUPATEN PURBALINGGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3304, state_id: 33, name: 'KABUPATEN BANJARNEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3305, state_id: 33, name: 'KABUPATEN KEBUMEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3306, state_id: 33, name: 'KABUPATEN PURWOREJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3307, state_id: 33, name: 'KABUPATEN WONOSOBO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3308, state_id: 33, name: 'KABUPATEN MAGELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3309, state_id: 33, name: 'KABUPATEN BOYOLALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3310, state_id: 33, name: 'KABUPATEN KLATEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3311, state_id: 33, name: 'KABUPATEN SUKOHARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3312, state_id: 33, name: 'KABUPATEN WONOGIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3313, state_id: 33, name: 'KABUPATEN KARANGANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3314, state_id: 33, name: 'KABUPATEN SRAGEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3315, state_id: 33, name: 'KABUPATEN GROBOGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3316, state_id: 33, name: 'KABUPATEN BLORA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3317, state_id: 33, name: 'KABUPATEN REMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3318, state_id: 33, name: 'KABUPATEN PATI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3319, state_id: 33, name: 'KABUPATEN KUDUS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3320, state_id: 33, name: 'KABUPATEN JEPARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3321, state_id: 33, name: 'KABUPATEN DEMAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3322, state_id: 33, name: 'KABUPATEN SEMARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3323, state_id: 33, name: 'KABUPATEN TEMANGGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3324, state_id: 33, name: 'KABUPATEN KENDAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3325, state_id: 33, name: 'KABUPATEN BATANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3326, state_id: 33, name: 'KABUPATEN PEKALONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3327, state_id: 33, name: 'KABUPATEN PEMALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3328, state_id: 33, name: 'KABUPATEN TEGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3329, state_id: 33, name: 'KABUPATEN BREBES', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3371, state_id: 33, name: 'KOTA MAGELANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3372, state_id: 33, name: 'KOTA SURAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3373, state_id: 33, name: 'KOTA SALATIGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3374, state_id: 33, name: 'KOTA SEMARANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3375, state_id: 33, name: 'KOTA PEKALONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3376, state_id: 33, name: 'KOTA TEGAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3401, state_id: 34, name: 'KABUPATEN KULON PROGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3402, state_id: 34, name: 'KABUPATEN BANTUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3403, state_id: 34, name: 'KABUPATEN GUNUNG KIDUL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3404, state_id: 34, name: 'KABUPATEN SLEMAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3471, state_id: 34, name: 'YOGYAKARTA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3501, state_id: 35, name: 'KABUPATEN PACITAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3502, state_id: 35, name: 'KABUPATEN PONOROGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3503, state_id: 35, name: 'KABUPATEN TRENGGALEK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3504, state_id: 35, name: 'KABUPATEN TULUNGAGUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3505, state_id: 35, name: 'KABUPATEN BLITAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3506, state_id: 35, name: 'KABUPATEN KEDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3507, state_id: 35, name: 'KABUPATEN MALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3508, state_id: 35, name: 'KABUPATEN LUMAJANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3509, state_id: 35, name: 'KABUPATEN JEMBER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3510, state_id: 35, name: 'KABUPATEN BANYUWANGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3511, state_id: 35, name: 'KABUPATEN BONDOWOSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3512, state_id: 35, name: 'KABUPATEN SITUBONDO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3513, state_id: 35, name: 'KABUPATEN PROBOLINGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3514, state_id: 35, name: 'KABUPATEN PASURUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3515, state_id: 35, name: 'KABUPATEN SIDOARJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3516, state_id: 35, name: 'KABUPATEN MOJOKERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3517, state_id: 35, name: 'KABUPATEN JOMBANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3518, state_id: 35, name: 'KABUPATEN NGANJUK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3519, state_id: 35, name: 'KABUPATEN MADIUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3520, state_id: 35, name: 'KABUPATEN MAGETAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3521, state_id: 35, name: 'KABUPATEN NGAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3522, state_id: 35, name: 'KABUPATEN BOJONEGORO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3523, state_id: 35, name: 'KABUPATEN TUBAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3524, state_id: 35, name: 'KABUPATEN LAMONGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3525, state_id: 35, name: 'KABUPATEN GRESIK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3526, state_id: 35, name: 'KABUPATEN BANGKALAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3527, state_id: 35, name: 'KABUPATEN SAMPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3528, state_id: 35, name: 'KABUPATEN PAMEKASAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3529, state_id: 35, name: 'KABUPATEN SUMENEP', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3571, state_id: 35, name: 'KOTA KEDIRI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3572, state_id: 35, name: 'KOTA BLITAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3573, state_id: 35, name: 'KOTA MALANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3574, state_id: 35, name: 'KOTA PROBOLINGGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3575, state_id: 35, name: 'KOTA PASURUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3576, state_id: 35, name: 'KOTA MOJOKERTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3577, state_id: 35, name: 'KOTA MADIUN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3578, state_id: 35, name: 'SURABAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3579, state_id: 35, name: 'KOTA BATU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3601, state_id: 36, name: 'KABUPATEN PANDEGLANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3602, state_id: 36, name: 'KABUPATEN LEBAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3603, state_id: 36, name: 'KABUPATEN TANGERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3604, state_id: 36, name: 'KABUPATEN SERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3671, state_id: 36, name: 'KOTA TANGERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3672, state_id: 36, name: 'KOTA CILEGON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3673, state_id: 36, name: 'KOTA SERANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3674, state_id: 36, name: 'KOTA TANGERANG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5101, state_id: 51, name: 'KABUPATEN JEMBRANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5102, state_id: 51, name: 'KABUPATEN TABANAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5103, state_id: 51, name: 'KABUPATEN BADUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5104, state_id: 51, name: 'KABUPATEN GIANYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5105, state_id: 51, name: 'KABUPATEN KLUNGKUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5106, state_id: 51, name: 'KABUPATEN BANGLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5107, state_id: 51, name: 'KABUPATEN KARANG ASEM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5108, state_id: 51, name: 'KABUPATEN BULELENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5171, state_id: 51, name: 'KOTA DENPASAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5201, state_id: 52, name: 'KABUPATEN LOMBOK BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5202, state_id: 52, name: 'KABUPATEN LOMBOK TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5203, state_id: 52, name: 'KABUPATEN LOMBOK TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5204, state_id: 52, name: 'KABUPATEN SUMBAWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5205, state_id: 52, name: 'KABUPATEN DOMPU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5206, state_id: 52, name: 'KABUPATEN BIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5207, state_id: 52, name: 'KABUPATEN SUMBAWA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5208, state_id: 52, name: 'KABUPATEN LOMBOK UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5271, state_id: 52, name: 'KOTA MATARAM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5272, state_id: 52, name: 'KOTA BIMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5301, state_id: 53, name: 'KABUPATEN SUMBA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5302, state_id: 53, name: 'KABUPATEN SUMBA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5303, state_id: 53, name: 'KABUPATEN KUPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5304, state_id: 53, name: 'KABUPATEN TIMOR TENGAH SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5305, state_id: 53, name: 'KABUPATEN TIMOR TENGAH UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5306, state_id: 53, name: 'KABUPATEN BELU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5307, state_id: 53, name: 'KABUPATEN ALOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5308, state_id: 53, name: 'KABUPATEN LEMBATA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5309, state_id: 53, name: 'KABUPATEN FLORES TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5310, state_id: 53, name: 'KABUPATEN SIKKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5311, state_id: 53, name: 'KABUPATEN ENDE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5312, state_id: 53, name: 'KABUPATEN NGADA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5313, state_id: 53, name: 'KABUPATEN MANGGARAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5314, state_id: 53, name: 'KABUPATEN ROTE NDAO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5315, state_id: 53, name: 'KABUPATEN MANGGARAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5316, state_id: 53, name: 'KABUPATEN SUMBA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5317, state_id: 53, name: 'KABUPATEN SUMBA BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5318, state_id: 53, name: 'KABUPATEN NAGEKEO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5319, state_id: 53, name: 'KABUPATEN MANGGARAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5320, state_id: 53, name: 'KABUPATEN SABU RAIJUA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5321, state_id: 53, name: 'KABUPATEN MALAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5371, state_id: 53, name: 'KOTA KUPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6101, state_id: 61, name: 'KABUPATEN SAMBAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6102, state_id: 61, name: 'KABUPATEN BENGKAYANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6103, state_id: 61, name: 'KABUPATEN LANDAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6104, state_id: 61, name: 'KABUPATEN MEMPAWAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6105, state_id: 61, name: 'KABUPATEN SANGGAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6106, state_id: 61, name: 'KABUPATEN KETAPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6107, state_id: 61, name: 'KABUPATEN SINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6108, state_id: 61, name: 'KABUPATEN KAPUAS HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6109, state_id: 61, name: 'KABUPATEN SEKADAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6110, state_id: 61, name: 'KABUPATEN MELAWI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6111, state_id: 61, name: 'KABUPATEN KAYONG UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6112, state_id: 61, name: 'KABUPATEN KUBU RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6171, state_id: 61, name: 'KOTA PONTIANAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6172, state_id: 61, name: 'KOTA SINGKAWANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6201, state_id: 62, name: 'KABUPATEN KOTAWARINGIN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6202, state_id: 62, name: 'KABUPATEN KOTAWARINGIN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6203, state_id: 62, name: 'KABUPATEN KAPUAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6204, state_id: 62, name: 'KABUPATEN BARITO SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6205, state_id: 62, name: 'KABUPATEN BARITO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6206, state_id: 62, name: 'KABUPATEN SUKAMARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6207, state_id: 62, name: 'KABUPATEN LAMANDAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6208, state_id: 62, name: 'KABUPATEN SERUYAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6209, state_id: 62, name: 'KABUPATEN KATINGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6210, state_id: 62, name: 'KABUPATEN PULANG PISAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6211, state_id: 62, name: 'KABUPATEN GUNUNG MAS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6212, state_id: 62, name: 'KABUPATEN BARITO TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6213, state_id: 62, name: 'KABUPATEN MURUNG RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6271, state_id: 62, name: 'KOTA PALANGKA RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6301, state_id: 63, name: 'KABUPATEN TANAH LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6302, state_id: 63, name: 'KABUPATEN KOTA BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6303, state_id: 63, name: 'KABUPATEN BANJAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6304, state_id: 63, name: 'KABUPATEN BARITO KUALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6305, state_id: 63, name: 'KABUPATEN TAPIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6306, state_id: 63, name: 'KABUPATEN HULU SUNGAI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6307, state_id: 63, name: 'KABUPATEN HULU SUNGAI TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6308, state_id: 63, name: 'KABUPATEN HULU SUNGAI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6309, state_id: 63, name: 'KABUPATEN TABALONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6310, state_id: 63, name: 'KABUPATEN TANAH BUMBU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6311, state_id: 63, name: 'KABUPATEN BALANGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6371, state_id: 63, name: 'BANJARMASIN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6372, state_id: 63, name: 'KOTA BANJAR BARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6401, state_id: 64, name: 'KABUPATEN PASER', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6402, state_id: 64, name: 'KABUPATEN KUTAI BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6403, state_id: 64, name: 'KABUPATEN KUTAI KARTANEGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6404, state_id: 64, name: 'KABUPATEN KUTAI TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6405, state_id: 64, name: 'KABUPATEN BERAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6409, state_id: 64, name: 'KABUPATEN PENAJAM PASER UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6411, state_id: 64, name: 'KABUPATEN MAHAKAM HULU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6471, state_id: 64, name: 'KOTA BALIKPAPAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6472, state_id: 64, name: 'KOTA SAMARINDA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6474, state_id: 64, name: 'KOTA BONTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6501, state_id: 65, name: 'KABUPATEN MALINAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6502, state_id: 65, name: 'KABUPATEN BULUNGAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6503, state_id: 65, name: 'KABUPATEN TANA TIDUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6504, state_id: 65, name: 'KABUPATEN NUNUKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6571, state_id: 65, name: 'KOTA TARAKAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7101, state_id: 71, name: 'KABUPATEN BOLAANG MONGONDOW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7102, state_id: 71, name: 'KABUPATEN MINAHASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7103, state_id: 71, name: 'KABUPATEN KEPULAUAN SANGIHE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7104, state_id: 71, name: 'KABUPATEN KEPULAUAN TALAUD', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7105, state_id: 71, name: 'KABUPATEN MINAHASA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7106, state_id: 71, name: 'KABUPATEN MINAHASA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7107, state_id: 71, name: 'KABUPATEN BOLAANG MONGONDOW UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7108, state_id: 71, name: 'KABUPATEN SIAU TAGULANDANG BIARO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7109, state_id: 71, name: 'KABUPATEN MINAHASA TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7110, state_id: 71, name: 'KABUPATEN BOLAANG MONGONDOW SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7111, state_id: 71, name: 'KABUPATEN BOLAANG MONGONDOW TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7171, state_id: 71, name: 'KOTA MANADO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7172, state_id: 71, name: 'KOTA BITUNG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7173, state_id: 71, name: 'KOTA TOMOHON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7174, state_id: 71, name: 'KOTA KOTAMOBAGU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7201, state_id: 72, name: 'KABUPATEN BANGGAI KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7202, state_id: 72, name: 'KABUPATEN BANGGAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7203, state_id: 72, name: 'KABUPATEN MOROWALI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7204, state_id: 72, name: 'KABUPATEN POSO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7205, state_id: 72, name: 'KABUPATEN DONGGALA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7206, state_id: 72, name: 'KABUPATEN TOLI-TOLI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7207, state_id: 72, name: 'KABUPATEN BUOL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7208, state_id: 72, name: 'KABUPATEN PARIGI MOUTONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7209, state_id: 72, name: 'KABUPATEN TOJO UNA-UNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7210, state_id: 72, name: 'KABUPATEN SIGI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7211, state_id: 72, name: 'KABUPATEN BANGGAI LAUT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7212, state_id: 72, name: 'KABUPATEN MOROWALI UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7271, state_id: 72, name: 'KOTA PALU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7301, state_id: 73, name: 'KABUPATEN KEPULAUAN SELAYAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7302, state_id: 73, name: 'KABUPATEN BULUKUMBA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7303, state_id: 73, name: 'KABUPATEN BANTAENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7304, state_id: 73, name: 'KABUPATEN JENEPONTO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7305, state_id: 73, name: 'KABUPATEN TAKALAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7306, state_id: 73, name: 'KABUPATEN GOWA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7307, state_id: 73, name: 'KABUPATEN SINJAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7308, state_id: 73, name: 'KABUPATEN MAROS', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7309, state_id: 73, name: 'KABUPATEN PANGKAJENE DAN KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7310, state_id: 73, name: 'KABUPATEN BARRU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7311, state_id: 73, name: 'KABUPATEN BONE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7312, state_id: 73, name: 'KABUPATEN SOPPENG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7313, state_id: 73, name: 'KABUPATEN WAJO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7314, state_id: 73, name: 'KABUPATEN SIDENRENG RAPPANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7315, state_id: 73, name: 'KABUPATEN PINRANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7316, state_id: 73, name: 'KABUPATEN ENREKANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7317, state_id: 73, name: 'KABUPATEN LUWU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7318, state_id: 73, name: 'KABUPATEN TANA TORAJA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7322, state_id: 73, name: 'KABUPATEN LUWU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7325, state_id: 73, name: 'KABUPATEN LUWU TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7326, state_id: 73, name: 'KABUPATEN TORAJA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7371, state_id: 73, name: 'MAKASSAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7372, state_id: 73, name: 'KOTA PAREPARE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7373, state_id: 73, name: 'KOTA PALOPO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7401, state_id: 74, name: 'KABUPATEN BUTON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7402, state_id: 74, name: 'KABUPATEN MUNA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7403, state_id: 74, name: 'KABUPATEN KONAWE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7404, state_id: 74, name: 'KABUPATEN KOLAKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7405, state_id: 74, name: 'KABUPATEN KONAWE SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7406, state_id: 74, name: 'KABUPATEN BOMBANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7407, state_id: 74, name: 'KABUPATEN WAKATOBI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7408, state_id: 74, name: 'KABUPATEN KOLAKA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7409, state_id: 74, name: 'KABUPATEN BUTON UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7410, state_id: 74, name: 'KABUPATEN KONAWE UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7411, state_id: 74, name: 'KABUPATEN KOLAKA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7412, state_id: 74, name: 'KABUPATEN KONAWE KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7413, state_id: 74, name: 'KABUPATEN MUNA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7414, state_id: 74, name: 'KABUPATEN BUTON TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7415, state_id: 74, name: 'KABUPATEN BUTON SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7471, state_id: 74, name: 'KOTA KENDARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7472, state_id: 74, name: 'KOTA BAUBAU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7501, state_id: 75, name: 'KABUPATEN BOALEMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7502, state_id: 75, name: 'KABUPATEN GORONTALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7503, state_id: 75, name: 'KABUPATEN POHUWATO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7504, state_id: 75, name: 'KABUPATEN BONE BOLANGO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7505, state_id: 75, name: 'KABUPATEN GORONTALO UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7571, state_id: 75, name: 'KOTA GORONTALO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7601, state_id: 76, name: 'KABUPATEN MAJENE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7602, state_id: 76, name: 'KABUPATEN POLEWALI MANDAR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7603, state_id: 76, name: 'KABUPATEN MAMASA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7604, state_id: 76, name: 'KABUPATEN MAMUJU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7605, state_id: 76, name: 'KABUPATEN MAMUJU UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7606, state_id: 76, name: 'KABUPATEN MAMUJU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8101, state_id: 81, name: 'KABUPATEN MALUKU TENGGARA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8102, state_id: 81, name: 'KABUPATEN MALUKU TENGGARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8103, state_id: 81, name: 'KABUPATEN MALUKU TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8104, state_id: 81, name: 'KABUPATEN BURU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8105, state_id: 81, name: 'KABUPATEN KEPULAUAN ARU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8106, state_id: 81, name: 'KABUPATEN SERAM BAGIAN BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8107, state_id: 81, name: 'KABUPATEN SERAM BAGIAN TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8108, state_id: 81, name: 'KABUPATEN MALUKU BARAT DAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8109, state_id: 81, name: 'KABUPATEN BURU SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8171, state_id: 81, name: 'KOTA AMBON', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8172, state_id: 81, name: 'KOTA TUAL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8201, state_id: 82, name: 'KABUPATEN HALMAHERA BARAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8202, state_id: 82, name: 'KABUPATEN HALMAHERA TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8203, state_id: 82, name: 'KABUPATEN KEPULAUAN SULA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8204, state_id: 82, name: 'KABUPATEN HALMAHERA SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8205, state_id: 82, name: 'KABUPATEN HALMAHERA UTARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8206, state_id: 82, name: 'KABUPATEN HALMAHERA TIMUR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8207, state_id: 82, name: 'KABUPATEN PULAU MOROTAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8208, state_id: 82, name: 'KABUPATEN PULAU TALIABU', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8271, state_id: 82, name: 'KOTA TERNATE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8272, state_id: 82, name: 'KOTA TIDORE KEPULAUAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9101, state_id: 91, name: 'KABUPATEN FAKFAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9102, state_id: 91, name: 'KABUPATEN KAIMANA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9103, state_id: 91, name: 'KABUPATEN TELUK WONDAMA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9104, state_id: 91, name: 'KABUPATEN TELUK BINTUNI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9105, state_id: 91, name: 'KABUPATEN MANOKWARI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9106, state_id: 91, name: 'KABUPATEN SORONG SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9107, state_id: 91, name: 'KABUPATEN SORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9108, state_id: 91, name: 'KABUPATEN RAJA AMPAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9109, state_id: 91, name: 'KABUPATEN TAMBRAUW', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9110, state_id: 91, name: 'KABUPATEN MAYBRAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9111, state_id: 91, name: 'KABUPATEN MANOKWARI SELATAN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9112, state_id: 91, name: 'KABUPATEN PEGUNUNGAN ARFAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9171, state_id: 91, name: 'KOTA SORONG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9401, state_id: 94, name: 'KABUPATEN MERAUKE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9402, state_id: 94, name: 'KABUPATEN JAYAWIJAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9403, state_id: 94, name: 'KABUPATEN JAYAPURA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9404, state_id: 94, name: 'KABUPATEN NABIRE', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9408, state_id: 94, name: 'KABUPATEN KEPULAUAN YAPEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9409, state_id: 94, name: 'KABUPATEN BIAK NUMFOR', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9410, state_id: 94, name: 'KABUPATEN PANIAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9411, state_id: 94, name: 'KABUPATEN PUNCAK JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9412, state_id: 94, name: 'KABUPATEN MIMIKA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9413, state_id: 94, name: 'KABUPATEN BOVEN DIGOEL', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9414, state_id: 94, name: 'KABUPATEN MAPPI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9415, state_id: 94, name: 'KABUPATEN ASMAT', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9416, state_id: 94, name: 'KABUPATEN YAHUKIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9417, state_id: 94, name: 'KABUPATEN PEGUNUNGAN BINTANG', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9418, state_id: 94, name: 'KABUPATEN TOLIKARA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9419, state_id: 94, name: 'KABUPATEN SARMI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9420, state_id: 94, name: 'KABUPATEN KEEROM', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9426, state_id: 94, name: 'KABUPATEN WAROPEN', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9427, state_id: 94, name: 'KABUPATEN SUPIORI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9428, state_id: 94, name: 'KABUPATEN MAMBERAMO RAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9429, state_id: 94, name: 'KABUPATEN NDUGA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9430, state_id: 94, name: 'KABUPATEN LANNY JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9431, state_id: 94, name: 'KABUPATEN MAMBERAMO TENGAH', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9432, state_id: 94, name: 'KABUPATEN YALIMO', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9433, state_id: 94, name: 'KABUPATEN PUNCAK', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9434, state_id: 94, name: 'KABUPATEN DOGIYAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9435, state_id: 94, name: 'KABUPATEN INTAN JAYA', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9436, state_id: 94, name: 'KABUPATEN DEIYAI', created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9471, state_id: 94, name: 'KOTA JAYAPURA', created_at: new Date(), updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('cities', arrCity, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cities', null, {});
  },
};
