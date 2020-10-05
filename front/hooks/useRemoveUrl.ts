import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_URLS_REQUEST } from "../actions/action_url";
import { ItableRemoveAndMovement } from "../interface";

const useRemoveUrl = (data: ItableRemoveAndMovement) => {
  const dispatch = useDispatch();
  const removeUrl = useCallback(() => {
    if (data.removeIds?.length !== 0) {
      if (!(data.searchUrlInfo && data.searchUrlsDone)) {
        dispatch({
          type: REMOVE_URLS_REQUEST,
          data: {
            sender: data.sender,
            removeIds: data.removeIds,
          },
        });
      } else {
        // 검색한 rows
        dispatch({
          type: REMOVE_URLS_REQUEST,
          data: {
            sender: "search",
            removeIds: data.removeIds,
          },
        });
      }
    }
  }, [data.removeIds]);

  return () => {
    removeUrl();
  };
};

export default useRemoveUrl;
