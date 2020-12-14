import axios, { AxiosResponse } from "axios";

// const baseUrl: string = "http://127.0.0.1:7000";

export const getItems = async (selected: String) => {
  const params = { selected };

  try {
    const res: AxiosResponse = await axios.get("/get-items", {
      params,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlotItems = async () => {
  try {
    const res: AxiosResponse = await axios.get("/get-plot");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCartItems = async (params: Object) => {
  try {
    const res: AxiosResponse = await axios.post("/get-cart", params);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
