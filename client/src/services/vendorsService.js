import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getVendors = async () => {
  const vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data.vendors;
};

export const getSingleVendor = async (id) => {
  const vendor = await axios.get(`${BASE_URL}/vendors/${id}`);
  return vendor.data;
};

export const createVendor = async (data) => {
  const vendor = await axios.post(`${BASE_URL}/vendors`, data);
  return vendor.data.vendor;
};

export const updateVendor = async (data) => {
  const vendor = await axios.put(`${BASE_URL}/vendors/${data.id}`, data);
  return vendor.data.vendor;
};

export const deleteVendor = async (id) => {
  const vendor = await axios.delete(`${BASE_URL}/vendors/${id}`);
  return vendor.data;
}
