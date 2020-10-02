import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { TABLE_PAGINATION_REQUEST } from "../actions/action_url";

interface changePaginationTypes {
  sender: string;
  page: number;
  limit: number | undefined;
  urlInfoIdsLength: number | undefined;
}

const useChangePagination = () => {
  const dispatch = useDispatch();

  const changePagination = useCallback((data: changePaginationTypes) => {
    dispatch({
      type: TABLE_PAGINATION_REQUEST,
      data: {
        sender: data.sender,
        page: data.page,
        limit: data.limit,
        urlInfoIdsLength: data.urlInfoIdsLength,
      },
    });
  }, []);

  return (data: changePaginationTypes) => {
    changePagination(data);
  };
};

export default useChangePagination;
