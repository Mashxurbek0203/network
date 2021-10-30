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
    case ADD_MESSAGE_ACTION:{
      return {
        ...state,
        messages: [...state.messages, 
          {text: action.newMessageText, id: state.messages.length + 1, img: 'https://source.unsplash.com/random/200x200?sig=1'}]
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
export const addMessage = (newMessageText) => {
  return {type: ADD_MESSAGE_ACTION, newMessageText}
}

export default dialogsReducer