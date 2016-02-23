import React, {Component} from 'react';
import styles from './styles.css';

export default class Left extends Component {
  state = {
    data: [
      'article title 1',
      'article title 2',
      'article title 3',
      'article title 4',
      'article title 5',
      'article title 6',
      'article title 7'
    ],
    filter: ''
  };
  renderItems() {
    // Spec 1
    return this.props.data.map(({title}, idx) => {
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
            onChange={(e) => this.props.handleSearch(e.target.value)}
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
