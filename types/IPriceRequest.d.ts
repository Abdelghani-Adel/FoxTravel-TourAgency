interface IPriceRequest {
  languageCode: string; // ISO language code, e.g., "en"
  currCode: string; // Currency code, e.g., "€"
  ServiceTypeId: number; // Service type ID
  ServiceMainId: number; // Main service ID
  BookDateFrom: string; // Booking start date in DD/MM/YYYY format
  BookDateTo: string; // Booking end date in DD/MM/YYYY format
  AdultPax: number; // Number of adult passengers
  ChdPax: number; // Number of child passengers
  ChdAges: number[]; // Ages of child passengers
}
