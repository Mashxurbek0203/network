import { connect } from 'react-redux'
import DialogsSection from './DialogsSection'
import { addMessage } from './../../../reducers/dialogsReducer';
import withAuthRedirect from '../../HOC/withRedirect';
import { compose } from 'redux';

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


export default compose(
  connect(mapStateToProps,{addMessage}),
  withAuthRedirect
)(DialogsSection)