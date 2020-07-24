const express = require("express");
const router = express.Router();

router.post("/urlCut", (req, res) => {
    if(req) {
        return res.status(200).json({ success: true, newUrl: 'Axios를 이용한 단축된 URL' });
    }
    return res.status(400).json({ success: false });
});

router.post("/logIn", (req, res) => {
  if (req) {
    return res
      .status(200)
      .json({ success: true, email: "Axios를 이용한 email" });
  }
  return res.status(400).json({ success: false });
});

router.post("/logOut", (req, res) => {
  if (req) {
    return res
      .status(200)
      .json({ success: true});
  }
  return res.status(400).json({ success: false });
});

router.post("/signUp", (req, res) => {
  if (req) {
    return res.status(200).json({ success: true, user: 'Axios를 이용한 회원가입 성공' });
  }
  return res.status(400).json({ success: false });
});

module.exports = router;
