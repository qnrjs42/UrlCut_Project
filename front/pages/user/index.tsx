import { useSelector } from "react-redux";
import { END } from "redux-saga";
import wrapper, { SagaStore } from "../../store";
import axios from "axios";

import UserLayout from "../../components/UserLayout";
import MainManageLayout from "../../components/UserLayout/Dashboard/MainManageLayout";

import { LOAD_MY_INFO_REQUEST } from "../../actions/action_user";
import { RootState } from "../../reducers";
import { IUserReducerState } from "../../reducers/reducer_user";

const UserIndex = () => {
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  // SSR 적용 필요
  // useEffect(() => {
  //   console.log("pages/user");
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, []);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     console.log("2. pages/user/index moved");
  //     Router.push("/");
  //   }
  // }, [me && me.id]);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     console.log("pages/user/index moved");
  //     Router.push("/");
  //   }
  // }, [me && me.id]);

  // useEffect(() => {
  //   // me && me.id
  //   console.log("pages/user/index Router:", Router);
  //   if (me && me.id && Router.pathname === "/") {
  //     Router.push("/user");
  //   } else {
  //     Router.push("/");
  //   }
  // }, [me && me.id, Router]);

  return (
    <>
      {console.log("pages/user/index")}
      {me && (
        <>
          <UserLayout>
            <MainManageLayout />
          </UserLayout>
        </>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    // 쿠키 공유 방지
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    // REQUEST가 SUCCESS가 될 때까지 기다려줌
    context.store.dispatch(END);
    await (context.store as SagaStore).sagaTask.toPromise(); // 해당 코드는 store/configureStore - store.sagaTask = sagaMiddleware.run(rootSaga);
  }
);

export default UserIndex;
