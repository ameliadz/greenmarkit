import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getVendors = async () => {
  const vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data.vendors;
};

export const createVendor = async () => {
  const vendor = await axios.post(`${BASE_URL}/vendors`);
  console.log(vendor);
};
