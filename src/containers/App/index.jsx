import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Left, Right, LightBox,
} from 'components';
import * as AppAction from 'actions';
import styles from './styles.css';

class App extends Component {
  state = {
    lightBoxShow: false
  };
  _handleClick() {
    this.setState({ lightBoxShow: !this.state.lightBoxShow });
  }
  render () {
    return (
      <div className={styles.root}>
        { do {
            if (this.state.lightBoxShow) {
              <LightBox
                handleClick={this._handleClick.bind(this)}
              />
            }
          }
        }
        <div className={styles.wrapper}>
          <Left />
          <Right
            handleClick={this._handleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    app: state.app
  }
}

export default connect(
  mapStateToProps,
  AppAction
)(App)
