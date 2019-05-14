import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getVendors = async () => {
  let vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data.vendors;
};
