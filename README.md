## 20-09-05 부터 쓰는 개발 노트

[20-10-05] 진행 중

> #### 1. 메인화면
>
> - 타입스크립트 적용
>   + 모두

> #### 2. 유저화면
>
> - 타입스크립트 적용
> - redux-saga의 getServerSideProps 타입스크립트 적용 필요(store.js pages/*.js)
> - styled-components 타입스크립트 적용 필요(overlap-styled.js)

[20-10-05] 클리어

> #### 1. 유저화면 수정
>
> - 로그아웃 시 리다이렉션 안 되던 버그 수정
> - 빌드 위해 불필요한 코드 제거

[20-10-04] 클리어

> #### 1. 유저화면 수정
>
> - ProfileLayout 타입스크립트 적용 및 데이터 변경할 수 있도록 기능 구현

[20-10-03] 클리어

> #### 1. 유저화면 수정
>
> - ExpiredLayout - 타입스크립트 적용

[20-10-02] 클리어

> #### 1. 유저화면 수정
>
> - MainManageLayout 타입스크립트 적용
> - MainManageLayout - MainChart 타입스크립트 적용
> - LinkStorageLayout - 타입스크립트 적용
> - Table - removeUrl custom hook 적용
> - Table - moveMentUrl custom hook 적용
> - Table - changePagination custom hook 적용
> - Table - getSelectedRowsIds 로직 변경

[20-10-01] 클리어

> #### 1. 메인화면 수정
>
> - action, reducer 분리

> #### 2. 유저화면 수정
>
> - action, reducer 분리
> - LinkManageLayout 타입스크립트 적용
> - LinkTable 타입스크립트 적용
> - TableDrawer 타입스크립트 적용


[20-09-23] 클리어

> #### 1. 유저화면 수정
>
> - 여러 페이지에서 새로고침 시 홈으로가는 버그 수정
> - LinkTable - 폴더로 이동
> - 검색 기능 구현

[20-09-21] 클리어

> #### 1. 메인화면 수정
>
> - 페이지별 로그인 On/Off 접근 제한 구현

> #### 2. 유저화면 수정
>
> - 페이지별 로그인 On/Off 접근 제한 구현
> - 관리페이지 - 서비스 현황 progress 기능 구현 (유저 데이터 활용)
> - 관리페이지 - 차트 기능 구현 (유저 데이터 활용)
> - '/' 홈으로 갔을 때 Sider 관리페이지 선택 안 되는 버그 수정

[20-09-20] 클리어

> #### 2. 유저화면 수정
>
> - 관리페이지 - 테이블 최근 5개 데이터만 노출 버그 수정
> - 전체 링크 관리 - 테이블 페이지네이션 구현
> - 링크 보관함 - 전체 링크 관리 테이블 복사
> - 설정기간 만료 - 전체 링크 관리 테이블 복사
> - 테이블 - 선택 삭제, 보관함 이동, 해제 redux 공통화

[20-09-19] 클리어

> #### 2. 유저화면 수정
>
> - 관리페이지 - 테이블 최근 5개 데이터만 노출
> - 전체 링크 관리 - 테이블 Row 삭제
> - 전체 링크 관리 - 테이블 Row 보관함 이동
> - 전체 링크 관리 - 테이블 링크 설정옵션 필터링

[20-09-18] 클리어

> #### 2. 유저화면 수정
>
> - 전체 링크 관리 - 테이블 Row Click했을 때 Drawer 기능 구현

[20-09-17] 클리어

> #### 1. 메인화면 수정
>
> - SecondLayout Width 수정
> - 로그인, 회원가입 loading 버그 수정

> #### 2. 유저화면 수정
>
> - Header - 로그아웃 loading 버그 수정
> - 대시보드, 매니지먼트 - 단축 URL 추가 버튼 분리 및 기능 추가
> - 전체 링크 관리 - 패키지 추가 버튼 삭제
> - 전체 링크 관리 - 테이블 생성일 정렬 수정
> - 전체 링크 관리 - 테이블 단축 URL 아래 사이트 타이틀 추가

---

[20-09-07] 클리어

> #### 1. 메인화면 수정
>
> - 서브레이아웃 간격 조정
> - 로그인 로그아웃 NavBar 간격 조정
> - 모바일 - footer 정렬
> - 모바일 - Drawer 버튼 디자인 수정

> #### 2. 유저화면 수정
>
> - Sider trigger tooltip background-color 수정
> - 모바일 - Drawer 버튼 간격 조정
> - 모바일 - 프로필 설정 - 프로필 공개, 미디어 게이트웨이 Col 간격 넓히기
> - 모바일 - 프로필 설정, 결제 정보 - 테이블 조정

---

[20-09-06] 클리어

> #### 1. 메인화면 수정
>
> - urlCut할 때 spin 기능 구현
> - 로그인, 회원가입 spin 기능 구현
> - button focus 오타 수정
> - 회원가입 폼 password input icon color 수정
> - reducers에서 url -> shortenUrl로 변경
> - NavBar 로고 버튼 반만 선택되는 버그 수정
> - NavBar PC/모바일 레이아웃 HOME 버튼 ON/OFF

> #### 2. 유저화면 수정
>
> - Sider, Drawer selected color 수정
> - Sider - Trigger icon color 수정
> - 로그아웃 시 Avatar에 spin 기능 구현 및 color 설정

---

[20-09-05] 클리어

> #### 1. 모바일 메인화면 디자인 수정
>
> - 레이아웃 중심 잡기<br />
> - URL INPUT 중심 크기로 설정

> #### 2. 유저 화면 디자인 수정
>
> - Sider Layout Diviver 제거<br />
> - Sider 색상 Dark -> Light로 변경<br />
> - Sider - Trigger 색상 그린색으로 변경<br />
> - Footer 색상 화이트로 변경 및 간격 설정<br />
