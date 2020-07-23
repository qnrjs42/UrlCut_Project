const express = require("express");
const router = express.Router();

router.post("/urlCut", (req, res) => {
    if(req) {
        return res.status(200).json({ success: true, newUrl: 'Axios를 이용한 단축된 URL' });
    }
    return res.status(400).json({ success: false });
});

module.exports = router;
