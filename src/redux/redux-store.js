import profileReducer from "../reducers/profileReducer"
import dialogsReducer from "../reducers/dialogsReducer"
import sidebarReducer from "../reducers/sidebarReducer"
import { combineReducers, createStore } from "redux"
import usersReducer from "../reducers/usersReducer"
import authReducer  from "../reducers/authReducer"


const reducers = combineReducers({
  profilePage: profileReducer,
  chatPage: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  authentication: authReducer,
  auth: authReducer
})


let store = createStore(reducers)
window.store = store
export default store