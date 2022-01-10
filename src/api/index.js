import axios from 'axios';

const ID_KEY = 'H30eMfwLN_6dDbjB_Gaw';
const SECRET_KEY = 'cnEbgifQtp';

const axiosInstance = axios.create({
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
  },
});

export const API = (url, method, params) => {
  try {
    const result = axiosInstance({
      url,
      method,
      params,
    });
    return result;
  } catch (err) {
    return err;
  }
};
