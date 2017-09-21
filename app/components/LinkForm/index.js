/* eslint-disable */
/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';
class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    addLinkCancelled: React.PropTypes.func.isRequired,
  }

  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;
    if (!url.match(/www/)) {
      // TODO: figure out regex for valid url
      urlError = 'Please provide a valid URL';
    }
    if (!description) {
      descriptionError = 'please provid a valid desc';
    }
    if (urlError || descriptionError) {
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  }



  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div
            className={styles.heading}
          >
              Add a link
          </div>

          <TextInput
            className={styles.input}
            placeholder="URL"
            ref={(f) => { this.url = f; }}
            type="text"
            errorText={this.state.urlError}
          />
          <TextInput
            className={styles.input}
            placeholder="Description"
            errorText={this.state.descriptionError}
            ref={(f) => { this.description = f; }}
            type="text"
          />
          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.addLinkCancelled}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
              Add
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default LinkForm;
