import { useSelector } from "react-redux";
import { END } from "redux-saga";
import wrapper, { SagaStore } from "../store";
import axios from "axios";

import AppLayout from "../components/AppLayout";
import UserLayout from "../components/UserLayout";

import MainManageLayout from "../components/UserLayout/Dashboard/MainManageLayout";
import { RootState } from "../reducers";
import { LOAD_MY_INFO_REQUEST } from "../actions/action_user";
import { IUserReducerState } from "../reducers/reducer_user";
import { GetServerSideProps } from "next";

const Home = () => {
  // const dispatch = useDispatch();
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  // useEffect(() => {
  //   console.log("1. pages/index");
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, []);

  return (
    <>
      {me ? (
        <>
          <UserLayout>
            <MainManageLayout />
          </UserLayout>
        </>
      ) : (
        <AppLayout />
      )}
    </>
  );
};

// getServerSideProps는 서버가 있어야 한다
// getServerSideProps가 Home보다 먼저 실행된다
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    // 쿠키 공유 방지
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    console.log("ttttt");
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    // REQUEST가 SUCCESS가 될 때까지 기다려줌
    context.store.dispatch(END);
    await (context.store as SagaStore).sagaTask.toPromise(); // 해당 코드는 store/configureStore - store.sagaTask = sagaMiddleware.run(rootSaga);
  }
);

export default Home;
