import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './constants';

export const getItems = async (params: any) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/get-items', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlotItems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-plot');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCartItems = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-cart', { params });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-systems');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSystemVersion = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.post(
      baseUrl + '/api/get-system-version',
      params
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFileId = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-file-id', { params });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifySystems = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-modify-systems');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyVersions = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-modify-versions', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyAttrVersions = async (params: { [key: string]: number }) => {
  try {
    const res: AxiosResponse = await axios.get(
      baseUrl + '/api/get-modify-attr-versions',
      {
        params
      }
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getModifyModels = async (params: { [key: string]: number }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/get-modify-models', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const changeDB = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl + '/api/change-db', {
      params
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteRecord = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/delete-record', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAll = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/delete-all', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const migrate = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/migrate', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createSystem = async (params: { [key: string]: string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/create-system', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createVersion = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/create-version', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const createModel = async (params: { [key: string]: number | string }) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl + '/api/create-model', params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const processing = async (formData: FormData) => {
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const res: AxiosResponse = await axios.post(
      baseUrl + '/api/processing',
      formData,
      config
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
