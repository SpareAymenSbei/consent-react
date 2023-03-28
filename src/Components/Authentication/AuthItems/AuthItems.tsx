import { DUMMY_AUTH_ITEMS } from "../../../types/auth-item.model"
import AuthItem from "./AuthItem/AuthItem"

function AuthItems() {
  return (
    <div>
      {
        DUMMY_AUTH_ITEMS.map((e,index) => (
          <AuthItem key={index} {...e} />
        ))
      }
    </div>
  )
}

export default AuthItems