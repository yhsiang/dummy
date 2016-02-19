import React, {Component} from 'react';
import styles from './styles.css';

export default class Left extends Component {
  renderItems() {
    return Array.apply(this, new Array(7)).map((it, idx) => {
      return (
        <div
          className={styles.item}
          key={idx}
        >
          article title
        </div>
      );
    });
  }
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <input placeholder="search bar" />
        </div>
        <div className={styles.list}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
