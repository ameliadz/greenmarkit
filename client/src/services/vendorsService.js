import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getVendors = async () => {
  const vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data.vendors;
};

export const createVendor = async (data) => {
  const vendor = await axios.post(`${BASE_URL}/vendors`, data);
  return vendor.data.vendor;
};

export const deleteVendor = async (id) => {
  const vendor = await axios.delete(`${BASE_URL}/vendors/${id}`);
  return vendor.data;
}
