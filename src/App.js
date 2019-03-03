import React from 'react';
import axios from 'axios';
import {clearMessage,translateMessage,errorInTranslation,newMessage,loadMessage} from  './actions';
import { connect } from 'react-redux';
import king from './king.webp';
// export default   removed when redux entered
class Communicator extends React.Component {
/*  constructor(props) {
    super(props);
    this.state = {message: this.props.message};
}*/

componentDidMount(){
        const initMessage = "They called the Enterprise a garbage scow!";
    this.props.dispatch(loadMessage(initMessage))

}
  resetComm() {
      this.props.dispatch(clearMessage())
    //this.setState({message: '', uhura:"hidden", error:'hidden'});
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
        /*  this.setState({
              translation: "noData",
              error:"visible"
          })*/
          console.log("error  in request", err);
      });
  }


  updateComm(message) {
      this.props.dispatch(newMessage(message))
/*    this.setState({
      message
  });*/
  }

  render() {
    const { message, translation,error, uhura } = this.props;
    return<div id="info">
    <p>Scotty is in a fight with some Klingons, but you can control what he says and let Uhara translate it!  </p>
      <input onChange={event => this.updateComm(event.target.value)}
         value={message|| " "}    />
      <p>Scotty: {message}</p>
      <button onClick={() => this.resetComm() }>
        Clear
      </button>
      <button onClick={() => this.translate() }>
        Translate
      </button>
    {uhura==='visible' && <p>Uhura: {translation}</p>}
    {uhura==='visible' && <img src={king} alt="klingon " />}


    {translation==='noData'&& uhura==='hidden' && error==='visible'&&<p> To many requests </p>}
    </div>;

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
