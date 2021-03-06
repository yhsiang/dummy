import React, {Component} from 'react';
import styles from './styles.css';

export default class LightBox extends Component {
  render () {
    return (
      <div className={styles.root}>
        Confirm LightBox
        <div className={styles.wrapper}>
          <div className={styles.msg}>
            <div className={styles.content}>
            Are you sure delete <br/>
            {this.props.title}
            </div>
            <div className={styles.action}>
              <a
                className={styles.button}
                onClick={() => this.props.handleDelete()}
              >
                OK
              </a>
              <a
                className={styles.button}
                onClick={() => this.props.handleClick()}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
