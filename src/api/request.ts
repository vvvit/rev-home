import axios, {AxiosError, AxiosPromise, AxiosRequestConfig} from 'axios';

export const baseRequest = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
    return axios(config)
        .catch((error: AxiosError) => {
            const status = error.response && error.response.status;

            handleRequestError(error.config.url, status);

            throw error;
        });
};

export const handleRequestError = (
    requestURL?: string,
    status?: number,
) => {
    let errorMessage = `Failed request to ${requestURL}.`;

    if (status) errorMessage += ` Status code: ${status}`;
    console.error(errorMessage);
    console.error('error in axios request');
};
