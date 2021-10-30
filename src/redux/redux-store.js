import profileReducer from "../reducers/profileReducer"
import dialogsReducer from "../reducers/dialogsReducer"
import sidebarReducer from "../reducers/sidebarReducer"
import { applyMiddleware, combineReducers, createStore } from "redux"
import usersReducer from "../reducers/usersReducer"
import authReducer  from "../reducers/authReducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "../reducers/appReducer"


const reducers = combineReducers({
  profilePage: profileReducer,
  chatPage: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  authentication: authReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store