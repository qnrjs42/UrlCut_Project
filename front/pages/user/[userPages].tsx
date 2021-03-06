import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import { END } from "redux-saga";
// import axios from "axios";
import loadable from "@loadable/component";

// import wrapper, { SagaStore } from "../../../store";

import UserLayout from "../../components/UserLayout";

import { RESET_URLS_INFO_REQUEST } from "../../actions/action_url";
import { LOAD_MY_INFO_REQUEST } from "../../actions/action_user";
import { RootState } from "../../reducers";
import { IUserReducerState } from "../../reducers/reducer_user";

// const componentLayout = {
//   index: "../../components/UserLayout/Dashboard/MainManageLayout.",
//   manage_url: "../../components/UserLayout/Dashboard/LinkManageLayout",
//   link_storage: "../../components/UserLayout/Management/LinkStorageLayout",
//   expired: "../../components/UserLayout/Management/ExpiredLayout",
//   multi_link: "../../components/UserLayout/LinkOption/MultiLinkLayout",
//   create_quick_link: "../../components/UserLayout/Tools/CreateQuickLinkLayout",
//   full_page_script: "../../components/UserLayout/Tools/FullPageScriptLayout",
//   profile: "../../components/UserLayout/Privacy/ProfileLayout",
//   payment: "../../components/UserLayout/Privacy/PaymentLayout",
// };

// 초기 /user 진입했을 때 | null로 하면 에러 발생
let UserComponent = loadable(
  () => import("../../components/UserLayout/Dashboard/MainManageLayout")
);

const StaticToDynamic = () => {
  const dispatch = useDispatch();
  const uRouter = useRouter();
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  // SSR 적용 필요
  useEffect(() => {
    if (uRouter.asPath !== "/user/[userPages]") {
      dispatch({
        type: RESET_URLS_INFO_REQUEST,
      });
      dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });
    }
  }, [uRouter]);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     uRouter.push("/");
  //   }
  // }, [me && me.id]);

  // 컴포넌트에서 넘겨준 값 비교해서 알맞는 컴포넌트 할당
  switch (uRouter.query.userPages) {
    case "index":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Dashboard/MainManageLayout")
      );
      break;
    case "manage_url":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Dashboard/LinkManageLayout")
      );
      break;
    case "link_storage":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Management/LinkStorageLayout")
      );
      break;
    case "expired":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Management/ExpiredLayout")
      );
      break;
    case "multi_link":
      UserComponent = loadable(
        (_) => import("../../components/UserLayout/LinkOption/MultiLinkLayout")
      );
      break;
    case "create_quick_link":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Tools/CreateQuickLinkLayout")
      );
      break;
    case "full_page_script":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Tools/FullPageScriptLayout")
      );
      break;
    case "profile":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Privacy/ProfileLayout")
      );
      break;
    case "payment":
      UserComponent = loadable(
        () => import("../../components/UserLayout/Privacy/PaymentLayout")
      );
      break;
    default:
      // 올바르지 않은 페이지 접근 시 User 메인 화면으로 이동 ( 404 페이지 만들어야 함)
      UserComponent = loadable(() => import("../404"));
      break;
  }

  return (
    <>
      {me ? (
        <>
          <UserLayout>
            <UserComponent />
          </UserLayout>
        </>
      ) : null}
    </>
  );
};

export default StaticToDynamic;
