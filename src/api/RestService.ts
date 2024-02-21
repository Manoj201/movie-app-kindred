/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_KEY } from '@constants/index';
import axios, { AxiosResponse } from 'axios';

type ParamType = Record<string, string | number | null>;

const handleResponse = (response: AxiosResponse<any, any>): any => {
    try {
        const status = response.status;
        if (status === 200 || status === 201) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const GET = async (url: string, reqParams: ParamType = {}): Promise<any> => {
    const params = { ...reqParams, apikey: API_KEY };
    return await axios
        .get(url, {
            params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            return handleResponse(res);
        })
        .catch((error) => {
            throw error;
        });
};
