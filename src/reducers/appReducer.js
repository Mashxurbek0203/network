import { authUserThunk } from "./authReducer";

let initialState = {
      isInitialized: false
}

const SET_IS_INITIALIZED = "SET_IS_INITIALIZED"

const appReducer = (state = initialState, action) => {
      switch (action.type) {
            case SET_IS_INITIALIZED:
                  return {
                        ...state,
                        isInitialized: true
                  }
                  default:
                        return state;
      }
}

const initializedSuccess = () => ({type: SET_IS_INITIALIZED})

export const initialize = () => async(dispatch) => {
            await dispatch(authUserThunk())
            dispatch(initializedSuccess())

}


export default appReducer