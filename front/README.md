This is a starter template for [Learn Next.js](https://nextjs.org/learn).

------------------------------------------------------------------------------------------

SSR 구현(react-nodebird 6강 참고)

pages/_app 또는 index -> 페이지 보여줄 때마다 LOAD USER를 할 텐데 AppLayout 렌더링 전에 데이터가 먼저 채워진 뒤에 렌더링 하는 방법

export default Home; 바로 위에

export const getServerSideProps = wrapper.getServerSideProps((context) => {
    console.log(context);
})
이러면 Home보다 먼저 실행 된다 그러면 화면 렌더링 전에 서버에서 먼저 데이터를 받는다

import { END } from 'redux-saga';
import wrapper from '../store';

사용 예)
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

HYDRATE : getServerSideProps 실행 되고 나서 위의 코드 디스패치가 실행 된 결과를 HYDRATE로 보내진다.
reducers/index HYDRATE