import React, {Component} from 'react';
import styles from './styles.css';

export default class Right extends Component {
  static propTypes = {
    handleClick: React.PropTypes.func.isRequired,
  };
  state = {
    editTitle: false,
    editContent: false,
    title: this.props.data.title,
    content: this.props.data.content,
  }
  _handleTitle(title) {
    this.setState({ title });
  }
  _editTitle() {
    this.setState({
      editTitle: !this.state.editTitle
    });
  }
  _handleContent(content) {
    this.setState({ content });
  }
  _editContent() {
    this.setState({
      editContent: !this.state.editContent
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
          {
            do {
              if (this.state.editContent) {
                <span>
                  <textarea
                    value={this.state.content}
                    onChange={(e) => this._handleContent(e.target.value)}
                  />
                  <div className={styles.action}>
                    <a
                      className={styles.button}
                      onClick={() => {
                        this.props.saveContent(this.state.content);
                        this._editContent();
                      }}
                    >
                      Save
                    </a>
                  </div>
                </span>
              } else {
                <span>
                  <article>
                  {this.props.data.content}
                  </article>
                  <div className={styles.action}>
                    <a
                      className={styles.button}
                      onClick={() => this._editContent()}
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
                </span>
              }
            }
          }
        </div>
      </div>
    );
  }
}
