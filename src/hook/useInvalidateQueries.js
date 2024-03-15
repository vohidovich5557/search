import {queryclient} from '../config/query-client';


export const useInvalidateQueries = () => {
    const invalidate = (key) => {
        queryclient.invalidateQueries({queryKey:[...key]})
    };
    return {invalidate};
};