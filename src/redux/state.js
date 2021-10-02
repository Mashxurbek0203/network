import dialogsReducer from "../reducers/dialogsReducer"
import profileReducer from "../reducers/profileReducer"

const store = {
  _state: {
    chatPage: {
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
    },
    profilePage: {
      posts: [
        {text: 'Lorem ipsum dolor set', id: 1, likesCount: 2, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
        {text: 'Lorem ipsum dolor set', id: 2, likesCount: 28, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
        {text: 'Lorem ipsum dolor set', id: 3, likesCount: 0, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
        {text: 'Lorem ipsum dolor set', id: 4, likesCount: 35, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
        {text: 'Lorem ipsum dolor set', id: 5, likesCount: 10, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      ],
      newPostText: ' '
    }
  },
  getState() {
    return this._state
  },
  renderEntireTree() {
    console.log('State changed');
  },
  subscribe (observer) {
    this.renderEntireTree = observer
  },
  dispatch(action) {
    this.getState().profilePage = profileReducer(this.getState().profilePage, action)
    this.getState().chatPage = dialogsReducer(this.getState().chatPage, action)
    this.renderEntireTree(this.state)
  }
}

export {
  store
}