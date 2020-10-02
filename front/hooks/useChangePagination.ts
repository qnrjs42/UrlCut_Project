import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { TABLE_PAGINATION_REQUEST } from "../actions/action_url";
import { tableRemoveAndMovementTypes } from "../interface";

interface changePaginationTypes {
    sender: string;
    page: number;
    limit: number | undefined;
    urlInfoIdsLength: number | undefined;
}


const useChangePagination = () => {
    const dispatch = useDispatch();

    // const moveMentUrl = useCallback(() => {
    //     dispatch({
    //         type: TABLE_PAGINATION_REQUEST,
    //         data: {
    //           sender: "linkStorage",
    //           page: e.page,
    //           limit: e.limit,
    //           urlInfoIdsLength: storageUrlInfoIds.length,
    //           // lastId: urlInfo[urlInfo.length - 1].id,
    //         },
    //       });
    // }, []);

    const changePagination = useCallback((data: changePaginationTypes) => {
        dispatch({
            type: TABLE_PAGINATION_REQUEST,
            data: {
                sender: data.sender,
                page: data.page,
                limit: data.limit,
                urlInfoIdsLength:  data.urlInfoIdsLength
            }
        })
    }, [])

    return (data: changePaginationTypes) => {
        // moveMentUrl();
        changePagination(data);
    }
};

export default useChangePagination;
