import profileReducer, { addProfilePost, updatePostText } from './profileReducer';



it("the posts length is incremented", () => {
  let action = addProfilePost('Mashxurbek')
  let state = {
    posts: [
      {text: 'Lorem ipsum dolor set', id: 1, likesCount: 2, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 2, likesCount: 28, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 3, likesCount: 0, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 4, likesCount: 35, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 5, likesCount: 10, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    ]
  }
  let newState = profileReducer(state, action)

  expect (newState.posts.length).toBe(6)
})




it("The post text is updated", () => {
  let action = updatePostText(1, 'New Post Text')

  let state = {
    posts: [
      {text: 'Lorem ipsum dolor set', id: 1, likesCount: 2, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 2, likesCount: 28, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 3, likesCount: 0, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 4, likesCount: 35, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
      {text: 'Lorem ipsum dolor set', id: 5, likesCount: 10, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    ]
  }

  let newState = profileReducer(state, action)

  expect (newState.posts[0].text).toBe('New Post Text')
})