import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getVendors = async () => {
  const vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data.vendors;
};

<<<<<<< HEAD
export const createVendor = async (data) => {
  const vendor = await axios.post(`${BASE_URL}/vendors`, data);
=======
export const createVendor = async () => {
  const vendor = await axios.post(`${BASE_URL}/vendors`);
>>>>>>> master
  console.log(vendor);
}
