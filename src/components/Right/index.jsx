import React, {Component} from 'react';
import styles from './styles.css';

export default class Right extends Component {
  static propTypes = {
    handleClick: React.PropTypes.func.isRequired,
  };
  renderContent() {
    return Array.apply(this, new Array(300)).map(() => {
      return 'article content'
    }).join(' ')
  }
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <h2>article title</h2>
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
          {this.renderContent()}
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
