/* eslint-disable no-unused-vars */
let arrCountrie = [];
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
    arrCountrie = [
      {
        id: 1, name: 'AFGHANISTAN', iso: 'AF', nicename: 'Afghanistan', iso3: 'AFG', numcode: 4, phonecode: 93, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 2, name: 'ALBANIA', iso: 'AL', nicename: 'Albania', iso3: 'ALB', numcode: 8, phonecode: 355, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 3, name: 'ALGERIA', iso: 'DZ', nicename: 'Algeria', iso3: 'DZA', numcode: 12, phonecode: 213, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 4, name: 'AMERICAN SAMOA', iso: 'AS', nicename: 'American Samoa', iso3: 'ASM', numcode: 16, phonecode: 1684, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 5, name: 'ANDORRA', iso: 'AD', nicename: 'Andorra', iso3: 'AND', numcode: 20, phonecode: 376, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 6, name: 'ANGOLA', iso: 'AO', nicename: 'Angola', iso3: 'AGO', numcode: 24, phonecode: 244, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 7, name: 'ANGUILLA', iso: 'AI', nicename: 'Anguilla', iso3: 'AIA', numcode: 660, phonecode: 1264, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 8, name: 'ANTARCTICA', iso: 'AQ', nicename: 'Antarctica', iso3: '', numcode: null, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 9, name: 'ANTIGUA AND BARBUDA', iso: 'AG', nicename: 'Antigua and Barbuda', iso3: 'ATG', numcode: 28, phonecode: 1268, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 10, name: 'ARGENTINA', iso: 'AR', nicename: 'Argentina', iso3: 'ARG', numcode: 32, phonecode: 54, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 11, name: 'ARMENIA', iso: 'AM', nicename: 'Armenia', iso3: 'ARM', numcode: 51, phonecode: 374, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 12, name: 'ARUBA', iso: 'AW', nicename: 'Aruba', iso3: 'ABW', numcode: 533, phonecode: 297, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 13, name: 'AUSTRALIA', iso: 'AU', nicename: 'Australia', iso3: 'AUS', numcode: 36, phonecode: 61, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 14, name: 'AUSTRIA', iso: 'AT', nicename: 'Austria', iso3: 'AUT', numcode: 40, phonecode: 43, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 15, name: 'AZERBAIJAN', iso: 'AZ', nicename: 'Azerbaijan', iso3: 'AZE', numcode: 31, phonecode: 994, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 16, name: 'BAHAMAS', iso: 'BS', nicename: 'Bahamas', iso3: 'BHS', numcode: 44, phonecode: 1242, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 17, name: 'BAHRAIN', iso: 'BH', nicename: 'Bahrain', iso3: 'BHR', numcode: 48, phonecode: 973, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 18, name: 'BANGLADESH', iso: 'BD', nicename: 'Bangladesh', iso3: 'BGD', numcode: 50, phonecode: 880, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 19, name: 'BARBADOS', iso: 'BB', nicename: 'Barbados', iso3: 'BRB', numcode: 52, phonecode: 1246, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 20, name: 'BELARUS', iso: 'BY', nicename: 'Belarus', iso3: 'BLR', numcode: 112, phonecode: 375, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 21, name: 'BELGIUM', iso: 'BE', nicename: 'Belgium', iso3: 'BEL', numcode: 56, phonecode: 32, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 22, name: 'BELIZE', iso: 'BZ', nicename: 'Belize', iso3: 'BLZ', numcode: 84, phonecode: 501, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 23, name: 'BENIN', iso: 'BJ', nicename: 'Benin', iso3: 'BEN', numcode: 204, phonecode: 229, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 24, name: 'BERMUDA', iso: 'BM', nicename: 'Bermuda', iso3: 'BMU', numcode: 60, phonecode: 1441, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 25, name: 'BHUTAN', iso: 'BT', nicename: 'Bhutan', iso3: 'BTN', numcode: 64, phonecode: 975, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 26, name: 'BOLIVIA', iso: 'BO', nicename: 'Bolivia', iso3: 'BOL', numcode: 68, phonecode: 591, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 27, name: 'BOSNIA AND HERZEGOVINA', iso: 'BA', nicename: 'Bosnia and Herzegovina', iso3: 'BIH', numcode: 70, phonecode: 387, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 28, name: 'BOTSWANA', iso: 'BW', nicename: 'Botswana', iso3: 'BWA', numcode: 72, phonecode: 267, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 29, name: 'BOUVET ISLAND', iso: 'BV', nicename: 'Bouvet Island', iso3: '', numcode: null, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 30, name: 'BRAZIL', iso: 'BR', nicename: 'Brazil', iso3: 'BRA', numcode: 76, phonecode: 55, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 31, name: 'BRITISH INDIAN OCEAN TERRITORY', iso: 'IO', nicename: 'British Indian Ocean Territory', iso3: '', numcode: null, phonecode: 246, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 32, name: 'BRUNEI DARUSSALAM', iso: 'BN', nicename: 'Brunei Darussalam', iso3: 'BRN', numcode: 96, phonecode: 673, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 33, name: 'BULGARIA', iso: 'BG', nicename: 'Bulgaria', iso3: 'BGR', numcode: 100, phonecode: 359, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 34, name: 'BURKINA FASO', iso: 'BF', nicename: 'Burkina Faso', iso3: 'BFA', numcode: 854, phonecode: 226, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 35, name: 'BURUNDI', iso: 'BI', nicename: 'Burundi', iso3: 'BDI', numcode: 108, phonecode: 257, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 36, name: 'CAMBODIA', iso: 'KH', nicename: 'Cambodia', iso3: 'KHM', numcode: 116, phonecode: 855, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 37, name: 'CAMEROON', iso: 'CM', nicename: 'Cameroon', iso3: 'CMR', numcode: 120, phonecode: 237, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 38, name: 'CANADA', iso: 'CA', nicename: 'Canada', iso3: 'CAN', numcode: 124, phonecode: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 39, name: 'CAPE VERDE', iso: 'CV', nicename: 'Cape Verde', iso3: 'CPV', numcode: 132, phonecode: 238, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 40, name: 'CAYMAN ISLANDS', iso: 'KY', nicename: 'Cayman Islands', iso3: 'CYM', numcode: 136, phonecode: 1345, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 41, name: 'CENTRAL AFRICAN REPUBLIC', iso: 'CF', nicename: 'Central African Republic', iso3: 'CAF', numcode: 140, phonecode: 236, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 42, name: 'CHAD', iso: 'TD', nicename: 'Chad', iso3: 'TCD', numcode: 148, phonecode: 235, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 43, name: 'CHILE', iso: 'CL', nicename: 'Chile', iso3: 'CHL', numcode: 152, phonecode: 56, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 44, name: 'CHINA', iso: 'CN', nicename: 'China', iso3: 'CHN', numcode: 156, phonecode: 86, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 45, name: 'CHRISTMAS ISLAND', iso: 'CX', nicename: 'Christmas Island', iso3: '', numcode: null, phonecode: 61, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 46, name: 'COCOS (KEELING) ISLANDS', iso: 'CC', nicename: 'Cocos (Keeling) Islands', iso3: '', numcode: null, phonecode: 672, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 47, name: 'COLOMBIA', iso: 'CO', nicename: 'Colombia', iso3: 'COL', numcode: 170, phonecode: 57, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 48, name: 'COMOROS', iso: 'KM', nicename: 'Comoros', iso3: 'COM', numcode: 174, phonecode: 269, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 49, name: 'CONGO', iso: 'CG', nicename: 'Congo', iso3: 'COG', numcode: 178, phonecode: 242, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 50, name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', iso: 'CD', nicename: 'Congo, the Democratic Republic of the', iso3: 'COD', numcode: 180, phonecode: 242, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 51, name: 'COOK ISLANDS', iso: 'CK', nicename: 'Cook Islands', iso3: 'COK', numcode: 184, phonecode: 682, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 52, name: 'COSTA RICA', iso: 'CR', nicename: 'Costa Rica', iso3: 'CRI', numcode: 188, phonecode: 506, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 53, name: 'COTE D IVOIRE', iso: 'CI', nicename: 'Cote D Ivoire', iso3: 'CIV', numcode: 384, phonecode: 225, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 54, name: 'CROATIA', iso: 'HR', nicename: 'Croatia', iso3: 'HRV', numcode: 191, phonecode: 385, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 55, name: 'CUBA', iso: 'CU', nicename: 'Cuba', iso3: 'CUB', numcode: 192, phonecode: 53, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 56, name: 'CYPRUS', iso: 'CY', nicename: 'Cyprus', iso3: 'CYP', numcode: 196, phonecode: 357, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 57, name: 'CZECH REPUBLIC', iso: 'CZ', nicename: 'Czech Republic', iso3: 'CZE', numcode: 203, phonecode: 420, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 58, name: 'DENMARK', iso: 'DK', nicename: 'Denmark', iso3: 'DNK', numcode: 208, phonecode: 45, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 59, name: 'DJIBOUTI', iso: 'DJ', nicename: 'Djibouti', iso3: 'DJI', numcode: 262, phonecode: 253, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 60, name: 'DOMINICA', iso: 'DM', nicename: 'Dominica', iso3: 'DMA', numcode: 212, phonecode: 1767, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 61, name: 'DOMINICAN REPUBLIC', iso: 'DO', nicename: 'Dominican Republic', iso3: 'DOM', numcode: 214, phonecode: 1809, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 62, name: 'ECUADOR', iso: 'EC', nicename: 'Ecuador', iso3: 'ECU', numcode: 218, phonecode: 593, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 63, name: 'EGYPT', iso: 'EG', nicename: 'Egypt', iso3: 'EGY', numcode: 818, phonecode: 20, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 64, name: 'EL SALVADOR', iso: 'SV', nicename: 'El Salvador', iso3: 'SLV', numcode: 222, phonecode: 503, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 65, name: 'EQUATORIAL GUINEA', iso: 'GQ', nicename: 'Equatorial Guinea', iso3: 'GNQ', numcode: 226, phonecode: 240, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 66, name: 'ERITREA', iso: 'ER', nicename: 'Eritrea', iso3: 'ERI', numcode: 232, phonecode: 291, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 67, name: 'ESTONIA', iso: 'EE', nicename: 'Estonia', iso3: 'EST', numcode: 233, phonecode: 372, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 68, name: 'ETHIOPIA', iso: 'ET', nicename: 'Ethiopia', iso3: 'ETH', numcode: 231, phonecode: 251, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 69, name: 'FALKLAND ISLANDS (MALVINAS)', iso: 'FK', nicename: 'Falkland Islands (Malvinas)', iso3: 'FLK', numcode: 238, phonecode: 500, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 70, name: 'FAROE ISLANDS', iso: 'FO', nicename: 'Faroe Islands', iso3: 'FRO', numcode: 234, phonecode: 298, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 71, name: 'FIJI', iso: 'FJ', nicename: 'Fiji', iso3: 'FJI', numcode: 242, phonecode: 679, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 72, name: 'FINLAND', iso: 'FI', nicename: 'Finland', iso3: 'FIN', numcode: 246, phonecode: 358, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 73, name: 'FRANCE', iso: 'FR', nicename: 'France', iso3: 'FRA', numcode: 250, phonecode: 33, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 74, name: 'FRENCH GUIANA', iso: 'GF', nicename: 'French Guiana', iso3: 'GUF', numcode: 254, phonecode: 594, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 75, name: 'FRENCH POLYNESIA', iso: 'PF', nicename: 'French Polynesia', iso3: 'PYF', numcode: 258, phonecode: 689, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 76, name: 'FRENCH SOUTHERN TERRITORIES', iso: 'TF', nicename: 'French Southern Territories', iso3: '', numcode: null, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 77, name: 'GABON', iso: 'GA', nicename: 'Gabon', iso3: 'GAB', numcode: 266, phonecode: 241, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 78, name: 'GAMBIA', iso: 'GM', nicename: 'Gambia', iso3: 'GMB', numcode: 270, phonecode: 220, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 79, name: 'GEORGIA', iso: 'GE', nicename: 'Georgia', iso3: 'GEO', numcode: 268, phonecode: 995, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 80, name: 'GERMANY', iso: 'DE', nicename: 'Germany', iso3: 'DEU', numcode: 276, phonecode: 49, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 81, name: 'GHANA', iso: 'GH', nicename: 'Ghana', iso3: 'GHA', numcode: 288, phonecode: 233, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 82, name: 'GIBRALTAR', iso: 'GI', nicename: 'Gibraltar', iso3: 'GIB', numcode: 292, phonecode: 350, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 83, name: 'GREECE', iso: 'GR', nicename: 'Greece', iso3: 'GRC', numcode: 300, phonecode: 30, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 84, name: 'GREENLAND', iso: 'GL', nicename: 'Greenland', iso3: 'GRL', numcode: 304, phonecode: 299, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 85, name: 'GRENADA', iso: 'GD', nicename: 'Grenada', iso3: 'GRD', numcode: 308, phonecode: 1473, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 86, name: 'GUADELOUPE', iso: 'GP', nicename: 'Guadeloupe', iso3: 'GLP', numcode: 312, phonecode: 590, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 87, name: 'GUAM', iso: 'GU', nicename: 'Guam', iso3: 'GUM', numcode: 316, phonecode: 1671, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 88, name: 'GUATEMALA', iso: 'GT', nicename: 'Guatemala', iso3: 'GTM', numcode: 320, phonecode: 502, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 89, name: 'GUINEA', iso: 'GN', nicename: 'Guinea', iso3: 'GIN', numcode: 324, phonecode: 224, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 90, name: 'GUINEA-BISSAU', iso: 'GW', nicename: 'Guinea-Bissau', iso3: 'GNB', numcode: 624, phonecode: 245, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 91, name: 'GUYANA', iso: 'GY', nicename: 'Guyana', iso3: 'GUY', numcode: 328, phonecode: 592, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 92, name: 'HAITI', iso: 'HT', nicename: 'Haiti', iso3: 'HTI', numcode: 332, phonecode: 509, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 93, name: 'HEARD ISLAND AND MCDONALD ISLANDS', iso: 'HM', nicename: 'Heard Island and Mcdonald Islands', iso3: '', numcode: null, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 94, name: 'HOLY SEE (VATICAN CITY STATE)', iso: 'VA', nicename: 'Holy See (Vatican City State)', iso3: 'VAT', numcode: 336, phonecode: 39, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 95, name: 'HONDURAS', iso: 'HN', nicename: 'Honduras', iso3: 'HND', numcode: 340, phonecode: 504, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 96, name: 'HONG KONG', iso: 'HK', nicename: 'Hong Kong', iso3: 'HKG', numcode: 344, phonecode: 852, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 97, name: 'HUNGARY', iso: 'HU', nicename: 'Hungary', iso3: 'HUN', numcode: 348, phonecode: 36, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 98, name: 'ICELAND', iso: 'IS', nicename: 'Iceland', iso3: 'ISL', numcode: 352, phonecode: 354, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 99, name: 'INDIA', iso: 'IN', nicename: 'India', iso3: 'IND', numcode: 356, phonecode: 91, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 100, name: 'INDONESIA', iso: 'ID', nicename: 'Indonesia', iso3: 'IDN', numcode: 360, phonecode: 62, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 101, name: 'IRAN, ISLAMIC REPUBLIC OF', iso: 'IR', nicename: 'Iran, Islamic Republic of', iso3: 'IRN', numcode: 364, phonecode: 98, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 102, name: 'IRAQ', iso: 'IQ', nicename: 'Iraq', iso3: 'IRQ', numcode: 368, phonecode: 964, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 103, name: 'IRELAND', iso: 'IE', nicename: 'Ireland', iso3: 'IRL', numcode: 372, phonecode: 353, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 104, name: 'ISRAEL', iso: 'IL', nicename: 'Israel', iso3: 'ISR', numcode: 376, phonecode: 972, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 105, name: 'ITALY', iso: 'IT', nicename: 'Italy', iso3: 'ITA', numcode: 380, phonecode: 39, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 106, name: 'JAMAICA', iso: 'JM', nicename: 'Jamaica', iso3: 'JAM', numcode: 388, phonecode: 1876, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 107, name: 'JAPAN', iso: 'JP', nicename: 'Japan', iso3: 'JPN', numcode: 392, phonecode: 81, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 108, name: 'JORDAN', iso: 'JO', nicename: 'Jordan', iso3: 'JOR', numcode: 400, phonecode: 962, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 109, name: 'KAZAKHSTAN', iso: 'KZ', nicename: 'Kazakhstan', iso3: 'KAZ', numcode: 398, phonecode: 7, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 110, name: 'KENYA', iso: 'KE', nicename: 'Kenya', iso3: 'KEN', numcode: 404, phonecode: 254, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 111, name: 'KIRIBATI', iso: 'KI', nicename: 'Kiribati', iso3: 'KIR', numcode: 296, phonecode: 686, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 112, name: 'KOREA, DEMOCRATIC PEOPLES REPUBLIC OF', iso: 'KP', nicename: 'Korea, Democratic Peoples Republic of', iso3: 'PRK', numcode: 408, phonecode: 850, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 113, name: 'KOREA, REPUBLIC OF', iso: 'KR', nicename: 'Korea, Republic of', iso3: 'KOR', numcode: 410, phonecode: 82, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 114, name: 'KUWAIT', iso: 'KW', nicename: 'Kuwait', iso3: 'KWT', numcode: 414, phonecode: 965, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 115, name: 'KYRGYZSTAN', iso: 'KG', nicename: 'Kyrgyzstan', iso3: 'KGZ', numcode: 417, phonecode: 996, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 116, name: 'LAO PEOPLES DEMOCRATIC REPUBLIC', iso: 'LA', nicename: 'Lao Peoples Democratic Republic', iso3: 'LAO', numcode: 418, phonecode: 856, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 117, name: 'LATVIA', iso: 'LV', nicename: 'Latvia', iso3: 'LVA', numcode: 428, phonecode: 371, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 118, name: 'LEBANON', iso: 'LB', nicename: 'Lebanon', iso3: 'LBN', numcode: 422, phonecode: 961, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 119, name: 'LESOTHO', iso: 'LS', nicename: 'Lesotho', iso3: 'LSO', numcode: 426, phonecode: 266, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 120, name: 'LIBERIA', iso: 'LR', nicename: 'Liberia', iso3: 'LBR', numcode: 430, phonecode: 231, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 121, name: 'LIBYAN ARAB JAMAHIRIYA', iso: 'LY', nicename: 'Libyan Arab Jamahiriya', iso3: 'LBY', numcode: 434, phonecode: 218, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 122, name: 'LIECHTENSTEIN', iso: 'LI', nicename: 'Liechtenstein', iso3: 'LIE', numcode: 438, phonecode: 423, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 123, name: 'LITHUANIA', iso: 'LT', nicename: 'Lithuania', iso3: 'LTU', numcode: 440, phonecode: 370, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 124, name: 'LUXEMBOURG', iso: 'LU', nicename: 'Luxembourg', iso3: 'LUX', numcode: 442, phonecode: 352, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 125, name: 'MACAO', iso: 'MO', nicename: 'Macao', iso3: 'MAC', numcode: 446, phonecode: 853, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 126, name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', iso: 'MK', nicename: 'Macedonia, the Former Yugoslav Republic of', iso3: 'MKD', numcode: 807, phonecode: 389, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 127, name: 'MADAGASCAR', iso: 'MG', nicename: 'Madagascar', iso3: 'MDG', numcode: 450, phonecode: 261, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 128, name: 'MALAWI', iso: 'MW', nicename: 'Malawi', iso3: 'MWI', numcode: 454, phonecode: 265, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 129, name: 'MALAYSIA', iso: 'MY', nicename: 'Malaysia', iso3: 'MYS', numcode: 458, phonecode: 60, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 130, name: 'MALDIVES', iso: 'MV', nicename: 'Maldives', iso3: 'MDV', numcode: 462, phonecode: 960, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 131, name: 'MALI', iso: 'ML', nicename: 'Mali', iso3: 'MLI', numcode: 466, phonecode: 223, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 132, name: 'MALTA', iso: 'MT', nicename: 'Malta', iso3: 'MLT', numcode: 470, phonecode: 356, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 133, name: 'MARSHALL ISLANDS', iso: 'MH', nicename: 'Marshall Islands', iso3: 'MHL', numcode: 584, phonecode: 692, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 134, name: 'MARTINIQUE', iso: 'MQ', nicename: 'Martinique', iso3: 'MTQ', numcode: 474, phonecode: 596, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 135, name: 'MAURITANIA', iso: 'MR', nicename: 'Mauritania', iso3: 'MRT', numcode: 478, phonecode: 222, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 136, name: 'MAURITIUS', iso: 'MU', nicename: 'Mauritius', iso3: 'MUS', numcode: 480, phonecode: 230, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 137, name: 'MAYOTTE', iso: 'YT', nicename: 'Mayotte', iso3: '', numcode: null, phonecode: 269, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 138, name: 'MEXICO', iso: 'MX', nicename: 'Mexico', iso3: 'MEX', numcode: 484, phonecode: 52, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 139, name: 'MICRONESIA, FEDERATED STATES OF', iso: 'FM', nicename: 'Micronesia, Federated States of', iso3: 'FSM', numcode: 583, phonecode: 691, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 140, name: 'MOLDOVA, REPUBLIC OF', iso: 'MD', nicename: 'Moldova, Republic of', iso3: 'MDA', numcode: 498, phonecode: 373, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 141, name: 'MONACO', iso: 'MC', nicename: 'Monaco', iso3: 'MCO', numcode: 492, phonecode: 377, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 142, name: 'MONGOLIA', iso: 'MN', nicename: 'Mongolia', iso3: 'MNG', numcode: 496, phonecode: 976, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 143, name: 'MONTSERRAT', iso: 'MS', nicename: 'Montserrat', iso3: 'MSR', numcode: 500, phonecode: 1664, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 144, name: 'MOROCCO', iso: 'MA', nicename: 'Morocco', iso3: 'MAR', numcode: 504, phonecode: 212, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 145, name: 'MOZAMBIQUE', iso: 'MZ', nicename: 'Mozambique', iso3: 'MOZ', numcode: 508, phonecode: 258, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 146, name: 'MYANMAR', iso: 'MM', nicename: 'Myanmar', iso3: 'MMR', numcode: 104, phonecode: 95, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 147, name: 'NAMIBIA', iso: 'NA', nicename: 'Namibia', iso3: 'NAM', numcode: 516, phonecode: 264, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 148, name: 'NAURU', iso: 'NR', nicename: 'Nauru', iso3: 'NRU', numcode: 520, phonecode: 674, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 149, name: 'NEPAL', iso: 'NP', nicename: 'Nepal', iso3: 'NPL', numcode: 524, phonecode: 977, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 150, name: 'NETHERLANDS', iso: 'NL', nicename: 'Netherlands', iso3: 'NLD', numcode: 528, phonecode: 31, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 151, name: 'NETHERLANDS ANTILLES', iso: 'AN', nicename: 'Netherlands Antilles', iso3: 'ANT', numcode: 530, phonecode: 599, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 152, name: 'NEW CALEDONIA', iso: 'NC', nicename: 'New Caledonia', iso3: 'NCL', numcode: 540, phonecode: 687, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 153, name: 'NEW ZEALAND', iso: 'NZ', nicename: 'New Zealand', iso3: 'NZL', numcode: 554, phonecode: 64, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 154, name: 'NICARAGUA', iso: 'NI', nicename: 'Nicaragua', iso3: 'NIC', numcode: 558, phonecode: 505, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 155, name: 'NIGER', iso: 'NE', nicename: 'Niger', iso3: 'NER', numcode: 562, phonecode: 227, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 156, name: 'NIGERIA', iso: 'NG', nicename: 'Nigeria', iso3: 'NGA', numcode: 566, phonecode: 234, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 157, name: 'NIUE', iso: 'NU', nicename: 'Niue', iso3: 'NIU', numcode: 570, phonecode: 683, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 158, name: 'NORFOLK ISLAND', iso: 'NF', nicename: 'Norfolk Island', iso3: 'NFK', numcode: 574, phonecode: 672, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 159, name: 'NORTHERN MARIANA ISLANDS', iso: 'MP', nicename: 'Northern Mariana Islands', iso3: 'MNP', numcode: 580, phonecode: 1670, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 160, name: 'NORWAY', iso: 'NO', nicename: 'Norway', iso3: 'NOR', numcode: 578, phonecode: 47, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 161, name: 'OMAN', iso: 'OM', nicename: 'Oman', iso3: 'OMN', numcode: 512, phonecode: 968, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 162, name: 'PAKISTAN', iso: 'PK', nicename: 'Pakistan', iso3: 'PAK', numcode: 586, phonecode: 92, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 163, name: 'PALAU', iso: 'PW', nicename: 'Palau', iso3: 'PLW', numcode: 585, phonecode: 680, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 164, name: 'PALESTINIAN TERRITORY, OCCUPIED', iso: 'PS', nicename: 'Palestinian Territory, Occupied', iso3: '', numcode: null, phonecode: 970, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 165, name: 'PANAMA', iso: 'PA', nicename: 'Panama', iso3: 'PAN', numcode: 591, phonecode: 507, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 166, name: 'PAPUA NEW GUINEA', iso: 'PG', nicename: 'Papua New Guinea', iso3: 'PNG', numcode: 598, phonecode: 675, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 167, name: 'PARAGUAY', iso: 'PY', nicename: 'Paraguay', iso3: 'PRY', numcode: 600, phonecode: 595, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 168, name: 'PERU', iso: 'PE', nicename: 'Peru', iso3: 'PER', numcode: 604, phonecode: 51, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 169, name: 'PHILIPPINES', iso: 'PH', nicename: 'Philippines', iso3: 'PHL', numcode: 608, phonecode: 63, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 170, name: 'PITCAIRN', iso: 'PN', nicename: 'Pitcairn', iso3: 'PCN', numcode: 612, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 171, name: 'POLAND', iso: 'PL', nicename: 'Poland', iso3: 'POL', numcode: 616, phonecode: 48, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 172, name: 'PORTUGAL', iso: 'PT', nicename: 'Portugal', iso3: 'PRT', numcode: 620, phonecode: 351, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 173, name: 'PUERTO RICO', iso: 'PR', nicename: 'Puerto Rico', iso3: 'PRI', numcode: 630, phonecode: 1787, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 174, name: 'QATAR', iso: 'QA', nicename: 'Qatar', iso3: 'QAT', numcode: 634, phonecode: 974, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 175, name: 'REUNION', iso: 'RE', nicename: 'Reunion', iso3: 'REU', numcode: 638, phonecode: 262, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 176, name: 'ROMANIA', iso: 'RO', nicename: 'Romania', iso3: 'ROM', numcode: 642, phonecode: 40, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 177, name: 'RUSSIAN FEDERATION', iso: 'RU', nicename: 'Russian Federation', iso3: 'RUS', numcode: 643, phonecode: 70, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 178, name: 'RWANDA', iso: 'RW', nicename: 'Rwanda', iso3: 'RWA', numcode: 646, phonecode: 250, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 179, name: 'SAINT HELENA', iso: 'SH', nicename: 'Saint Helena', iso3: 'SHN', numcode: 654, phonecode: 290, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 180, name: 'SAINT KITTS AND NEVIS', iso: 'KN', nicename: 'Saint Kitts and Nevis', iso3: 'KNA', numcode: 659, phonecode: 1869, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 181, name: 'SAINT LUCIA', iso: 'LC', nicename: 'Saint Lucia', iso3: 'LCA', numcode: 662, phonecode: 1758, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 182, name: 'SAINT PIERRE AND MIQUELON', iso: 'PM', nicename: 'Saint Pierre and Miquelon', iso3: 'SPM', numcode: 666, phonecode: 508, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 183, name: 'SAINT VINCENT AND THE GRENADINES', iso: 'VC', nicename: 'Saint Vincent and the Grenadines', iso3: 'VCT', numcode: 670, phonecode: 1784, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 184, name: 'SAMOA', iso: 'WS', nicename: 'Samoa', iso3: 'WSM', numcode: 882, phonecode: 684, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 185, name: 'SAN MARINO', iso: 'SM', nicename: 'San Marino', iso3: 'SMR', numcode: 674, phonecode: 378, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 186, name: 'SAO TOME AND PRINCIPE', iso: 'ST', nicename: 'Sao Tome and Principe', iso3: 'STP', numcode: 678, phonecode: 239, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 187, name: 'SAUDI ARABIA', iso: 'SA', nicename: 'Saudi Arabia', iso3: 'SAU', numcode: 682, phonecode: 966, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 188, name: 'SENEGAL', iso: 'SN', nicename: 'Senegal', iso3: 'SEN', numcode: 686, phonecode: 221, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 189, name: 'SERBIA AND MONTENEGRO', iso: 'CS', nicename: 'Serbia and Montenegro', iso3: '', numcode: null, phonecode: 381, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 190, name: 'SEYCHELLES', iso: 'SC', nicename: 'Seychelles', iso3: 'SYC', numcode: 690, phonecode: 248, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 191, name: 'SIERRA LEONE', iso: 'SL', nicename: 'Sierra Leone', iso3: 'SLE', numcode: 694, phonecode: 232, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 192, name: 'SINGAPORE', iso: 'SG', nicename: 'Singapore', iso3: 'SGP', numcode: 702, phonecode: 65, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 193, name: 'SLOVAKIA', iso: 'SK', nicename: 'Slovakia', iso3: 'SVK', numcode: 703, phonecode: 421, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 194, name: 'SLOVENIA', iso: 'SI', nicename: 'Slovenia', iso3: 'SVN', numcode: 705, phonecode: 386, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 195, name: 'SOLOMON ISLANDS', iso: 'SB', nicename: 'Solomon Islands', iso3: 'SLB', numcode: 90, phonecode: 677, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 196, name: 'SOMALIA', iso: 'SO', nicename: 'Somalia', iso3: 'SOM', numcode: 706, phonecode: 252, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 197, name: 'SOUTH AFRICA', iso: 'ZA', nicename: 'South Africa', iso3: 'ZAF', numcode: 710, phonecode: 27, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 198, name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', iso: 'GS', nicename: 'South Georgia and the South Sandwich Islands', iso3: '', numcode: null, phonecode: 0, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 199, name: 'SPAIN', iso: 'ES', nicename: 'Spain', iso3: 'ESP', numcode: 724, phonecode: 34, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 200, name: 'SRI LANKA', iso: 'LK', nicename: 'Sri Lanka', iso3: 'LKA', numcode: 144, phonecode: 94, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 201, name: 'SUDAN', iso: 'SD', nicename: 'Sudan', iso3: 'SDN', numcode: 736, phonecode: 249, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 202, name: 'SURINAME', iso: 'SR', nicename: 'Suriname', iso3: 'SUR', numcode: 740, phonecode: 597, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 203, name: 'SVALBARD AND JAN MAYEN', iso: 'SJ', nicename: 'Svalbard and Jan Mayen', iso3: 'SJM', numcode: 744, phonecode: 47, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 204, name: 'SWAZILAND', iso: 'SZ', nicename: 'Swaziland', iso3: 'SWZ', numcode: 748, phonecode: 268, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 205, name: 'SWEDEN', iso: 'SE', nicename: 'Sweden', iso3: 'SWE', numcode: 752, phonecode: 46, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 206, name: 'SWITZERLAND', iso: 'CH', nicename: 'Switzerland', iso3: 'CHE', numcode: 756, phonecode: 41, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 207, name: 'SYRIAN ARAB REPUBLIC', iso: 'SY', nicename: 'Syrian Arab Republic', iso3: 'SYR', numcode: 760, phonecode: 963, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 208, name: 'TAIWAN, PROVINCE OF CHINA', iso: 'TW', nicename: 'Taiwan, Province of China', iso3: 'TWN', numcode: 158, phonecode: 886, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 209, name: 'TAJIKISTAN', iso: 'TJ', nicename: 'Tajikistan', iso3: 'TJK', numcode: 762, phonecode: 992, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 210, name: 'TANZANIA, UNITED REPUBLIC OF', iso: 'TZ', nicename: 'Tanzania, United Republic of', iso3: 'TZA', numcode: 834, phonecode: 255, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 211, name: 'THAILAND', iso: 'TH', nicename: 'Thailand', iso3: 'THA', numcode: 764, phonecode: 66, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 212, name: 'TIMOR-LESTE', iso: 'TL', nicename: 'Timor-Leste', iso3: '', numcode: null, phonecode: 670, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 213, name: 'TOGO', iso: 'TG', nicename: 'Togo', iso3: 'TGO', numcode: 768, phonecode: 228, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 214, name: 'TOKELAU', iso: 'TK', nicename: 'Tokelau', iso3: 'TKL', numcode: 772, phonecode: 690, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 215, name: 'TONGA', iso: 'TO', nicename: 'Tonga', iso3: 'TON', numcode: 776, phonecode: 676, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 216, name: 'TRINIDAD AND TOBAGO', iso: 'TT', nicename: 'Trinidad and Tobago', iso3: 'TTO', numcode: 780, phonecode: 1868, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 217, name: 'TUNISIA', iso: 'TN', nicename: 'Tunisia', iso3: 'TUN', numcode: 788, phonecode: 216, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 218, name: 'TURKEY', iso: 'TR', nicename: 'Turkey', iso3: 'TUR', numcode: 792, phonecode: 90, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 219, name: 'TURKMENISTAN', iso: 'TM', nicename: 'Turkmenistan', iso3: 'TKM', numcode: 795, phonecode: 7370, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 220, name: 'TURKS AND CAICOS ISLANDS', iso: 'TC', nicename: 'Turks and Caicos Islands', iso3: 'TCA', numcode: 796, phonecode: 1649, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 221, name: 'TUVALU', iso: 'TV', nicename: 'Tuvalu', iso3: 'TUV', numcode: 798, phonecode: 688, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 222, name: 'UGANDA', iso: 'UG', nicename: 'Uganda', iso3: 'UGA', numcode: 800, phonecode: 256, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 223, name: 'UKRAINE', iso: 'UA', nicename: 'Ukraine', iso3: 'UKR', numcode: 804, phonecode: 380, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 224, name: 'UNITED ARAB EMIRATES', iso: 'AE', nicename: 'United Arab Emirates', iso3: 'ARE', numcode: 784, phonecode: 971, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 225, name: 'UNITED KINGDOM', iso: 'GB', nicename: 'United Kingdom', iso3: 'GBR', numcode: 826, phonecode: 44, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 226, name: 'UNITED STATES', iso: 'US', nicename: 'United States', iso3: 'USA', numcode: 840, phonecode: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 227, name: 'UNITED STATES MINOR OUTLYING ISLANDS', iso: 'UM', nicename: 'United States Minor Outlying Islands', iso3: '', numcode: null, phonecode: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 228, name: 'URUGUAY', iso: 'UY', nicename: 'Uruguay', iso3: 'URY', numcode: 858, phonecode: 598, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 229, name: 'UZBEKISTAN', iso: 'UZ', nicename: 'Uzbekistan', iso3: 'UZB', numcode: 860, phonecode: 998, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 230, name: 'VANUATU', iso: 'VU', nicename: 'Vanuatu', iso3: 'VUT', numcode: 548, phonecode: 678, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 231, name: 'VENEZUELA', iso: 'VE', nicename: 'Venezuela', iso3: 'VEN', numcode: 862, phonecode: 58, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 232, name: 'VIET NAM', iso: 'VN', nicename: 'Viet Nam', iso3: 'VNM', numcode: 704, phonecode: 84, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 233, name: 'VIRGIN ISLANDS, BRITISH', iso: 'VG', nicename: 'Virgin Islands, British', iso3: 'VGB', numcode: 92, phonecode: 1284, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 234, name: 'VIRGIN ISLANDS, U.S.', iso: 'VI', nicename: 'Virgin Islands, U.s.', iso3: 'VIR', numcode: 850, phonecode: 1340, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 235, name: 'WALLIS AND FUTUNA', iso: 'WF', nicename: 'Wallis and Futuna', iso3: 'WLF', numcode: 876, phonecode: 681, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 236, name: 'WESTERN SAHARA', iso: 'EH', nicename: 'Western Sahara', iso3: 'ESH', numcode: 732, phonecode: 212, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 237, name: 'YEMEN', iso: 'YE', nicename: 'Yemen', iso3: 'YEM', numcode: 887, phonecode: 967, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 238, name: 'ZAMBIA', iso: 'ZM', nicename: 'Zambia', iso3: 'ZMB', numcode: 894, phonecode: 260, created_at: new Date(), updated_at: new Date(),
      },
      {
        id: 239, name: 'ZIMBABWE', iso: 'ZW', nicename: 'Zimbabwe', iso3: 'ZWE', numcode: 716, phonecode: 263, created_at: new Date(), updated_at: new Date(),
      },

    ];
    await queryInterface.bulkInsert('countries', arrCountrie, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('countries', null, {});
  },
};
