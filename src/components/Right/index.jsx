import React, {Component} from 'react';
import styles from './styles.css';

export default class Right extends Component {
  static propTypes = {
    handleClick: React.PropTypes.func.isRequired,
  };
  state = {
    editTitle: false,
    title: this.props.data.title,
  }
  _handleTitle(title) {
    this.setState({ title });
  }
  _editTitle() {
    this.setState({
      editTitle: !this.state.editTitle
    });
  }
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          {
            do {
              if (this.state.editTitle) {
                <span>
                  <input
                    value={this.state.title}
                    onChange={(e) => this._handleTitle(e.target.value)}
                  />
                  <div className={styles.action}>
                    <a
                      className={styles.button}
                      onClick={() => {
                        this.props.saveTitle(this.state.title);
                        this._editTitle();
                      }}
                    >
                      Save
                    </a>
                  </div>
                </span>
              } else {
                <span>
                  <h2>{this.props.data.title}</h2>
                  <div className={styles.action}>
                    <a
                      className={styles.button}
                      onClick={() => this._editTitle()}

                    >
                      Edit
                    </a>
                  </div>
                </span>
              }
            }
          }
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
