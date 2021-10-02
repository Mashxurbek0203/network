const  UPDATE_MESSAGE_TEXT_ACTION = "UPDATE-MESSAGE-TEXT"
const  ADD_MESSAGE_ACTION = "ADD-MESSAGE"


let initialState = {
      dialogs:[
        {name: 'Dmitriy', id: 1},
        {name: 'Dima', id: 2},
        {name: 'Vladilen', id: 3},
        {name: 'Sveta', id: 4},
        {name: 'Sasha', id: 5},
        {name: 'Andrew', id: 6},
      ],
      messages:[
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 1},
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 2},
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 3},
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 4},
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 5},
        {text: 'Lorem ipsum dolor set', img: 'https://source.unsplash.com/random/200x200?sig=1', id: 6},
      ],
      newMessageText: ' '
    }

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MESSAGE_TEXT_ACTION: {
      return {
        ...state,
        newMessageText: action.body
      }
    //   let stateCopy = {...state}
    // stateCopy.newMessageText = action.body
    // return stateCopy;
  }
    case ADD_MESSAGE_ACTION:{
      return {
        ...state,
        messages: [...state.messages, {text: state.newMessageText, id: state.messages.length + 1, img: 'https://source.unsplash.com/random/200x200?sig=1'}],
        newMessageText: ''
      }
  //     let stateCopy = {...state}
  //     stateCopy.messages = [...state.messages]
  //     let text = state.newMessageText
  //     stateCopy.newMessageText = ''
  //     stateCopy.messages.push({
  //       text: text,
  //       id: stateCopy.messages.length + 1,
  //       img: 'https://source.unsplash.com/random/200x200?sig=1'
  //     })
  // return stateCopy;
}
  default: 
            return state
  }
}


export const updateNewMessageTextCreator = (text) => {
  return {type: UPDATE_MESSAGE_TEXT_ACTION, body: text}
}
export const addMessageCreator = () => {
  return {type: ADD_MESSAGE_ACTION}
}

export default dialogsReducer