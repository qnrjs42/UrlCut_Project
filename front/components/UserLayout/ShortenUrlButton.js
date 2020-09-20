import React, { useCallback, useEffect, useState } from "react";
import { Modal, Input } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { URL_CUT_REQUEST } from "../../reducers/reducer_url";

import useInput from "../../hooks/useInput";

import { ButtonPurpleWrapper } from "../../css/overlap-styled";
import { useDispatch, useSelector } from "react-redux";

// Dashboard - MainManageLayout, LinkManageLayout
// Management - LinkStorageLayout, ExpiredLayout
const ShortenUrlButton = () => {
  const dispatch = useDispatch();
  const { urlCutLoading, urlCutDone, shortenUrl } = useSelector(
    (state) => state.url
  );
  const [CreateModal, setCreateModal] = useState(false);
  const [CreateUrl, onChangeUrl, setCreateUrl] = useInput(null);

  useEffect(() => {
    if (!CreateModal) {
      setCreateUrl(null);
    }
  }, [CreateModal]);

  useEffect(() => {
    if (urlCutDone) {
      setCreateUrl(shortenUrl);
    }
  }, [urlCutDone]);

  const onModalDisplay = useCallback(() => {
    setCreateModal(true);
  });

  const onMultiLinkCreateOk = useCallback(() => {
    // setCreateModal(false);

    dispatch({
      type: URL_CUT_REQUEST,
      data: CreateUrl,
    });
  });

  // 모달 밖, 화면을 클릭해도 Cancel
  const onMultiLinkCreateCancel = useCallback(() => {
    setCreateModal(false);
  });
  return (
    <>
      <Modal
        title={<h3>단축 URL 추가</h3>}
        visible={CreateModal}
        onOk={onMultiLinkCreateOk}
        onCancel={onMultiLinkCreateCancel}
        width={700}
        footer={[
          <ButtonPurpleWrapper
            key="submit"
            type="primary"
            onClick={onMultiLinkCreateOk}
            loading={urlCutLoading}
          >
            URL 단축
          </ButtonPurpleWrapper>,
        ]}
      >
        <Input
          placeholder="긴 URL 붙여넣기"
          bordered={false}
          onChange={onChangeUrl}
          value={CreateUrl}
        />
        <br />
        <br />
      </Modal>

      <ButtonPurpleWrapper
        type="primary"
        icon={<LinkOutlined className="user-button-icon" />}
        size="large"
        onClick={onModalDisplay}
      >
        단축 URL 추가
      </ButtonPurpleWrapper>
    </>
  );
};

export default ShortenUrlButton;
