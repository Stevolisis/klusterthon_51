import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { userDetails } from "../redux/userSlice";

export const axio = axios.create({
  baseURL: "https://klustmedics-api.vercel.app/",
});

export const authenticatedAxiosRequest = (token) => {
  return axios.create({
    baseURL: "https://klustmedics-api.vercel.app/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const BASEURL = "https://klustmedics-api.vercel.app/health_provider/";
export const request = (TOKEN, id) => {
  const req = axios.create({
    baseURL: BASEURL,
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : undefined,
  });
  return req;
};

export const getMedications = async ({ token, day, month, year }) => {
  const initialReq = authenticatedAxiosRequest(token);
  try {
    const req = await initialReq.get(
      `patient/medication/get_medications/${day}/${month}/${year}`
    );
    const res = await req?.data;
    const data = await res;
    return data?.data;
  } catch (error) {
    showMessage({
      message: "Failure",
      description: "Something went wrong",
      type: "danger",
    });
  }
};

export const updateProfile = async ({
  full_name,
  phone_number,
  img,
  token,
}) => {
  try {
    const initialReq = authenticatedAxiosRequest(token);
    const req = await initialReq.post("", {
      full_name,
      phone_number,
      img,
    });
    const res = await req.data;
  } catch (error) {}
};

export const getDoctorContact = async ({ token }) => {
  try {
    const initialReq = authenticatedAxiosRequest(token);
    const req = await initialReq.get("patient/profile/get_doctor_contacts");
    const res = await req.data;
    return await res;
  } catch (error) {}
};

export const addMediacation = async (params, { token }) => {
  console.log(params);
  console.log(token);
  const initialReq = authenticatedAxiosRequest(token);
  try {
    const req = await initialReq.post("patient/medication/add_medication", {
      ...params,
    });
    const res = await req.data;
    console.log(await res);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editMedication = async (params, { token, med_id }) => {
  const initialReq = authenticatedAxiosRequest(token);
  try {
    const req = initialReq.patch(
      `patient/medication/edit_medication/${med_id}`,
      params
    );
  } catch (error) {}
};

export const getPatientProfile = async ({ token }, dispatch) => {
  try {
    const initialReq = authenticatedAxiosRequest(token);
    const req = await initialReq.get("patient/profile/get_patient");
    const res = await req.data;
    const result = await res?.data;
    dispatch(userDetails(result));
  } catch (error) {
    console.log(error);
  }
};
