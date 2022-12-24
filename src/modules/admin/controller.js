import { sign } from "../../utils/jwt.js"
import { adminPost } from "./model.js"

const login = async (req, res, next) => {
  const admin = await adminPost(req.body)
  if (admin.length > 0) {
    res.status(200).json({
      message: "welcome",
      data: admin,
      token: sign(admin[0].adminid)
    })
  }
  else {
    res.status(401).json({
      message: "wrong username or password",
      data: [],
      token: null
    })
  }
}
export {
  login
}