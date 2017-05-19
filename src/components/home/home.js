import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import keyboard from "../../../public/keyboard.jpg";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class Home extends Component {

  render() {
    return (
      <div className="home-component">
        <div className="home-img-container">
          <img src={keyboard}></img>
        </div>

        <div className="home-content">
          <h1 id="title" className="text-center">InTuneNation</h1>
          <h3 className="text-center">Sing In The Moment</h3>
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
