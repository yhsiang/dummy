import React, {Component} from 'react';
import styles from './styles.css';

export default class Right extends Component {
  static propTypes = {
    handleClick: React.PropTypes.func.isRequired,
  };
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <h2>{this.props.data.title || 'No Article'}</h2>
          <div className={styles.action}>
            <a
              className={styles.button}
              onClick={() => this.props.handleClick()}
            >
              Edit
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <article>
          {this.props.data.content || 'No Content'}
          </article>
          <div className={styles.action}>
            <a
              className={styles.button}
              onClick={() => this.props.handleClick()}
            >
              Edit
            </a>
            <a
              className={styles.button}
              onClick={() => this.props.handleClick()}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}
