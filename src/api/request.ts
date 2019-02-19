import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';

export const baseRequest = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
    return axios(config)
        .catch((error: AxiosError) => {
            // Catch and log response errors
            throw error;
        });
};
