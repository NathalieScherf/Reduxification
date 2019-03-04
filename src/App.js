import React from 'react';
import axios from 'axios';
import {clearMessage,translateMessage,errorInTranslation,newMessage,loadMessage} from  './actions';
import { connect } from 'react-redux';

import king from './king.webp';
import uhura_gif from './uhura.webp';
class Communicator extends React.Component {


componentDidMount(){
    const initMessage = "They called the Enterprise a garbage scow!";
    this.props.dispatch(loadMessage(initMessage))

}
  resetComm() {
      this.props.dispatch(clearMessage())

  }

  translate(message){
      console.log(this.props.message);
    axios.post(`https://api.funtranslations.com/translate/klingon.json?text=${this.props.message}`)
      .then(res => {
          console.log(res.request.status);
          //only 5 API requests/hour
          let text=res.data.contents.translated;
          this.props.dispatch(translateMessage(text));

      }).catch( err=> {
           this.props.dispatch(errorInTranslation());

          console.log("error  in request", err);
      });
  }


  updateComm(message) {
      this.props.dispatch(newMessage(message))

  }

  render() {
    const { message, translation,error, uhura } = this.props;

    return<div id="info">

    <p>You are on board the Enterprise and you see Scotty in a discussion with a klingon. You can control what he says and let Uhura translate it!  </p>
      <input onChange={event => this.updateComm(event.target.value)}
         value={message|| " "}    />
      <p>Scotty: {message}</p>
      <button onClick={() => this.resetComm() }>
        Clear
      </button>
      <button onClick={() => this.translate() }>
        Translate
      </button>
      <div id="response">
      {uhura==='visible' && <p>Uhura: {translation}</p>}
      {uhura==='visible' && <img src={king} alt="klingon " />}
      {uhura==='hidden' && error==='visible'&&<p> To many requests </p> }
      {uhura==='hidden' && error==='visible'&&<img src={uhura_gif} alt="uhura speaking " />}
    </div>
    </div>

  }
}


function mapStateToProps(state) {
console.log("state from app", state);

var message =state.message;
var translation=state.translation;
var error= state.error;
var uhura =state.uhura
    return {
        message: message,
        translation: translation,
        error: error,
        uhura:uhura
    };
}


export default connect(mapStateToProps)(Communicator);
