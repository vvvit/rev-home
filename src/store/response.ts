import {ApiResponse} from '../models';
import {ResponseError} from '../api/internal/baseInternalRequest';

const loading: ApiResponse = {
    status: 'loading',
    error: null
};

const success: ApiResponse = {
    status: 'ok',
    error: null
};

const error = (err: ResponseError): ApiResponse => ({
    status: 'error',
    error: err
});

export {loading, success, error};
