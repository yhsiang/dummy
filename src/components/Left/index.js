import React, {Component} from 'react';
import styles from './styles.css';

export default class Left extends Component {
  state = {
    data: this.props.data,
    filter: ''
  };
  _handleSearch(filter) {
    this.setState({ filter });
  }
  renderItems() {
    return this.props.data.filter(({title}) => {
      if (this.state.filter === '') return true;
      return title.match(this.state.filter);
    }, this).map(({title}, idx) => {
      return (
        <div
          className={
            do {
              if (this.props.selected === idx) {
                styles.active
              } else {
                styles.item
              }
            }
          }
          key={idx}
          onClick={(e) => this.props.handleSelect(idx)}
        >
          {title}
        </div>
      );
    });
  }
  render () {
    const items = this.renderItems();
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <input
            placeholder="search bar"
            onChange={(e) => this._handleSearch(e.target.value)}
          />
        </div>
        <div className={styles.list}>
          {
            do {
              if (items.length > 0) {
                items
              } else {
                <div className={styles.item}>
                  not found any article
                </div>

              }
            }}
        </div>
      </div>
    );
  }
}
