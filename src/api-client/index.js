import axiosClient from "./axiosClient";

export const getMines = (size,mines) => axiosClient.get(`/getMines?size=${size}&mines=${mines}`);