const { user } = require("../../models");

module.exports = async (req, res) => {
  try {
    const header = req.headers;
    if (!header.authorization) {
      return res.status(401).json({ message: "이미 로그아웃 되었습니다." });
    } else {
      return res
        .clearCookie("jwt")
        .status(200)
        .json({ message: "로그아웃 되었습니다." });
    }
  } catch (err) {
    console.log(err);
  }
};
