import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetData = (value, page) => {
    return useQuery({
        queryKey: ["todos", value, page],
        queryFn: () => request.get("/todos", { params: { title_like: value, _limit: 4, _page:page } }).then((res) => {
            return {
                limit: res.config.params._limit,
                data: res.data,
                dataSize: res.headers.get(`X-Total-Count`),
            };
        }),

    });
};