import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { MOVEMENT_URLS_REQUEST } from "../actions/action_url";
import { ItableRemoveAndMovement } from "../interface";

const useMovement = (data: ItableRemoveAndMovement) => {
  const dispatch = useDispatch();
  const moveMentUrl = useCallback(() => {
    if (data.moveMentIds?.length !== 0) {
      if (!(data.searchUrlInfo && data.searchUrlsDone)) {
        dispatch({
          type: MOVEMENT_URLS_REQUEST,
          data: {
            sender: data.sender,
            moveMentIds: data.moveMentIds,
          },
        });
      } else {
        // 검색한 rows
        dispatch({
          type: MOVEMENT_URLS_REQUEST,
          data: {
            sender: "search",
            moveMentIds: data.moveMentIds,
          },
        });
      }
    }
  }, [data.moveMentIds]);

  return () => {
    moveMentUrl();
  };
};

export default useMovement;
