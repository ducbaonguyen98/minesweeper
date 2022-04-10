import useSWR from "swr";

export const useGetMines = (size, mines) => useSWR(`/getMines?size=${size}&mines=${mines}`);
