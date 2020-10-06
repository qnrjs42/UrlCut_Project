import Router from "next/router";
import { useCallback } from "react";

const userIndex = "/user";

export const userList = [
  {
    key: "dashboard_main",
    url: userIndex,
  },
  {
    key: "dashboard_link",
    url: `${userIndex}/manage_url`,
  },
  {
    key: "management_link_storage",
    url: `${userIndex}/link_storage`,
  },
  {
    key: "management_expired",
    url: `${userIndex}/expired`,
  },
  {
    key: "link_option_multi_link",
    url: `${userIndex}/multi_link`,
  },
  {
    key: "tools_create_quick_link",
    url: `${userIndex}/create_quick_link`,
  },
  {
    key: "tools_full_page_script",
    url: `${userIndex}/full_page_script`,
  },
  {
    key: "privacy_profile",
    url: `${userIndex}/profile`,
  },
  {
    key: "privacy_payment",
    url: `${userIndex}/payment`,
  },
];

export const useChangeKey = () => {
  const onChangeKey = useCallback(() => {
    for (const list of userList) {
      // 현재페이지가 정의된 페이지면 정의된 key 반환
      if (
        Router.asPath === list.url ||
        Router.asPath === "/" ||
        Router.asPath === "/user/index"
      ) {
        return [list.key];
      }
    }
    return ["1"];
  }, []);
  return () => {
    return onChangeKey();
  };
};
