import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IRecommendationsResponse } from "./types";

export const recommendationsApi = createApi({
  reducerPath: "recommendationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c3f372d655msh1ed851a83f5276cp1e199djsn22f95d9a500b"
      );
      headers.set("X-RapidAPI-Host", "genius-song-lyrics1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProperties: builder.query<any, string>({
      query: () => "/chart/songs/",
    }),
  }),
});

export const { useGetPropertiesQuery } = recommendationsApi;
