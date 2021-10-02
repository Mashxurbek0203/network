import { connect } from 'react-redux'
import { addMessageCreator, updateNewMessageTextCreator } from '../../../reducers/dialogsReducer'
import DialogsSection from './DialogsSection'

// function DialogsSectionContainer (props) {
//   let state = props.store.getState()
//   const messageInputChange = (text) => {
//     props.store.dispatch(updateNewMessageTextCreator(text))
//   }

//   const btnSendMessage = (element) => {
//     element.current.value = ' '
//     props.store.dispatch(addMessageCreator())
//   }


// return <DialogsSection  dialogs={state.chatPage}
//                         messageInputChange={messageInputChange}
//                         sendMessage={btnSendMessage}
//                         />
// }

let mapStateToProps = (state) => {
  return {
    dialogs: state.chatPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    messageInputChange: (body) => {
      dispatch(updateNewMessageTextCreator(body))
    },
    sendMessage: () => {
      dispatch(addMessageCreator())
    }
  }
}

const DialogsSectionContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsSection)

export default DialogsSectionContainer