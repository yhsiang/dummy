import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Left, Right, LightBox,
} from 'components';
import * as AppAction from 'actions';
import styles from './styles.css';

class App extends Component {
  static defaultProps = {
    data: [
      { title: 'article title 1', content: 'content 1'},
      { title: 'article title 2', content: 'content 2'},
      { title: 'article title 3', content: 'content 3'},
      { title: 'article title 4', content: 'content 4'},
      { title: 'article title 5', content: 'content 5'},
      { title: 'article title 6', content: 'content 6'},
      { title: 'article title 7', content: 'content 7'},
     ],
  };
  state = {
    lightBoxShow: false,
    data: this.props.data,
    filtered: this.props.data,
    active: 0,
  };
  _handleSearch(value) {
    this.setState({
      filtered: this.props.data.filter(function({title}) {
        if (value === '') return true;
        return title.match(value);
      }, this)
    })
  }
  _handleSelect(key) {
    this.setState({
      active: key
    });
  }
  _handleClick() {
    this.setState({ lightBoxShow: !this.state.lightBoxShow });
  }
  _saveTitle(title) {
    console.log(title)
    this.setState({
      data: this.state.data.map((d, idx)=> {
        if (idx === this.state.active) d.title = title;
        return d;
      })
    });
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
          <Left
            data={this.state.filtered}
            selected={this.state.active}
            handleSearch={(value) => this._handleSearch(value)}
            handleSelect={(value) => this._handleSelect(value)}
          />
          <Right
            data={this.state.data[this.state.active]}
            handleClick={this._handleClick.bind(this)}
            saveTitle={(title) => this._saveTitle(title)}
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
