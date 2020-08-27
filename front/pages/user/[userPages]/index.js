import React from "react";
import { useRouter } from "next/router";
import loadable from "@loadable/component";
import { Layout, Menu, Button } from "antd";

import UserLayout from "../../../components/UserLayout";

// 초기 /user 진입했을 때 | null로 하면 에러 발생
let UserComponent = loadable(() =>
  import("../../../components/UserLayout/Dashboard/MainManageLayout")
);

const StaticToDynamic = () => {
    const router = useRouter();
    
  // 컴포넌트에서 넘겨준 값 비교해서 알맞는 컴포넌트 할당
  switch (router.query.userPages) {
    case "index":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Dashboard/MainManageLayout")
      );
      break;
    case "manage_url":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Dashboard/LinkManageLayout")
      );
      break;
    case "link_storage":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Management/LinkStorageLayout")
      );
      break;
    case "expired":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Management/ExpiredLayout")
      );
      break;
    case "multi_links":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/LinkOption/MultiLinkLayout")
      );
      break;
    case "create_quick_link":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Tools/CreateQuickLinkLayout")
      );
      break;
    case "full_page_script":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Tools/FullPageScriptLayout")
      );
      break;
    case "profile":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Privacy/ProfileLayout")
      );
      break;
    case "payment":
      UserComponent = loadable(() =>
        import("../../../components/UserLayout/Privacy/PaymentLayout")
      );
      break;
      default: // 올바르지 않은 페이지 접근 시 User 메인 화면으로 이동 ( 404 페이지 만들어야 함)
        UserComponent = loadable(() =>
          import("../../../components/UserLayout/Dashboard/MainManageLayout")
        );
      break;
  }

  // const buttonClick = () => {
  //   console.log('router:', router);
  // }
    
    return (
      <>
        <UserLayout>
          {/* <Button onClick={buttonClick}>Test</Button> */}
          <UserComponent />
        </UserLayout>
      </>
    );
}

/*
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

// 아래 코드는 웹펙, 바벨을 사용할 때 사용할 수 있다. 나중에 시도해보자
// let UserComponent = loadable((props) => import(`${cl[props.url]}`), {
//     cacheKey: (props) => props.url,
// });


 {router && <UserComponent url={router.query.url} />}
*/

export default StaticToDynamic
